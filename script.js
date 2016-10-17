// Ejercicio 7 Cuadrado de la suma de dos números

function operacion (x,y){

	var cuadradoSuma = (x + y) * (x + y);

	return cuadradoSuma;
}

// Ejercicio 4 Mayúsculas y minúsculas

function infoString(cadena){
	
	var formadaPor = "La cadena está formada ";

	if(cadena == cadena.toUpperCase()){

		formadaPor += "sólo por MAYÚCULAS";
	
	}else if(cadena == cadena.toLowerCase()){

		formadaPor += "sólo por minúsculas";
	
	}else {

		formadaPor += "por MAYÚSCULAS y minúsculas";
	}

	return formadaPor;
}

// Ejercicio 2 Número par o impar

function esPar(n){

	var mostrar = "";

	if(n % 2 === 0){
		mostrar = n + " es Par";
	
	}else{
		mostrar = n + " es Impar";
	}

 document.getElementById('repaso').innerHTML = mostrar;

}

// Ejercicio 3 Ordenando números

function ordenarNums(n, x, y){

	var ordenados = [n,x,y];

	ordenados.sort(function(a, b){return a-b});

	console.log(ordenados[0]);
	console.log(ordenados[1]);
	console.log(ordenados[2]);
}

// Ejercicio 1 El menor de los números

function elMenor(a, b, c){
	if(a <= b && a <= c){
		
		return a;
	
	}else if(b <= a && b <= c){
		
		return b;
	}

	return c;
}

// Ejercicio 9 Múltiplos de un números

function multiplosDeNum(n){

	var multiplos = [];

	for(var i=1 ; i<=10 ; ++i){
		multiplos.push(n*i);
	}
 
	return multiplos;
}

// Ejercicio 2 Promedio de tres números

function promedioTresNums(a,b,c){

	var promedio = (a + b + c) / 3;

	return promedio;
}

// Ejercicio 3 Calcular área de un triángulo

function areaTriangulo(b,h){

	var area = (b * h) / 2;

	return area;
}

/* Ejercicio 7 Área de un círculo

function areaCirculo(r){

	var areaCir = math.PI (r * r);

	return areaCir;*/


// Ejercicio 2 Número mayor

function numMayor(a,b){
	
	if(a >= b){
		
		return a;
	
	}else {
		
		return b;
	}

}