const accItems = document.querySelectorAll('.accordion-item')
const itemContent = document.querySelectorAll('.item-content')

accItems.forEach((item) => {

    item.addEventListener("click", () => {

        for (let i =0; i < accItems.length; i++) {
            accItems[i].classList.remove('active')
            accItems[i].classList.add('collapsed')
        }

        item.classList.toggle('active')
        item.classList.toggle('collapsed')
    })
})