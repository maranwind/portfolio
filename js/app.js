const d = document,
	  $form = d.getElementById('mensaje_portfolio');


let $inputs = document.querySelectorAll('.input_val');

const expresiones = {
	nombre: /^[a-zA-ZÁ-ÿ\s]{2,10}$/,
	correo: /^[a-zA-Z0-9\#\$\%\&\/\-\.\_]+@[a-zA-Z0-9\_]+\.[a-zA-Z0-9\_]+$/

};

const campos = {
		nombre: false,
		correo: false,
};



const validar = (e)=>{
		switch(e.target.name){
			case "nombre":
					validarCampo(expresiones.nombre, 'nombre', e.target.value);
				break;
			case 'correo':
					validarCampo(expresiones.correo, 'correo', e.target.value);
				break;
		}
}


const validarCampo = (expresion, campo, valor)=>{

	if (expresion.test(valor)){


		campos[campo] = true;
		console.log("Correcto"+campo);

	}else{

		campos[campo] = false;

	}


}


for(let i = 0; i < $inputs.length; i++){

	$inputs[i].addEventListener('keyup', (e)=>{

		validar(e);

	})
	$inputs[i].addEventListener('blur', (e)=>{

		validar(e);
		
	})

}


$form.addEventListener('submit', async (e)=>{

	e.preventDefault();


	let mensaje = new FormData($form);

	if (campos.nombre && campos.correo &&campos.mensaje) {

		try{

			let options = {
						method:'POST',
						body:  mensaje
						};
					

				let res = await fetch("https://formsubmit.co/ajax/marcos21programador@gmail.com", options),
					json = await res.json();

					console.log(json);

		}catch(err){

			console.log(err);


		}		


	}

})






























