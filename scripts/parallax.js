const banner = document.getElementsByClassName('banner')[0]
const dampener = 6

document.addEventListener('scroll', evt => {
  banner.style.backgroundPosition = `0px -${window.scrollY / dampener}px`
})
