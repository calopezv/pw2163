

var inicioUsuarios = function()
{
	
	var validaUsuario = function()
	{

		//Extraer los datos de los input en el HTML
		var usuario = $("#txtUsuario").val();
		var clave   = $("#txtClave").val();
		//Preparar los parámetros para AJAX
		var parametros = "opcion=valida"+
		                 "&usuario="+usuario+
		                 "&clave="+clave+
		                 "&id="+Math.random();
		
		//Validamos que no esten vacíos
		if(usuario!="" && clave!="")
		{
			//Hacemos la petición remota
			$.ajax({
				cache:false,
				type:"POST",
				dataType:"json",
				url: "php/utilerias.php",
				data:parametros,
				success: function(response){
					if(response.respuesta == true)
					{    
						$("#entradaUsuario").hide("slow");
						$("nav").show("slow"); 
					}
					else
					{
						alert("Datos incorrectos :(");
					}
				},
				error: function(xhr,ajaxOptions,thrownError){
					//Si todo sale mal
				}
			});
		}
		else
		{
			alert("Usuario y clave son obligatorios");
		}
	}
	$("#btnValidaUsuario").on("click",validaUsuario);
}

	var Alta= function(){
		$("#artAltaUsuarios").show("slow");
	}

	var teclaUsuario=function(tecla){
		if (tecla.wich==13){//enter
			var usuario = $("txtUsuarioNombre").val();
			var parametros = "opción=buscaUsuario" +
			"&usuario="+usuario+
			"&id="+Math.random();

			$.ajax({
				cache:false,
				type:"POST",
				url:"php/utilerias.php",
				data:parametros,
				success:function(response){
					if (response.respuesta ==true)
					{
						$("txtNombre").val(response.nombre);
						$("txtClaveNombre").val(response.clave);
						$("txttipo option:selected").text(response.tipo);
					}
				},
				error:function(xhr,ajaxOptions,thrownerror){
					conse.log("Fallo en el servidor");
				}

			});
	}
   }

//Keypress: se ejecuta cada vez que presiono una tecla sobre el input

$("#txtClave").on("keypress",teclaClave);
$("#btnAlta").on("click",Alta);

$("#btnGuardaUsuario").on("click",GuardaUsuario);

//Evento inicial
$(document).on("ready",inicioUsuarios);



		//validamos
		/*if (usuario!="" && clave!="")
		{

		}
		else
		{
			alert ("Usuario y clave son obligatorios");
		}
	}
		$("btnValidaUsuario").on("click",validaUsuario);
var teclaClave = function(tecla)
{
	if(tecla.which == )//tecla enter.
	{
		validaUsuario(); //Función que valida al usuario.
	}

}
	//keypress:_ se ejecuta cada vez que presiono una
	//tecla sobre el input.
	$("txtClave").on("keypress" ,teclaClave);


}
*/
//Evento inicial

