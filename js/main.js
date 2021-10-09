const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const panel = $$('.tab-panel');
const line = $('.line');

line.style.width = $('.tab-item.active').offsetWidth + 'px';

tabs.forEach((tab,index) => {
    tab.onclick = function(){

        $('.tab-item.active').classList.remove('active');
        tab.classList.add('active');

        line.style.width = tab.offsetWidth + 'px';
        line.style.left = tab.offsetLeft +'px'

        $('.tab-panel.active').classList.remove('active');
        panel[index].classList.add('active');
    }
});