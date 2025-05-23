// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!!!!!!!!!!";

// Image switcher code
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon-resize.png") {
    myImage.setAttribute("src", "images/firefox-icon-resize-kokosuki.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon-resize.png");
  }
};


// Personalized welcome message code
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("あなたの名前を入力してください。");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `${myName} さん、Mozilla はかっこいいよ。`;
    }
}
  

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla はかっこいいよ、${storedName}`;
  }
  
myButton.onclick = () => {
    setUserName();
};

