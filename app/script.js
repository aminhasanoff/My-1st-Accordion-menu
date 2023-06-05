"use strict"

const btn = document.querySelectorAll('.my-btn')
const myps = document.querySelectorAll('.my-p')

btn.forEach((item) => {
    item.onclick = function () {
        if (item.nextElementSibling.classList.contains('active')) {
            item.nextElementSibling.classList.remove('active');
            // document.querySelector('body').style.backgroundRepeat = "no-repeat"
            // document.querySelector('body').style.backgroundImage = "url(images/Flag.png)";
        } else {

            myps.forEach(x => {
                // document.querySelector('body').style.backgroundRepeat = "no-repeat"
                // document.querySelector('body').style.backgroundImage = "url(images/hollywood.png)";
                x.classList.remove('active')
            })
            item.nextElementSibling.classList.add('active')
        }
    }
})
