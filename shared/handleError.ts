import { isHttpError } from "https://deno.land/x/oak@v6.3.1/httpError.ts";
import { Context } from "../deps.ts";
import hbs from "./hbs.ts";

export async function handleError(err: Error, ctx: Context) {
  let status = 500;
  if (isHttpError(err)) {
    status = err.status;
  }

  ctx.response.body = await hbs.renderView("error", {
    message: err,
    stack: err.stack,
    status: status
  });
}
