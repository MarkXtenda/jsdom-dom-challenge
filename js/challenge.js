let heart = document.getElementById("heart");
let number = document.getElementById("counter");

let submit = document.getElementById("submit");
let comment = document.getElementById("comment-input");

let pause = document.getElementById("pause");
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")

// "Plussing" a number
plus.addEventListener("click", (event) => {
    number.innerText = ++number.innerText;
    event.preventDefault();
})

// "Minusing" a number
minus.addEventListener("click", (event) => {
    number.innerText = --number.innerText; 
    event.preventDefault();
})

// Liking a number
heart.addEventListener("click", (event) => {
    // Check if number we liked already printed out
    let likedNumber = parseInt(number.innerText)
    likedAlready = document.getElementById(likedNumber) != null;
    //Number already printed out: add 1 to comment amount
    if (likedAlready) {
        liked = document.getElementById(likedNumber);
        let amount = parseInt(liked.getAtribute("amount"))
        console.log(document.getElementById(likedNumber).getAttribute("amount"))
        liked.innerHTML = `${likedNumber} has been liked ${++amount} time`;
    //Number havent been printed out before: create number comment
    } else {
        let amount = 1;
        let liked = document.createElement("li");
        liked.setAttribute("id", `${likedNumber}`);
        liked.setAttribute("amount", amount)
        liked.innerHTML = `${likedNumber} has been liked ${amount} time`;
    
        let listedLike = document.querySelector(".likes");
        listedLike.appendChild(liked) ;

    }
    

    event.preventDefault();
})

// Adding a comment 
submit.addEventListener("click", (event) => {
    // Check if comment is not empty string
    if (comment.value !== "") {
        let instantComment = document.createElement("p");
        instantComment.innerHTML = comment.value;
        document.getElementById("list").appendChild(instantComment);
    }
    event.preventDefault();
})

// Pausing game
pause.addEventListener("click", (event) => {
    // Check if 'heart' button is dissabled already: if so, enable every button 
    if (heart.disabled) {
        heart.disabled = false
        plus.disabled = false
        minus.disabled = false
        submit.disabled = false
        pause.innerText = "pause"
        timer = setInterval(()=>{number.innerText++}, 1000)
    }
    // If not: dissable every button
    else {
        heart.disabled = true
        plus.disabled = true
        minus.disabled = true
        submit.disabled = true
        pause.innerText = "resume"
        clearInterval(timer)
    }
    event.preventDefault();
})

// Counter
let timer = setInterval(()=>{number.innerText++}, 1000)
