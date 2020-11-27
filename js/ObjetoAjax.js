//crear objeto XMLHttpRequest
function creaObjetoAjax () { 
     var obj; //variable que recogerá el objeto
     if (window.XMLHttpRequest) { //código para mayoría de navegadores
        obj=new XMLHttpRequest();
        }
     else { //para IE 5 y IE 6
        obj=new ActiveXObject(Microsoft.XMLHTTP);
        }
     return obj; //devolvemos objeto
     }
//función constructora del objeto:           
function ObjetoAjax () {
     var nuevoajax=creaObjetoAjax()
     this.objeto=nuevoajax;
     this.pedirTexto=pedirTextoAjax;
     this.cargaXML=cargarXML
     }          
//función para el método objeto.pedirTexto(url,id)      
function pedirTextoAjax(url,id) {
     var nuevoajax=this.objeto;
     var idajax=id;
     nuevoajax.open("GET",url,true);
     nuevoajax.onreadystatechange=function () {  
        if (nuevoajax.readyState==4 && nuevoajax.status==200) {
           var textoAjax=nuevoajax.responseText;
           document.getElementById(idajax).innerHTML=textoAjax;
        }
    }
    nuevoajax.send(); 
}
/*función del método cargaXML: devuelve el DOM del XML  
como parámetro de la función que le pasamos*/
function cargarXML(url,funcion) {
     var nuevoajax=this.objeto; //crear objeto XMLHttpRequest
     var funcionXML=funcion //recoger función
     nuevoajax.open("GET",url,true); //preparar el envio
     nuevoajax.onreadystatechange=function() { //al cargarse el archivo...
        if (nuevoajax.readyState==4) {
           /* propiedad=nuevoajax.responseXML; //recoger el DOM */
           var jsonarray = JSON.parse(nuevoajax.responseText);
           funcionXML(jsonarray); //devolverlo como parámetro.
        }
    }   
    nuevoajax.send();
}