function calcularIngredientesCocaina() {
    var folhasCoca = parseInt(document.getElementById("folhasCoca").value);
    var hidroxidoSodio = folhasCoca * (2/3);
    var cocaProcessada = folhasCoca;

    document.getElementById("resultado").innerHTML = "<h2>Ingredientes necessários:</h2>" +
                                                      "<p>Hidróxido de Sódio: " + hidroxidoSodio.toFixed(2) + " unidades</p>" +
                                                      "<p>Coca Processada: " + cocaProcessada.toFixed(2) + " unidades</p>";
}
