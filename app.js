var userscore=0;
var compscore=0;
sessionStorage.setItem('userScore',userscore);
sessionStorage.setItem('compScore',compscore);

document.getElementById('user-stone').addEventListener('click',()=>{
    whoWin(showresult('stone'));
})
document.getElementById('user-paper').addEventListener('click',()=>{
    whoWin(showresult('paper'));
})
document.getElementById('user-scissors').addEventListener('click',()=>{
    whoWin(showresult('scissors'));
})

function removeclass(classname) {
    document.getElementById(classname).classList.remove('user-button');
    
}
function showresult(item){
    var result;
    var computervalue = computerChoice();
    // console.log(computervalue);
    if(item==computervalue) result='Draw';
    else if(item=='stone') {
        if(computervalue =='paper') result=false;
        else result=true;
    }
    else if(item=='paper'){
        if(computervalue=='scissors') result=false;
        else result=true;
    }
    else if(item=='scissors'){
        if(computervalue=='stone') result=false;
        else result=true;
    }
    return result;
}

function computerChoice(){

    var choice=Math.floor(Math.random()*3 +1);
    if( choice== 1) choice = 'stone';
    else if(choice== 2) choice = 'paper';
    else if(choice == 3) choice = 'scissors';
    return choice;

} 
var computerscore=0;
var userscore=0;

document.getElementById('userscore').innerHTML=userscore;
document.getElementById('computerscore').innerHTML=computerscore;
function whoWin(rs) {
    console.log(rs);
    cleartag();
    if(rs==true) 
    {   
        document.getElementById('resulttag').innerHTML="";
      setTimeout(() => {
        document.getElementById('resulttag').innerHTML='You Won';
      }, 300);
        userscore++;
        document.getElementById('userscore').innerHTML=userscore;
}
    else if(rs==false) 
    {
        document.getElementById('resulttag').innerHTML="";
      setTimeout(() => {
        document.getElementById('resulttag').innerHTML='You Loose';
      }, 300);
        computerscore++;
        document.getElementById('computerscore').innerHTML=computerscore;
    } 
    else {
        document.getElementById('resulttag').innerHTML="";
        setTimeout(() => {
          document.getElementById('resulttag').innerHTML='Its a Draw';
        }, 300);
    }

}

function cleartag() {
    document.getElementById('resulttag').innerText='';
    
}
document.getElementById('reset').addEventListener('click',() =>{
    userscore=0;
    computerscore=0;
    document.getElementById('userscore').innerHTML=userscore;
    document.getElementById('computerscore').innerHTML=computerscore;
    document.getElementById('resulttag').innerHTML="";
})