import { app } from "../app.ts";

const port = normalizePort(Deno.env.get("PORT") || "3000");

app.addEventListener("error", onError);
app.addEventListener("listen", ({ hostname, port }) => {
  console.debug(`Listening on http://${hostname || "localhost"}:${port}`);
});

function normalizePort(val: string) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // default to 80
    return 80;
  } else {
    return port;
  }
}

function onError(error: ErrorEvent) {
  console.log(error);
}

await app.listen({ port: port });
