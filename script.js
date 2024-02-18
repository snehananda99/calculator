let input=document.getElementById("inputBox");
let buttons=document.querySelectorAll("button");
// console.log(buttons);
let buttonArray =Array.from(buttons);
// console.log(buttonArray);
let string =""
buttonArray.forEach(btn =>{
    // console.log(btn);
    btn.addEventListener("click",(e)=>{
        if(e.target.innerHTML == 'DEL'){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else if(e.target.innerHTML== 'AC'){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML== "="){
            string=eval(string);
            input.value =string;
        }
        else{
            // console.log(e.target.innerHTML);
            string += e.target.innerHTML;
            input.value =string;
        }
    })
})