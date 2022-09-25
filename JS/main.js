let header = document.querySelector('.header');
let searchIcon = document.querySelector('.search');
let searchForm = document.querySelector('.search-form');
let bars = document.querySelector('.toggle-menu');
let links = document.querySelector('.links')
let alllinks = document.querySelectorAll('.links li a');
let allLinkPortfolio = document.querySelectorAll('.ful li');
let allBoxInPortfolio = document.querySelectorAll('.imgs-container .box')
let skillsSection = document.querySelector('.our-skills');
let allProgress = document.querySelectorAll('.prog span');
let statsSection = document.querySelector('.stats');
let allBoxNumber = document.querySelectorAll('.box .number');

searchIcon.addEventListener('click', () => {
    searchForm.classList.toggle('active')
    links.classList.remove('active');
})

bars.addEventListener('click', () => {
    links.classList.toggle('active');
    searchForm.classList.remove('active')
})

alllinks.forEach((link) => {
    link.onclick = () => {
        alllinks.forEach((e) => e.classList.remove('activ'))
        link.classList.add('activ');
        links.classList.remove('active');
    }
})

allLinkPortfolio.forEach((link) => {
    link.onclick = function(e) {
        allLinkPortfolio.forEach((e) => e.classList.remove('activ'))
        link.classList.add('activ');
        let boxs = document.querySelectorAll(`.imgs-container ${e.target.dataset.name}`);
        //Hidden ALL bOXS
        allBoxInPortfolio.forEach((box) => {
                box.style.display = 'none';
            })
            //SHOW Boxs contains Class Link 
        boxs.forEach((xx) => {
            xx.style.display = 'block';
        })
    }
})

window.onscroll = () => {
    if (window.scrollY > 200) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }

    if (window.scrollY >= skillsSection.offsetTop - 200) {
        allProgress.forEach((prog) => {
            prog.style.width = `${prog.getAttribute('data-progress')}%`
        })
    }

    if (window.scrollY >= statsSection.offsetTop - 300) {
        allBoxNumber.forEach((number) => {
            counterTo(number)
        })
    }
}

function counterTo(e) {
    let counter = setInterval(() => {
        if (e.textContent == e.getAttribute('data-number')) {
            clearInterval(counter)
        } else {
            e.textContent++;
        }
    }, 3000 / e.getAttribute('data-number'))
}