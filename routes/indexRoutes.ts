import { Context } from "../deps.ts";
import { render } from "../utils/hbs.ts";

export async function get(ctx: Context) {
  ctx.response.body = await render("index", { title: "Oak" });
}
