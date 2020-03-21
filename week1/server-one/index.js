const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use('/static', express.static('public'))
app.get("/", (req, res) => res.send("Hello world"));
app.get("/catinfo", (req, res) => {
  const cat = {
    name: "Cat1",
    age: 1,
    weight: 60
  };
  res.json(cat);
});

app.listen(port, () => console.log(`App listening on port ${port}`));
