import { app } from "./app";

app
  .listen({ port: process.env.PORT ? Number(process.env.PORT) : 3333 })
  .then(() => {
    console.log("HTTP Server is running");
  });
