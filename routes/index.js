var express = require('express');
var router = express.Router();
const controller = require("../controller/index")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/register", controller.regis);
router.post("/register", controller.processRegister);
router.get("/users", controller.users)
router.get("/users/detail/:id" , controller.detail);
router.get("/users/edit/:id" , controller.edit);
router.post("/users/edit/:id", controller.processEdit);
router.post("/users/delete/:id", controller.delete);


module.exports = router;
