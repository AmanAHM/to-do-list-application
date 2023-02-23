const express= require("express");
const port=8000;
const path= require("path");


const app= express();


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded());

app.use(express.static("assets"));

// let workList=[{
//     task:"aaaaa"
// },
// {
//     task:"bbbbb"
// },
// {
//     task:"cccccc"
// }
// ];

let workList=[];

app.get("/",(req,res)=>{
    // if(workList.length==0)
    // {
    //     return res.render("home",{title:"A todo List"});    
    // }
    return res.render("home",{title:"A todo List",work_list:workList});
    // res.send("HALA MADRID");
})

app.post("/post",(req,res)=>{
    console.log(req.body);
    
    workList.push({
        task:req.body.task
    });

    return res.redirect("/");
})

app.get("/delete-task/",(req,res)=>{
    let taskk= req.query.task;

    let index = workList.findIndex(w=> w.task==taskk);

    if(index!=-1)
    {
        workList.splice(index,1);
    }

    return res.redirect("/");

})

// var display=document.getElementById("display");
app.get("/edit-task/",(req,res)=>{

    // let taskk= req.query.task;
    // display.value= taskk;

    // let index = workList.findIndex(w=> w.task==taskk);

    // if(index!=-1)
    // {
    //     workList.splice(index,1);
    // }

    // return res.redirect("/");

    return res.redirect("/delete-task/");

})

app.listen(process.env.PORT||port,(err)=>{
    if(err)
    {
        console.log("OOPS ERROR OCCURING IN LAUNCHING THE SERVER");
        return;
    }
    else
    {
        console.log("SERVER IS RUNNING SUCCESFULLY");
    }
})