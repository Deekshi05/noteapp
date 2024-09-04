let container=document.querySelector(".note-container");
let opt=document.querySelector("button");
let show=()=>{
    container.innerHTML=localStorage.getItem("notes");
}
show();
let storageupdata=()=>{
    localStorage.setItem("notes",container.innerHTML);
}
opt.addEventListener("click",()=>{
    let para=document.createElement("p");
    let img=document.createElement("img");
    para.className="input-box";
    para.setAttribute("contenteditable","true");
    para.spellcheck=false;
    img.className="delete";
    img.src="delete.png";
    container.appendChild(para).appendChild(img);
    storageupdata();
});
container.addEventListener("click",(e)=>{
   if(e.target.tagName==="IMG"){
    e.target.parentElement.remove();
    storageupdata();
   }
   else if(e.target.tagName==="P"){
    let blocks=document.querySelectorAll(".input-box");
    blocks.forEach(nt=>{
        nt.onkeyup=()=>{
            storageupdata();
        }
    });
   }
})
document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})




