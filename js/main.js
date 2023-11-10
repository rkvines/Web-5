// Use ALso Javascript In This Project Bro

// All Object Define Courses Nav 
const pyLi = document.getElementById('pyli'),
    webdevLi = document.getElementById('Webdevli'),
    jsLi = document.getElementById('jsli'),
    design = document.getElementById('designingli');

const py = document.getElementById('python'),
    webdev = document.getElementById('webdev'),
    js = document.getElementById('js');

// Courses Take Functinality 
pyLi.addEventListener('click', () => {
    // py.style.transform = 'translate(0% , 0%)'
    // webdev.style.transform = 'translate(-200% , 0%)'
    py.style.display = 'flex'
    webdev.style.display = 'none'
    js.style.display = 'none'
})
webdevLi.addEventListener('click', () => {
    // py.style.transform = 'translate(-500% , 0%)'
    // webdev.style.transform = 'translate(-500% , 0%)'
    py.style.display = 'none'
    webdev.style.display = 'flex'
    js.style.display = 'none'
})
jsLi.addEventListener('click', () => {
    py.style.display = 'none'
    webdev.style.display = 'none'
    js.style.display = 'flex'
})
design.addEventListener('click' , () => {
    alert("This Course Available Soon !!! ")
})
