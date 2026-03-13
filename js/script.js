const hero = document.querySelector(".hero")
const headset = document.querySelector(".headset-img")
const cartBtn = document.querySelector(".btn-cart")
const cartIcon = document.querySelector(".cart")
const cartCount = document.querySelector(".cart-count")

let count = 0

/* 3D rotation */

hero.addEventListener("mousemove",(e)=>{

const rect = hero.getBoundingClientRect()

const x = e.clientX - rect.left
const y = e.clientY - rect.top

const rotateX = ((y / rect.height) - 0.5) * 18
const rotateY = ((x / rect.width) - 0.5) * -18

headset.style.transform =
`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

})

hero.addEventListener("mouseleave",()=>{
headset.style.transform="rotateX(0deg) rotateY(0deg)"
})

/* ADD TO CART ANIMATION */

cartBtn.addEventListener("click",()=>{

const img = headset.cloneNode(true)
const rect = headset.getBoundingClientRect()

img.classList.add("fly-img")

img.style.left = rect.left + "px"
img.style.top = rect.top + "px"

document.body.appendChild(img)

const cartRect = cartIcon.getBoundingClientRect()

setTimeout(()=>{

img.style.left = cartRect.left + "px"
img.style.top = cartRect.top + "px"
img.style.width = "30px"
img.style.opacity = "0.5"

},10)

setTimeout(()=>{

img.remove()

count++
cartCount.textContent = count

},800)

})