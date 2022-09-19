const sidebar = document.getElementById('sidebar')

document.addEventListener('click', evt => {
  if (sidebar.classList.contains('closed')) {
    sidebar.classList.remove('closed')
    sidebar.classList.add('open')
  } else {
    sidebar.classList.remove('open')
    sidebar.classList.add('closed')
  }
})
