const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json({
    evento: "Semana Omnistack",
    aluno: "Held Grijo",
  });
});

app.listen(3333);
