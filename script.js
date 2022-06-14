input = document.querySelector('input').value
// input = document.forms['form'][]
document.querySelector('button').addEventListener('click', checkClick)
label = document.querySelector('label')
function checkClick() {
    console.log(input);
    if (input.length == 0) {
        label.classList.add('hidden')
    }
}

