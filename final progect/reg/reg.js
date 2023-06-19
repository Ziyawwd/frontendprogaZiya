const user = document.getElementById('Username')
const password = document.getElementById('Password')
const allInputs = document.querySelectorAll('input')

function isFullInput() {
    return [...allInputs].every(input => input.value !== '')
}

$('input').on('input', function () {
    $('button').prop('disabled', !isFullInput())
})

$('#SignupBtn').click(function (e) {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem('Users')) || [];

    users.push({
        user: user.value,
        password: password.value,
        computers: []
    });
    localStorage.setItem('Users', JSON.stringify(users));
    location.href = '../login/log.html'
})

