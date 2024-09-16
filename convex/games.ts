

import { v } from "convex/values";
import { httpAction, mutation, query } from "./_generated/server";
import { parseArgs } from "util";




export const getGames = query({
    args: {
      userEmail:v.string()
    },
    handler: async (ctx,args) => {
      return await ctx.db.query("game")
      .filter((q) => q.eq(q.field("status"),"waiting"))
      .filter((q) => q.neq(q.field("player1"),args.userEmail))
      .collect();
    },
  });

  export const getSingleGame = query({
    args: {gameId:v.optional(v.id("game"))},
    handler: async (ctx ,args) => {
      if(!args.gameId)
        return "not-found"
      const game = await ctx.db.get(args.gameId)
      return game || "not-found"
    },
  });


  export const playerJoin = mutation({
    args: { 
      playerEmail: v.string(),
      gameId:v.id("game")
    },
    handler: async (ctx, args) => {
      await ctx.db.patch(args.gameId, { player2:args.playerEmail, status:"In-progress"});
      return "";
    },
  });

  export const getGameStatus = query({
    args: {gameId:v.optional(v.id("game"))},
    handler: async (ctx ,args) => {
      if(!args.gameId)
        return "not-found"
      const game = await ctx.db.get(args.gameId)
      return game?.status || "not-found"
    },
  });
  



  export const createGame = mutation({
    args: { creatorEmail: v.string(),
      
    },
    handler: async (ctx, args) => {


      const board = [
        ["","","","","",""],
        ["","","","","",""],
        ["","","","","",""],
        ["","","","","",""],
        ["","","","","",""],
        ["","","","","",""],
        ["","","","","",""],]
      const prevGame = await ctx.db.query("game")
      .filter((q) => q.eq(q.field("player1"),args.creatorEmail))
      .collect();
      if(prevGame.length)
        await ctx.db.delete(prevGame[0]._id);
      const newGameId = await ctx.db.insert("game", { player1: args.creatorEmail , status:"waiting" , turn:args.creatorEmail,board:board});
      return newGameId;
    },
  });

  export const updateBoard = mutation({
    args: { 
      currentPlayer:v.string(),
      gameId:v.id("game"),
      lineNum:v.number()
      
    },
    handler: async (ctx, args) => {


      
      const game = await ctx.db.get(args.gameId)
      let turn = game?.turn
      if(turn != args.currentPlayer)
        return
      const index = game?.board[args.lineNum]?.indexOf("")
      if(game?.player1 == turn)
      {
        game.board[args.lineNum][index] = "1"
        turn = game.player2
      }
        
      else
      {
        game.board[args.lineNum][index] = "2"
        turn = game.player1
      }
      
        await ctx.db.patch(args.gameId, { turn: turn, board:game.board});
    },
  });

  export const isWin = query({
    args: {gameId:v.optional(v.id("game"))},
    handler: async (ctx ,args) => {
      function checkWin(board:string[][], player:string) {
        const rows = 7
        const cols = 6;
    
        function checkLine(r:number, c:number, dr:number, dc:number) {
            for (let i = 0; i < 4; i++) {
                const nr = r + dr * i;
                const nc = c + dc * i;
                if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || board[nr][nc] !== player) {
                    return false;
                }
            }
            return true;
        }
    
        // Check horizontal, vertical, and diagonal lines
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (c <= cols - 4 && checkLine(r, c, 0, 1)) { // Horizontal
                    return true;
                }
                if (r <= rows - 4 && checkLine(r, c, 1, 0)) { // Vertical
                    return true;
                }
                if (r <= rows - 4 && c <= cols - 4 && checkLine(r, c, 1, 1)) { // Diagonal /
                    return true;
                }
                if (r >= 3 && c <= cols - 4 && checkLine(r, c, -1, 1)) { // Diagonal \
                    return true;
                }
            }
        }
    
        return false;
    }
    //end of function
   
    
      
      
      if(!args.gameId)
        return "not-found"
      let piece = ""
      const game = await ctx.db.get(args.gameId)
      if(!game)
        return "Game doesn't exist"
      if(game?.turn == game?.player1)
        piece = "2" // if current turn is player2's then we check player1's win and vice-verca
      else
        piece = "1"
      const win:boolean = checkWin(game?.board,piece)
      let winner = ""
      if(piece == "1")
        winner = game.player1
      else if(piece ==  "2")
        winner = game.player2
        
      return win?winner:"no"
    },
  });
  
