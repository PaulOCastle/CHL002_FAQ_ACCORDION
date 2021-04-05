const collapsibles = document.querySelectorAll('.collapsible');
const collapsibleBtns = document.querySelectorAll('.collapsible-btn');
const collapsibleData = document.querySelectorAll('.collapsible-data');

collapsibleBtns.forEach(function  (btn) {

    btn.addEventListener('click', function () {

        let parent = btn.parentElement;
        let data = btn.nextElementSibling;
        let dataHeight = data.scrollHeight;

        for (let i = 0; i < collapsibles.length; i++) {
            collapsibles[i].classList.remove('expanded');
            collapsibles[i].classList.add('collapsed');
            collapsibles[i].setAttribute('data-collapsed', 'true');
            collapsibleData[i].style.height = 0 + 'px';
        }

        if (isCollapsed(parent)) {
            parent.classList.remove('collapsed');
            parent.classList.add('expanded');
            parent.setAttribute('data-collapsed', 'false');
            data.style.height = dataHeight + 'px';
        } else {
            parent.classList.remove('expanded');
            parent.classList.add('collapsed');
            parent.setAttribute('data-collapsed', 'true');
            data.style.height = 0 + 'px';
        }

    })
})

function isCollapsed (element) {
    return element.getAttribute('data-collapsed') === 'true';
}
