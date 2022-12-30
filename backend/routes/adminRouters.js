var express = require('express');
var router = express.Router();
const {adminController }= require('../controllers');
/* GET users listing. */
router.get('/',  async function(req, res, next) {
  //res.send('respond with a resource');
  const query = req.query;
  console.log(query);
  try {
    const result= await  adminController.getAllAdmins(query);
   res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error)
  }
});
/// Post
router.post('/',  async function(req, res, next) {
  //res.send('respond with a resource');
  const body = req.body;
  console.log(body);
  try {
    const result= await  adminController.addAdmin(body);
   res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error)
  }
});

//UPDATE
router.put('/', async function(req, res, next){
  const body =req.body;
  if(!body._id){
    return res.status(400).send({message: "id is required"})
  }
  try {
    const result= await  adminController.updateAdmin(body);
   res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error)
  }
})

//DELETE
router.delete("/:id", async function(req ,res,next){
  const id = req.params.id;
  try {
    const filter = {_id: id};
    const result = await adminController.deleteAdmin(filter);
    res.status(200).send('deleted successfully');
    
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;
