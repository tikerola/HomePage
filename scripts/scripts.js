
const burger = document.querySelector('.navigation__burger')
const backdrop = document.querySelector('.backdrop')
const sidebar = document.querySelector('.sidebar')

burger.addEventListener('click', handleBurgerClick)
sidebar.addEventListener('click', handleSidebarClick)

function toggleBackdrop() {
  backdrop.style.display = backdrop.style.display === '' ? 'block' : ''
}

function toggleSidebar() {
  sidebar.style.display = sidebar.style.display === '' ? 'block' : ''
}

function handleSidebarClick() {
  toggleBackdrop()
  toggleSidebar()
}

function handleBurgerClick() {
  toggleBackdrop()
  toggleSidebar()
}
