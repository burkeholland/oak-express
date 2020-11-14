import { Application, Context, Router, send } from "./deps.ts";
import * as indexRoutes from "./routes/indexRoutes.ts";
import { handleError } from "./utils/handleError.ts";

const app = new Application();
const router = new Router();

// named routes
router.get("/", indexRoutes.get);
router.get("/albums");

// static assets
router.get("/public/:path+", async (ctx) => {
  await send(ctx, ctx.request.url.pathname, {
    root: `${Deno.cwd()}`
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
