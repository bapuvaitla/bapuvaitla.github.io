const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/plimpton-322.jpg") {
        myImage.setAttribute("src", "images/euler-equation-2.png");
    } else {
        myImage.setAttribute("src", "images/plimpton-322.jpg");
    }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is sweet, ${myName}`;
    }
}
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is sweet, ${storedName}`;
}
myButton.onclick = () => {
    setUserName();
}