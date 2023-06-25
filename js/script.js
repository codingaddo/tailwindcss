const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const darkIcon = document.querySelector('.moon')
const lightIcon = document.querySelector('.sun')



darkIcon.addEventListener('click',(event)=>{
    event.preventDefault()
    document.documentElement.classList.toggle('dark')
    darkIcon.classList.toggle('hidden')
})

lightIcon.addEventListener('click',(event)=>{
    event.preventDefault()
    document.documentElement.classList.toggle('dark')
    darkIcon.classList.remove('hidden')
})


btn.addEventListener('click',()=>{
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
    nav.classList.toggle('flex')
})