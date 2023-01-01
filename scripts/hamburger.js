const sidebar = document.getElementById('sidebar')
const overlay = document.getElementById('dark-overlay')

document.addEventListener('click', evt => {
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
})

document.addEventListener('scroll', evt => {
  const position = `${window.scrollY}px`

  sidebar.style.top = position
  overlay.style.top = position
})
