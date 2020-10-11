const mongoose =require("mongoose");
const config=require("config");
// connect to the DB 
const connectDB=()=>{
    mongoose.connect(config.get("MONGOURI"),{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>console.log("DB connected"))
    .catch(()=>console.log("error DB"))}

    module.exports = connectDB