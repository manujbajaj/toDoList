document.addEventListener("DOMContentLoaded",()=>{
    let textArea=document.querySelector("#textBox");
    let button=document.querySelector("#Button");
    let Lists=document.querySelector(".List");
    let item=document.querySelector("#normal");

    function fetchContent(){
        let values=textArea.value;
        console.log(values);
        textArea.value="";

        let newElem=document.createElement("li");
        newElem.textContent=values;
        newElem.className="normal";
        newElem.id="normal";
        let span=document.createElement("span");
        span.innerHTML="\u00d7"

        Lists.appendChild(newElem);
        newElem.appendChild(span);
        console.dir(item);
        saveData();
        
    }



    button.addEventListener("click",fetchContent);
    Lists.addEventListener("click",function(e){
        if(e.target.tagName==="LI"){
            e.target.classList.toggle("checked"); 
            console.log(e);
            saveData();
        }
        else if(e.target.tagName==="SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
    },false)


    function saveData(){
        localStorage.setItem("data",Lists.innerHTML);
    }

    function addData(){
        Lists.innerHTML=localStorage.getItem("data");
    }
    addData();
})