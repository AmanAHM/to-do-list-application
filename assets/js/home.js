var pen= document.getElementById("pen-edit");
var display=document.getElementById("display");
var edit=document.getElementById("edit-func");


pen.addEventListener("click",function(){
let store=edit.innerText;

    display.value=store;
    


})