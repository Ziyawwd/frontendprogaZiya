const currentUsers = localStorage.getItem('currentUser')
let user = document.querySelector('#user')
user.innerHTML = `${currentUsers}`
const logout = document.querySelector('#logout')
const login = document.querySelector('#login')
const shop= document.querySelector('#shop')
const table = document.querySelector('#table')
if (!currentUsers == "" && !currentUsers) {
    logout.style.display='inline'
    login.style.display = 'none'
    logup.style.display = 'inline'
    table.style.display = 'inline'
} else {
    logout.style.display = 'none'
    login.style.display = 'inline'
    logup.style.display = 'inline'
    table.style.display = 'none'
}
logout.addEventListener('click', function () {
    localStorage.setItem('currentUser','')
    user.innerHTML=''
    logout.style.display = 'none'
    login.style.display = 'inline'
    logup.style.display = 'inline'
})
