const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const conn = require("./model");
app.use(cors());
var nodemailer=require('nodemailer');



app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);
const db = mongoose.connect(
  "mongodb+srv://admin:111Account@mern-app-lwriy.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  error => {
    if (!error) {
      console.log("Connected to the database!!");
    } else {
      console.log("Couldnot connect to the database");
    }
  }
);
var fetcher = mongoose.model("CollectionOne");
var store = new fetcher();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", function(req, res) {
  res.send("Express");
});

let users = [];

app.post("/info", function(req, res) {
  const myInfo = {
    bugtitle: req.body.bugtitle,
    status: req.body.status,
    comment:req.body.comment,
    priority:req.body.priority
  };

  users.push(myInfo);
  //console.log(users);
store.bugtitle = myInfo.bugtitle;
store.status = myInfo.status;
store.comment = myInfo.comment;
store.priority = myInfo.priority;
store.save();

});

app.get("/show", function(req, res) {
  res.send(users);
});

app.get("/list", function(req, res) {
  fetcher.find((err, doc) => {
    if (!err) {
      console.log(doc);
      res.send(doc);
    }
  });
});



app.post("/ne", function(req, res) {

     
  
});



app.post("/create", function(req, res) {
  
  
  const newInfo = { bugtitle:req.body.bugtitle,
    status:req.body.status,
    comment:req.body.comment,
    priority:req.body.priority,
    email:req.body.email    
  };
  
  let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    port: 35,
    port: 25,
    auth: {
      user: "Your Email",
      pass: "Your Password"
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  let HelperOptions = {
    form: '"Alien Gurung" <gurungalien2727@gmail.com',
    to: req.body.email,
    subject: "Bug Detected",
    text:
      "BugTitle: " +
      req.body.bugtitle +
      "\n " +
      "Status: " +
      req.body.status +"\n"
      +"Comment: " +
      req.body.comment +"\n"
+      "Priority: " +
      req.body.priority
  };

  transporter.sendMail(HelperOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("The message was sent");
   // console.log(info);
  });
});



app.listen(4000);
