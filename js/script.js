function agregarNumero(valor, caracter) {
  if (valor.value == null || valor.value == "0") {
    valor.value = caracter;
  } else {
    valor.value += caracter;}
}
function eliminarCaracter(valor) {
  valor.value = valor.value.substring(0, valor.value.length - 1);
}
function resultado(form) {
  form.caja.value = eval(form.caja.value);
}
function verificar(valor) {
  for (var i = 0; i < valor.length; i++){
    var ch = valor.substring(i, i + 1);
    if (ch < "0" || ch > "9"){
      if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "(" && ch != ")"){
        alert("Entrada Invalida!")
        return false;
      }
    }
  }
  return true;
}
