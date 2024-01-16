let box=document.querySelectorAll(".box");
let turns=document.querySelector(".turnn");
let message=document.querySelector(".message");
let turn=true;
let count=0;
let button=document.querySelectorAll("button");
let winner=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const check=()=>{
    if(count===9)
    {
        message.childNodes[1].innerText="Nobody won!!Play Again";
        button[0].style.display="inline-block";
        button[1].style.display="none";
        turns.innerText="None";
    }
   winner.forEach((win)=>{
        if((box[win[0]].innerText===box[win[1]].innerText&&box[win[1]].innerText===box[win[2]].innerText)&&(box[win[0]].innerText!=""&&box[win[1]].innerText!=""&&box[win[2]].innerText!=""))
        {
         message.childNodes[1].innerText=`${box[win[0]].innerText} Wins`;
         message.childNodes[1].classList.add("transit");
         for(let i=0;i<3;i++)
         box[win[i]].style.backgroundColor="green";
         box.forEach((x)=>{
            x.classList.add("notclick");
            })
            button[0].style.display="inline-block";
         button[1].style.display="none";
         turns.innerText="None";
        }
        // console.log(win);
     })
}
/*const newg=()=>{
    box.forEach((opt)=>{
        message.childNodes[1].innerText="Click To Start Game";
        opt.innerText="";
        opt.classList.remove("notclick");
        opt.style.backgroundColor=null;
    })
    button[1].classList.remove("none");
     button[0].classList.add("none");
    
}*/
button.forEach((x)=>{
    x.addEventListener("click",()=>{
        box.forEach((opt)=>{
            message.childNodes[1].innerText="Click To Start Game";
            opt.innerText="";
            opt.classList.remove("notclick");
            opt.style.backgroundColor=null;
        })
        button[1].style.display="inline-block";
         button[0].style.display="none";
        count=0;
        turns.innerText="O";
        message.childNodes[1].classList.remove("transit");
    });
})

box.forEach((opt)=>{
    opt.addEventListener("click",()=>{
        count++;
        message.childNodes[1].innerText="Continue Playing"
        if(turn){
            opt.innerText="O";
            turns.innerText="X";
            turn=false;
            opt.classList.add("notclick");
            check();

        }
        else{
            opt.innerText="X";
           turns.innerText="O";
            turn=true;
            opt.classList.add("notclick");
            check();
        }
    })
    
})