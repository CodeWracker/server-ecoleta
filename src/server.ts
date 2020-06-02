import express from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("Rota de usuarios");
  response.json(["a", "b", "c", "d"]);
});

app.listen(3333);
