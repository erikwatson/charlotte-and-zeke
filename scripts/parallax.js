const scrollPane = document.getElementsByClassName('scroll-pane')[0]
const dampener = 6

document.addEventListener('scroll', evt => {
  scrollPane.style.backgroundPosition = `0px -${window.scrollY / dampener}px`
})
