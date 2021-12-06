
// selector
const menu = document.querySelector('.burger');
const links = document.querySelectorAll(".nav__link")
const menuBurger = document.querySelector( ".menu-burger" )
// metodo
function toggleMenu (event) {
   
       menu.classList.toggle('is-active');
       menuBurger.classList.toggle("is_active");
  
  event.preventDefault();
  
}
console.log(links)
links.forEach(link =>{
    link.addEventListener("click",function(){
        
        
        if(link){
            menu.classList.toggle('is-active');
            menuBurger.classList.toggle("is_active");
          
        }
        
    })
})
// evento
menu.addEventListener('click', toggleMenu, false);


