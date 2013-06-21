function verificar() {

var dato = document.getElementById("texto").value;
var busqueda = dato.toLowerCase();

switch (busqueda){
	case  "toyota":
		
		document.getElementById('divXCambiar').innerHTML = "<h2 class=\"post-title\"><a href=\"#\">Buscador</a></h2><br><table width=\"200px\"  border=\"0\" class=\"info\"><tr><th><div align=\"left\">Marca:</div></th><td>TOYOTA</td></tr><tr><th><div align=\"left\">Modelo:</div></th><td>Yaris Hasback</td></tr><tr><th><div align=\"left\">Precio de venta</div></th><td>&#36;11,800.00</td></tr><tr><th><div align=\"left\">A&ntilde;o:</div></th><td>2011</td></tr></table><a href=\"Vende_toyota1.html\">mas informacion Aqui</a><hr><table width=\"200px\"  border=\"0\" class=\"info\"><tr><th><div align=\"left\">Marca:</div></th><td>TOYOTA</td></tr><tr><th><div align=\"left\">Modelo:</div></th><td>Corolla</td></tr><tr><th><div align=\"left\">Precio de venta</div></th><td>&#36;<strike>12,000.00</strike></td></tr><tr><th><div align=\"left\">A&ntilde;o:</div></th><td>2009</td></tr><tr><th><div align=\"left\">Promocion:</div></th><td>&#36;10,000.00 </td></tr></table><a href=\"Vende_toyota2.html\"> Mas informacion Aqui</a>";
	break;

	case  "nissan":
		
		document.getElementById('divXCambiar').innerHTML = "<h2 class=\"post-title\"><a href=\"#\">Buscador</a></h2><br><table width=\"200px\"  border=\"0\" class=\"info\"><tr><th><div align=\"left\">Marca:</div></th><td>NISSAN</td></tr><tr><th><div align=\"left\">Modelo:</div></th><td>Murano</td></tr><tr><th><div align=\"left\">Precio de venta</div></th><td>&#36;7,250.00</td></tr><tr><th><div align=\"left\">A&ntilde;o:</div></th><td>2003</td></tr></table><a href=\"Vende_nissan.html\"> Mas informacion Aqui</a>";
	
	break;

	case  "ford":

		document.getElementById('divXCambiar').innerHTML = "<h2 class=\"post-title\"><a href=\"#\">Buscador</a></h2><br><table width=\"200px\" border=\"0\" class=\"info\"><tr><th><div align=\"left\">Marca:</div></th><td>FORD</td></tr><tr><th><div align=\"left\">Modelo:</div></th><td>Explorer</td></tr><tr><th><div align=\"left\">Precio de venta</div></th><td>&#36;7,900.00</td></tr><tr><th><div align=\"left\">A&ntilde;o:</div></th><td>2003</td></tr><tr><th><div align=\"left\">Color:</div></th><td>Gris</td></tr></table><a href=\"Vende_ford.html\"> Mas informacion Aqui</a>";

	break;

	case  "bmw":

		document.getElementById('divXCambiar').innerHTML = "<h2 class=\"post-title\"><a href=\"#\">Buscador</a></h2><br><table width=\"200px\" border=\"0\" class=\"info\"><tr><th><div align=\"left\">Marca:</div></th><td>BMW</td></tr><tr><th><div align=\"left\">Modelo:</div></th><td>Z3</td></tr><tr><th><div align=\"left\">Precio de venta</div></th><td>&#36;8,400.00</td></tr><tr><th><div align=\"left\">A&ntilde;o:</div></th><td>2003</td></tr></table><a href=\"Vende_BMW.html\">mas informacion Aqui</a>";

	break;

	case  "mitsubishi":

		document.getElementById('divXCambiar').innerHTML = "<h2 class=\"post-title\"><a href=\"#\">Buscador</a></h2><br><table width=\"200px\" border=\"0\" class=\"info\"><tr><th><div align=\"left\">Marca:</div></th><td>Mitsubishi</td></tr><tr><th><div align=\"left\">Modelo:</div></th><td>Lancer</td></tr><tr><th><div align=\"left\">Precio de venta</div></th><td>&#36;9,300.00</td></tr><tr><th><div align=\"left\">A&ntilde;o:</div></th><td>2008</td></tr></table><a href=\"Vende_Mitsubishi.html\">mas informacion Aqui</a>";

	break;

	case  "dodge":
		document.getElementById('divXCambiar').innerHTML = "<h2 class=\"post-title\"><a href=\"#\">Buscador</a></h2><br><table width=\"200px\" border=\"0\" class=\"info\"><tr><th><div align=\"left\">Marca:</div></th><td>Dodge</td></tr><tr><th><div align=\"left\">Modelo:</div></th><td>Caravan</td></tr><tr><th><div align=\"left\">Precio de venta</div></th><td>&#36;4,500.00</td></tr><tr><th><div align=\"left\">A&ntilde;o:</div></th><td>2001</td></tr></table><a href=\"Vende_dodge.html\">mas informacion Aqui</a>";
	break;

	case  "mercedez benz":

		document.getElementById('divXCambiar').innerHTML = "<h2 class=\"post-title\"><a href=\"#\">Buscador</a></h2><br><table width=\"200px\" border=\"0\" class=\"info\"><tr><th><div align=\"left\">Marca:</div></th><td>Mercedez Benz</td></tr><tr><th><div align=\"left\">Modelo:</div></th><td>C230 Kompressoe</td></tr><tr><th><div align=\"left\">Precio de venta</div></th><td>&#36;13,500.00</td></tr><tr><th><div align=\"left\">A&ntilde;o:</div></th><td>2005</td></tr></table><a href=\"Vende_Mb.html\"> mas informacion Aqui</a>";
	break;

	case  "2001":
		document.getElementById('divXCambiar').innerHTML = "<h2 class=\"post-title\"><a href=\"#\">Buscador</a></h2><br><table width=\"200px\" border=\"0\" class=\"info\"><tr><th><div align=\"left\">Marca:</div></th><td>Dodge</td></tr><tr><th><div align=\"left\">Modelo:</div></th><td>Caravan</td></tr><tr><th><div align=\"left\">Precio de venta</div></th><td>&#36;4,500.00</td></tr><tr><th><div align=\"left\">A&ntilde;o:</div></th><td>2001</td></tr></table><a href=\"Vende_dodge.html\">mas informacion Aqui</a>";

	break;

	case  "2003":
		document.getElementById('divXCambiar').innerHTML = "<h2 class=\"post-title\"><a href=\"#\">Buscador</a></h2><br><table width=\"200px\"  border=\"0\" class=\"info\"><tr><th><div align=\"left\">Marca:</div></th><td>NISSAN</td></tr><tr><th><div align=\"left\">Modelo:</div></th><td>Murano</td></tr><tr><th><div align=\"left\">Precio de venta</div></th><td>&#36;7,250.00</td></tr><tr><th><div align=\"left\">A&ntilde;o:</div></th><td>2003</td></tr></table><a href=\"Vende_nissan.html\">mas informacion Aqui</a><hr><table width=\"200px\" border=\"0\" class=\"info\"><tr><th><div align=\"left\">Marca:</div></th><td>FORD</td></tr><tr><th><div align=\"left\">Modelo:</div></th><td>Explorer</td></tr><tr><th><div align=\"left\">Precio de venta</div></th><td>&#36;7,900.00</td></tr><tr><th><div align=\"left\">A&ntilde;o:</div></th><td>2003</td></tr></table><a href=\"se-vende-carro-ford.html\">mas informacion Aqui</a><hr><table width=\"200px\" border=\"0\" class=\"info\"><tr><th><div align=\"left\">Marca:</div></th><td>BMW</td></tr><tr><th><div align=\"left\">Modelo:</div></th><td>Z3</td></tr><tr><th><div align=\"left\">Precio de venta</div></th><td>&#36;8,400.00</td></tr><tr><th><div align=\"left\">A&ntilde;o:</div></th><td>2003</td></tr></table><a href=\"se-vende-carro-BMW.html\">mas informacion Aqui</a>";

	break;

	case  "2005":
		document.getElementById('divXCambiar').innerHTML ="<h2 class=\"post-title\"><a href=\"#\">Buscador</a></h2><br><table width=\"200px\" border=\"0\" class=\"info\"><tr><th><div align=\"left\">Marca:</div></th><td>Mercedez Benz</td></tr><tr><th><div align=\"left\">Modelo:</div></th><td>C230 Kompressoe</td></tr><tr><th><div align=\"left\">Precio de venta</div></th><td>&#36;13,500.00</td></tr><tr><th><div align=\"left\">A&ntilde;o:</div></th><td>2005</td></tr></table><a href=\"Vende_Mb.html\"> mas informacion Aqui</a>";

	break;

	case  "2008":
		document.getElementById('divXCambiar').innerHTML = "<h2 class=\"post-title\"><a href=\"#\">Buscador</a></h2><br><table width=\"200px\" border=\"0\" class=\"info\"><tr><th><div align=\"left\">Marca:</div></th><td>Mitsubishi</td></tr><tr><th><div align=\"left\">Modelo:</div></th><td>Lancer</td></tr><tr><th><div align=\"left\">Precio de venta</div></th><td>&#36;9,300.00</td></tr><tr><th><div align=\"left\">A&ntilde;o:</div></th><td>2008</td></tr></table><a href=\"Vende_Mitsubishi.html\">mas informacion Aqui</a>";

	break;

	case  "2009":
		document.getElementById('divXCambiar').innerHTML = "<h2 class=\"post-title\"><a href=\"#\">Buscador</a></h2><br><table width=\"200px\"  border=\"0\" class=\"info\"><tr><th><div align=\"left\">Marca:</div></th><td>TOYOTA</td></tr><tr><th><div align=\"left\">Modelo:</div></th><td>Corolla</td></tr><tr><th><div align=\"left\">Precio de venta</div></th><td>&#36;<strike>12,000.00</strike></td></tr><tr><th><div align=\"left\">A&ntilde;o:</div></th><td>2009</td></tr><tr><th><div align=\"left\">Promocion:</div></th><td>&#36;10,000.00 </td></tr></table><a href=\"Vende_toyota2.html\">mas informacion Aqui</a>";

	break;

	case  "2011":
		document.getElementById('divXCambiar').innerHTML = "<h2 class=\"post-title\"><a href=\"#\">Buscador</a></h2><br><table width=\"200px\"  border=\"0\" class=\"info\"><tr><th><div align=\"left\">Marca:</div></th><td>TOYOTA</td></tr><tr><th><div align=\"left\">Modelo:</div></th><td>Yaris Hasback</td></tr><tr><th><div align=\"left\">Precio de venta</div></th><td>&#36;11,800.00</td></tr><tr><th><div align=\"left\">A&ntilde;o:</div></th><td>2011</td></tr></table><a href=\"se-vende-carro-toyota1.html\">mas informacion Aqui</a>";

	break;

	default:
		document.getElementById('divXCambiar').innerHTML = "<h2 class=\"post-title\">Buscador</h2><ul> Lamentablemente no encontramos lo que estabas busca: " + busqueda;
	}

