/*$(document).ready(function(){ irArriba(); }); //Hacia arriba

function irArriba(){
  $('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(600); }else{ $('.ir-arriba').slideUp(600); }
  });
  $('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px'},1000);});
}*/
document.addEventListener("DOMContentLoaded", () => 
    {
    const productos = document.getElementById("productos");
    const cards = ['rueda', 'llave', 'perro', "yo", 'manzana', 'pautau'];
    
    for (let i=0; i < cards; i++){
    
    }
    console.log("productos disponibles:", cards);
    });
document.addEventListener("DOMContentLoaded",()=>
{
var prodCont=document.querySelector("#prod-cont");

fetch("https://dummyjson.com/products?limit=6")
.then(Response=>Response.json())
.then((data)=>{
  var producto = data.products;

  prodCont.innerHTML = "";
  producto.forEach((product) => 
    {
    
  })
})

});