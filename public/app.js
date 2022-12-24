const textBtns = document.querySelectorAll('.contact__btn');

textBtns.forEach(textBtn => {
  let text = textBtn.querySelector('p');

  text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform: rotate(${index * 13}deg)">${character}</span>`).join('')
})





const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const moon = document.querySelector("#moon")
const body = document.querySelector("body")
const hLinks = document.querySelectorAll("#hLink")

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden")
  hamburger.classList.toggle("bg-white")
})

hLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
  })
})

moon.addEventListener("click", () => {
  body.classList.toggle("dark")
})