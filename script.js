const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012456789";
const fst= document.querySelector("#inp1");
const sec = document.querySelector("#inp2");
const btn1 = document.querySelector("#btn1");
// const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const ah2 = document.querySelector("#ah2");
const ah3 = document.querySelector("#ah3");
const img = document.querySelector("img");
var result = "";

function hide(){
    fst.innerHTML = `<input type="number" id="inp1" placeholder="1 to ..."><br><br>`;
sec.hidden = true;
// btn2.hidden = true;
btn3.hidden = true;
ah2.hidden = true;
sec.value ="";


}

function submit(){
    let a = fst.value;
    console.log(a);
const charlength = char.length;
for(let i = 0; i<a;i++){
    result += char.charAt(Math.floor(Math.random()*charlength));
}
ah2.innerHTML = `The provided string of ${a} characters is <br><br><h2>"${result}"</h2> `;
btn1.hidden = true;
btn3.hidden = false;
ah2.hidden = false;
img.hidden = true;
return result;

}


// function check(){
//     if(result == sec.value){
//         console.log("okk")
//         ah3.innerHTML = `Congratulation ! you win`;
        
//     }else{
//         console.log("no okk");
//         hide(); 
//         ah3.innerHTML = `didnot match, Try Again!`;
//     }
// }

function start(){
    btn3.hidden = true;
    sec.hidden = false;
    
    time();
}

function time(){ setTimeout(()=>{
    if(result != sec.value){
        alert("Timeout! page is refreshed");
        hide();
        btn1.hidden = false;
        result = "";
        ah3.hidden =true;
        
    }else if(result == sec.value){
        
        ah3.hidden = false;
        ah3.innerHTML = `Congratulation ! you win`;
        sec.hidden=false;
        ah2.hidden = false;
        btn1.hidden = true;
     result = "";

        }

        
       
        
},3000);}