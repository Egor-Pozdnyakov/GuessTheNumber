const input = document.getElementById("input")
const form = document.getElementById("form")
const message = document.getElementById("message")
const button = document.getElementById("button")

const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
let win = false;

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!win) {
        if (input.value < 1 || input.value > 100 || !input.value) {
            message.textContent = "Пожалуйста, введите число от 1 до 100"
            message.style.color = 'red';
        }
        else if (input.value < randomNumber) {
            message.textContent = "Больше"
            message.style.color = 'grey';
        }
        else if (input.value > randomNumber) {
            message.textContent = "Меньше"
            message.style.color = 'grey';
        }
        else {
            message.textContent = "Поздравляем! Вы отгадали число!"
            message.style.color = 'green';
            button.textContent = "Заново"
            win = true;
        }
        input.focus()

    } else {
        location.reload()
    }
})