//entrada: cadena en formato YYYY-MM-DDTHH:mm:ss, de SQL Server
//salida: cadena en formato dd/mm/yyyy, para la vista
var fechaSQLMx = function (cadenaEntrada) {
    var d = new Date(cadenaEntrada);
    var dia = obtenDia(d);
    var mes = obtenMes(d);
    return dia + '/' + mes + '/' + d.getFullYear();
}


//obtener el dia y agregar 0 a los dias menores a 10 ya que regresa un solo digito
function obtenDia(date) {
    var dia = date.getDate();
    return dia < 10 ? '0' + dia : '' + dia;
}

//obtener el mes y agregar 0 a los meses menores a 10 ya que regresa un solo digito
function obtenMes(date) {
    var mes = date.getMonth() + 1;
    return mes < 10 ? '0' + mes : '' + mes;
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