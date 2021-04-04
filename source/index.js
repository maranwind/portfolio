/*Menu*/
let icono = document.querySelector(".icono"),
	desplegar = document.querySelector("nav");


let	contadorMenu = true;
const menu = ()=>{

	if (contadorMenu== true){
		desplegar.style.width = "300px";


		contadorMenu = false;
	}else{
		desplegar.style.width = "0px";

		contadorMenu = true;
	}


}

icono.addEventListener("click", ()=>{

menu();

})

/*Menu*/



/*Variables*/
let der = document.querySelector(".der"),
	iz = document.querySelector(".iz"),
	slider = document.querySelector(".container-slider"),
	contentSlideH2 = document.querySelectorAll(".slide .cubre h2"),
	contentSlideP = document.querySelectorAll(".slide .cubre p"),
	contentSlideBoton = document.querySelectorAll(".slide .cubre .boton");



let contador0 = false,
	contador1 = true,
	contador2 = false,
	contador3 = false,
	contador4 = false;

/*Variables*/

const anima = (contador)=>{

setTimeout(()=>{

	contentSlideH2[contador].style.transform = "translateY(0px)";
	contentSlideH2[contador].style.opacity = "1";

},1000)
setTimeout(()=>{

	contentSlideP[contador].style.transform = "translateY(0px)";
	contentSlideP[contador].style.opacity = "1";

},1500)
setTimeout(()=>{

	contentSlideBoton[contador].style.transform = "translateY(0px)";
	contentSlideBoton[contador].style.opacity = "1";

},2000)

setTimeout(()=>{
contentSlideH2[contador].style.opacity = "0";
contentSlideH2[contador].style.transform = "translateY(100px)";
contentSlideP[contador].style.opacity = "0";
contentSlideP[contador].style.transform = "translateY(100px)";
contentSlideBoton[contador].style.opacity = "0";
contentSlideBoton[contador].style.transform = "translateY(100px)";


},9000)
}

const animaDes = (des)=>{

contentSlideH2[des].style.opacity = "0";
contentSlideH2[des].style.transform = "translateY(100px)";
contentSlideP[des].style.opacity = "0";
contentSlideP[des].style.transform = "translateY(100px)";
contentSlideBoton[des].style.opacity = "0";
contentSlideBoton[des].style.transform = "translateY(100px)";


}
const deslizarDer = () => {

	 if (contador1 == true && contador2 == false) {
			slider.style.transform = `translate(-40%)`;
			slider.style.transition = `1s`;
			anima(1);
			animaDes(0);
			contador2 = true;
			contador0 = true;

	}else if (contador2 == true && contador3 == false) {
			slider.style.transform = `translate(-60%)`;
			slider.style.transition = `1s`;
			anima(2);
			animaDes(1);
			contador3= true;

	}else if (contador3 == true) {
			slider.style.transform = `translate(-80%)`;
			slider.style.transition = `0.8s`;
			
			setTimeout( ()=>{
				slider.style.transform = `translate(-20%)`
				slider.style.transition = `0s`;
				anima(0);
				animaDes(2);
				contador2 = false;
				contador3 = false;
				contador0 = false;

			},900);

	}


}
const deslizarIz = () => {

	if (contador0 == false && contador1 == true) {
			slider.style.transform = `translate(0%)`;
			slider.style.transition = `0.8s`;
			contador0 = true;
			setTimeout( ()=>{
				slider.style.transform = `translate(-60%)`
				slider.style.transition = `0s`;
				contador2 = true;
				contador3 = true;
				anima(2);
				animaDes(0);


			},900)

	}else if(contador2== true && contador3== true){

			slider.style.transform = `translate(-40%)`;
			slider.style.transition = `1s`;
			anima(1);
			animaDes(2);
			contador3 = false;
			



	}else if(contador1== true && contador2 == true){
			slider.style.transform = `translate(-20%)`;
			slider.style.transition = `1s`;
			anima(0);
			animaDes(1);
			contador2 = false;
			contador0 = false;
			

	}





}
window.addEventListener("load", ()=>{
	anima(0);

})

setInterval(()=>{

	deslizarDer();

},10000)

/*Eventos*/

der.addEventListener("click", () => {

	deslizarDer();


});

iz.addEventListener("click", () => {

	deslizarIz();

});

/*Eventos*/




