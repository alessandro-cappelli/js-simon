let memoArr = [];
let box = document.getElementById('container');

function createArr(){
    for (let i = 0; i < 5; i++) {
        let noRandom = Math.floor(Math.random() * 100) + 1;
        memoArr.push(noRandom);
    }
    box.innerHTML = `
            <span>Memorizza i numeri</span>
            <h1>${memoArr}</h1>
        `
    return memoArr;
}

createArr();

setTimeout(clearBox, 5000);
setTimeout(askNo, 5200);

function clearBox(){
    box.innerHTML = '';
}

let seconds = 5;
const timerBox = document.getElementById('timer');

timerBox.innerHTML = seconds;
let timer = setInterval(function countDown(){
    seconds--;
    if(seconds == 0){
        clearInterval(timer);
        timerBox.innerHTML = '';    
    }else{
    timerBox.innerHTML =`
        <h2>${seconds}</h2>
        ` ;
    }
}, 1000);

function askNo(){
    let userArr = [];
    let userNo;
    for (let i = 0; i < 5; i++) {
        userNo = prompt('Inserisci in ordine i numeri');
        if (memoArr.includes(parseInt(userNo))){
            userArr.push(userNo);
            console.log(userArr);
        }
           
    }
    let scoreBox = document.getElementById('score'); 
    scoreBox.innerHTML = `
        <span>Hai memorizzato ${userArr.length} numeri, ${userArr}</span>
    `;
}