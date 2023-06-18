const UsernameInput = document.querySelector('#Username')
const PasswordInput = document.querySelector('#Password')
const allInputs = document.querySelectorAll('input')

function isFullInput() {
    return [...allInputs].every(input => input.value !== '')
}

$('input').on('input', function () {
    $('button').prop('disabled', !isFullInput());
})

const users = JSON.parse(localStorage.getItem('Users'))

$('button').click(function (event) {
    event.preventDefault();
    const userIsEnabled = users.some(item => item.user === allInputs[0].value && item.password == allInputs[1].value);
    
    if (userIsEnabled) {
        localStorage.setItem('currentUser', allInputs[0].value);
        location.href = '../main/index.html'
    }
})

