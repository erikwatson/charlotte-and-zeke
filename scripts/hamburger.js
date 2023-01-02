const hamburger = document.getElementById('hamburger-button')
const sidebar = document.getElementById('sidebar')
const overlay = document.getElementById('dark-overlay')

function toggleMenu () {
  if (sidebar.classList.contains('closed')) {
    sidebar.classList.remove('closed')
    sidebar.classList.add('open')

    overlay.classList.remove('closed')
    overlay.classList.add('open')
  } else {
    sidebar.classList.remove('open')
    sidebar.classList.add('closed')

    overlay.classList.remove('open')
    overlay.classList.add('closed')
  }
}

function fixSidebarAndOverlayPosition() {
  const position = `${window.scrollY}px`

  sidebar.style.top = position
  overlay.style.top = position
}

hamburger.addEventListener('click', toggleMenu)
overlay.addEventListener('click', toggleMenu)
document.addEventListener('scroll', fixSidebarAndOverlayPosition)
