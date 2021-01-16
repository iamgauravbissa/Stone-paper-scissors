document.getElementById('user-stone').addEventListener('click',()=>{
    console.log(showresult('stone'));
    
})
document.getElementById('user-paper').addEventListener('click',()=>{
    console.log(showresult('paper'));
})
document.getElementById('user-scissors').addEventListener('click',()=>{
    console.log(showresult('scissors'));
})

function showresult(item){
    var result;
    var computervalue = computerChoice();
    console.log(computervalue);
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