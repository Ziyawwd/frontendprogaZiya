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
    nav.innerHTML +=`<button class="nav-link" id="v-pills-${mark}" data-bs-toggle="pill"
                    aria-selected="true">${mark}</button>`
    tabContent.innerHTML += `<div class="tab-pane fade " id="v-pills-${mark}" role="tabpanel"
                    aria-labelledby="v-pills-${mark}">
                </div>`
}
const tabPanes = document.querySelectorAll(".tab-pane")
for (let pane of tabPanes) {
    for (let comp of computers) {
        if (pane.id == comp.mark + "tab") {
            pane.innerHTML +=`<div class="card" style="width: 18rem;">
  <img src="${comp.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${comp.mark}</h5>
    <p class="card-text">5000$</p>
  </div>
</div>`
        }
    }
}