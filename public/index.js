const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const currentLocation = location.href;
const navItem = document.querySelectorAll('.navlinks')
const navLength = navItem.length

//For Mobile Menu
burger.addEventListener('click', () => {
  menu.classList.toggle('hidden');
})

/* Mobile Menu Alternate Script
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else {
      menu.classList.add('hidden');
  }*/

//For Active State in Navigation
for (let i = 0; i < navLength; i++) {
  if (navItem[i].href === currentLocation) {
    navItem[i].className = "selected"
  }
}
