// IIFE - Immediately Invoked Function Expression
(function () {
	var contador = 0;

	var cargarPagina = function () {
		// Envío de To - Do
		$("#to-do-form").submit(agregarToDo);
		$("#message").keyup(validarContenido);
        $("#message").keyup(caracteresRestantes);
        $("#message").keyup(excedeCaracteres);
        
	};

	var agregarToDo = function (e) {
		e.preventDefault();
		// Obtenemos datos
		var $contenedor = $("#posts");
		var $mensajeContenedor = $("#message");
		var $botonAgregar = $("#add-button");
		var mensaje = $mensajeContenedor.val();
        var $autorTuit = $("#autor"); 
        var mensajeAutor = $autorTuit.val(); 

		/*
			// Obtenemos el contenido de un elemento 
			.value <> .val()
			.innerHTML <> .html()
			.innerText <> .text()
			.textContent <>

			// Establecer el contenido de un elemento
			.value = "" <> .val("")
			.innerHTML = "" <> .html("")
			.innerText = "" <> .text()
			.textContent = ""
		*/

		// Creamos elementos
		var $postContenedor = $("<article />", { "class": "jumbotron" }); 
		var $postCheck = $("<input type='checkbox' />");
		var $postTexto = $("<label />");
        var $nombreAutor = $("<h4 />");
        

		var identificador = "marcador-" + contador;

		// Personalizamos elementos
		// $postContenedor.addClass("jumbotron");
		$postCheck.id = identificador;
		// $postCheck.type = "checkbox";
		$postTexto.attr("for", identificador);
		$postTexto.text(mensaje);
        $nombreAutor.text(mensajeAutor);

		$postCheck.click(eliminarToDo);

		// Agregarlos al DOM
        $postContenedor.append($nombreAutor);
		$postContenedor.append($postCheck);
		$postContenedor.append($postTexto);
    

		// Agregarlo a un elemento existente para visualizarlo
		// contenedor.appendChild(postContenedor);
		$contenedor.prepend($postContenedor);

		// Borrar contenido de textarea
		$mensajeContenedor.val("");
        $autorTuit.val("");
		$botonAgregar.attr("disabled", true);

		// bind, apply, call

		contador++;
	};

	var eliminarToDo = function () {
		$(this).parent().remove();
	};

	var validarContenido = function () {
		var $addButton = $("#add-button");
		// .trim() solo borra los espacios de sobra a los costados (izquierda y derecha)
		if($(this).val().trim().length > 0) {
			$addButton.removeAttr("disabled");
		} else {
			$addButton.attr("disabled", true);
		}
	};

	
    
    var caracteresRestantes = function (){
    
        var contadorCaracteres = 0;
        var maximoCaracteres = 140; 
        var $message = document.getElementById("message");
        var $cantidadCaracteres = document.getElementById("cantidadCaracteres");

        contadorCaracteres = message.value.length;
        
        var totalCaracteres = maximoCaracteres - contadorCaracteres;
        
        $cantidadCaracteres.innerText = totalCaracteres;
        
        excedeCaracteres();
}
    
   var excedeCaracteres = function () {
       
        var $message = $("#message");
        var $boton = $("#add-button");


        var contadorCaracteres = $message.val().length;
        
       
       if (contadorCaracteres >= 140) {
           $boton.attr("disabled", true);
       } else {
           $boton.removeAttr("disabled");
       }
   }
   
   // Cuando carga la página
	$(document).ready(cargarPagina);
   
})();








