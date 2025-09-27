function whatsappmensaje(){
window.location.href= ("https://wa.me/+5351047336/?text=Hola, Quiero un producto")
}
function closemenu(){
    setTimeout(() => {menudiv.style.opacity="0.9";}, 25);
    setTimeout(() => {menudiv.style.opacity="0.8";}, 50);
    setTimeout(() => {menudiv.style.opacity="0.7";}, 75);
    setTimeout(() => {menudiv.style.opacity="0.6";}, 100);
    setTimeout(() => {menudiv.style.opacity="0.5";}, 125);
    setTimeout(() => {menudiv.style.opacity="0.4";}, 150);
    setTimeout(() => {menudiv.style.opacity="0.3";}, 175);
    setTimeout(() => {menudiv.style.opacity="0.2";}, 200);
    setTimeout(() => {menudiv.style.opacity="0.1";}, 225);
    setTimeout(() => {menudiv.style.opacity="0";}, 250);
    setTimeout(() => {menudiv.style.display="none";}, 300);
}
function openmenu(){
    setTimeout(() => {menudiv.style.display="block";}, 20);
    setTimeout(() => {menudiv.style.opacity="0.1";}, 25);
    setTimeout(() => {menudiv.style.opacity="0.2";}, 50);
    setTimeout(() => {menudiv.style.opacity="0.3";}, 75);
    setTimeout(() => {menudiv.style.opacity="0.4";}, 100);
    setTimeout(() => {menudiv.style.opacity="0.5";}, 125);
    setTimeout(() => {menudiv.style.opacity="0.6";}, 150);
    setTimeout(() => {menudiv.style.opacity="0.7";}, 175);
    setTimeout(() => {menudiv.style.opacity="0.8";}, 200);
    setTimeout(() => {menudiv.style.opacity="0.9";}, 225);
    setTimeout(() => {menudiv.style.opacity="1";}, 250);
    
}

function alimentosycondimentos(){closemenu();
    titulotipodeproducto.innerHTML="Alimentos y Condimentos";
    pagecategoriesproduct.data="alimentosycondimentos.html"
}
function aseoylimpiesa(){closemenu();
    titulotipodeproducto.innerHTML="Aseo y Limpiesa";
    pagecategoriesproduct.data="aseoylimpiesa.html"
}
function bebidasycigarros(){closemenu();
    titulotipodeproducto.innerHTML="Bebidas y Cigarros";
    pagecategoriesproduct.data="bebidasycigarros.html"
}