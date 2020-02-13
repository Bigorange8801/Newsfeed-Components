
const toggleMenu = () => {
  menu.classList.toggle('menu--open');
  // Toggle the "menu--open" class on your menu refence. 
}
const menBtn2 = ()=> {
  menuButton.src='./assets/menu-2.png'
}
const menBtn = document.getElementsByClassName("menu-button");
// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
//starting
menuButton.addEventListener('click', () => {
  toggleMenu();
})

 menuButton.addEventListener('click', () => {
 menBtn2();
  
 })
TweenMax.from(".menu-button", 4, {x:600,})