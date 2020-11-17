import { Application, Context, Router, send } from "./deps.ts";
import { handleError } from "./shared/handleError.ts";
import * as indexRouter from "./routes/indexRouter.ts";

const app = new Application();
const router = new Router();

indexRouter.use("/", router);

// static assets
router.get("/public/:path+", async (ctx) => {
  await send(ctx, ctx.request.url.pathname, {
    root: `${Deno.cwd()}`,
  });
});

// error catch all
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (Deno.env.get("ENV") === "development") {
      await handleError(err, ctx);
    } else {
      console.log(err);
    }
  }
});

app.use(router.routes());
app.use(router.allowedMethods());

// handle 404
app.use(async (ctx) => {
  ctx.throw(404, "Not Found");
});

export { app };
