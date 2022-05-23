var express = require('express');
const mongoose = require("mongoose");
const {viewAll} = require("../controller");
const allTasks = require("../controller");
var router = express.Router();

main().catch(err => console.log(err));
//conectarea la baza de date MongoDB
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/activities');
  console.log("db iz connected");
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//rutele pentru pagina mea
router.get('/tasks', allTasks.viewAll);

router.get('/tasks/:id',allTasks.viewAll);

router.get('/:id',allTasks.showTask);

//ruta de PUT este apelata pentru partea de editare a butoanelor
router.put('/tasks/:id', allTasks.updateTask);


module.exports = router;
