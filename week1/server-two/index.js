const express = require("express");
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.use(express.static('public'))
app.get('/', function (req, res) {
  res.render('index',{
    title : 'Title',
    header: 'Click on the cat',
    name : 'Placeholder name'
  })
})
app.get("/catinfo", (req, res) => {
  const cat = {
    name: "TestCat",
    age: 2,
    weight: 40
  };
  res.json(cat);
});

app.listen(port, () => console.log(`App listening on port ${port}`));
