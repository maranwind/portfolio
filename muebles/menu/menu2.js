let icono = document.querySelector(".icono"),
	menu = document.querySelector(".container-navegar"),
	ubicacionPrincipal = window.pageYOffset,
	banner = document.querySelector(".banner");

var contadorMenu = true;



icono.addEventListener("click", function(){
	if (contadorMenu==true){
		menu.style.width = "300px";
		contadorMenu =false;


	}else if(contadorMenu==false){
		menu.style.width = "0%";
		contadorMenu =true;

	}
		
})
window.onscroll = function(){
	let desplazamiento = window.pageYOffset; 

	if (ubicacionPrincipal > desplazamiento){
		banner.style.top = "0px";


	}else{
		banner.style.top = "-100px";
		menu.style.width = "0%";

	}
	ubicacionPrincipal =desplazamiento;

}
