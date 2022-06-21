const $menu=document.querySelector('.menu');
const $menu_btn=document.querySelector(".menu-btn");
$menu_btn.addEventListener('click',()=>{
    $menu.classList.toggle('is-active')
    $menu_btn.firstElementChild.classList.toggle('none');
    $menu_btn.lastElementChild.classList.toggle('none');
})
document.addEventListener("click",(e)=>{
    if(!e.target.matches('.menu a')) return false;
    $menu.classList.toggle('is-active');
    $menu_btn.firstElementChild.classList.toggle('none');
    $menu_btn.lastElementChild.classList.toggle('none');

})