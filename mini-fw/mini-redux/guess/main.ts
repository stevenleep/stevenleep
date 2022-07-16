import { createStore } from "./createStore";
import { countReducer } from "./reducer";

const store = createStore(countReducer);

const valueElement = document.querySelector(".show-value");
const incrementBtn = document.querySelector(".btn-increment");
const decrementBtn = document.querySelector(".btn-decrement");

start();
store.subscribe(start);

function start() {
    valueElement!.textContent = store.getState();
};
incrementBtn?.addEventListener('click', function () {
    store.dispatch({ type: "INCREMENT" });
});
decrementBtn?.addEventListener('click', function () {
    store.dispatch({ type: "DECREMENT" });
});
