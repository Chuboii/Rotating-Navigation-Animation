let icon = document.querySelector(".icon")
let container = document.querySelector(".container")
let times = document.querySelector(".fa-times")
let bars = document.querySelector(".fa-bars")
let a1 = document.querySelector(".a")
let a2 = document.querySelector(".b")


icon.addEventListener("click", () => {
    icon.classList.toggle("active")
    

})

bars.addEventListener("click", () => {
    
    container.classList.add("active")
    container.classList.remove("act")
    a1.classList.add("a2")
    a2.classList.add("a3")
})

times.addEventListener("click", () => {
    container.classList.add("act")
    container.classList.remove("active")
    a1.classList.remove("a2")
    a2.classList.remove("a3")
})