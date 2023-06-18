const currentUsers = localStorage.getItem('currentUser')
let user = document.querySelector('#user')
user.innerHTML = `${currentUsers}`
const logout = document.querySelector('#logout')
const login = document.querySelector('#login')
const logup = document.querySelector('#signin')
if (!user == "") {
    logout.style.display='inline'
    login.style.display = 'none'
    logup.style.display = 'none'
} else {
    logout.style.display = 'none'
    login.style.display = 'inline'
    logup.style.display = 'inline'
}
logout.addEventListener('click', function () {
    localStorage.setItem('currentUser','')
    localStorage.setItem('computers', '')
    user.innerHTML=''
    logout.style.display = 'none'
    login.style.display = 'inline'
    logup.style.display = 'inline'
})
