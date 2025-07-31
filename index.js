const dieSides = [
        "./dieImages/1.png", 
        "./dieImages/2.png", 
        "./dieImages/3.png", 
        "./dieImages/4.png", 
        "./dieImages/5.png", 
        "./dieImages/6.png"
    ];


function rollDice(){
    const die1 = document.getElementById("die1");
    const die2 = document.getElementById("die2");

    die1.classList.add("shake");
    die2.classList.add("shake");

    setTimeout(() => {
    die1.classList.remove("shake");
    die2.classList.remove("shake");

    const randomDie1 = Math.floor(Math.random() * dieSides.length);

    const img1 = document.getElementById("die1");
    img1.src = dieSides[randomDie1];

    const randomDie2 = Math.floor(Math.random() * dieSides.length);
    
    const img2 = document.getElementById("die2");
    img2.src = dieSides[randomDie2];

    }, 300);
}