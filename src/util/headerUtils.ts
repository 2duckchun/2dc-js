export const toggleHeaderMenu = (navMenu: HTMLElement): void => {
  navMenu.classList.toggle('active')
  const isActive = navMenu.classList.contains('active')
  if (isActive) {
    navMenu.setAttribute('aria-expanded', 'true')
    navMenu.setAttribute('aria-hidden', 'false')
  } else {
    navMenu.setAttribute('aria-expanded', 'false')
    navMenu.setAttribute('aria-hidden', 'true')
  }
}
