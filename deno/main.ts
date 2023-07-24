await import("https://deno.land/std@0.195.0/dotenv/load.ts")
import { handler } from "./pkg/handler.js";
import { Application } from "https://deno.land/x/oak@v12.6.0/mod.ts"
import { Server } from "https://esm.sh/socket.io"
import adapter from 'https://esm.sh/@socket.io/postgres-adapter'

const app = new Application();
const io = new Server({
  adapter: adapter.createAdapter()
});

// @ts-ignore: parseInt accepts numbers, but the type claims it only supports strings
const port = parseInt(Deno.env.get("PORT") || 3000)


app.addEventListener('listen', () => {
  console.log("Griddle Server started")
  console.log(`%chttp://localhost:${port}/`, "color: blue")
})

app.use(handler);

app.listen({
  hostname: '0.0.0.0',
  port
});