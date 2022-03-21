const front = document.getElementsByClassName("box-front");
const back = document.getElementsByClassName("box-back");
const button = document.querySelector("button");

let radioBtn = document.querySelectorAll('input[name="rate"]');
console.log(radioBtn);

let result = document.getElementById("result");

let find = () => {
    let selected = document.querySelector('input[name="rate"]:checked').value;
    console.log(selected);
    result.textContent = ` ${selected}`;
}
radioBtn.forEach(radioBtn => {
    radioBtn.addEventListener("change", find );
});

back[0].classList.add('visible');

button.addEventListener('click', () => {
    front[0].classList.add('visible');
    back[0].classList.remove('visible');
})

find();