﻿//entrada: cadena en formato YYYY-MM-DDTHH:mm:ss, de SQL Server
//salida: cadena en formato dd/mm/yyyy, para la vista
var fechaSQLMx = function (cadenaEntrada) {
    var arrayDate = cadenaEntrada.replace(/T.+/, '').split('-');
    return arrayDate[2] + '/' +  arrayDate[1] + '/' +arrayDate[0];
}

//entrada: cadena en formato dd/mm/yyyy, desde la vista
//salida: cadena en formato YYYY-MM-DDTHH:mm:ss, para SQL Server
fechaMxSQL = function (cadenaEntrada) {
    var arrayFecha = cadenaEntrada.split('/');
    var mes = arrayFecha[1];
    var dia = arrayFecha[0];
    var anio = arrayFecha[2];
    return anio + '-' + mes + '-' + dia + "T00:00:00";

   // var date = new Date().toISOString();
}