import { getFingerprint } from "./fingerprint.js";

getFingerprint().then(fp => fp.get()).then(result => {
    console.log(result, Object.prototype.toString.call(result.components));
    document.querySelector(".content").innerHTML = result.visitorId;
    renderComponents(result)
});

function renderComponents(result){
    if(result.components && Object.prototype.toString.call(result.components) === '[object Object]') {
        for (const iterator in result.components) {
            const li = document.createElement("li");
            li.setAttribute("data-type", iterator);
            li.innerHTML = `<b>${iterator}:</b>`;
            document.querySelector("code").appendChild(li);
        }
    }
}

function stringify(value) {
    return JSON.stringify(value, 4)
}