var express = require('express');
var router = express.Router();
var usermodel=require("./users");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get("/create",async function(req,res){
  const users= await usermodel.create([{
    firstname: 'John',
    lastname: 'Doe',
    dob: new Date('1990-05-15'),
    place: 'Cityville',
    pincode: '123456',
    educationqualification: 'Bachelor of Science in Computer Science',
  },
{
  firstname: 'chethan',
  lastname: 'chetu',
  dob: new Date('2004-04-20'),
  place: 'Banglore',
  pincode: '560100',
  educationqualification: 'Bachelor of Science in Computer Sciencen at pes univeristy',
},
{
  firstname: 'darshan',
  lastname: 'gn',
  dob: new Date('2003-05-19'),
  place: 'Banglore',
  pincode: '560100',
  educationqualification: 'Btech',
}]);
  res.send(users);
})
router.get('/login',(req,res)=>{
  res.render("login");
})

router.post('/login',async function(req,res){
  const user=await usermodel.findOne({firstname :req.body.your_name});
  if(!user){
    res.send('<h2>WRONG CREDENTIALS</h2> <a href="/login">back to login page</a>');
  }
  else{
    req.flash('_firstname',user.firstname);
  req.flash('_lastname',user.lastname);
  req.flash('_dob',user.dob);
  req.flash('_place',user.place);
  req.flash('_pincode',user.pincode);
  req.flash('_educationqualification',user.educationqualification);
  res.render('profile', {
    your_firstname: req.flash('_firstname'),
    your_lastname: req.flash('_lastname'),
    your_dob: req.flash('_dob'),
    your_place: req.flash('_place'),
    your_pincode: req.flash('_pincode'),
    your_educationqualification: req.flash('_educationqualification'),
  });
  }
})
module.exports = router;
