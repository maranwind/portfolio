let icono = document.querySelector(".icono");

let menu = document.querySelector(".menu-2");

let marca = document.querySelector(".marca h1");

let contadorMenu = true;

const abrirMenu = () =>{

	if(contadorMenu == true){

	menu.style.width = "300px";
	menu.style.transition = "1s";
	marca.style.color = "#4E3620";
	contadorMenu = false
	
}else{

	menu.style.width = "0px";
	menu.style.transition = "1s";
	marca.style.color = "white";
	contadorMenu = true



}


}

icono.addEventListener("click", () => {

	abrirMenu();

});

