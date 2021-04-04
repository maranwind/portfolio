let slider = document.querySelector(".container-slider"),
	sliderInd = document.querySelectorAll(".slider"),
	tamañoWidth = sliderInd[0].clientWidth,
	contador = 1,
	intervalo = 4000;


   window.addEventListener("resize",function(){
        tamañoWidth = sliderInd[0].clientWidth;

    });


function slides (){
	slider.style.transform = "translate("+(-tamañoWidth*contador)+"px)";
	slider.style.transition = "1s";
	contador++;

	if (contador ===sliderInd.length){
		contador=0;
		setTimeout(function(){
			slider.style.transform = "translate(0px)";
			slider.style.transition = "0s";

		},1000)

	}


}
setInterval(function tiempo(){
    slides();
},intervalo);



















