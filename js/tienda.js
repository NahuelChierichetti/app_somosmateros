'use strict';

const d = document;

let aProductos = [
    {
        id: 1,
		nombre: 'Mate modelo Camionero',
		imagen: 'img/camionero1-min.jpg',
		descripcion: 'Modelo "Camionero" con virola lisa de acero inoxidable',
		precio: 2500,
    },
    {
        id: 2,
		nombre: 'Bombilla Acero Inoxidable',
		imagen: 'img/bombilla_acero-min.jpg',
		descripcion: 'Bombilla de acero inoxidable con caño liso y pico curvo',
		precio: 1200,
    },
    {
        id: 3,
		nombre: 'Mate modelo Imperial',
		imagen: 'img/imperial-min.jpg',
		descripcion: 'Modelo "Imperial" con virola de alpaca trabajada',
		precio: 5500,
    },
    {
        id: 4,
		nombre: 'Mate modelo Torpedo',
		imagen: 'img/torpedo-min.jpg',
		descripcion: 'Modelo "Torpedo" con virola lisa de acero inoxidable',
		precio: 2500,
    },
    {
        id: 5,
		nombre: 'Bombilla de Alpaca Pico Curvo',
		imagen: 'img/bombilla_alpaca-min.jpeg',
		descripcion: 'Bombilla de Alpaca con pico curvo y caño liso',
		precio: 1800,
    },
    {
        id: 6,
		nombre: 'Termo de Acero Inoxidable',
		imagen: 'img/termo-min.jpg',
		descripcion: 'Termo de Acero Inoxidable de 1lt y pico cebador',
		precio: 2500,
    },{
        id: 7,
		nombre: 'Matera de Cuero',
		imagen: 'img/matera-min.jpg',
		descripcion: 'Matera 100% de Cuero con división en el medio',
		precio: 2200,
    },{
        id: 8,
		nombre: 'Combo Matero',
		imagen: 'img/combo-min.jpg',
		descripcion: 'Combo Matero, incluye termo, bombilla, matera y mate',
		precio: 7850,
    },
];

let divProductos = d.querySelector('#productos');

for (let i = 0; i < aProductos.length; i++) {
    let div = d.createElement('div');
    div.classList = 'col-6 col-md-4 pb-3';
    divProductos.appendChild(div);
    
    let div1 = d.createElement('div');
    div1.classList = 'row card border-light rounded-0';
    div.appendChild(div1);
    
    let img = d.createElement('img');
    img.src = aProductos[i]['imagen'];
    img.alt = 'Foto de producto ' + aProductos[i];
    img.classList = 'img-fluid';
    div1.appendChild(img);
    
    let div2 = d.createElement('div');
    div2.classList = 'card-body col';
    div1.appendChild(div2);
    
    let h3 = d.createElement('h3');
    h3.classList = 'h6 tituloprod mt-3 text-center';
    h3.innerHTML = aProductos[i]['nombre'];
    h3.style.fontSize = '1.1em';
    h3.style.fontWeight = 'bold';
    div2.appendChild(h3);
    
    let descripcion = d.createElement('p');
    descripcion.innerHTML = aProductos[i]['descripcion'];
    descripcion.style.textAlign = 'center';
    div2.appendChild(descripcion);
    
    let precio = d.createElement('p');
    precio.innerHTML = '$ ' + aProductos[i]['precio'];
    precio.style.fontSize = '1em';
    precio.style.fontWeight = 'bold';
    precio.style.textAlign = 'center';
    div2.appendChild(precio);
    
    let btn = d.createElement('button');
    btn.className = 'agregar';
    btn.classList = 'botonagregar'
    btn.innerHTML = 'Agregar al carrito';
    btn.dataset.id = aProductos[i]['id'];
    btn.dataset.valor = aProductos[i]['precio'];
    div2.appendChild(btn); 
    
}

