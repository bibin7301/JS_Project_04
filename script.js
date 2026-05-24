const count = document.querySelector("#count");
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
const reset = document.querySelector("#reset");

let value = 0;

increase.addEventListener("click", () => {
    value++;
    count.innerHTML = value;

    if (value > 0) {
        document.querySelector("#count").style.color = "green"
    }
    else if (value === 0) {
        document.querySelector("#count").style.color = "blue"
    }
});

decrease.addEventListener("click", () => {
    value--;
    count.innerHTML = value;
    if (value < 0) {
        document.querySelector("#count").style.color = "red"
    }
    else if (value === 0) {
        document.querySelector("#count").style.color = "blue"
    }

});

reset.addEventListener("click", () => {
    value = 0;
    count.innerHTML = value;
    document.querySelector("#count").style.color = "blue"

});

