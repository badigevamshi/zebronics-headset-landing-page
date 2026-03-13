const hero = document.querySelector(".hero")
const headset = document.querySelector(".headset-img")
const spotlight = document.querySelector(".spotlight")

hero.addEventListener("mousemove", (e) => {

const rect = hero.getBoundingClientRect()

const x = e.clientX - rect.left
const y = e.clientY - rect.top

/* 3D rotation */

const rotateX = ((y / rect.height) - 0.5) * 18
const rotateY = ((x / rect.width) - 0.5) * -18

headset.style.transform =
`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

/* spotlight follow */

spotlight.style.left = x + "px"
spotlight.style.top = y + "px"

})

hero.addEventListener("mouseleave", () => {

headset.style.transform = "rotateX(0deg) rotateY(0deg)"

})