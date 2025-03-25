let express= require("express");
let app= express();
let path=require("path");
let data=require("./data.json");

app.use(express.static(path.join(__dirname,"./public")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"./views"));

app.listen(3000,()=>{
    console.log("Server started");
}
);

app.get("/:username",(req,res)=>{
    let {username}=req.params;
    let user_Data=data[username];
    res.render("insta.ejs",{username,user_Data});
})
