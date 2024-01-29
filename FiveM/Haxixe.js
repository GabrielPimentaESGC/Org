function calcularIngredientes() {
    var quantidadeHaxixe = parseInt(document.getElementById("quantidade").value);
    var hidrogenio = quantidadeHaxixe * (5/4);
    var enxofre = quantidadeHaxixe;
    var haxixePuro = quantidadeHaxixe;

    document.getElementById("resultado").innerHTML = "<h2>Ingredientes necessários:</h2>" +
                                                      "<p>Hidrogênio: " + hidrogenio.toFixed(2) + " unidades</p>" +
                                                      "<p>Enxofre: " + enxofre.toFixed(2) + " unidades</p>" +
                                                      "<p>Haxixe Processado: " + haxixePuro.toFixed(2) + " unidades</p>";
}
