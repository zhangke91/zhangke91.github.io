let myImage = document.querySelector("img");

myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/chrome-icon.png") {
        myImage.setAttribute("src", "images/firefox-icon.png");
    } else {
        myImage.setAttribute("src", "images/chrome-icon.png");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name");
    if (!myName || myName === null) {
        setUserName();
        return;
    }
    localStorage.setItem("name", myName);
    myHeading.textContent = myName + " is cool!";
}

myButton.onclick = function() {
    setUserName();
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    myHeading.textContent = localStorage.getItem("name") + " is cool!";
}