// Cuando carga la página
 -window.addEventListener("load", function () {
 -	// Envío de To - Do
 -	var toDoForm = document.getElementById("to-do-form");
 -	toDoForm.addEventListener("submit", function (e) {
 +// IIFE - Immediately Invoked Function Expression
 +(function () {
 +	var contador = 0;
 +
 +	var cargarPagina = function () {
 +		// Envío de To - Do
 +		var toDoForm = document.getElementById("to-do-form");
 +		var message = document.getElementById("message");
 +
 +		toDoForm.addEventListener("submit", agregarToDo);
 +		message.addEventListener("keyup", validarContenido);
 +	};
 +
 +	var agregarToDo = function (e) {
  		e.preventDefault();
  		// Obtenemos datos
  		var contenedor = document.getElementById("posts");
  		var mensajeContenedor = document.getElementById("message");
 +		var botonAgregar = document.getElementById("add-button");
  		var mensaje = mensajeContenedor.value;
  
  		// Creamos elementos
  		var postContenedor = document.createElement("article");
 -		var post = document.createElement("p");
 +		var postCheck = document.createElement("input");
 +		var postTexto = document.createElement("label");
 +
 +		var identificador = "marcador-" + contador;
  
  		// Personalizamos elementos
  		postContenedor.className = "jumbotron";
 -		post.textContent = mensaje;
 +		postCheck.id = identificador;
 +		postCheck.type = "checkbox";
 +		postTexto.setAttribute("for", identificador);
 +		postTexto.textContent = mensaje;
 +
 +		postCheck.addEventListener("click", eliminarToDo);
  
  		// Agregarlos al DOM
 -		postContenedor.appendChild(post);
 +		postContenedor.appendChild(postCheck);
 +		postContenedor.appendChild(postTexto);
  
  		// Agregarlo a un elemento existente para visualizarlo
 -		contenedor.appendChild(postContenedor);
 +		// contenedor.appendChild(postContenedor);
 +		contenedor.insertBefore(postContenedor, contenedor.childNodes[0])
  
  		// Borrar contenido de textarea
  		mensajeContenedor.value = "";
 -	});
 -});
 -
 -
 -
 +		botonAgregar.disabled = true;
  
 +		// bind, apply, call
  
 +		contador++;
 +	};
  
 +	var eliminarToDo = function () {
 +		// var texto = this.nextElementSibling;
 +		// texto.classList.toggle("tachado");
 +		var contenedor = this.parentElement;
 +		// contenedor.classList.add("hidden");
 +		contenedor.remove();
 +	};
  
 +	var validarContenido = function () {
 +		var addButton = document.getElementById("add-button");
 +		// .trim() solo borra los espacios de sobra a los costados (izquierda y derecha)
 +		if(this.value.trim().length > 0) {
 +			addButton.removeAttribute("disabled");
 +		} else {
 +			addButton.disabled = true;
 +		}
 +	};
  
 +	// Cuando carga la página
 +	window.addEventListener("load", cargarPagina);
 +})(); 