let agregarBtns = d.querySelectorAll('#productos button.botonagregar');
let miniCarrito = d.querySelector('#minicarrito');

    let divCarrito = d.createElement('div');
    divCarrito.classList = 'row border-bottom mb-3 py-2 px-3';
    miniCarrito.appendChild(divCarrito);

    let btnVerCarrito = d.createElement('button');
    btnVerCarrito.className = 'carrito';
    btnVerCarrito.href = '#cuatro';
    //btnVerCarrito.dataToggle = 'modal';
    //btnVerCarrito.dataTarget = '#modal';
    btnVerCarrito.style.border = 'none';
    btnVerCarrito.style.background = 'none';
    divCarrito.appendChild(btnVerCarrito);

let carrito = {
    productos: [],
    cantidad: [],
    total: 0,
};


let contadorCarrito = d.querySelector('#contador');

let contador1 = d.createElement('p');
contador1.innerHTML = `Cantidad de Productos: ${carrito.cantidad}`;
contadorCarrito.appendChild(contador1);

let contador2 = d.createElement('p');
contador2.innerHTML = `Total: ${carrito.total}`;
contadorCarrito.appendChild(contador2);

let cont = 0;

for (let btn of agregarBtns) {

	btn.onclick = function() {

	let identificador = parseInt(this.dataset.id);
	let valor = parseInt(this.dataset.valor);
    console.log(`Producto ${identificador} valor ${valor}`);
     
	let indice = carrito.productos.indexOf(identificador);
	if(indice == -1) {
		carrito.productos.push(identificador);
		carrito.cantidad.push(1);
	} else {
		carrito.cantidad[indice]++;
	}
	carrito.total = parseInt(carrito.total) + valor;
	cont++;
    contador1.innerHTML = `Cantidad: ${cont}`;
    contador2.innerHTML = `Total: $${carrito.total}`;
	}
    
}

