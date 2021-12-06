
// selector
const menu = document.querySelector('.burger');
const links = document.querySelectorAll(".nav__link")
const menuBurger = document.querySelector( ".menu-burger" )
// metodo
function toggleMenu (event) {
   if(event.target && !event.target.classList.contains("is-active")){
       this.classList.toggle('is-active');
       menuBurger.classList.toggle("is_active");
   } 
  event.preventDefault();
  
}
console.log(links)
links.forEach(link =>{
    link.addEventListener("click",function(e){
        console.log("click a link")
        if(link){
            this.classList.toggle('is-active');
            menuBurger.classList.toggle("is_active");
        }
        
    })
})


// evento
menu.addEventListener('click', toggleMenu, false);


