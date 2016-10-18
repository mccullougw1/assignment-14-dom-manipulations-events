// GO!

// TASK 1 -- Show/Hide Nav
var toggle = 0
var hideNavBar = document.querySelector("#hide-nav button")
var NavEl = document.querySelector("#hide-nav .nav-menu")

var toggleNavEl = function(evt) {

    if (toggle === 0) {
        evt.target.innerHTML = "show nav"
        NavEl.className = "nav-menu-hidden"
        toggle = 1
    } else if (toggle === 1) {
        evt.target.innerHTML = "hide nav"
        NavEl.className = "nav-menu"
        toggle = 0
    }
}
hideNavBar.addEventListener('click', toggleNavEl)




// TASK 2 -- Select an Icon

var wishList = document.querySelector(".wish-list")
   //console.log(wishList)
function changeSelectedItem(click) {

    if (click.target.classList.contains("selected") === true) {
        click.target.classList.remove("selected")
    } else if (click.target.classList.contains("option")) {
        click.target.classList.add("selected")
    }
}
wishList.addEventListener('click', changeSelectedItem)




// TASK 3 -- Move Item From List to List

var goodStandingList = document.querySelector(".good-standing-list")
var onProbationList = document.querySelector(".probation-list")

function lockEmUp(click) {
    var noFunClub = document.querySelector('.probation-section ul')

    noFunClub.appendChild(click.target)
}

function giveEmFreedom(click) {
    var freeDOM = document.querySelector('.good-standing-section ul')

    freeDOM.appendChild(click.target)
}
goodStandingList.addEventListener("click", lockEmUp)
onProbationList.addEventListener("click", giveEmFreedom)




// TASK 4 -- Add Guest to List

var inputBtn = document.querySelector('input')
var guestList = document.querySelector('.guest-list')
var addGuest = function(keystroke){

   if(keystroke.keyCode == 13){
      var createNewGuest = document.createElement('li')

      createNewGuest.textContent = inputBtn.value

      guestList.appendChild(createNewGuest)

      createNewGuest.className = "guest"

      inputBtn.value = ''

   }
}
inputBtn.addEventListener('keydown', addGuest)




// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
