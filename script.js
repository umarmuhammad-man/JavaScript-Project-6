clearOutput = () => {
    document.getElementById("clearOutput").onclick = function () {
        document.getElementById("output").innerHTML = ""
    }
}
clearInput = () => {
    document.getElementById("clearInput").onclick = function () {
        document.getElementById("input").value = ""
    }
}

output = (html) => {
    document.getElementById("output").innerHTML = html
}

input = () => {
    return document.getElementById("input").value
}

function tellTime() {
    let now = new Date();
    let hr = now.getHours();
    let mint = now.getMinutes();
    let sec = now.getSeconds();

    let currentContent = document.getElementById("output").innerHTML;

    currentContent += "<br>You Clicked This Button @ " + hr + ":" + mint + ":" + sec;

    output(currentContent)
}
clearInput()
clearOutput()

function toastify(msg) {
    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #000000, #c93d3d)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}
//Current Date and Time
document.getElementById("dateBox").innerHTML = Date();


//Get Name of Today
function today() {
    let arr = ["Sunday", "Monday", "Tuseday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let now = arr[new Date().getDay()];
    let html = "<h1 style= 'color: green;'>" + now + "</h1>" + "Is Your Today."
    output(html)
    tellTime(html)
}

//Calculate Days Passed since I Born
function born() {
    let dob = input();

    if (!dob) {
        toastify("Enter Your Birth Date.")
        return;
    }
    let birthday = new Date(dob);
    let today = new Date();

    let bdDiff = today - birthday;
    let days = Math.floor(bdDiff / (1000 * 60 * 60 * 24));
    let html = "<h1 style= 'color: green;'>" + days + "</h1>" + "Days Since You Born"

    output(html)
    tellTime(html)
}

// When is your Next Birthday
function birthDay() {
    let dob = input();

    if (!dob) {
        toastify("Enter your Birthday.");
        return;
    }

    let birthday = new Date(dob);
    let today = new Date();

    let nextbirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());

    if (nextbirthday < today) {
        nextbirthday.setFullYear(today.getFullYear() + 1)
    }

    let birthdayDiff = nextbirthday - today;
    let next = Math.ceil(birthdayDiff / (1000 * 60 * 60 * 24))


    let html = "<h1 style='color: green;'>" + next + "</h1> Days left until your birthday.";

    output(html)
    tellTime(html)
}

//Greet User
function greetUser() {
    let userName = prompt("Enter Your Name.");

    if (!userName) {
        toastify("Please Enter Your Name.");
        return;
    }

    let today = new Date();
    let time = today.getHours();
    let html = "";

    if (time >= 0 && time < 12) {
        html = "Good Morning <h1 style='color: green;'>" + userName + "</h1>";
    }
    else if (time >= 12 && time < 18) {
        html = "Good Afternoon <h1 style='color: green;'>" + userName + "</h1>";
    }
    else {
        html = "Good Evening <h1 style='color: green;'>" + userName + "</h1>";
    }

    output(html);
    tellTime(html);
}

//Calculate Tax
function tax() {
    let a = Number(prompt("Enter your Amount."))
    if (!a) {
        toastify("Enter your Amount.")
        return;
    }
    if (a <= 1000) {
        let amount = a * 8 / 100;
        let tax = Math.floor(amount)
        let html = "Your Tax is "+"<h1 style='color: green;'>" + tax + "</h1>"
        output(html)
        tellTime(html)
        return;
    } else{
        let amount = a * 17 / 100;
        let tax = Math.floor(amount)
        let html = "Your Tax is "+"<h1 style='color: green;'>" + tax + "</h1>"
        output(html)
        tellTime(html)
    }

}

//Calculate Total = Price + Tax
function priceTax() {
    a = Number(prompt("Enter your Amount."))
    if (!a) {
        toastify("Enter your Amount.")
        return;
    }
    if (a <= 1000) {
        let amount = a * 8 / 100;
        let tax = Math.floor(amount)
        let taxAmount = tax + a;
        let html = "Your Amount inqlued Tax is "+"<h1 style='color: green;'>" + taxAmount +"/-" + "</h1>"
        output(html)
        tellTime(html)
        return;
    } else{
        let amount = a * 17 / 100;
        let tax = Math.floor(amount)
        let taxAmount = tax + a;
        let html = "Your Amount inqlued Tax is "+"<h1 style='color: green;'>" + taxAmount +"/-" + "</h1>"
        output(html)
        tellTime(html)
    }

}

//Tell Time 1
function time1(){
    tellTime()
}

//Tell Time 2
function time2(){
    tellTime()
}

//Tell Time 3
function time3(){
    tellTime()
}

