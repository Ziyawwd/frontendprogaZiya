const user = document.getElementById('Username')
const password = document.getElementById('Password')

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
        password: password.value
    });
    localStorage.setItem('Users', JSON.stringify(users));
    location.href = '../login/log.html'
})
const allInputs = document.querySelectorAll('input')
function isFullInput() {
    return [...allInputs].every(input => input.value !== '')
}
$('input').on('input', function () {
    $('button').prop('disabled', !isFullInput());
})
const users = JSON.parse(localStorage.getItem('Users'))
$('button').click(function (e) {
    e.preventDefault()
    const userIsEnabled = users.some(item => item.user === allInputs[0].value && item.password == allInputs[1].value);
    if (userIsEnabled) {
        localStorage.setItem('currentUser', allInputs[0].value);
        location.href = '../main/index.html'
    }
})