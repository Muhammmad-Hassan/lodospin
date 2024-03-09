function showNum() {
    let randomNum = Math.ceil(Math.random() * 6)
    let showNum = document.getElementById("showNum");
   
    for(let i = 1 ; i<7 ; i++){
        if(randomNum == i){
            showNum.innerHTML  = `<div class="loader"></div>`;
            setTimeout(() => {
                
                showNum.innerHTML = `<img src="./images/D${i}.png" class="diceimg" alt="">`
            }, 1000);
''
        }
    }

}