for (let verCarritoBtn of d.querySelectorAll('#carrito')) {
    verCarritoBtn.onclick = function() {
        
        let infoCarro = d.querySelector('#infocarrito');
        
        if(carrito.total == 0) {
            location.reload();
        }
        
        let divVer = d.createElement('div');
		divVer.style.width = '100%';
		//divVer.style.margin = 'auto';
		divVer.style.backgroundColor = '#fff';
        divVer.style.marginBottom = '2em';
		infoCarro.appendChild(divVer);

        
        for (let i = 0; i < carrito.productos.length; i++) {
		let productoId = carrito.productos[i];
			for (let item of aProductos) {
				if (item.id == productoId) {
                                        
                    let divProd = d.createElement('div');
					divProd.style.width = '100%';
					divProd.backgroundColor = '#fff';
					divVer.appendChild(divProd);
                    
                    let titulo = d.createElement('h3');
                    titulo.classList = 'h6 text-center';
                    titulo.innerHTML = `${item.nombre}`;
                    divProd.appendChild(titulo);
                    
                    let img = d.createElement('img');
                    img.src = `${item.imagen}`;
                    img.classList = 'img-fluid';
                    divProd.appendChild(img);
                    
                    let cant = d.createElement('p');
                    cant.innerHTML = `Cantidad: ${carrito.cantidad[i]}`;
                    cant.classList = 'text-center';
                    divProd.appendChild(cant);
                    
                    let subtotal = d.createElement('p');
                    subtotal.innerHTML = `Subtotal ${carrito.cantidad[i] * item.precio}`;
                    subtotal.classList = 'text-center';
                    divProd.appendChild(subtotal);
                    
                    let sumarProd = d.createElement('button');
                    sumarProd.className = 'agregar';
                    sumarProd.classList = 'botonagregar';
                    sumarProd.dataset.id = `${item.id}`;
                    sumarProd.dataset.valor = `${item.precio}`;
                    sumarProd.style.marginBottom = '.8em';
                    sumarProd.innerHTML = 'Agregar';
                    sumarProd.onclick = function () {
                        let identificador = parseInt(this.dataset.id);
                        let valor = parseInt(this.dataset.valor);
                        
                        let indice = carrito.productos.indexOf(identificador);
                        if(indice == -1) {
                            carrito.productos.push(identificador);
                            carrito.cantidad.push(1);
                        } else {
                            carrito.cantidad[indice]++;
                        }
                        carrito.total = parseInt(carrito.total) + valor;
                        cont++;
                        cant.innerHTML = `Cantidad: ${carrito.cantidad[i]}`;
						subtotal.innerHTML = `Subtotal: ${carrito.cantidad[i] * item.precio}`;
						tot.innerHTML = `Total: $${carrito.total}`;
                    }
                    divProd.appendChild(sumarProd);
                    
                    let quitarProd = d.createElement('button');
                    quitarProd.className = 'quitar';
                    quitarProd.classList = 'botonquitar'
					quitarProd.dataset.id = `${item.id}`;
					quitarProd.dataset.valor = `${item.precio}`;
                    quitarProd.style.marginBottom = '.8em';
                    quitarProd.innerHTML = 'Quitar';
                    quitarProd.onclick = function() {
                        let identificador = parseInt(this.dataset.id);
                        let valor = parseInt(this.dataset.valor);
                        
                        let indice = carrito.productos.indexOf(identificador);
                        if (indice != -1) {
                            if (carrito.cantidad[indice] > 0) {
                                carrito.cantidad[indice] --;
                                carrito.total = parseInt(carrito.total) - valor;
                            }
                        }
                        cont--;
                        contador1.innerHTML = `Cantidad: ${cont}`;
						contador2.innerHTML  = `Total: $${carrito.total}`;
                        cant.innerHTML = `Cantidad: ${carrito.cantidad[i]}`;
                        subtotal.innerHTML = `Subtotal: ${carrito.cantidad[i] * item.precio}`;
                        tot.innerHTML = `Total: $${carrito.total}`;
                    }
                    divProd.appendChild(quitarProd);
                }
            }
        }
        
let aFormas = ['Efectivo', 'Débito', 'Crédito',];


		let tot = d.createElement('p');
		tot.innerHTML = `Total: $${carrito.total}`;
		tot.style.fontSize = '2em';
        tot.style.textAlign = 'center';
		tot.style.fontWeight = 'bold';
		divVer.appendChild(tot);


		let finalizarCompraBtn = d.createElement('button');
		finalizarCompraBtn.className = 'finalizar';
		finalizarCompraBtn.style.backgroundColor = 'green';
		finalizarCompraBtn.style.width = '100%';
        finalizarCompraBtn.style.color = 'white';
        finalizarCompraBtn.style.border = '.5px solid #528d3a';
        finalizarCompraBtn.style.borderRadius = '1em';
        finalizarCompraBtn.style.marginBottom = '.8em';
 		finalizarCompraBtn.innerHTML = 'Finalizar Compra';
		finalizarCompraBtn.onclick = function () {

			infoCarro.removeChild(divVer);

			
			let formulario = d.getElementById('formulariocompra');
			let form = d.createElement('form');
			form.className = 'formC';
			form.style.backgroundColor = '#fff';
			formulario.appendChild(form);

			let tituloForm = d.createElement('h3');
			tituloForm.innerHTML = 'Formulario de compra';
            tituloForm.style.color = '#99C063';
			form.appendChild(tituloForm);

			let divForm = d.createElement('fieldset');
			divForm.style.width = '100%';
			form.appendChild(divForm);

			let parrafoDatos = d.createElement('legend');
			parrafoDatos.innerHTML = 'Completar datos personales';
			divForm.appendChild(parrafoDatos);

			let parrafoNombre = d.createElement('label');
			parrafoNombre.innerHTML = 'Nombre y Apellido*';
            parrafoNombre.style.marginTop = '.5em';
            parrafoNombre.style.marginBottom = '.5em';
			parrafoNombre.style.display = 'block';
			divForm.appendChild(parrafoNombre);

			let nombreApellido = d.createElement('input');
			nombreApellido.type = 'text';
			nombreApellido.placeholder = 'Juan Pérez';
			nombreApellido.name = 'Nombre y Apellido';
            nombreApellido.style.marginTop = '.5em';
            nombreApellido.style.marginBottom = '.5em';
			nombreApellido.required = true;
			nombreApellido.style.width = '80%';
            nombreApellido.style.borderRadius = '.5em';
            nombreApellido.style.border = '.5px solid #99C063';
			nombreApellido.style.display = 'block';
			//nombreApellido.value = 'Nombre y Apellido';
			divForm.appendChild(nombreApellido);

			let parrafoNumero = d.createElement('label');
			parrafoNumero.innerHTML = 'Número Telefónico';
            parrafoNumero.style.marginTop = '.5em';
            parrafoNumero.style.marginBottom = '.5em';
			parrafoNumero.style.display = 'block';
			divForm.appendChild(parrafoNumero);

			let numero = d.createElement('input');
			numero.type = 'text';
			numero.name = 'número';
			numero.placeholder = '1112345678';
			numero.style.width = '80%';
            numero.style.marginTop = '.5em';
            numero.style.marginBottom = '.5em';
            numero.style.borderRadius = '.5em';
            numero.style.border = '.5px solid #99C063';
			numero.style.display = 'block';
			//numero.value = 'Número Telefónico';
			divForm.appendChild(numero);

			let parrafoEmail = d.createElement('label');
			parrafoEmail.innerHTML = 'Email';
            parrafoEmail.style.marginTop = '.5em';
            parrafoEmail.style.marginBottom = '.5em';
			parrafoEmail.style.display = 'block';
			divForm.appendChild(parrafoEmail);

			let email = d.createElement('input');
			email.type = 'email';
			email.name = 'email';
			email.placeholder = 'juanperez@gmail.com';
			email.style.width = '80%';
            email.style.marginTop = '.5em';
            email.style.marginBottom = '.5em';
            email.style.borderRadius = '.5em';
            email.style.border = '.5px solid #99C063';
			email.style.display = 'block';
			numero.value = '';
			divForm.appendChild(email);

			let parrafoCiudad = d.createElement('label');
			parrafoCiudad.innerHTML = 'Ciudad*';
            parrafoCiudad.style.marginTop = '.5em';
            parrafoCiudad.style.marginBottom = '.5em';
			parrafoCiudad.style.display = 'block';
			divForm.appendChild(parrafoCiudad);

			let ciudad = d.createElement('input');
			ciudad.type = 'text';
			ciudad.name = 'Ciudad';
			ciudad.required = true;
			ciudad.placeholder = 'CABA';
			ciudad.style.width = '80%';
            ciudad.style.marginTop = '.5em';
            ciudad.style.marginBottom = '.5em';
            ciudad.style.borderRadius = '.5em';
            ciudad.style.border = '.5px solid #99C063';
			ciudad.style.display = 'block';
			ciudad.style.display = 'block';
			divForm.appendChild(ciudad);


			let parrafoEntrega = d.createElement('label');
			parrafoEntrega.innerHTML = 'Dirección de Entrega*';
            parrafoEntrega.style.marginTop = '.5em';
            parrafoEntrega.style.marginBottom = '.5em';
			parrafoEntrega.style.display = 'block';
			divForm.appendChild(parrafoEntrega);

			let direccion = d.createElement('input');
			direccion.type = 'text';
			direccion.name = 'dirección';
			direccion.required = true;
			direccion.placeholder = 'Segurola 4310';
			direccion.style.width = '80%';
            direccion.style.marginTop = '.8em';
            direccion.style.marginBottom = '.8em';
            direccion.style.borderRadius = '.5em';
            direccion.style.border = '.5px solid #99C063';
			direccion.style.display = 'block';
			divForm.appendChild(direccion);

			let codigoP = d.createElement('label');
			codigoP.innerHTML = 'Código Postal*';
            codigoP.style.marginTop = '.8em';
            codigoP.style.marginBottom = '.8em';
			codigoP.style.display = 'block';
			divForm.appendChild(codigoP);

			let codigoPostal = d.createElement('input');
			codigoPostal.type = 'text';
			codigoPostal.name = 'código postal';
			codigoPostal.required = true;
			codigoPostal.placeholder = 'Código Postal';
			codigoPostal.style.width = '80%';
            codigoPostal.style.marginTop = '.8em';
            codigoPostal.style.marginBottom = '.8em';
            codigoPostal.style.borderRadius = '.5em';
            codigoPostal.style.border = '.5px solid #99C063';
			codigoPostal.style.display = 'block';
			divForm.appendChild(codigoPostal);

			let parrafoFecha = d.createElement('label');
			parrafoFecha.innerHTML = 'Fecha de Entrega';
            parrafoFecha.style.marginTop = '.5em';
            parrafoFecha.style.marginBottom = '.5em';
			parrafoFecha.style.display = 'block';
			divForm.appendChild(parrafoFecha);

			let elegirFecha = d.createElement('input');
			elegirFecha.type = 'date';
			elegirFecha.name = 'fecha';
			elegirFecha.style.width = '80%';
            elegirFecha.style.marginTop = '.5em';
            elegirFecha.style.marginBottom = '.5em';
            elegirFecha.style.borderRadius = '.5em';
            elegirFecha.style.border = '.5px solid #99C063';
			elegirFecha.style.display = 'block';
			divForm.appendChild(elegirFecha);

			let parrafoPago = d.createElement('label');
			parrafoPago.innerHTML = 'Forma de Págo';
            parrafoPago.style.marginTop = '1em';
            parrafoPago.style.marginBottom = '.5em';
            parrafoPago.style.fontWeight = 'bold';
			parrafoPago.style.display = 'block';
			divForm.appendChild(parrafoPago);

			let checkeo = 0;
			let borrarCredito = 0;
			let borrarDebito = 0;
			for (let pago of aFormas) {
				let opcion = null;
				let forma = d.createElement('label');
				let formaPago = d.createElement('input');
				formaPago.type = 'radio';
				//formaPago.style.display = 'inline-block';
				forma.style.display = 'block';
				forma.style.fontSize = '1em';
				formaPago.name = pago;
				formaPago.value = pago;
				formaPago.id = pago;
				forma.innerHTML = pago;
				formaPago.onclick = function() {
					if(formaPago.checked) {
						opcion = formaPago.value;
					}

					let eft = d.getElementById('Efectivo');
					let deb = d.getElementById('Débito');
					let cred = d.getElementById('Crédito');
					let cuot = d.getElementById('cuotas');
					let pTarjeta = d.getElementById('pTarjeta');
					let numT = d.getElementById('numT');
					let pTitular = d.getElementById('pTitular');
					let nomT = d.getElementById('nomT');
					let pVencimiento = d.getElementById('pVencimiento');
					let numV = d.getElementById('numV');
					let pCodigo = d.getElementById('pCodigo');
					let numC = d.getElementById('numC');
					let parTarjeta = d.getElementById('parTarjeta');
					let numeT = d.getElementById('numeT');
					let parTitular = d.getElementById('parTitular');
					let nombT = d.getElementById('nombT');
					let parVencimiento = d.getElementById('parVencimiento');
					let numeV = d.getElementById('numeV');
					let parCodigo = d.getElementById('parCodigo');
					let numeC = d.getElementById('numeC');
						 


					if(opcion == 'Crédito') {
						deb.checked = false;
						eft.checked = false;
						if(borrarDebito == 1) {
							parTarjeta.remove();
							numeT.remove();
							parTitular.remove();
							nombT.remove();
							parVencimiento.remove();
							numeV.remove();
							parCodigo.remove();
							numeC.remove();
							checkeo = 0;
							borrarDebito = 0;
						}

						if(checkeo == 0) {
							let parrafoCuotas = d.createElement('select');
							parrafoCuotas.id = 'cuotas';
                            parrafoCuotas.style.marginTop = '.5em';
                            parrafoCuotas.style.marginBottom = '.5em';
                            parrafoCuotas.style.borderRadius = '.5em';
                            parrafoCuotas.style.border = '.5px solid #99C063';
							parrafoCuotas.innerHTML = 'Cuotas Disponibles';
							
						
							let c1 = d.createElement('option');
							c1.innerHTML = '1 cuota sin interés';
							parrafoCuotas.appendChild(c1);

							let c2 = d.createElement('option');
							c2.innerHTML = '3 cuotas sin interés';
							parrafoCuotas.appendChild(c2);

							let c3 = d.createElement('option');
							c3.innerHTML = '6 cuotas sin interés';
							parrafoCuotas.appendChild(c3);

							let c4 = d.createElement('option');
							c4.innerHTML = '9 cuotas sin interés';
							parrafoCuotas.appendChild(c4);

							let c5 = d.createElement('option');
							c5.innerHTML = '12 cuotas sin interés';
							parrafoCuotas.appendChild(c5);

							divForm.appendChild(parrafoCuotas);

							let parrafoTarjeta = d.createElement('label');
							parrafoTarjeta.innerHTML = 'Número de Tarjeta';
							parrafoTarjeta.style.display = 'block';
							parrafoTarjeta.id = 'pTarjeta';
							divForm.appendChild(parrafoTarjeta);

							let numeroT = d.createElement('input');
							numeroT.type = 'text';
							numeroT.name = 'número tarjeta';
							numeroT.placeholder = '**** **** **** ****';
							numeroT.style.width = '80%';
							numeroT.required = true;
							numeroT.id = 'numT';
                            numeroT.style.marginTop = '.5em';
                            numeroT.style.marginBottom = '.5em';
                            numeroT.style.borderRadius = '.5em';
                            numeroT.style.border = '.5px solid #99C063';
							numeroT.style.display = 'block';
							//numeroT.value = 'Número Tarjeta';
							divForm.appendChild(numeroT);

							let parrafoTitular = d.createElement('label');
							parrafoTitular.innerHTML = 'Titular de la Tarjeta';
							parrafoTitular.style.display = 'block';
							parrafoTitular.required = true;
							parrafoTitular.id = 'pTitular';
							divForm.appendChild(parrafoTitular);

							let nombreT = d.createElement('input');
							nombreT.type = 'text';
							nombreT.name = 'nombre titular';
							nombreT.placeholder = 'PEREZ JUAN';
							nombreT.style.width = '80%';
							nombreT.required = true;
							nombreT.id = 'nomT';
                            nombreT.style.marginTop = '.5em';
                            nombreT.style.marginBottom = '.5em';
                            nombreT.style.borderRadius = '.5em';
                            nombreT.style.border = '.5px solid #99C063';
							nombreT.style.display = 'block';
							//numeroT.value = 'Número Tarjeta';
							divForm.appendChild(nombreT);

							let parrafoVencimiento = d.createElement('label');
							parrafoVencimiento.innerHTML = 'Fecha de Vencimiento';
							parrafoVencimiento.style.display = 'block';
							parrafoVencimiento.required = true;
							parrafoVencimiento.id = 'pVencimiento';
							divForm.appendChild(parrafoVencimiento);

							let numeroV = d.createElement('input');
							numeroV.type = 'text';
							numeroV.name = 'fecha vencimiento';
							numeroV.placeholder = '04/24';
							numeroV.style.width = '40%';
							numeroV.required = true;
							numeroV.id = 'numV';
                            numeroV.style.marginTop = '.5em';
                            numeroV.style.marginBottom = '.5em';
                            numeroV.style.borderRadius = '.5em';
                            numeroV.style.border = '.5px solid #99C063';
							numeroV.style.display = 'inline-block';
							//numeroT.value = 'Número Tarjeta';
							divForm.appendChild(numeroV);

							let parrafoCodigo = d.createElement('label');
							parrafoCodigo.innerHTML = 'CVV';
							parrafoCodigo.style.display = 'block';
							parrafoCodigo.required = true;
							parrafoCodigo.id = 'pCodigo';
							divForm.appendChild(parrafoCodigo);

							let numeroC = d.createElement('input');
							numeroC.type = 'text';
							numeroC.name = 'codigo tarjeta';
							numeroC.placeholder = '***';
							numeroC.required = true;
							numeroC.style.width = '40%';
							numeroC.id = 'numC';
                            numeroC.style.marginTop = '.5em';
                            numeroC.style.marginBottom = '.5em';
                            numeroC.style.borderRadius = '.5em';
                            numeroC.style.border = '.5px solid #99C063';
							numeroC.style.display = 'inline-block';
							//numeroT.value = 'Número Tarjeta';
							divForm.appendChild(numeroC);
							checkeo = 1;	
							borrarCredito = 1;							
							console.log(checkeo + 'credito');
						}
					} else if(opcion == 'Débito') {
						cred.checked = false;
						eft.checked = false;
						if(borrarCredito == 1) {
							cuot.remove();//error
							pTarjeta.remove();
							numT.remove();
							pTitular.remove();
							nomT.remove();
							pVencimiento.remove();
							numV.remove();
							pCodigo.remove();
							numC.remove();
							checkeo = 0;
							console.log(checkeo + 'debito');
						}
						if(checkeo == 0) {
							let parrafoTarjeta = d.createElement('label');
							parrafoTarjeta.innerHTML = 'Número de Tarjeta';
							parrafoTarjeta.style.display = 'block';
							parrafoTarjeta.id = 'parTarjeta';
							divForm.appendChild(parrafoTarjeta);

							let numeroT = d.createElement('input');
							numeroT.type = 'text';
							numeroT.name = 'número tarjeta';
							numeroT.placeholder = '**** **** **** ****';
							numeroT.style.width = '80%';
							numeroT.required = true;
                            numeroT.style.marginTop = '.5em';
                            numeroT.style.marginBottom = '.5em';
                            numeroT.style.borderRadius = '.5em';
                            numeroT.style.border = '.5px solid #99C063';
							numeroT.style.display = 'block';
							numeroT.id = 'numeT';
							//numeroT.value = 'Número Tarjeta';
							divForm.appendChild(numeroT);

							let parrafoTitular = d.createElement('label');
							parrafoTitular.innerHTML = 'Titular de la Tarjeta';
							parrafoTitular.style.display = 'block';
							parrafoTitular.required = true;
							parrafoTitular.id = 'parTitular';
							divForm.appendChild(parrafoTitular);

							let nombreT = d.createElement('input');
							nombreT.type = 'text';
							nombreT.name = 'nombre titular';
							nombreT.placeholder = 'PEREZ JUAN';
							nombreT.required = true;
							nombreT.style.width = '80%';
                            nombreT.style.marginTop = '.5em';
                            nombreT.style.marginBottom = '.5em';
                            nombreT.style.borderRadius = '.5em';
                            nombreT.style.border = '.5px solid #99C063';
							nombreT.style.display = 'block';
							nombreT.id = 'nombT';
							//numeroT.value = 'Número Tarjeta';
							divForm.appendChild(nombreT);

							let parrafoVencimiento = d.createElement('label');
							parrafoVencimiento.innerHTML = 'Fecha de Vencimiento';
							parrafoVencimiento.style.display = 'block';
							parrafoVencimiento.required = true;
							parrafoVencimiento.id = 'parVencimiento';
							divForm.appendChild(parrafoVencimiento);

							let numeroV = d.createElement('input');
							numeroV.type = 'text';
							numeroV.name = 'fecha vencimiento';
							numeroV.placeholder = '04/24';
							numeroV.style.width = '40%';
							numeroV.required = true;
                            numeroV.style.marginTop = '.5em';
                            numeroV.style.marginBottom = '.5em';
                            numeroV.style.borderRadius = '.5em';
                            numeroV.style.border = '.5px solid #99C063';
							numeroV.style.display = 'inline-block';
							numeroV.id = 'numeV';
							//numeroT.value = 'Número Tarjeta';
							divForm.appendChild(numeroV);

							let parrafoCodigo = d.createElement('label');
							parrafoCodigo.innerHTML = 'CVV';
							parrafoCodigo.style.display = 'block';
							parrafoCodigo.required = true;
							parrafoCodigo.id = 'parCodigo';
							divForm.appendChild(parrafoCodigo);

							let numeroC = d.createElement('input');
							numeroC.type = 'text';
							numeroC.name = 'codigo tarjeta';
							numeroC.placeholder = '***';
							numeroC.style.width = '40%';
							numeroC.required = true;
                            numeroC.style.marginTop = '.5em';
                            numeroC.style.marginBottom = '.5em';
                            numeroC.style.borderRadius = '.5em';
                            numeroC.style.border = '.5px solid #99C063';
							numeroC.style.display = 'inline-block';
							numeroC.id = 'numeC';
							//numeroT.value = 'Número Tarjeta';
							divForm.appendChild(numeroC);
							checkeo = 1;
							borrarDebito = 1;
							console.log(checkeo + 'debito2');
						}
						
					} else if (opcion == 'Efectivo') {
						deb.checked = false;
						cred.checked = false;
						if(borrarDebito == 1) {
						
							//debito
							parTarjeta.remove();
							numeT.remove();
							parTitular.remove();
							nombT.remove();
							parVencimiento.remove();
							numeV.remove();
							parCodigo.remove();
							numeC.remove();
							checkeo = 0;
							borrarDebito = 0;
							console.log(checkeo + 'efectivo');
						}

						if(borrarCredito == 1) {
							cuot.remove();
							pTarjeta.remove();
							numT.remove();
							pTitular.remove();
							nomT.remove();
							pVencimiento.remove();
							numV.remove();
							pCodigo.remove();
							numC.remove();
							checkeo = 0;
							borrarCredito = 0;
						}
						console.log(checkeo + 'efectivo');
					}

				}
				forma.appendChild(formaPago);
				divForm.appendChild(forma);
			}

			let confirmarBtn = d.createElement('input');
			confirmarBtn.type = 'submit';
			confirmarBtn.style.display = 'block';
            confirmarBtn.classList = 'botonagregar mt-2';
			confirmarBtn.value = 'Confirmar Compra';
            confirmarBtn.style.marginBottom = '.8em';
			confirmarBtn.style.width = '100%';
			confirmarBtn.onsubmit = function() {
				let mandar = true;
				console.log(mandar);
				if (d.querySelector('[type=text]') == null) {
					let pError = d.createElement('p');
					pError.innerHTML = 'Por favor, complete los campos';
					pError.style.color = 'tomato';
					divProductos.appendChild('pError');
					console.log('El error funciona');
					mandar = false;
				} else {
					let pGracias = d.createElement('p');
					pGracias.innerHTML = 'Gracias por su compra';
					pGracias.style.color = 'green';
					divProductos.appendChild(pGracias);
					console.log('El gracias funciona');
					mandar = true;
				}
				return mandar;
			}
			form.appendChild(confirmarBtn);

			let cancelarCompraBtn = d.createElement('button');
			cancelarCompraBtn.className = 'cancelar';
			cancelarCompraBtn.style.width = '100%';
            cancelarCompraBtn.classList = 'botonquitar mb-5';
            //cancelarCompraBtn.style.marginBottom = '.8em';
			cancelarCompraBtn.innerHTML = 'Cancelar Compra';
			cancelarCompraBtn.onclick = function () {
				location.reload();
			}
			form.appendChild(cancelarCompraBtn);
		}
		divVer.appendChild(finalizarCompraBtn);
	
		let vaciarCarritoBtn = d.createElement('button');
		vaciarCarritoBtn.className = 'vaciar';
		vaciarCarritoBtn.style.backgroundColor = 'grey';
		vaciarCarritoBtn.style.border = '1px solid green';
        vaciarCarritoBtn.style.borderRadius = '1em';
        vaciarCarritoBtn.classList = 'mb-5';
		vaciarCarritoBtn.style.color = 'white';
		vaciarCarritoBtn.style.width = '100%';
        vaciarCarritoBtn.style.marginBottom = '.8em';
		vaciarCarritoBtn.innerHTML = 'Vaciar Carrito';
		vaciarCarritoBtn.onclick = function () {
			location.reload();
		}
		divVer.appendChild(vaciarCarritoBtn);
        
    }
}






















