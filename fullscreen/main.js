import FullScreen from "./FullScreen.js";

const slide= new FullScreen(document.querySelector(".slide"));
const content = new FullScreen(document.querySelector(".content"));

slide.onFullScreen("requestNotify", function notify() {
    console.log("发生了全屏事件")
})

slide.on("click", function () {
    content.requestFullScreen();
    slide.exitFullScreen();
});

content.on("click", function () {
    slide.requestFullScreen();
    content.exitFullScreen()
});