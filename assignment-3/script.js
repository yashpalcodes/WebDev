function onClick_Box1() {
  const box1 = document.getElementById("box-1");
  box1.style.backgroundColor = "red";
  box1.style.color = "white";
}

function onClick_Box2() {
  const box2 = document.getElementById("box-2");
  box2.style.backgroundColor = "blue";
  box2.style.color = "white";
}

function onClick_Box3() {
  const box3 = document.getElementById("box-3");
  box3.style.backgroundColor = "green";
  box3.style.color = "white";
}

function onClick_Box4() {
  const box4 = document.getElementById("box-4");
  box4.style.backgroundColor = "yellow";
  box4.style.color = "black";
}

function onClick_Button() {
  const name = document.getElementById("nameInput").value;
  const greetingBox = document.getElementById("greeting");

  if (name !== "") {
    greetingBox.textContent = "Hello, " + name + " :)";
  }
}
