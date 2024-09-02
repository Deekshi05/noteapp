let container=document.querySelector(".note-container");
let opt=document.querySelector("button");
let note=document.querySelector(".input-box");
opt.addEventListener("click",()=>{
    let para=document.createElement("p");
    let img=document.createElement("img");
    para.className="input-box";
    para.setAttribute("contenteditable","true");
    img.className="delete";
    img.src="delete.png";
    container.appendChild(para).appendChild(img);
});
container.addEventListener("click",(e)=>{
   if(e.target.tagName=="IMG"){
    e.target.parentElement.remove();
   }
})
