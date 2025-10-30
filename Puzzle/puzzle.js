let trozo1=document.getElementById("trozo1");
let trozo2=document.getElementById("trozo2");
let trozo3=document.getElementById("trozo3");
let trozo4=document.getElementById("trozo4");
let trozo5=document.getElementById("trozo5");
let trozo6=document.getElementById("trozo6");
let trozo7=document.getElementById("trozo7");
let trozo8=document.getElementById("trozo8");
let trozo9=document.getElementById("trozo9");

let hueco1=document.getElementById("1");


trozo1.addEventListener("drag",(ev)=>{
    trozo1.style.opacity=.5;
});
trozo1.addEventListener("dragend",(ev)=>{
    trozo1.style.opacity=1;
});


hueco1.addEventListener("dragenter",(ev)=>{
    hueco1.style.backgroundColor="red";
});
hueco1.addEventListener("dragleave",(ev)=>{
    hueco1.style.backgroundColor="transparent";
});
hueco1.addEventListener("dragover",(ev)=>{
    ev.preventDefault();
});
hueco1.addEventListener("drop",(ev)=>{
    document.body.removeChild(trozo1);
//SEGUIR

});