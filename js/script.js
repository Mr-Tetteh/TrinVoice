const drop = document.querySelector('.drop');
const drop_menu = document.querySelector('.drop_menu')

drop.addEventListener('click', function (e) {
    e.preventDefault()
    if (drop_menu.classList.contains('d-none')) {
        drop_menu.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });

        drop_menu.classList.remove('d-none')
    } else {
        drop_menu.classList.add('d-none')
    }
})


const drop1 = document.querySelector('.drop1');
const drop_menu1 = document.querySelector('.drop_menu1')

drop1.addEventListener('click', function (e) {
    e.preventDefault()
    if (drop_menu1.classList.contains('d-none')) {
        drop_menu1.classList.remove('d-none')
    } else {
        drop_menu1.classList.add('d-none')
    }
})


const drop2 = document.querySelector('.drop2');
const drop_menu2 = document.querySelector('.drop_menu2')

drop2.addEventListener('click', function (e) {
    e.preventDefault()
    if (drop_menu2.classList.contains('d-none')) {
        drop_menu2.classList.remove('d-none')
    } else {
        drop_menu2.classList.add('d-none')
    }
})


const drop3 = document.querySelector('.drop3');
const drop_menu3 = document.querySelector('.drop_menu3')

drop3.addEventListener('click', function (e) {
    e.preventDefault()
    if (drop_menu3.classList.contains('d-none')) {
        drop_menu3.classList.remove('d-none')
    } else {
        drop_menu3.classList.add('d-none')
    }
})

const drop4 = document.querySelector('.drop4');
const drop_menu4 = document.querySelector('.drop_menu4')

drop4.addEventListener('click', function (e) {
    e.preventDefault()
    if (drop_menu4.classList.contains('d-none')) {
        drop_menu4.classList.remove('d-none')
    } else {
        drop_menu4.classList.add('d-none')
    }
})


const drop5 = document.querySelector('.drop5');
const drop_menu5 = document.querySelector('.drop_menu5')

drop5.addEventListener('click', function (e) {
    e.preventDefault()
    if (drop_menu5.classList.contains('d-none')) {
        drop_menu5.classList.remove('d-none')
    } else {
        drop_menu5.classList.add('d-none')
    }
})

const drop6 = document.querySelector('.drop6');
const drop_menu6 = document.querySelector('.drop_menu6')

drop6.addEventListener('click', function (e) {
    e.preventDefault()
    if (drop_menu6.classList.contains('d-none')) {
        drop_menu6.classList.remove('d-none')
    } else {
        drop_menu6.classList.add('d-none')
    }
})