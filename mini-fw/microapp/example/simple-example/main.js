function onBtnClick() {
  console.log("clicked");
}

function start() {
  const container = document.querySelector(".actions-group");

  const button = document.createElement("button");
  button.addEventListener("click", onBtnClick, false);
  button.innerHTML = "Click me";

  container?.append(button);
}

start();
