import { query } from "./_generated/server";
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("users").collect();
  },
});

export const checkUser = query({
  args: {email:v.string()},
  handler: async (ctx ,args) => {
    const user = await ctx.db.query("users")
    .filter((q) => q.eq(q.field("email"),args.email)).collect();
    return user.length? user[0] : "not-found"
  },
});


export const createUser = mutation({
  args: { name: v.string(),
    email:v.string(), 
    image:v.string()
  },
  handler: async (ctx, args) => {
    const newUserId = await ctx.db.insert("users", { name: args.name,email:args.email , image:args.image});
    return newUserId;
  },
});