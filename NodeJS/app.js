let express = require("express"); // express modules, importing express object
let app = express(); // creating object of this express class
let bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());

let basicRouter = require("./routes/basicRoutes");
let fileRouter = require("./routes/fileRoutes");
let userRouter = require("./routes/userRoutes");
let blogRouter = require("./routes/blogRouter");
let mongoose = require("mongoose");

let User = require("./models/user");
let Blog = require("./models/blog");

let myLogger = require("./middleWares/logger");

app.use(bodyParser.json()); // middleware attached to all routes for app instance shriramu:akila2002

app.use(myLogger);
app.use("/basic",basicRouter);
app.use("/file", fileRouter);
app.use("/user",userRouter);
app.use("/blog",blogRouter);

const uri = "mongodb://localhost:27017/newdb";

async function connect() {
  try{
    await mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true});
    console.log("Connected to MongoDB");
  }catch(error){
    // console.error(error);
  }

}

connect();
/*
        Assignment :: Routes Specific to Blog (new Router file specific to blogs )
                         1. Add Blog
                           2. Delete Blog
                              3. Find Blog
                                4. Update Blog
 */
app.get("/",(req,res)=>{
  res.json({"users":['1','2']})
})
app.listen(3001,() =>{

    console.log("Listening on port " + 3001);
});
