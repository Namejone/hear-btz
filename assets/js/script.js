// header-menu
document
  .querySelector('.sidebar-collapse')
  .addEventListener('click', function () {
    document.querySelector('.root').classList.toggle('show')
  })

const btnBar = document.querySelector('.btn-bar')
const sidebar = document.querySelector('.sidebar')

// Button click event - Sidebar show/hide
btnBar.addEventListener('click', (event) => {
  event.stopPropagation() // Prevent click from reaching document
  sidebar.classList.toggle('left-0')
  sidebar.classList.toggle('-left-52')
})

// Click outside to close sidebar
document.addEventListener('click', (event) => {
  if (!sidebar.contains(event.target) && !btnBar.contains(event.target)) {
    sidebar.classList.add('-left-52')
    sidebar.classList.remove('left-0')
  }
})

OverlayScrollbars(document.getElementById('custom-scrollbar'), {
  x: 'hidden',
})
