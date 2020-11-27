docObjeto= new ObjetoAjax();
docObjeto.cargaXML("../json/datos.json",recogeDatos); 

function recogeDatos(arr){
    response=document.getElementById("imagen");
    response.innerHTML="<img src='../images/cuadrados-prueba.png' alt='Mapa de imagenes' usemap='#enlaces'>";
    var inyeccion = "";
    var i;

    for(i = 0; i < arr.length; i++) {
        coord_x1 = arr[i].coord_x1;
        coord_x2 = arr[i].coord_x2;
        coord_y1 = arr[i].coord_x3;
        coord_y2 = arr[i].coord_x4;
        url = '../pdf/'+ arr[i].url;
        title = arr[i].tittle;
        inyeccion+="<area shape='rect'"+ "target='_blank' "+" title='" +title+"' coords='"+coord_x1 +"," + coord_y1 + "," + coord_x2 +","+ coord_y2 +"' " + "href='" +url+"'>";
    }
    response.innerHTML+="<map name='enlaces'>"+inyeccion+"</map>";
}


