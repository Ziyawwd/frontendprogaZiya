const users = JSON.parse(localStorage.getItem('Users'))
const nav=document.querySelector('.nav')
const tabContent = document.querySelector('.tab-content')

let marks = []
let computers = []
for (let user of users) {
    for (let comp of user.computers) {
        computers.push(comp)
        if (!marks.includes(comp.mark)) {
            marks.push(comp.mark)
        }
    }
}
for (let mark of marks) {
    nav.innerHTML +=`<button class="nav-link " id="${mark}" data-bs-toggle="pill"
                    data-bs-target="#${mark}tab" type="button" role="tab" aria-controls="${mark}"
                    aria-selected="true">${mark}</button>`
    tabContent.innerHTML += `<div class="tab-pane fade show active" id="${mark}" role="tabpanel"
                    aria-labelledby="${mark}">
                </div>`
}
const tabPanes = document.querySelectorAll(".tab-pane")
for (let pane of tabPanes) {
    for (const comp of computers) {
        if (pane.id == comp.mark + "tab") {
            pane.innerHTML +=`<div class="card" style="width: 18rem;">
  <img src="${comp.url}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${comp.mark}</h5>
    <p class="card-text">5000$</p>
  </div>
</div>`
        }
    }
}