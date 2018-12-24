/*
copyright info:
This file is part of XVIGAS web app.

XVIGAS web app is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

XVIGAS web app is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with XVIGAS web app.  If not, see <http://www.gnu.org/licenses/>.

Bitmessage addres: BM-2cT6X8N1us2jqkknP1AnjcHcCsZf5szUHY
Donations (Bitcoin): 195CBoywruk4pfMDSp1Nr1yCojqf8jxZaC
*/



// Constantes

//Perfiles

var tabla_IPN = [
[80,77.8,6.29],
[100,171.0,12.2],
[120,328.0,21.5],
[140,573.0,32.2],
[160,935.0,54.7],
[180,1450.0,81.3],
[200,2140.0,117.0],
[220,3060.0,162.0],
[240,4250.0,221.0],
[260,5740.0,288.0],
[280,7590.0,364.0],
[300,9800.0,451.0],
[320,12510.0,555.0],
[340,15700.0,674.0],
[360,19610.0,818.0],
[380,24010.0,975.0],
[400,29210.0,1160.0],
[450,45850.0,1730.0],
[500,68740.0,2480.0],
[550,99180.0,3490.0],
[600,139000.0,4670.0]
];

var tabla_IPE = [
[80,80.1,8.49],
[100,171.0,15.9],
[120,318.0,27.7],
[140,541.0,44.9],
[160,869.0,68.3],
[180,1320.0,101.0],
[200,1940.0,142.0],
[220,2770.0,205.0],
[240,3890.0,284.0],
[270,5790.0,420.0],
[300,8360.0,604.0],
[330,11770.0,788.0],
[360,16270.0,1040.0],
[400,23130.0,1320.0],
[450,33740.0,1680.0],
[500,48200.0,2140.0],
[550,67120.0,2670.0],
[600,92080.0,3390.0]
];

var tabla_HEB = [
[100,450.0,167.0],
[120,864.0,318.0],
[140,1510.0,550.0],
[160,2490.0,889.0],
[180,3830.0,1360.0],
[200,5700.0,2000.0],
[220,8090.0,2840.0],
[240,11260.0,3920.0],
[260,14920.0,5130.0],
[280,19270.0,6590.0],
[300,25170.0,8560.0],
[320,30820.0,9240.0],
[340,36660.0,9690.0],
[360,43190.0,10140.0],
[400,57680.0,10820.0],
[450,79890.0,11720.0],
[500,107200.0,12620.0],
[550,136700.0,13080.0],
[600,171000.0,13530.0]
];

var tabla_HEA = [
[100,349.0,134.0],
[120,606.0,231.0],
[140,1033.0,389.0],
[160,1673.0,616.0],
[180,2510.0,925.0],
[200,3692.0,1336.0],
[220,5410.0,1955.0],
[240,7763.0,2769.0],
[260,10455.0,3668.0],
[280,13673.0,4763.0],
[300,18263.0,6310.0],
[320,22928.0,6985.0],
[340,27693.0,7436.0],
[360,33090.0,7787.0],
[400,45069.0,8564.0],
[450,63722.0,9465.0],
[500,66975.0,10367.0],
[550,111932.0,10819.0],
[600,141208.0,11271.0]
];

var tabla_HEM = [
[100,1143.0,399.0],
[120,2018.0,703.0],
[140,3291.0,1144.0],
[160,5098.0,1759.0],
[180,7483.0,2580.0],
[200,10620.0,3651.0],
[220,14605.0,5012.0],
[240,24289.0,8153.0],
[260,31307.0,10449.0],
[280,39547.0,13163.0],
/*[300,40951.0,6310.0],*/
[300,59201.0,19403.0],
[320,66135.0,19709.0],
[340,76372.0,19711.0],
[360,84867.0,19522.0],
[400,104119.0,19335.0],
[450,131484.0,19339.0],
[500,161929.0,19155.0],
[550,197984.0,19158.0],
[600,237447.0,18975.0]
];

// Corregir


// Texto para traducir
var ROTULA = 0;
var APOYO = 1;
var EMP_IZQ = 2;
var EMP_DER = 3;
var EMPOTRM = 4;
var C_TOTAL = 5;
var CORTANTES = 6;
var FLECTORES = 7;
var GIROS = 8;
var FLECHAS = 9;
var EMP_IZQ_F = 0;
var EMP_DER_F = 1;
var EMP_IZQ_M = 2;
var EMP_DER_M = 3;
var EMPOTRM_F = 4;
var EMPOTRM_M = 5;
var CRT_IZQ = 6;
var CRT_DER = 7;
var MOM_IZQ = 8;
var MOM_DER = 9;
var GIR_IZQ = 10;
var GIR_DER = 11;
var FLC_IZQ = 12;
var FLC_DER = 13;
var IZQ = 14;
var DER = 15;
var INICIO = 16;
var FIN = 17;
var CAMPO = 18;
var POSICION = 19;
var VALOR = 20;
var CRT_Y_MOM = 21;
var GIR_Y_FLC = 22;
var GIR_Y_FLC_EI = 23;
var CARGA_TRAMOS = 24;
var TRAMO = 25;
var EQ_REACCIONES = 26;
var EQ_GIR_FLC = 27;
var T_INDEP = 28;

var num_letras = ['a','b','c','d','e','f','g','h','i','j','k'];
// Número de apoyos. -1 significa que el número es variable.
var num_apoyos_tipos = [[2],[0],[0],[2,4,4,6,6,6,6],[2,4,4,6,6,6,6],[4,4,6,6,6,6],[2,4,4,6,6,6,6],[-1],[-1],[-1],[-1]];
// Tipo de empotramientos de la viga. 1 izquierda, 2 derecha, 3 a los dos lados, 0 ninguno.
var empotramientos_tipos = [[0],[1],[2],[1],[2],[0],[3],[1],[2],[0],[3]];
// Aquí se almacena que elementos son apoyos y cuales rótulas. 1 apoyo, 2 no hay ni róutlas ni apoyos, 0 rótula.
var apoyos_rotulas = [
[[1,1]],
[[2]],[[2]],
[[0,1],[0,1,0,1],[0,0,1,1],[0,1,0,1,0,1],[0,0,1,1,0,1],[0,1,0,0,1,1],[0,0,1,0,1,1]],
[[1,0],[1,0,1,0],[1,1,0,0],[1,0,1,0,1,0],[1,0,1,1,0,0],[1,1,0,0,1,0],[1,1,0,1,0,0]],
[[1,1,0,1],[1,0,1,1],[1,1,0,0,1,1],[1,0,1,1,0,1],[1,1,0,1,0,1],[1,0,1,0,1,1]],
[[0,0],[0,0,1,0],[0,1,0,0],[0,0,1,1,0,0],[0,1,0,0,1,0],[0,0,1,0,1,0],[0,1,0,1,0,0]],
[[1]],[[1]],[[1]],[[1]]
];

// Procesos a llevar a cabo para las vigas compuestas
// [tipo-3][subtipo][índice del proceso][corte izq, corte der, apoyo izq, apoyo der, carga izq, carga der, num tramo]
// El cálculo de cada tramo se lleva a cabo según los valores de esta matriz.
// "tipo-3" significa que hay que restar 3 al tipo, ya que aquí sólo hay vígas compuestas.
var resolver_comp = [[
 [[0,2,0,1,-1,-1,0]],
 [[2,4,2,3,-1,-1,1],[0,2,0,1,-1,2,0]],
 [[0,1,0,1,-1,-1,0],[1,4,2,3,1,-1,1]],
 [[4,6,4,5,-1,-1,2],[2,4,2,3,-1,4,1],[0,2,0,1,-1,2,0]],
 [[0,1,0,1,-1,-1,0],[4,6,4,5,-1,-1,2],[1,4,2,3,1,4,1]],
 [[2,3,2,3,-1,-1,1],[3,6,4,5,3,-1,2],[0,2,0,1,-1,2,0]],
 [[0,1,0,1,-1,-1,0],[1,3,2,3,1,-1,1],[3,6,4,5,3,-1,2]]
],[
 [[-1,1,0,1,-1,-1,0]],
 [[-1,1,0,1,-1,-1,0],[1,3,2,3,1,-1,1]],
 [[2,3,2,3,-1,-1,1],[-1,2,0,1,-1,2,0]],
 [[-1,1,0,1,-1,-1,0],[1,3,2,3,1,-1,1],[3,5,4,5,3,-1,2]],
 [[4,5,4,5,-1,-1,2],[-1,1,0,1,-1,-1,0],[1,4,2,3,1,4,1]],
 [[2,3,2,3,-1,-1,1],[-1,2,0,1,-1,2,0],[3,5,4,5,3,-1,2]],
 [[4,5,4,5,-1,-1,2],[2,4,2,3,-1,4,1],[-1,2,0,1,-1,2,0]]
],[
 [[2,4,2,3,-1,-1,1],[-1,2,0,1,-1,2,0]],
 [[-1,1,0,1,-1,-1,0],[1,4,2,3,1,-1,1]],
 [[2,3,2,3,-1,-1,1],[-1,2,0,1,-1,2,0],[3,6,4,5,3,-1,2]],
 [[-1,1,0,1,-1,-1,0],[4,6,4,5,-1,-1,2],[1,4,2,3,1,4,1]],
 [[4,6,4,5,-1,-1,2],[2,4,2,3,-1,4,1],[-1,2,0,1,-1,2,0]],
 [[-1,1,0,1,-1,-1,0],[1,3,2,3,1,-1,1],[3,6,4,5,3,-1,2]]
],[
 [[0,1,0,1,-1,-1,0]],
 [[0,1,0,1,-1,-1,0],[1,3,2,3,1,-1,1]],
 [[2,3,2,3,-1,-1,1],[0,2,0,1,-1,2,0]],
 [[0,1,0,1,-1,-1,0],[4,5,4,5,-1,-1,2],[1,4,2,3,1,4,1]],
 [[2,3,2,3,-1,-1,1],[0,2,0,1,-1,2,0],[3,5,4,5,3,-1,2]],
 [[0,1,0,1,-1,-1,0],[1,3,2,3,1,-1,1],[3,5,4,5,3,-1,2]],
 [[4,5,4,5,-1,-1,2],[2,4,2,3,-1,4,1],[0,2,0,1,-1,2,0]]
]]; // Me llego por aquí


// Procesos a llevar a cabo para las vigas compuestas para calcular las constantes de integración
// [tipo-3][subtipo][índice del proceso][corte izq, corte der, apoyo izq, apoyo der]
// "tipo-3" significa que hay que restar 3 al tipo, ya que aquí sólo hay vígas compuestas.
var constantes_comp = [[
 [[0,2,0,1]],
 [[0,2,0,1],[2,4,2,3]],
 [[1,4,2,3],[0,1,0,1]],
 [[0,2,0,1],[2,4,2,3],[4,6,4,5]],
 [[1,4,2,3],[4,6,4,5],[0,1,0,1]],
 [[0,2,0,1],[3,6,4,5],[2,3,2,3]],
 [[3,6,4,5],[1,3,2,3],[0,1,0,1]]
],[
 [[-1,1,0,1]],
 [[1,3,2,3],[-1,1,0,1]],
 [[-1,2,0,1],[2,3,2,3]],
 [[3,5,4,5],[1,3,2,3],[-1,1,0,1]],
 [[1,4,2,3],[-1,1,0,1],[4,5,4,5]],
 [[3,5,4,5],[-1,2,0,1],[2,3,2,3]],
 [[-1,2,0,1],[2,4,2,3],[4,5,4,5]]
],[
 [[-1,2,0,1],[2,4,2,3]],
 [[1,4,2,3],[-1,1,0,1]],
 [[3,6,4,5],[-1,2,0,1],[2,3,2,3]],
 [[1,4,2,3],[4,6,4,5],[-1,1,0,1]],
 [[-1,2,0,1],[2,4,2,3],[4,6,4,5]],
 [[3,6,4,5],[1,3,2,3],[-1,1,0,1]]
],[
 [[0,1,0,1]],
 [[1,3,2,3],[0,1,0,1]],
 [[0,2,0,1],[2,3,2,3]],
 [[1,4,2,3],[4,5,4,5],[0,1,0,1]],
 [[3,5,4,5],[0,2,0,1],[2,3,2,3]],
 [[3,5,4,5],[1,3,2,3],[0,1,0,1]],
 [[0,2,0,1],[2,4,2,3],[4,5,4,5]]
]]; // Me llego por aquí


// Constantes para los gráficos
var colores_letras = ["crt", "flc", "gir", "def"]; /* Para gráficos, son los textos que se leen del fichero CSS */

// Creacción de la interfaz de usuario:
var iconos_string = ["rotl","appy","empI","empD","viga","nada"];
// Esquema para mostrar los dibujos de las vigas compuestas en el diálogo para elegir el subtipo.
// 5 significa espacio en blanco, 4 trozo sin elemento, 3 empotramiento a la derecha, 2 a la izquierda,
// 1 apoyo y 0 rótula. Para aceder al valor hay que restar 3 al tipo ya que aquí solo aparecen las vigas compuestas.
var iconos_esquema = [
[[2,0,1,4,5,5,5],[2,0,1,0,1,4,5],[2,0,0,1,1,4,5],[2,0,1,0,1,0,1],[2,0,0,1,1,0,1],[2,0,1,0,0,1,1],[2,0,0,1,0,1,1]],
[[5,5,5,4,1,0,3],[5,4,1,0,1,0,3],[5,4,1,1,0,0,3],[1,0,1,0,1,0,3],[1,0,1,1,0,0,3],[1,1,0,0,1,0,3],[1,1,0,1,0,0,3]],
[[5,1,1,0,1,5],[5,1,0,1,1,5],[1,1,0,0,1,1],[1,0,1,1,0,1],[1,1,0,1,0,1],[1,0,1,0,1,1]],
[[5,5,2,0,0,3,5,5],[5,2,0,0,1,0,3,5],[5,2,0,1,0,0,3,5],[2,0,0,1,1,0,0,3],[2,0,1,0,0,1,0,3],[2,0,0,1,0,1,0,3],[2,0,1,0,1,0,0,3]]
];


// Vectores para guardar las cargas
var arr_cargas_puntuales_pos = new Array();
var arr_cargas_puntuales_mag = new Array();
var arr_momentos_puntuales_pos = new Array();
var arr_momentos_puntuales_mag = new Array();
var arr_cargas_continuas_pos_A = new Array();
var arr_cargas_continuas_pos_B = new Array();
var arr_cargas_continuas_mag = new Array();
var arr_cargas_variables_pos_A = new Array();
var arr_cargas_variables_pos_B = new Array();
var arr_cargas_variables_mag_A = new Array();
var arr_cargas_variables_mag_B = new Array();

var arr_lista_apoyos_pos_x = new Array();
var arr_lista_apoyos_pos_y = new Array();


 /* Para calcular resultados de puntos en concreto final */
var num_consultas = 0; // Número de entradas en la lista de consultas, para saber cuánto borrar.
var max_crt_js, max_flc_js, max_gir_js, max_def_js; // Valores máximos, se almacenan para formatear los datos de salida.
var func_js; // Funciones de cortantes, flectores, giros y flechas.
// Funciona así: func_js[cortantes, flectores, giros y flechas][número de campo][grado del polinomio]


// Sustituye el valor en un polinomio de grado 5
// Recibe el valor a sustituir y el polinomio en un único vector de cualquier longitud
// Devuelve el valor obtenido.
function sustituir_b(sustituto,  polinomio){ //, cte_gir, cte_def
 var grado = polinomio.length - 1;
 valor = 0;
 for(var i = grado; i>0; i--){ // Modo Horner
  valor += polinomio[i];
  valor *= sustituto;
 }
 return valor + polinomio[0];
}


// Resuelve un sistema de ecuaciones lineal que permite determinar las constantes de giro y desplazamiento
// Recibe la distancia de los apoyos (dist_a y dist_b) y la altura de estos (alturaA y alturaB),
//   también recibe la función de deformación, el número de campos y el vector con sus posiciones.
// Devuelve un vector con la constante de giro y la de deformación para ese trozo de viga (o la viga entera).
// Y devuelve además un fragmento HTML (txt) con la información extra del cálculo.
function sacar_constantes(dist_a,  dist_b,  alturaA,  alturaB, def, dcmp){
 var tmpa = campo_distancia(dist_a, dcmp);
 var tmpb = campo_distancia(dist_b, dcmp);
 var va_sust = sustituir_b(dist_a, def[tmpa]);
 var vb_sust = sustituir_b(dist_b, def[tmpb]);
 var va = va_sust - alturaA;
 var vb = vb_sust - alturaB;
 var tgir= -(vb - va) / (dist_b - dist_a);
 var tdef= - va- tgir * dist_a;
 var ref = Math.max(va_sust, vb_sust, alturaA, alturaB);
 var txt = "<table><tr><th>EI&sigma;<sub>0</sub> x</th><th>EIY<sub>0</sub></th><th>C</th></tr><tr><td>" + dist_a + "</td><td>1</td><td>" + mostrar_float(va_sust, ref) + " - " + mostrar_float(alturaA, ref) + "</td></tr><tr><td>" + dist_b + "</td><td>1</td><td>" + mostrar_float(vb_sust, ref) + " - " + mostrar_float(alturaB, ref) + "</td></tr></table></table>"
 //var txt = "<table><tr><td>" + dist_a + " EIs<sub>0</sub></td><td> + EIY<sub>0</sub></td><td>" + va_sust + "</td><td><b> = " + va + "</b></td></tr><tr><td>" + dist_b + " EIs<sub>0</sub></td><td> + EIY<sub>0</sub></td><td>" + vb_sust + "</td><td><b> = " + vb + "</b></td></tr></table></table>"
 return [tgir, tdef, txt];
}


/*Esta función escribe una tabla HTML con la información de la matriz de cálculo en las vigas hiperestáticas.
Recibe los valores de la matriz con las incógnitas, el vector con los términos independientes y un vector
llamado nombres donde aparecen los nombres que hay que introducir en las filas TH, este vector sólo tiene
los elementos que no son apoyos, ya que los apoyos se numeran automáticamente aquí.
*/
function escribir_matriz(matrif, vectof, nombres){
 var texto = "<table>  <tr>";
 for(i in nombres){
  texto = texto + "<th>" + nombres[i] + "</th>";
 }
 var completar_apoyos = vectof.length - nombres.length;
 for(i = 0; i < completar_apoyos; i++){
  var ii = i + 1;
  texto = texto + "<th>" + txt_may[APOYO] + " " + ii + "</th>";
 }
 texto = texto + "<th>" + txt_res[T_INDEP] + "</th></tr>";
 for(i in vectof){
  texto = texto + "  <tr>";
  for(j in vectof){
   texto = texto + "<td>" + matrif[i][j] + "</td>";
  }
  texto = texto + "<td>" + vectof[i] + "</td></tr>\n";
 }
 texto = texto + "</table>";
 return texto;
}

// Resuelve un sistema de ecuaciones de varios polinomios
// Recibe la el tamaño de la matriz de coecifientes (tam_matriz_calculo), la matriz (matrif), y el vector con los coecifientes (vectof).
// Devuelve un vector con los resultados de resolver ese sistema de ecuaciones.
// Tal vez sea mejorable pero no quiero modificarla por el momento.
function resolver_sis_ecuac(matrif, vectof){
//alert("texto-" + vectof[0] + " " + matrif[0][0]);
var tam_matriz_calculo = vectof.length;
var i, j, k;
var floattemp2, floattemp, intercambio;
var caso0;
var tam = tam_matriz_calculo;
 for(k=0; k<tam; k++){
  floattemp=matrif[k][k];
//alert("texto-" + vectof[0] + " " + vectof[1] + " " + vectof[2] + " " + typeof i + " " + typeof j + " " + typeof k);
  if(floattemp==0){
   j=k;
   caso0=1;
   do{
    if(matrif[j][k] != 0){     //matriz[j][k]    *(matriz + (ciclos * j) + k
     caso0 = 0;
     for(i=k;i<tam_matriz_calculo;i++){
      matrif[k][i]  =  matrif[j][i];  // Creo que esto está mal, debería intercambiar valores y no copiarlos sin más
      // *(matriz + (ciclos * k) + i )  =  *(matriz + (ciclos * j) + i );
      matrif[k][i]  +=  matrif[j][i]; // Parece ser que la intención del código original era sumar la línea diferente a cero en lugar de intercambiarla (es igual de válido).
      // intercambio  = matrif[k][i];
      // matrif[k][i] = matrif[j][i];
      // matrif[j][i] = intercambio;
     }
     vectof[k] += vectof[j];
    }else{
     j++;
    }
   }while(caso0 && j < tam_matriz_calculo);
   if(caso0 == 0){ // Se ha podido continuar
    floattemp= matrif[k][k]; //matriz[k][k]; *(matriz + (ciclos * k) + k )
    for(j=k+1; j<tam_matriz_calculo; j++){//bien
     matrif[k][j] /= floattemp;  //matriz[k][j]   *(matriz + (ciclos * k) + j )
    }
    matrif[k][k] = 1;   //matriz[k][k]=1;  *(matriz + (ciclos * k) + k )  //bien
    vectof[k] /= floattemp;
    for(i=0;i<tam_matriz_calculo;i++){
     if(i != k){
      vectof[i] -= matrif[i][k] * vectof[k];      // matriz[i][k]  *(matriz + (ciclos * i) + k )
      floattemp2 =  matrif[i][k];    // *(matriz + (ciclos * i) + k ) ;  //matriz[i][k]
      for(j=0;j<tam_matriz_calculo;j++){
       matrif[i][j] -= floattemp2 * matrif[k][j];
       //*(matriz + (ciclos * i) + j) -= floattemp2 *  (  *(matriz + (ciclos * k) + j));
      }
     }
    }
   }else{
    var irresoluble = 1;
    alert(FRASE_ERROR_MATRIZ);
   }
  }else{
   for(j=k+1; j<tam; j++){//bien
    matrif[k][j] /= floattemp;
   }
   matrif[k][k] = 1;//bien
   vectof[k] /= floattemp;
   for(i=0; i < tam; i++){
    if(i != k){
     vectof[i] -= matrif[i][k] * vectof[k];
     floattemp2 = matrif[i][k];
     for(j=0; j < tam; j++){
      matrif[i][j] -= floattemp2 * matrif[k][j];
     }
    }
   }
  }
 }
 //  var texto_matriz = escribir_matriz(matrif, vectof);
 //  document.getElementById('calc_intb').innerHTML = texto_matriz;
 return vectof;
}


//Da el campo donde cae una cota a partir de la distancia a la que se encuentra.
function campo_distancia(dist, dcmp){
 var i = 1;
 var ncmp=dcmp.lenght - 1;
 if(dist == dcmp[ncmp]){
  i = ncmp;
 }else{
  while(dist > dcmp[i]){
   i++;
  }
 }
 return i - 1;
}


// Valida la distancia en entre 0 y la longitud. Devuelve 1 en caso de ser válida y 0 si no lo es.
function validar_distancia(lng, distancia){
 if(!isFinite(distancia)) return 0;
 if(isNaN(distancia)) return 0;
 if(distancia < 0)    return 0;
 if(distancia > lng)  return 0;
 return 1;
}





// Lee el número de apoyos a partir de los datos del formulario y según el tipo de viga
function leer_viga_y_apoyos(lng){
 var tipo = leer_opciones('radio_choice_tipo_viga');
 var subtipo;
 if(tipo < 3 || tipo > 6){
  subtipo = 0;
 }else{
  subtipo = leer_opciones('radio_choice_subtipo_viga');
 }
 // alert("Tipo: " + tipo + " subtipo: " + subtipo);
 var num_apoyos = num_apoyos_tipos[tipo][subtipo];
 apoyos_d = new Array();
 apoyos_y = new Array();
 if(num_apoyos == -1){
  apoyos_d = arr_lista_apoyos_pos_x;
  apoyos_y = arr_lista_apoyos_pos_y;
 }else{
  for(i = 0 ; i < num_apoyos ; i ++){
   apoyos_d.push(parseFloat(document.txt_apoyos.apoyo[i].value));
   apoyos_y.push(parseFloat(document.txt_apoyos.despl[i].value));
  }
 }
 return [tipo, subtipo, apoyos_d, apoyos_y];
}


// Lee el tipo de viga a partir de los datos del formulario.
// Lee el subtipo de viga a partir de los datos del formulario.
function leer_opciones(lugar){
 var opciones = document.getElementsByName(lugar);
 var num = opciones.length;
 for (var i = 0; i < num; i++) {
  if (opciones[i].checked) {
   return i;
  }
 }
}


/* Función que haya el máximo valor en un vector */
function max_vector(vect){
 max = Math.abs(vect[0]);
 for(var i=0; i < vect.length; i++){
  temporal = vect[i];
  if(temporal > max){
   max = temporal;
  }
  if( (-temporal) > max){
   max = -temporal;
  }
 }
 return max;
}

// Esta función determina el máximo valor de las cargas para poder dibujar los gráficos corréctamente.
// Recibe los valores de las cargas (número de cada tipo y valores (sólo magnitudes, no distancias))
// Devuelve 5 valores, el máximo para cada tipo, y un quinto valor con el máximo de las cargas que no son momentos.

function max_cargas(mcp, mmp, mcc, acv, bcv){
 var max_cv = (acv.length == 0) ? 0 : Math.max(max_vector(acv), max_vector(bcv));
 var max_cc = (mcc.length == 0) ? 0 : max_vector(mcc);
 var max_cp = (mcp.length == 0) ? 0 : max_vector(mcp);
 var max_mp = (mmp.length == 0) ? 0 : max_vector(mmp);
 // Obtener el máximo total:
 var max = Math.max(max_cp, max_cc, max_cv);
 return [max_cp, max_mp, max_cc, max_cv, max];
}




// Funciones para dibujar gráficos
// Actualmente sólo dibujan en un rectángulo de 600×300 píxeles.


// Dibujar apoyos, rótulas, empotramientos...
// Estas funciones reciben la posición (si es necesario) y devuelven una cadena de texto con el código SVG corresondiente.


//   El apoyo fijo es un triángulo con tres rayas inclinadas debajo
function app_fj_svg(dist, lng){
 dist *= 550; dist /= lng; dist += 25.;
 var texto1 = " <polygon points=\"" + dist + "," + 150 + "," + (dist+10) + "," + 160 + "," + (dist-10) + "," + 160 + "\" class=\"graf_svg_poligono\" />\n";
 var texto2 = " <line x1=\"" + (dist-6)  + "\" y1=\"" + 160 + "\" x2=\"" + (dist-10) + "\" y2=\"" + 165 + "\" class=\"graf_svg_linea\" />\n";
 var texto3 = " <line x1=\"" + (dist+2)  + "\" y1=\"" + 160 + "\" x2=\"" + (dist-2)  + "\" y2=\"" + 165 + "\" class=\"graf_svg_linea\" />\n";
 var texto4 = " <line x1=\"" + (dist+10) + "\" y1=\"" + 160 + "\" x2=\"" + (dist+6)  + "\" y2=\"" + 165 + "\" class=\"graf_svg_linea\" />\n";
 return (texto1 + texto2 + texto3 + texto4);
}

//   Apoyos móviles, un triángulo y dos círculos
function app_mv_svg(dist, lng){
 dist *= 550; dist /= lng; dist += 25.;
 var texto1 = " <polygon points=\"" + dist + "," + 150 + "," + (dist+10) + "," + 160 + "," + (dist-10) + "," + 160 + "\" class=\"graf_svg_poligono\" />\n";
 var texto2 = " <circle cx=\"" + (dist-7) + "px\" cy=\"" + 164 + "px\" r=\"3px\" class=\"graf_svg_poligono\" />\n";
 var texto3 = " <circle cx=\"" + (dist+7) + "px\" cy=\"" + 164 + "px\" r=\"3px\" class=\"graf_svg_poligono\" />\n";
 //alert (texto1 + texto2 + texto3);
 return (texto1 + texto2 + texto3);
}

//   Las rótulas son sencillas: son círculos
function rotula_svg(dist, lng){
 dist *= 550; dist /= lng; dist += 25.;
 return " <circle cx=\"" + dist + "px\" cy=\"150px\" r=\"5px\" class=\"graf_svg_poligono\" />\n";
}

// Empotramiento izquierdo
function empizq_svg(){
 var texto = " <line x1=\"25\" y1=\"135\" x2=\"25\" y2=\"165\" class=\"graf_svg_linea\" />\n <line x1=\"15\" y1=\"145\" x2=\"25\" y2=\"135\" class=\"graf_svg_linea\" />\n <line x1=\"15\" y1=\"155\" x2=\"25\" y2=\"145\" class=\"graf_svg_linea\" />\n <line x1=\"15\" y1=\"165\" x2=\"25\" y2=\"155\" class=\"graf_svg_linea\" />\n";
 return texto;
}

// Empotramiento derecho
function empder_svg(){
 var texto = " <line x1=\"575\" y1=\"135\" x2=\"575\" y2=\"165\" class=\"graf_svg_linea\" />\n <line x1=\"585\" y1=\"145\" x2=\"575\" y2=\"135\" class=\"graf_svg_linea\" />\n <line x1=\"585\" y1=\"155\" x2=\"575\" y2=\"145\" class=\"graf_svg_linea\" />\n <line x1=\"585\" y1=\"165\" x2=\"575\" y2=\"155\" class=\"graf_svg_linea\" />\n";
 return texto;
}


// Esta función llama a las anteriores para dibujar los elementos.
function dibujarelem_svg(lng, modo, submodo, apoyos_d){
 var texto = "";
 if(empotramientos_tipos[modo] == 1 || empotramientos_tipos[modo] == 3){
  texto =  texto + empizq_svg();
 }
 if(empotramientos_tipos[modo] == 2 || empotramientos_tipos[modo] == 3){
  texto =  texto + empder_svg(); // TEMAZO: Mc Sar & Real Mccoy - Run Away
 }
 //alert("pwn" + empotramientos_tipos[modo]);
 if(num_apoyos_tipos[modo] == -1){ // Vigas hiperestáticas con varios apoyos
  for(var i in apoyos_d){
   texto = texto + app_mv_svg(apoyos_d[i], lng);
  }
 }else{ // Vigas simples y compuestas
  for(var i in apoyos_d){
   if(apoyos_rotulas[modo][submodo][i] == 1){
    texto = texto + app_mv_svg(apoyos_d[i], lng);
   }else{
    texto = texto + rotula_svg(apoyos_d[i], lng);
   }
  }
 }
 return texto;
}




// Esta función hace el dibujo de la viga con sus cargas.
// Recibe el tipo de viga, longitud, posiciones de apoyos, cargas...
// No se que hacía "grafgraf", pero lo he dejado como dibujar escalas iguales, algo que siempre está activado ahora mismo.
// Devuelve una cadena de texto con el código SVG correspondiente.
function graficar_svg(lng, tipo, subtipo, apoyos_d, mcp, dcp, mmp, dmp, mcc, icc, fcc, acv, bcv, icv, fcv, grafgraf){
 var coordx, coordy, coordx2, coordy2; // float
 var i;
 var dibujo_viga = "<rect x=\"25\" y=\"149\" width=\"550\" height=\"2\" class=\"graf_svg_viga\" />\n";
 var elementos = dibujarelem_svg(lng, tipo, subtipo, apoyos_d);
 var texto_cargas = dibujo_viga + elementos;
 var vector_max = max_cargas(mcp, mmp, mcc, acv, bcv);
 var max_cp = vector_max[0];
 var max_mp = vector_max[1];
 var max_cc = vector_max[2];
 var max_cv = vector_max[3];
 var max_general = vector_max[4];
 if(grafgraf){ // Escalas iguales
  max_cp = max_general;
  max_cc = max_general;
  max_cv = max_general;
 }
 // " +  + "
 //Cargas contínuas
 for(i in mcc){
  coordx = (icc[i] * 550 / lng) + 25.5;
  coordy = 150 - (mcc[i] * 140 / max_cc);
  coordx2 = (fcc[i] * 550 / lng) + 24.5;
  coordy2 = (150);
  if(coordy < coordy2)
   texto_cargas = texto_cargas + " <rect x=\"" + coordx + "\" y=\"" + coordy  + "\" width=\"" + (coordx2-coordx) + "\" height=\"" + (coordy2-coordy) + "\" class=\"graf_svg_cc\" />\n"; //,coordx,coordy,coordx2-coordx,coordy2-coordy);
  else
   texto_cargas = texto_cargas + " <rect x=\"" + coordx + "\" y=\"" + coordy2 + "\" width=\"" + (coordx2-coordx) + "\" height=\"" + (coordy-coordy2) + "\" class=\"graf_svg_cc\" />\n"; //,coordx,coordy2,coordx2-coordx,coordy-coordy2);
 }
 //Cargas variables
 //alert("He pasado por aquí bb." + icv[0] + " " + fcv[0] + " " + acv[0] + " " + bcv[0] + " " + max_cc);
 for(i in icv){
  coordx = (icv[i] * 550 / lng) + 25.5;
  coordy = 150 - (acv[i] * 140 / max_cv);
  coordx2 = (fcv[i] * 550 / lng) + 24.5;
  coordy2 = 150 - (bcv[i] * 140 / max_cv);
  texto_cargas = texto_cargas + " <polygon points=\"" + coordx + "," + coordy + "," + coordx2 + "," + coordy2 + "," + coordx2 + "," + 150 + "," + coordx + "," + 150 + "\" class=\"graf_svg_cv\" />\n";
 }
 //Cargas puntuales
 for(i in dcp){
  coordx=(dcp[i] * 550 / lng) + 25;
  coordy=(150 - (mcp[i] * 140 / max_cp));
  texto_cargas = texto_cargas + " <line x1=\"" + coordx + "\" y1=\"" + coordy + "\" x2=\"" + coordx + "\" y2=\"" + 150 + "\" class=\"graf_svg_cp\" />\n";
  if(mcp[i]>0){//Punta de la flecha, depende su dibujado del sentido (signo) de la carga.
   texto_cargas = texto_cargas + "  <polyline points=\"" + (coordx+10) + "," + 135 + " " + coordx + "," + 150 + " " + (coordx-10) + "," + 135 + "\" class=\"graf_svg_cp\" />\n";
  }else{
   texto_cargas = texto_cargas + "  <polyline points=\"" + (coordx-10) + "," + 165 + " " + coordx + "," + 150 + " " + (coordx+10) + "," + 165 + "\" class=\"graf_svg_cp\" />\n";
  }
 }
 for(i in mmp){
  coordx=(dmp[i] * 550 / lng) + 25;
  if(mmp[i] > 0){
   coordy=((mmp[i] * 3 / max_mp) + 0.8);
   texto_cargas = texto_cargas + " <path d=\"M " + (coordx) + ",130 A 20,20 0 1 1 " + (coordx-20) + ",150\" stroke=\"violet\" fill=\"none\" stroke-width=\"" + coordy + "\" />\n";
   texto_cargas = texto_cargas + "  <polyline points=\"" + (coordx+10) + "," + 120 + " " + coordx + "," + 130 + " " + (coordx+10) + "," + 140 + "\" stroke=\"violet\" fill=\"none\" stroke-width=\"" + coordy + "\" />\n";
  }else{
   coordy=((-mmp[i] * 3 / max_mp) + 0.8);
   texto_cargas = texto_cargas + " <path d=\"M " + (coordx+20) + ",150 A 20,20 0 1 1 " + (coordx) + ",130\" stroke=\"violet\" fill=\"none\" stroke-width=\"" + coordy + "\" />\n";
   texto_cargas = texto_cargas + "  <polyline points=\"" + (coordx-10) + "," + 140 + " " + coordx + "," + 130 + " " + (coordx-10) + "," + 120 + "\" stroke=\"violet\" fill=\"none\" stroke-width=\"" + coordy + "\" />\n";
  }
 }
 return texto_cargas;
}


// Esta función dibuja los gráficos de funciones.
// Recibe datos de la viga (apoyos, longitud...), el color a usar (clase CSS) y la función.
// Las partes lineasles las dibuja con un único trazo, las no lineales con muchos trazos pequeños.
// Los saltos los dibuja con línea más fina.
function dibujar_graf_svg(lng, tipo, subtipo, apoyos_num, apoyos_d, ncmp, dcmp, valor_tope, semitransparente, escala, inicial, ultimo, color, func){ //, f0, f1, f2, f3, f4, f5
 var dibujo_viga = "<rect x=\"25\" y=\"149\" width=\"550\" height=\"2\" class=\"graf_svg_viga\" />\n";
 var alto = 150;
 var num_puntos_campo = 40;
 var coordx, coordx2, coordy, coordy2, temp_int2;
 var temporal, temporal2, temporal3, tam_divisiones, posic_lineas_peq, ultimoX, ultimoY;
 var i, j;
 var recta;
 var divisiones = 80;
 var elementos = dibujarelem_svg(lng, tipo, subtipo, apoyos_d);
 var colores = colores_letras[color];
 if(valor_tope==0){ //Prevenir divisiones entre 0.
  valor_tope=1;
 }
 coordy = (alto / 2 + 5);
 //temp_int2 = divisiones-1;

 var texto_linea = "";
 ultimoX = 25; // Valor de inicio de la línea
 fin_de_linea = 575; // Valor de inicio de la línea
 ultimoY = 150; // Valor de inicio de la línea
 coordy2 = 150 - (inicial * 140 / valor_tope);
 // fprintf(archivo,"<polyline points=\"25,150 25,%f",coordy2);
 var texto_relleno = "<polyline points=\"25,150 25," + coordy2;
 for(i=0; i<ncmp; i++){// Por cada campo...
  recta = 0; //Se mira si el trozo de función es lineal, o curvo
  if(func[i][2] == 0){
   if(func[i][3] == 0){
    if(func[i][4] == 0){
     if(func[i][5] == 0){
      recta = 1; // Si x^2, x^3, x^4 y x^5 son cero, entonces, es lineal.
     }
    }
   }
  }
  if(recta){//Si es lineal, se hace una linea recta
   coordx = 25 + (dcmp[i+1] * 550 / lng);//Posición del final del campo
   temporal3 = sustituir_b(dcmp[i], func[i]);//Sustituir el valor en la función con la posición inicial del campo
   //temporal3 = sustituir_b(dcmp[i],f0);//Sustituir el valor en la función con la posición inicial del campo
   coordy = 150 - ((temporal3 * 140) / valor_tope);//Convertir a coordenada del gráfico SVG
   // fprintf(archivo, "  <line x1=\"%f\" y1=\"%f\" x2=\"%f\" y2=\"%f\" style=\"fill:none;stroke:%s;stroke-width:1.5;stroke-linecap:round\" />\n",ultimoX,ultimoY,ultimoX,coordy,colores);//Linea fina de salto entre campos (si no lo hay, quedaría en cero)
   texto_linea = texto_linea + "  <line x1=\"" + ultimoX + "\" y1=\"" + ultimoY + "\" x2=\"" + ultimoX + "\" y2=\"" + coordy + "\" class=\"graf_svg_func_" + colores + "_borde graf_svg_func_salto\" />\n";
   texto_relleno = texto_relleno
   temporal3 = sustituir_b(dcmp[i+1],func[i]);//Lo mismo con el valor del final del campo
   //temporal3 = sustituir_b(dcmp[i+1],f0[i]);//Lo mismo con el valor del final del campo
   coordy2  =150 - (temporal3 * 140 / valor_tope);//Convertir a gráfico SVG
   // fprintf(archivo, "  <line x1=\"%f\" y1=\"%f\" x2=\"%f\" y2=\"%f\" class=\"fill:none;stroke:%s;stroke-width:4;stroke-linecap:round\" />\n",ultimoX,coordy,coordx,coordy2,colores);//Linea del campo
   texto_linea = texto_linea + "  <line x1=\"" + ultimoX + "\" y1=\"" + coordy + "\" x2=\"" + coordx + "\" y2=\"" + coordy2 + "\" class=\"graf_svg_func_" + colores + "_borde graf_svg_func_trazo\" />\n";
   texto_relleno = texto_relleno + " " + ultimoX + "," + coordy + " " + coordx + "," + coordy2;
   ultimoX = coordx; ultimoY = coordy2;
  }else{   //No es recta, primero se traza una linea del posible salto en el cambio de campo
   temporal=dcmp[i];//y luego unas cuantas lineas cortas que imitan un poco una curva.
   temporal2=(dcmp[i+1]-dcmp[i])/(num_puntos_campo-1);
   coordx=(temporal * 550/lng);
   coordx+=25;
   temporal3= sustituir_b(dcmp[i], func[i]);
   coordy=150-(temporal3 * 140/valor_tope);
   // fprintf(archivo, "  <line x1=\"%f\" y1=\"%f\" x2=\"%f\" y2=\"%f\" style=\"fill:none;stroke:%s;stroke-width:1.5;stroke-linecap:round\" />\n",ultimoX,ultimoY,coordx,coordy,colores);
   texto_linea = texto_linea + "  <line x1=\"" + ultimoX + "\" y1=\"" + ultimoY + "\" x2=\"" + coordx + "\" y2=\"" + coordy + "\" class=\"graf_svg_func_" + colores + "_borde graf_svg_func_salto\" />\n";
   ultimoX=coordx; ultimoY=coordy;
   // fprintf(archivo,"<polyline points=\"%f,%f",ultimoX,ultimoY);//Inicio de la polilinea
   texto_linea = texto_linea + "<polyline points=\"" + ultimoX + "," + ultimoY;
   texto_relleno = texto_relleno + " " + ultimoX + "," + ultimoY;
   for(j=1;j<num_puntos_campo;j++){
    temporal += temporal2;
    coordx2=(temporal * 550/lng);
    coordx2+=25;
    temporal3= sustituir_b(temporal, func[i]);
    coordy2=150-(temporal3 * 140/valor_tope);
    // fprintf(archivo," %f,%f",coordx2,coordy2);
    texto_linea = texto_linea + " " + coordx2 + "," + coordy2;
    texto_relleno = texto_relleno + " " + coordx2 + "," + coordy2;
    ultimoX=coordx2; ultimoY=coordy2;
   }//Cerrar la linea. Se usan extremos redondeados, que parece que quedan mejor
   // fprintf(archivo,"\" style=\"fill:none;stroke:%s;stroke-width:4;stroke-linecap:round\" />\n",colores);//Final de la polilinea
   texto_linea = texto_linea + "\" class=\"graf_svg_func_" + colores + "_borde graf_svg_func_trazo\" />\n";
  }
 }  //   " +  + "
 // Última línea
 texto_linea = texto_linea + "  <line x1=\"" + ultimoX + "\" y1=\"" + ultimoY + "\" x2=\"" + fin_de_linea + "\" y2=\"" + 150 + "\" class=\"graf_svg_func_" + colores + "_borde graf_svg_func_salto\" />\n";
 // Cierre del relleno
 texto_relleno = texto_relleno + " 575," + coordy2 + " 575,150\" class=\"graf_svg_func_" + colores + "_rell graf_svg_func_relleno\" />\n";
/* Código para marcar la sección con mayor momento.
 if(color == 'r'){
  if(flc_pos_graf == 'i')
   coordy2 = 150 - (der_f[ncmp-1] * -140 / valor_tope);
  else
   coordy2 = 150 - (der_f[ncmp-1] * 140 / valor_tope);
  if(semitransparente){//Verdadero: dibujar area, falso: dibujar lineas
   fprintf(archivo," 575,%f 575,150\" stroke=\"none\" fill=\"red\" stroke-width=\"0\" opacity=\"0.25\" />\n",coordy2);//Final de la polilinea
  }else{
   fprintf(archivo," 575,%f 575,150\" stroke=\"none\" fill=\"url(#pat_lineas)\" stroke-width=\"0\" opacity=\"1\" />\n",coordy2);//Final de la polilinea
  }
 }*/
 //fprintf(archivo,"  <line x1=\"%f\" y1=\"%f\" x2=\"%f\" y2=\"%f\" stroke=\"%s\" stroke-width=\"1\" />\n",ultimoX,ultimoY,575.,150.,colores);
 return texto_relleno + dibujo_viga + elementos + texto_linea;
}




// Dibujar gráficos.

function graf(lng, tipo, subtipo, apoyos_d, dcmp, crt, flc, gir, def, ctes_gir, ctes_def, izq_c, der_c, izq_f, der_f, izq_g, der_g, izq_d, der_d, max_abs_c, max_abs_m, max_abs_g, max_abs_d){
 var apoyos_num = apoyos_d.length;
 var ncmp = dcmp.length - 1;

 var valor_tope = Math.abs(max_abs_c);
 inicio= -izq_c[0]; final= -der_c[ncmp-1];
 var crt_grafico_dibujado = dibujar_graf_svg(lng, tipo, subtipo, apoyos_num, apoyos_d, ncmp, dcmp, valor_tope, 1, 1, inicio, final, 0, crt); //, vect_temp0, vect_temp1, vect_temp2, vect_temp3, vect_temp4, vect_temp5
 var texto_crt = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"600px\" height=\"300px\">\n" + crt_grafico_dibujado + "</svg>";
 document.getElementById('res_graf_crt').innerHTML = texto_crt;

 valor_tope = Math.abs(max_abs_m);
 inicio= -izq_f[0]; final= -der_f[ncmp-1];
 var flc_grafico_dibujado = dibujar_graf_svg(lng, tipo, subtipo, apoyos_num, apoyos_d, ncmp, dcmp, valor_tope, 1, 1, inicio, final, 1, flc); //, vect_temp0, vect_temp1, vect_temp2, vect_temp3, vect_temp4, vect_temp5
 var texto_flc = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"600px\" height=\"300px\">\n" + flc_grafico_dibujado + "</svg>";
 document.getElementById('res_graf_flc').innerHTML = texto_flc;

 valor_tope = Math.abs(max_abs_g);
 var gir_const = new Array(ncmp);
 for(i=0;i<ncmp;i++){//Cargar datos en los vectores temporales
  gir_const[i] = new Array(5);
  gir_const[i][0] = gir[i][0] + ctes_gir[i];
  gir_const[i][1] = gir[i][1];
  gir_const[i][2] = gir[i][2];
  gir_const[i][3] = gir[i][3];
  gir_const[i][4] = gir[i][4];
 }
 inicio= izq_g[0]; final= der_g[ncmp-1];
 var gir_grafico_dibujado = dibujar_graf_svg(lng, tipo, subtipo, apoyos_num, apoyos_d, ncmp, dcmp, valor_tope, 1, 1, inicio, final, 2, gir_const); //, vect_temp0, vect_temp1, vect_temp2, vect_temp3, vect_temp4, vect_temp5
 var texto_gir = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"600px\" height=\"300px\">\n" + gir_grafico_dibujado + "</svg>";
 document.getElementById('res_graf_gir').innerHTML = texto_gir;

 valor_tope = Math.abs(max_abs_d);
 var def_const = new Array(ncmp);
 for(i=0;i<ncmp;i++){//Cargar datos en los vectores temporales
  def_const[i] = new Array(6);
  def_const[i][0] = def[i][0] + ctes_def[i];
  def_const[i][1] = def[i][1] + ctes_gir[i];
  def_const[i][2] = def[i][2];
  def_const[i][3] = def[i][3];
  def_const[i][4] = def[i][4];
  def_const[i][5] = def[i][5];
 }
 inicio= izq_d[0]; final= der_d[ncmp-1];
 var def_grafico_dibujado = dibujar_graf_svg(lng, tipo, subtipo, apoyos_num, apoyos_d, ncmp, dcmp, valor_tope, 1, 1, inicio, final, 3, def_const); //, vect_temp0, vect_temp1, vect_temp2, vect_temp3, vect_temp4, vect_temp5
 var texto_def = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"600px\" height=\"300px\">\n" + def_grafico_dibujado + "</svg>";
 document.getElementById('res_graf_def').innerHTML = texto_def;
}





// Cálculo




// Función que obtiene máximos y mínimos
// Recibe las funciones y los valores en los extremos de los campos.
// Devuelve los máximos y devuelve muchos datos por pantalla: funciones, máximos...
function maxmin(dcmp, crt, flc, gir, def, ctes_gir, ctes_def, izq_c, der_c, izq_f, der_f, izq_g, der_g, izq_d, der_d, ei){
 var maxc_m=0; var maxc=0; var cmp_c_max=0;
 var minc_m=0; var minc=0; var cmp_c_min=0;
 var maxm_m=0; var maxm=0; var cmp_m_max=0;
 var minm_m=0; var minm=0; var cmp_m_min=0;
 var maxg_m=0; var maxg=0; var cmp_g_max=0;
 var ming_m=0; var ming=0; var cmp_g_min=0;
 var maxd_m=0; var maxd=0; var cmp_d_max=0;
 var mind_m=0; var mind=0; var cmp_d_min=0;

 var ncmp = dcmp.length - 1;
 var i;

 for(i=0;i<ncmp;i++){
 // Anáslisis de los valores en los extremos de los campos.
 // Si la funciones no son lineales en algunos campos, se analizan después esos casos.
  if(izq_f[i]>maxm_m){
   maxm_m=izq_f[i]; maxm=dcmp[i]; cmp_m_max=i;
  }
  if(izq_f[i]<minm_m){
   minm_m=izq_f[i]; minm=dcmp[i]; cmp_m_min=i;
  }
  if(der_f[i]>maxm_m){
   maxm_m=der_f[i]; maxm=dcmp[i+1]; cmp_m_max=i;
  }
  if(der_f[i]<minm_m){
   minm_m=der_f[i]; minm=dcmp[i+1]; cmp_m_min=i;
  }
  //CORTANTES
  if(izq_c[i]>maxc_m){
   maxc_m=izq_c[i]; maxc=dcmp[i]; cmp_c_max=i;
  }
  if(izq_c[i]<minc_m){
   minc_m=izq_c[i]; minc=dcmp[i]; cmp_c_min=i;
  }
  if(der_c[i]>maxc_m){
   maxc_m=der_c[i]; maxc=dcmp[i+1]; cmp_c_max=i;
  }
  if(der_c[i]<minc_m){
   minc_m=der_c[i]; minc=dcmp[i+1]; cmp_c_min=i;
  }
  //GIROS
  if(izq_g[i] > maxg_m){
   maxg_m=izq_g[i]; maxg=dcmp[i]; cmp_g_max=i;
  }
  if(izq_g[i] < ming_m){
   ming_m=izq_g[i]; ming=dcmp[i]; cmp_g_min=i;
  }
  if(der_g[i] > maxg_m){
   maxg_m=der_g[i]; maxg=dcmp[i+1]; cmp_g_max=i;
  }
  if(der_g[i] < ming_m){
   ming_m=der_g[i]; ming=dcmp[i+1]; cmp_g_min=i;
  }
  //FLECHAS
  if(izq_d[i]>maxd_m){
   maxd_m=izq_d[i]; maxd=dcmp[i]; cmp_d_max=i;
  }
  if(izq_d[i]<mind_m){
   mind_m=izq_d[i]; mind=dcmp[i]; cmp_d_min=i;
  }
  if(der_d[i]>maxd_m){
   maxd_m=der_d[i]; maxd=dcmp[i+1]; cmp_d_max=i;
  }
  if(der_d[i]<mind_m){
   mind_m=der_d[i]; mind=dcmp[i+1]; cmp_d_min=i;
  }
 }  // F I N   D E   B U S Q U E D A



 var tmp, tmpa, tmpb;
 //Una vez mirados los extremos de los campos, se pasa a mirar si hay mayores valores en la parte central de los campos
 //Esto se realiza buscando los valores donde las derivadas de las funciones valen cero, y mirando si ese valor es mayor que otros.
 for(i=0;i<ncmp;i++){
  if(crt[i][2]==0){
   if(crt[i][1]!=0){
    // Ecuación de primer grado         bx+c
    tmpa=(-crt[i][0]/crt[i][1]);
    if(tmpa>dcmp[i] && tmpa<dcmp[i+1]){
     /*cero_crt[nc_crt]=tmpa;
     nc_crt++;*/
     tmpb=sustituir_b(tmpa, flc[i]);
     if(tmpb>maxm_m){
      maxm_m=tmpb;
      maxm=tmpa;
      cmp_m_max=i;
     }
     if(tmpb<minm_m){
      minm_m=tmpb;
      minm=tmpa;
      cmp_m_min=i;
     }
    }//(tmpa>dcmp[i+1] && tmpa<dcmp[i+1])
   }//crt[i][1]==0
  }else{
   if(crt[i][1]==0){
    // Ecuación de segundo grado        ax²+c
    tmpa = (-crt[i][0]/crt[i][2]);
    if(tmpa >= 0){
     tmpa = Math.sqrt(tmpa);
     if(tmpa<dcmp[i+1] && tmpa>dcmp[i]){
      /*cero_crt[nc_crt]=tmpa;
      nc_crt++;*/
      tmpb=sustituir_b(tmpa, flc[i]);
      if(tmpb>maxm_m){
       maxm_m=tmpb;
       maxm=tmpa;
       cmp_m_max=i;
      }
      if(tmpb<minm_m){
       minm_m=tmpb;
       minm=tmpa;
       cmp_m_min=i;
      }
     }
    }
   }else{
    // Ecuación de segundo grado        ax²+bx+c
    tmp=(crt[i][1]*crt[i][1] - 4*crt[i][2]*crt[i][0]);
    if(tmp >= 0){
     tmp=Math.sqrt(tmp);
     // Caso +  (en la raiz cuadrada, que tiene +/-)
     tmpa=(-crt[i][1]+tmp)/(2*crt[i][2]);
     if(tmpa<dcmp[i+1] && tmpa>dcmp[i]){
      /*cero_crt[nc_crt]=tmpa;
      nc_crt++;*/
      tmpb=sustituir_b(tmpa, flc[i]);
      if(tmpb>maxm_m){
       maxm_m=tmpb;
       maxm=tmpa;
       cmp_m_max=i;
      }
      if(tmpb<minm_m){
       minm_m=tmpb;
       minm=tmpa;
       cmp_m_min=i;
      }
     }
     // Caso -  (en la raiz cuadrada, que tiene +/-)
     tmpa=(-crt[i][1]-tmp)/(2*crt[i][2]);
     if(tmpa<dcmp[i+1] && tmpa>dcmp[i]){
      tmpb=sustituir_b(tmpa, flc[i]);
      if(tmpb>maxm_m){
       maxm_m=tmpb;
       maxm=tmpa;
       cmp_m_max=i;
      }
      if(tmpb<minm_m){
       minm_m=tmpb;
       minm=tmpa;
       cmp_m_min=i;
      }
     }
     //Busco el de mayor momento
    }//raiz cuadrada posible
   }//crt[i][1]==0
  }//crt[i][2]==0
 }//i=0;i<ncmp;i++   centro de los campos*/
 //TEMAZO: Legend B - Lost In Love (ATB Radio Edit)
 //   En el caso de la función de cortantes, sólo hay un caso en que la función no es lineal.
 //  Ese caso es cuando tiene la forma ax²+bx+c, siendo su derivada una función de tipo 2ax+b
 for(i=0;i<ncmp;i++){
  if(crt[i][2]!=0){ // Si la función tiene un valor de a distinto de cero.
   tmpa=-crt[i][1]/(crt[i][2]*2);// Se iguala la derivada a cero y se despeja X para obtener el punto de corte.
   if(tmpa<dcmp[i+1] && tmpa>dcmp[i]){ // Se comprueba si ese punto está en el campo de estudio.
    tmpb=sustituir_b(tmpa,crt[i]); // Se saca el valor
    if(tmpb>maxc_m){ // Si es mayor que el máximo, es un máximo
     maxc_m=tmpb;
     maxc=tmpa;
     cmp_c_max=i;
    }
    if(tmpb<minc_m){ // Si vale menos que el mínimo es un mínimo
     minc_m=tmpb;
     minc=tmpa;
     cmp_c_min=i;
    }
   }
  }
 }//max_abs_c=0;max_abs_c_dist=0;



//alert("Intermedio: " + maxd_m + "_" + maxd + "_" + cmp_d_max + "_" + mind_m + "_" + mind + "_" + cmp_d_min);


 var max_abs_c, max_abs_c_dist;
 var max_abs_f, max_abs_f_dist;
 var max_abs_g, max_abs_g_dist;
 var max_abs_d, max_abs_d_dist;

 if(Math.abs(minc_m) < Math.abs(maxc_m)){//Corregir esto en  resultados
  max_abs_c=maxc_m;
  max_abs_c_dist=maxc;
 }else{
  max_abs_c=minc_m;
  max_abs_c_dist=minc;
 }
 if(Math.abs(minm_m) < Math.abs(maxm_m)){//Corregir esto en  resultados
  max_abs_m = maxm_m;
  max_abs_m_dist = maxm;
 }else{
  max_abs_m = minm_m;
  max_abs_m_dist = minm;
 }
 if(Math.abs(ming_m) < Math.abs(maxg_m)){//Corregir esto en  resultados
  max_abs_g = maxg_m;
  max_abs_g_dist = maxg;
 }else{
  max_abs_g = ming_m;
  max_abs_g_dist = ming; // ¿Ming? ¿Yao Ming? Sin duda ayudaría a mantener un código libre de "bugs".
 }
 if(-mind_m < maxd_m){//Corregir esto en  resultados
  max_abs_d = maxd_m;
  max_abs_d_dist = maxd;
 }else{
  max_abs_d = mind_m;
  max_abs_d_dist = mind;
 }



 // En la obtención de los valores máximos para giros y flechas, recurro a una chapucilla que
 //   permite obtener valores aproximados.
 // Consiste en dividir en 160 trozos la viga, y analizar el valor en cada uno de ellos
 //   si uno es igual o mayor que el máximo actual (max_abs_g), se sustituye, sinó, como si nada.
 //   Se inicializa con la posición 0.
 //   "max_abs_g" es el valor máximo y "max_abs_g_dist" es la posición.
 //   Esto es válido también para las deformaciones.
 var divisiones = 160;
 var tam_divisiones = dcmp[dcmp.length - 1] / (divisiones);  //Las líneas pequeñas
 var num_elast_inerc = 0; // No necesario
 var posic_lineas_peq = tam_divisiones * 0.5;  //Tamaño de cada división e iniciación
 for(i=0;i<divisiones;i++){
  var j = campo_distancia(posic_lineas_peq, dcmp);
  var temporal3 = sustituir_b(posic_lineas_peq, gir[j]) + ctes_gir[j];
  if(Math.abs(max_abs_g) < Math.abs(temporal3)){
   max_abs_g = temporal3;
   max_abs_g_dist = posic_lineas_peq;
  }
  posic_lineas_peq+=tam_divisiones;
 }

 //elástica
 //  maxd_m=der_d[i]; maxd=dcmp[i+1]; cmp_d_max=i;
 //  mind_m=der_d[i]; mind=dcmp[i+1]; cmp_d_min=i;
 posic_lineas_peq = tam_divisiones * 0.5;  //Tamaño de cada división e iniciación
 for(i=0;i<divisiones;i++){
  var j = campo_distancia(posic_lineas_peq, dcmp);
  var temporal3 = sustituir_b(posic_lineas_peq, def[j]) + sustituir_b(posic_lineas_peq, [ctes_def[j], ctes_gir[j]]);
  if(Math.abs(max_abs_d) < Math.abs(temporal3)){
   max_abs_d = temporal3;
   max_abs_d_dist = posic_lineas_peq;
  }
  posic_lineas_peq += tam_divisiones;
 }











 // Mostrar resultados de las funciones
 var texto = "<h4>" + txt_may[CORTANTES] + "</h4><table><tr><th>" + txt_res[CAMPO] + "</th><th>x<sup>0</sup></th><th>x<sup>1</sup></th><th>x<sup>2</sup></th></tr>";
 for(i=0; i<ncmp; i++){
  texto = texto + "<tr><td>" + i + "</td><td>" + mostrar_float(crt[i][0],max_abs_c) + "</td><td>" + mostrar_float(crt[i][1],max_abs_c) + "</td><td>" + mostrar_float(crt[i][2],max_abs_c) + "</td></tr>";
 }
 texto = texto + "</table><h4>" + txt_may[FLECTORES] + "</h4><table><tr><th>" + txt_res[CAMPO] + "</th><th>x<sup>0</sup></th><th>x<sup>1</sup></th><th>x<sup>2</sup></th><th>x<sup>3</sup></th></tr>";
 for(i=0; i<ncmp; i++){
  texto = texto + "<tr><td>" + i + "</td><td>" + mostrar_float(flc[i][0],max_abs_m) + "</td><td>" + mostrar_float(flc[i][1],max_abs_m) + "</td><td>" + mostrar_float(flc[i][2],max_abs_m) + "</td><td>" + mostrar_float(flc[i][3],max_abs_m) + "</td></tr>";
 }
 texto = texto + "</table><h4>" + txt_may[GIROS] + "</h4><table><tr><th>" + txt_res[CAMPO] + "</th><th class=\"const\">x<sup>0</sup></th><th>x<sup>1</sup></th><th>x<sup>2</sup></th><th>x<sup>3</sup></th><th>x<sup>4</sup></th></tr>";
 for(i=0; i<ncmp; i++){
  texto = texto + "<tr><td>" + i + "</td><td>" + mostrar_float(gir[i][0],max_abs_g) + " + " + mostrar_float(ctes_gir[i],max_abs_g) + "</td><td>" + mostrar_float(gir[i][1],max_abs_g) + "</td><td>" + mostrar_float(gir[i][2],max_abs_g) + "</td><td>" + mostrar_float(gir[i][3],max_abs_g) + "</td><td>" + mostrar_float(gir[i][4],max_abs_g) + "</td></tr>";
 }
 texto = texto + "</table><h4>" + txt_may[FLECHAS] + "</h4><table><tr><th>" + txt_res[CAMPO] + "</th><th class=\"const\">x<sup>0</sup></th><th class=\"const\">x<sup>1</sup></th><th>x<sup>2</sup></th><th>x<sup>3</sup></th><th>x<sup>4</sup></th><th>x<sup>5</sup></th></tr>";
 for(i=0; i<ncmp; i++){
  texto = texto + "<tr><td>" + i + "</td><td>" + mostrar_float(def[i][0],max_abs_d) + " + " + mostrar_float(ctes_def[i],max_abs_d) + "</td><td>" + mostrar_float(def[i][1],max_abs_d) + " + " + mostrar_float(ctes_gir[i],max_abs_d) + "</td><td>" + mostrar_float(def[i][2],max_abs_d) + "</td><td>" + mostrar_float(def[i][3],max_abs_d) + "</td><td>" + mostrar_float(def[i][4],max_abs_d) + "</td><td>" + mostrar_float(def[i][5],max_abs_d) + "</td></tr>";
 }
 texto = texto + "</table>";
 // Devolver valores
 document.getElementById('res_funciones').innerHTML = texto;


// Valores en los extremos de cada campo.
 var izq_g_ei = new Array(ncmp);
 var der_g_ei = new Array(ncmp);
 var izq_d_ei = new Array(ncmp);
 var der_d_ei = new Array(ncmp);
 texto = "<h4>" + txt_res[CRT_Y_MOM] + "</h4><table><tr><th>" + txt_res[CAMPO] + "</th><th>" + txt_res[CRT_IZQ] + "</th><th>" + txt_res[CRT_DER] + "</th><th>" + txt_res[MOM_IZQ] + "</th><th>" + txt_res[MOM_DER] + "</th></tr>"; // TEMAZO: Rai vs. Edu - I'll be there
 for(i=0;i<ncmp;i++){
  texto = texto + "<tr><td>" + i + "</td><td>" + mostrar_float(izq_c[i],max_abs_c) + "</td><td>" + mostrar_float(der_c[i],max_abs_c) + "</td><td>" + mostrar_float(izq_f[i],max_abs_m) + "</td><td>" + mostrar_float(der_f[i],max_abs_m) + "</td></tr>";
 }
 texto = texto + "</table><h4>" + txt_res[GIR_Y_FLC] + "</h4><table><tr><th>" + txt_res[CAMPO] + "</th><th>" + txt_res[GIR_IZQ] + "</th><th>" + txt_res[GIR_DER] + "</th><th>" + txt_res[FLC_IZQ] + "</th><th>" + txt_res[FLC_DER] + "</th></tr>";
 for(i=0;i<ncmp;i++){
  texto = texto + "<tr><td>" + i + "</td><td>" + mostrar_float(izq_g[i],max_abs_g) + "</td><td>" + mostrar_float(der_g[i],max_abs_g) + "</td><td>" + mostrar_float(izq_d[i],max_abs_d) + "</td><td>" + mostrar_float(der_d[i],max_abs_d) + "</td></tr>";
 }
 texto = texto + "</table><h4>" + txt_res[GIR_Y_FLC_EI] + "</h4><table><tr><th>" + txt_res[CAMPO] + "</th><th>" + txt_res[GIR_IZQ] + "</th><th>" + txt_res[GIR_DER] + "</th><th>" + txt_res[FLC_IZQ] + "</th><th>" + txt_res[FLC_DER] + "</th></tr>";
 for(i=0;i<ncmp;i++){
  izq_g_ei[i] = izq_g[i] / ei;
  der_g_ei[i] = der_g[i] / ei;
  izq_d_ei[i] = izq_d[i] / ei;
  der_d_ei[i] = der_d[i] / ei;
  texto = texto + "<tr><td>" + i + "</td><td>" + mostrar_float(izq_g_ei[i],max_abs_g/ei) + "</td><td>" + mostrar_float(der_g_ei[i],max_abs_g/ei) + "</td><td>" + mostrar_float(izq_d_ei[i],max_abs_d/ei) + "</td><td>" + mostrar_float(der_d_ei[i],max_abs_d/ei) + "</td></tr>";
 }
 texto = texto + "</table>";
 document.getElementById('res_valores').innerHTML = texto;


//alert("Intermedio: " + maxd_m + "_" + maxd + "_" + cmp_d_max + "_" + mind_m + "_" + mind + "_" + cmp_d_min + "_" + max_abs_d + "_" + max_abs_d_dist);
 // Mostrar resultados
 //var texto = "<h4>Cortantes</h4><ul><li>Posición: " + max_abs_c_dist + "</li><li>Valor: " + max_abs_c + "</li></ul><h4>Flectores</h4><ul><li>Posición: " + max_abs_m_dist + "</li><li>Valor: " + max_abs_m + "</li></ul><h4>Giros</h4><ul><li>Posición: " + max_abs_g_dist + "</li><li>Valor: " + max_abs_g + "</li></ul><h4>Deformada</h4><ul><li>Posición: " + max_abs_d_dist + "</li><li>Valor: " + max_abs_d + "</li></ul>";
 var lng = dcmp[dcmp.length - 1];
 var texto = "<table><tr><th>&nbsp;</th><th>" + txt_min[CORTANTES] + "</th><th>" + txt_min[FLECTORES] + "</th><th>" + txt_min[GIROS] + "</th><th>" + txt_min[FLECHAS] + "</th></tr><tr><td>" + txt_res[POSICION] + "</td><td>" + mostrar_float(max_abs_c_dist, lng) + "</td><td>" + mostrar_float(max_abs_m_dist, lng) + "</td><td>" + mostrar_float(max_abs_g_dist, lng) + "</td><td>" + mostrar_float(max_abs_d_dist, lng) + "</td></tr><tr><td>" + txt_res[VALOR] + "</td><td>" + mostrar_float(max_abs_c,1) + "</td><td>" + mostrar_float(max_abs_m,1) + "</td><td>" + mostrar_float(max_abs_g / ei,1) + "</td><td>" + mostrar_float(max_abs_d / ei,1) + "</td></tr></table>";
 document.getElementById('res_maxmin').innerHTML = texto;
 return [max_abs_c, max_abs_c_dist, max_abs_m, max_abs_m_dist, max_abs_g, max_abs_g_dist, max_abs_d, max_abs_d_dist];
}






function val_ext(dcmp, crt, flc, gir, def, ctes_gir, ctes_def, ei){ // Se dan valores a las variables
 var i;
 var tmp;
 var ncmp = dcmp.length - 1;
 var izq_c = new Array(ncmp);
 var der_c = new Array(ncmp);
 var izq_f = new Array(ncmp);
 var der_f = new Array(ncmp);
 var izq_g = new Array(ncmp);
 var der_g = new Array(ncmp);
 var izq_d = new Array(ncmp);
 var der_d = new Array(ncmp);
 for(i=0;i<ncmp;i++){
  izq_c[i] = sustituir_b(dcmp[i], crt[i]);
  der_c[i] = sustituir_b(dcmp[i+1], crt[i]);
  izq_f[i] = sustituir_b(dcmp[i], flc[i]);
  der_f[i] = sustituir_b(dcmp[i+1], flc[i]);
  izq_g[i] = sustituir_b(dcmp[i], gir[i]) + ctes_gir[i]; // No olvidar las constantes.
  der_g[i] = sustituir_b(dcmp[i+1], gir[i]) + ctes_gir[i]; // En la deformación se compone un vector con las dos constantes.
  izq_d[i] = sustituir_b(dcmp[i], def[i]) + sustituir_b(dcmp[i], [ctes_def[i], ctes_gir[i]]);
  der_d[i] = sustituir_b(dcmp[i+1], def[i]) + sustituir_b(dcmp[i+1], [ctes_def[i], ctes_gir[i]]);
 }
 return [izq_c, der_c, izq_f, der_f, izq_g, der_g, izq_d, der_d];
}






//Cortantes y Momentos flectores
// El código es principalmente de XVIGAS para Windows, con lo que las variables tienen nombres diferentes al resto del código.
function funcion(lng, tipo, subtipo, femptr, memptr, dapp, mapp, yapp, dcmp, mcp, dcp, mmp, dmp, mcc, icc, fcc, acv, bcv, icv, fcv, cte_gir_nueve, cte_def_nueve, cortes){
 var cte_gir = 0;
 var cte_def = 0;
 var ncmp = dcmp.length - 1;
 var crt = new Array(ncmp);
 var flc = new Array(ncmp);
 var gir = new Array(ncmp);
 var def = new Array(ncmp);
 var ctes_gir = new Array(ncmp);
 var ctes_def = new Array(ncmp);

 for(i=0;i<ncmp;i++){
  crt[i] = new Array(3);
  flc[i] = new Array(4);
  gir[i] = new Array(5);
  def[i] = new Array(6);
 }
 //alert ("Prueba" + crt[5][2]);


 var largo , factor , tmp, va, vb;//Menos mal que aceptó los comentarios con doble barra
 var i ,j,tmpa,tmpb;//TEMAZO: Darude - Sandstorm
 var sumarEMPTR, sumarA, sumarB, sumarC, sumarD, sumarE, sumarF, sumarAPPS;
 sumarEMPTR=0; //sumarA=0; sumarB=0; sumarC=0; sumarD=0; sumarE=0; sumarF=0; sumarAPPS=0;
 var sumarEMPTR = (empotramientos_tipos[tipo] == 1 || empotramientos_tipos[tipo] == 3) ? 1 : 0;
 //alert("empotramientos_tipos[tipo][subtipo]" + empotramientos_tipos[tipo][subtipo]);
 //var num_apoyos = dapp.length;
 for(i=0;i<ncmp;i++){//Se pone a cero todo, y luego se va sumando cada cosa
  crt[i][0]=0;  crt[i][1]=0;  crt[i][2]=0;          ctes_gir[i]=0; ctes_def[i]=0;
  flc[i][0]=0;  flc[i][1]=0;  flc[i][2]=0;  flc[i][3]=0;
  gir[i][0]=0;  gir[i][1]=0;  gir[i][2]=0;  gir[i][3]=0;  gir[i][4]=0;
  def[i][0]=0;  def[i][1]=0;  def[i][2]=0;  def[i][3]=0;  def[i][4]=0;  def[i][5]=0;
 }

 for(i=0; i<ncmp; i++){
  for(j in dapp){
   //if(sumarAPPS || sumar_apoyo[j]){//apoyos_rotulas
   /*if(num_apoyos_tipos[tipo][subtipo][0] == -1){//apoyos_rotulas
   }*/
   if(num_apoyos_tipos[tipo][subtipo] == -1 || apoyos_rotulas[tipo][subtipo][j]){//Apoyos múltiples de las vigas 'h' e 'i'
    if(dapp[j]<dcmp[i+1]){
     tmp=mapp[j];
     crt[i][0]+=tmp;       flc[i][1]+=tmp;
     gir[i][2]+=tmp/2;     def[i][3]+=tmp/6;
     factor = tmp*dapp[j]; flc[i][0]-=factor;
     gir[i][1]-=factor;    def[i][2]-=factor/2;
     factor *= dapp[j]/2;  gir[i][0]+=factor;
     def[i][1]+=factor;    def[i][0]-=factor * dapp[j]/3;
    }
   }
  }
  if(sumarEMPTR){
   crt[i][0]+=femptr;    flc[i][1]+=femptr;
   gir[i][2]+=femptr/2;  def[i][3]+=femptr/6;
   flc[i][0]-=memptr;    gir[i][1]-=memptr;
   def[i][2]-=memptr/2;
  }
  //Cargas puntuales
  for(j in dcp){
   if(dcp[j] < dcmp[i+1]){
    tmp = mcp[j];
    crt[i][0] -= tmp;
    flc[i][1] -= tmp;
    gir[i][2] -= tmp/2;
    def[i][3] -= tmp/6;
    factor = tmp * dcp[j];
    gir[i][1] += factor;
    flc[i][0] += factor;
    def[i][2] += factor/2;
    factor *= dcp[j];
    def[i][1] -= factor/2;
    gir[i][0] -= factor/2;
    def[i][0] += factor*dcp[j]/6;
   }
  }
  //Momentos
  for(j in mmp){
   if(dmp[j] < dcmp[i+1]){
    flc[i][0] -= mmp[j];
    gir[i][1] -= mmp[j];
    def[i][2] -= mmp[j]/2;
    factor=mmp[j] * dmp[j];
    def[i][1] += factor;
    gir[i][0] += factor;
    factor *= dmp[j];
    def[i][0] -= factor/2;
   }
  }
  //Cargas contínuas
  for(j in icc){
   if(icc[j] < dcmp[i+1]){
    tmp=icc[j];
    factor=mcc[j];//código optimizado para calcular más rápido
    crt[i][1]-=factor;
    gir[i][3]-=factor/6;
    flc[i][2]-=factor/2;
    def[i][4]-=factor/24;
    factor*=tmp;
    crt[i][0]+=factor;
    flc[i][1]+=factor;
    factor/=2;
    gir[i][2]+=factor;
    def[i][3]+=factor/3;
    factor*=tmp;
    flc[i][0]-=factor;
    gir[i][1]-=factor;
    def[i][2]-=factor/2;
    factor*=tmp/3;
    gir[i][0]+=factor;
    def[i][1]+=factor;
    def[i][0]-=factor*tmp/4;
   }
   if(fcc[j] < dcmp[i+1]){
    tmp=fcc[j];
    factor= -mcc[j];//código optimizado para calcular más rápido
    crt[i][1]-=factor;
    gir[i][3]-=factor/6;
    flc[i][2]-=factor/2;
    def[i][4]-=factor/24;
    factor*=tmp;
    crt[i][0]+=factor;
    flc[i][1]+=factor;
    factor/=2;
    gir[i][2]+=factor;
    def[i][3]+=factor/3;
    factor*=tmp;
    flc[i][0]-=factor;
    gir[i][1]-=factor;
    def[i][2]-=factor/2;
    factor*=tmp/3;
    gir[i][0]+=factor;
    def[i][1]+=factor;
    def[i][0]-=factor*tmp/4;
   }
  }
  //  C A R G A S   V A R I A B L E S
  for(j in icv){
   if(icv[j]<dcmp[i+1]){//Si la carga está en el campo
    largo=fcv[j]-icv[j];
    //  parte triangular que resta
    factor=(bcv[j]-acv[j])/(2*largo);
    tmp=icv[j];
    crt[i][2]-=factor;
    flc[i][3]-=factor/3;
    gir[i][4]-=factor/12;
    def[i][5]-=factor/60;
    factor*=tmp;
    crt[i][1]+=factor*2;
    flc[i][2]+=factor;
    gir[i][3]+=factor/3;
    def[i][4]+=factor/12;
    factor*=tmp;
    crt[i][0]-=factor;
    flc[i][1]-=factor;//Fallo
    gir[i][2]-=factor/2;
    def[i][3]-=factor/6;//Fallo
    factor*=tmp; factor/=3;
    gir[i][1]+=factor;
    flc[i][0]+=factor;
    def[i][2]+=factor/2;
    factor*=tmp/4;
    def[i][1]-=factor;
    gir[i][0]-=factor;
    def[i][0]+=factor*tmp/5;
    //  parte rectangular que suma
    tmp=icv[j];
    factor=acv[j];//código optimizado para calcular más rápido
    crt[i][1]-=factor;
    gir[i][3]-=factor/6;
    flc[i][2]-=factor/2;
    def[i][4]-=factor/24;
    factor*=tmp;
    crt[i][0]+=factor;
    flc[i][1]+=factor;
    factor/=2;
    gir[i][2]+=factor;
    def[i][3]+=factor/3;
    factor*=tmp;
    flc[i][0]-=factor;
    gir[i][1]-=factor;
    def[i][2]-=factor/2;
    factor*=tmp/3;
    gir[i][0]+=factor;
    def[i][1]+=factor;
    def[i][0]-=factor*tmp/4;
   }
   //-----------------------------------------------------------
   if(fcv[j]<dcmp[i+1]){// Si la carga fuera.
    largo=fcv[j]-icv[j];
    //  parte triangular que resta
    factor=(bcv[j]-acv[j])/(2*largo);
    tmp=fcv[j];
    crt[i][2]+=factor;
    flc[i][3]+=factor/3;
    gir[i][4]+=factor/12;
    def[i][5]+=factor/60;
    factor*=tmp;
    crt[i][1]-=factor*2;
    flc[i][2]-=factor;
    gir[i][3]-=factor/3;
    def[i][4]-=factor/12;
    factor*=tmp;
    crt[i][0]+=factor;
    flc[i][1]+=factor;//Fallo
    gir[i][2]+=factor/2;
    def[i][3]+=factor/6;//Fallo
    factor*=tmp; factor/=3;
    gir[i][1]-=factor;
    flc[i][0]-=factor;
    def[i][2]-=factor/2;
    factor*=tmp/4;
    def[i][1]+=factor;
    gir[i][0]+=factor;
    def[i][0]-=factor*tmp/5;
    //  parte rectangular que suma
    tmp=fcv[j];
    factor=bcv[j];
    crt[i][1]+=factor;
    flc[i][2]+=factor/2;
    gir[i][3]+=factor/6;
    def[i][4]+=factor/24;
    factor*=tmp;
    crt[i][0]-=factor;
    flc[i][1]-=factor;
    factor/=2;
    gir[i][2]-=factor;
    def[i][3]-=factor/3;
    factor*=tmp;
    flc[i][0]+=factor;
    gir[i][1]+=factor;
    def[i][2]+=factor/2;
    factor *= tmp/3;
    gir[i][0]-=factor;
    def[i][1]-=factor;
    def[i][0]+=factor*tmp/4;
   }/*  F I N   D E L   C A R G A   E N   C A M P O   O   F U E R A*/
  }/*  F I N   D E L for(j=0;j<ncv;j++)*/
 }/*  F I N   D E L for(i=0;i<ncmp;i++)*/


var res_ctes = new Array(3);
var intermedio_txt_ctes = ""; // Texto para constantes de giro y flechas

 // Procesar constantes
 switch(tipo){
  case 0:
   res_ctes = sacar_constantes(dapp[0], dapp[1], yapp[0], yapp[1], def, dcmp);
   cte_gir = res_ctes[0]; // La función devuelve dos resultados en un vector se pueden sacar y
   cte_def = res_ctes[1]; // usarse cuando se asignan a las variables que había en el código original.
   intermedio_txt_ctes = "<h4>" + txt_res[EQ_GIR_FLC] + "</h4><h5>" + txt_res[TRAMO] + " 0 - " + lng + ":</h5>" + res_ctes[2]; // Se recoge el valor de las constantes
   for(i=0; i<ncmp; i++){
    ctes_gir[i]=cte_gir;
    ctes_def[i]=cte_def;
   }
  break;
  case 1: // Al ser un empotramiento las constantes valen cero.
  case 7:
  case 10:
   intermedio_txt_ctes = "<h4>" + txt_res[EQ_GIR_FLC] + "</h4>" + "<div class=\"resultado_int\"><ul><li>&sigma;<sub>0</sub> = 0</li><li>Y<sub>0</sub> = 0</li></ul></div>";
   cte_gir=0;
   cte_def=0;
   for(i=0;i<ncmp;i++){
    ctes_gir[i]=0;
    ctes_def[i]=0;
   }
  break;
  case 2:
  case 8:
   cte_gir = -sustituir_b(lng, gir[ncmp-1]);
   cte_def = -sustituir_b(lng, def[ncmp-1]) - (cte_gir * lng);
   intermedio_txt_ctes = "<h4>" + txt_res[EQ_GIR_FLC] + "</h4>" + "<div class=\"resultado_int\"><ul><li>&sigma;<sub>0</sub> = " + cte_gir + "</li><li>Y<sub>0</sub> = -" + sustituir_b(lng, def[ncmp-1]) + " - (" + cte_gir + "×" + lng + ")</li></ul></div>";
   for(i=0;i<ncmp;i++){
    ctes_gir[i]=cte_gir;
    ctes_def[i]=cte_def;
   }
  break;
  case 9:
   for(i = 0; i < ncmp; i++){
    ctes_gir[i]=cte_gir_nueve;
    ctes_def[i]=cte_def_nueve;
   }
  break;
  case 3: case 4: case 5: case 6:
   intermedio_txt_ctes = "<h4>" + txt_res[EQ_GIR_FLC] + "</h4>";
   var cortes_cmp = new Array();
   var j = 0;
   for (i in cortes){
    while(dcmp[j] < cortes[i]){
     j++;
    }
    cortes_cmp.push(j);
   }
   if(tipo == 3 || tipo == 6){ // Empotramiento a la izquierda
    while(i < cortes_cmp[1]){ // Hasta el campo donde esté la primera rótula
     ctes_gir[i] = 0;  ctes_def[i] = 0;  i++;
    }
   }
   if(tipo == 4 || tipo == 6){ // Empotramiento a la derecha
    cte_gir = -sustituir_b(lng, gir[ncmp-1]);
    cte_def = -sustituir_b(lng, def[ncmp-1]) - (cte_gir * lng);
    i = cortes_cmp[cortes_cmp.length-2];
    //alert("Corte: " + i + " " + dcmp[i]);
    intermedio_txt_ctes += "<h5>" + txt_may[EMPOTRM] + ":</h5>" + "<div class=\"resultado_int\"><ul><li>&sigma;<sub>0</sub> = " + cte_gir + "</li><li>Y<sub>0</sub> = -" + sustituir_b(lng, def[ncmp-1]) + " - (" + cte_gir + "×" + lng + ")</li></ul></div>";
    while(i < ncmp){
     ctes_gir[i]=cte_gir;  ctes_def[i]=cte_def;  i++;
    }
   }
   // Vector cortes para indicar los tramos del cálculo intermedio
   var cortes = apoyos_d.slice(0); // Se copia el vector de apoyos
   cortes.splice(0,0,0); // Se añade 0 al principio
   cortes.push(lng); // Se añade la longitud al final
   for (i in constantes_comp[tipo-3][subtipo]){ // Tramos intermedios
    if(apoyos_rotulas[tipo][subtipo][constantes_comp[tipo-3][subtipo][i][2]]){ // Comprobar si es un apoyo
     altura_a = yapp[constantes_comp[tipo-3][subtipo][i][2]];
    }else{
     var cc = cortes_cmp[constantes_comp[tipo-3][subtipo][i][2] + 1]-1;
     altura_a = sustituir_b(dcmp[cc+1], def[cc]) + sustituir_b(dcmp[cc+1], [ctes_def[cc], ctes_gir[cc]]);
    }
    if(apoyos_rotulas[tipo][subtipo][constantes_comp[tipo-3][subtipo][i][3]]){ // Comprobar si es un apoyo
     altura_b = yapp[constantes_comp[tipo-3][subtipo][i][3]];
    }else{
     var cc = cortes_cmp[constantes_comp[tipo-3][subtipo][i][3] + 1];
     altura_b = sustituir_b(dapp[constantes_comp[tipo-3][subtipo][i][3]], def[cc]) + sustituir_b(dapp[constantes_comp[tipo-3][subtipo][i][3]], [ctes_def[cc], ctes_gir[cc]]);
    }
    res_ctes = sacar_constantes(dapp[constantes_comp[tipo-3][subtipo][i][2]], dapp[constantes_comp[tipo-3][subtipo][i][3]], altura_a, altura_b, def, dcmp);
    intermedio_txt_ctes += "<h5>" + txt_res[TRAMO] + " " + cortes[resolver_comp[tipo-3][subtipo][i][0] + 1] + " - " + cortes[resolver_comp[tipo-3][subtipo][i][1] + 1] + ":</h5>" + res_ctes[2]; // Se recoge el valor de las constantes
    var j = cortes_cmp[constantes_comp[tipo-3][subtipo][i][0] + 1];
    while(j < cortes_cmp[constantes_comp[tipo-3][subtipo][i][1] + 1]){
     ctes_gir[j] = res_ctes[0];    ctes_def[j] = res_ctes[1];    j++;
    }
   }
  break;
 }
 document.getElementById('calc_ctes').innerHTML = intermedio_txt_ctes;
 //Cargar datos en los vectores para calcular valores al final
 func_js = [crt, flc, gir, def, ctes_gir, ctes_def];
 return [crt, flc, gir, def, ctes_gir, ctes_def];
}





function campos(apoyos_d, lng, dcp, dmp, icc, fcc, icv, fcv){
 var dcmp = [0, lng];
 for(j in apoyos_d){ //c puntuales
  var tmp = apoyos_d[j];
  var no_repetida = 1;
  for(i in dcmp){
   if(dcmp[i] == tmp){
    no_repetida = 0;
   }
  }
  if(no_repetida){
   dcmp.push(tmp);
  }
 }
 for(j in dcp){ //cargas puntuales
  var tmp = dcp[j];
  var no_repetida = 1;
  for(i in dcmp){
   if(dcmp[i] == tmp){
    no_repetida = 0;
   }
  }
  if(no_repetida){
   dcmp.push(tmp);
  }
 }
 for(j in dmp){ //cargas puntuales
  var tmp = dmp[j];
  var no_repetida = 1;
  for(i in dcmp){
   if(dcmp[i] == tmp){
    no_repetida = 0;
   }
  }
  if(no_repetida){
   dcmp.push(tmp);
  }
 }
 for(j in icc){ //cargas puntuales
  var tmp = icc[j];
  var no_repetida = 1;
  for(i in dcmp){
   if(dcmp[i] == tmp){
    no_repetida = 0;
   }
  }
  if(no_repetida){
   dcmp.push(tmp);
  }
  tmp = fcc[j];
  no_repetida = 1;
  for(i in dcmp){
   if(dcmp[i] == tmp){
    no_repetida = 0;
   }
  }
  if(no_repetida){
   dcmp.push(tmp);
  }
 }
 for(j in icv){ //cargas puntuales
  var tmp = icv[j];
  var no_repetida = 1;
  for(i in dcmp){
   if(dcmp[i] == tmp){
    no_repetida = 0;
   }
  }
  if(no_repetida){
   dcmp.push(tmp);
  }
  tmp = fcv[j];
  no_repetida = 1;
  for(i in dcmp){
   if(dcmp[i] == tmp){
    no_repetida = 0;
   }
  }
  if(no_repetida){
   dcmp.push(tmp);
  }
 }
 dcmp.sort(function(a, b){return a-b});
    //alert(ncmp);
 // Mostrar resultados
 var texto = "<table><tr><th>" + txt_res[CAMPO] + "</th><th>" + txt_res[INICIO] + "</th><th>" + txt_res[FIN] + "</th></tr>";
 for(i = 0; i < dcmp.length - 1; i ++){
  texto = texto + "<tr><td>" + i + "</td><td>" + dcmp[i] + "</td><td>" + dcmp[i+1] + "</td></tr>";
 }
 texto = texto + "</table>";
 document.getElementById('res_campos').innerHTML = texto;
 //dcmp[0] = ncmp;
 dcmp_js = dcmp; // Se guarda en la variable global
 return dcmp;
}

 // Esto no lo quito:
 // TEMAZO: Pianonegro - In Africa
 // TEMAZO: Head horny's - Tell me lies
 // TEMAZO: Aldus Haza - Killer city







//(lng, cota_inicio, cota_fin, apoyoA, apoyoB, mag_rot_izq, mag_rot_der, cgt, ncp, nmp, ncc, ncv, mcp, dcp, mmp, dmp, mcc, icc, fcc, acv, bcv, icv, fcv)
function calcular_empotramiento(cota_corte, lado, fuerza_punto_corte, lng, mcp, dcp, mmp, dmp, mcc, icc, fcc, acv, bcv, icv, fcv, max_cargas){
 var i, ap;
 var float_tmpA, float_tmpB, largo, crg_trig, crg_rect, valor_cv_der, valor_cv_izq, pos_cv_der, pos_cv_izq;
 var momento_emp = 0;
 var fuerza_emp = 0;
 //if(lado=='d') ap=0; else ap=1;//0 a la derecha, 1 a la izquierda
 var ap = (lado=='d') ? 0 : 1;
 var sub_texto = (ap) ? "<sub>" + txt_res[IZQ] + "</sub>" : "<sub>" + txt_res[DER] + "</sub>";
 var texto1 = "<div class=\"eq_calc\">" + txt_res[EMPOTRM_F] + sub_texto + " = ";
 var texto2 = "<div class=\"eq_calc\">" + txt_res[EMPOTRM_M] + sub_texto + " = ";
 var control_vacio = texto1;
 var cgt=0;
 if(fuerza_punto_corte != 0){
  if(ap){
   momento_emp += fuerza_punto_corte * cota_corte;
   fuerza_emp += fuerza_punto_corte;
   texto1 = texto1 + " + <span class=\"eq_rotl\">(" + mostrar_float(fuerza_punto_corte,max_cargas) + ")</span>";
   texto2 = texto2 + " + <span class=\"eq_rotl\">(" + cota_corte + " × " + mostrar_float(fuerza_punto_corte,max_cargas) + ")</span>";
  }else{
   momento_emp += fuerza_punto_corte * (lng - cota_corte);
   fuerza_emp += fuerza_punto_corte;
   texto1 = texto1 + " + <span class=\"eq_rotl\">(" + mostrar_float(fuerza_punto_corte,max_cargas) + ")</span>";
   texto2 = texto2 + " + <span class=\"eq_rotl\">((" + lng + " - " + cota_corte + ") × " + mostrar_float(fuerza_punto_corte,max_cargas) + ")</span>";
  }
 }
 for(i in dcp){
  if(ap){ // A la izquierda
   if(cota_corte > dcp[i] || (cota_corte == lng && cota_corte == dcp[i])){
    cgt += mcp[i];
    momento_emp += mcp[i] * dcp[i];
    fuerza_emp += mcp[i];
    texto1 = texto1 + " + <span class=\"eq_crpt\">(" + mcp[i] + ")</span>";
    texto2 = texto2 + " + <span class=\"eq_crpt\">(" + dcp[i] + " × " + mcp[i] + ")</span>";
   }else{
    if(cota_corte == dcp[i]){
     momento_emp += mcp[i] * dcp[i] / 2;
     fuerza_emp += mcp[i] / 2;
     cgt += mcp[i] / 2;
     texto1 = texto1 + " + <span class=\"eq_crpt\">(" + mcp[i] + ") / 2</span>";
     texto2 = texto2 + " + <span class=\"eq_crpt\">(" + dcp[i] + " × " + mcp[i] + ") / 2</span>";
    }
   }
  }else{ // A la derecha
   if(cota_corte<dcp[i] || (cota_corte == 0 && cota_corte==dcp[i])){
    momento_emp += mcp[i]*(lng-dcp[i]);
    fuerza_emp += mcp[i];
    cgt+=mcp[i];
     texto1 = texto1 + " + <span class=\"eq_crpt\">(" + mcp[i] + ")</span>";
     texto2 = texto2 + " + <span class=\"eq_crpt\">((" + lng + " - " + dcp[i] + ") × " + mcp[i] + ")</span>";
   }else{
    if(cota_corte==dcp[i]){
     momento_emp += mcp[i]*(lng-dcp[i])/2;
     fuerza_emp += mcp[i]/2;
     cgt+=mcp[i]/2;
     texto1 = texto1 + " + <span class=\"eq_crpt\">(" + mcp[i] + ") / 2</span>";
     texto2 = texto2 + " + <span class=\"eq_crpt\">((" + lng + " - " + dcp[i] + ") × " + mcp[i] + ") / 2</span>";
    }
   }
  }
 }
 for(i in dmp){
  if(ap){ //A la izquierda
   if(cota_corte > dmp [i]){
    momento_emp -= mmp [i];
    texto2 = texto2 + " - <span class=\"eq_mmpt\">(" + mcp[i] + ")</span>";
   }
   if(cota_corte == dmp [i]){
    momento_emp -= mmp [i]/2;
    texto2 = texto2 + " - <span class=\"eq_mmpt\">(" + mcp[i] + ") / 2</span>";
   }
  }else{
   if(cota_corte < dmp [i]){
    momento_emp += mmp [i];
    texto2 = texto2 + " - <span class=\"eq_mmpt\">(" + mcp[i] + ")</span>";
   }
   if(cota_corte == dmp [i]){
    momento_emp += mmp [i]/2;
    texto2 = texto2 + " - <span class=\"eq_mmpt\">(" + mcp[i] + ") / 2</span>";
   }
  }
 }
 for(i in icc){
  if(ap){ //A la izquierda
   if(cota_corte > fcc[i]){
    float_tmpA = fcc[i] - icc[i]; //Largo de la carga
    float_tmpB = float_tmpA * mcc[i]; //Magnitud de la carga
    fuerza_emp += float_tmpB;
    cgt += float_tmpB;
    float_tmpA /= 2;
    float_tmpA += icc[i];
    momento_emp += float_tmpA * float_tmpB;
    float_tmpA = fcc[i] - icc[i]; //largo
    texto1 = texto1 + " + <span class=\"eq_crcc\">(" + mcc[i] + " × (" + fcc[i] + " - " + icc[i] + "))</span>";
    texto2 = texto2 + " + <span class=\"eq_crcc\">((" + icc[i] + " + (" + float_tmpA + " / 2)) × " + mcc[i] + " × " + float_tmpA + ")</span>";
   }else{
    if(cota_corte > icc[i]){
     float_tmpA = cota_corte - icc[i]; //Largo de la carga
     float_tmpB = float_tmpA * mcc[i]; //Magnitud de la carga
     fuerza_emp += float_tmpB;
     cgt += float_tmpB;
     float_tmpA /= 2;
     float_tmpA += icc[i]; //Distancia del punto de aplicación al empotramiento
     momento_emp += float_tmpA * float_tmpB;
     float_tmpA = fcc[i] - icc[i]; //largo
     texto1 = texto1 + " + <span class=\"eq_crcc\">(" + mcc[i] + " × (" + cota_corte + " - " + icc[i] + "))</span>";
     texto2 = texto2 + " + <span class=\"eq_crcc\">((" + icc[i] + " + (" + float_tmpA + " / 2)) × " + mcc[i] + " × " + float_tmpA + ")</span>";
    }
   }
  }else{ //Apoyo al otro lado, a la derecha
   if(cota_corte < icc[i]){
    float_tmpA = fcc[i] - icc[i]; //largo
    float_tmpB = float_tmpA * mcc[i];
    fuerza_emp += float_tmpB;
    cgt += float_tmpB;
    float_tmpA /= 2;
    float_tmpA = lng - icc[i] - float_tmpA;
    momento_emp += float_tmpA * float_tmpB;
    float_tmpA = fcc[i] - icc[i]; //largo
    texto1 = texto1 + " + <span class=\"eq_crcc\">(" + mcc[i] + " × (" + fcc[i] + " - " + icc[i] + "))</span>";
    texto2 = texto2 + " + <span class=\"eq_crcc\">((" + lng + " - " + icc[i] + " - (" + float_tmpA + " / 2)) × " + mcc[i] + " × " + float_tmpA + ")</span>";
   }else{
    if(cota_corte < fcc[i]){ //TEMAZO: Darude - Feel the beat
     float_tmpA = fcc[i] - cota_corte;
     float_tmpB = float_tmpA * mcc[i];
     fuerza_emp += float_tmpB;
     cgt += float_tmpB;
     float_tmpA /= 2;
     float_tmpA = lng-cota_corte - float_tmpA;
     momento_emp += float_tmpA * float_tmpB;
     float_tmpA = fcc[i] - icc[i]; //largo
     texto1 = texto1 + " + <span class=\"eq_crcc\">(" + mcc[i] + " × (" + fcc[i] + " - " + cota_corte + "))</span>";
     texto2 = texto2 + " + <span class=\"eq_crcc\">((" + lng + " - " + cota_corte + " - (" + float_tmpA + " / 2)) × " + mcc[i] + " × " + float_tmpA + ")</span>";
    }
   }
  }
 }
 for(i in icv){
  if(ap){ //A la izquierda
   if(cota_corte > fcv[i]){
    largo=fcv[i] - icv[i];
    float_tmpB = largo * (acv[i] + bcv[i]) / 2;
    fuerza_emp += float_tmpB;
    cgt+=float_tmpB;
    if(acv[i] > bcv[i]){   
     crg_trig=largo * (acv[i] - bcv[i]) /2 ;
     crg_rect=largo * bcv[i];
     momento_emp+=(icv[i] + largo / 2) * crg_rect;
     momento_emp+=(icv[i] + largo / 3) * crg_trig;
     texto1 = texto1 + " + <span class=\"eq_crct\">(" + bcv[i] + " × " + largo + ")</span>";
     texto2 = texto2 + " + <span class=\"eq_crct\">((" + icv[i] + " + (" + largo + " / 2)) × " + bcv[i] + " × " + largo + ")</span>";
     var valor_triang = acv[i] - bcv[i]; // No es el área del triángulo sino su altura
     texto1 = texto1 + " + <span class=\"eq_crcv\">(" + mostrar_float(valor_triang,max_cargas) + " × " + largo + " / 2)</span>";
     texto2 = texto2 + " + <span class=\"eq_crcv\">((" + icv[i] + " + (" + largo + " / 3)) × " + mostrar_float(valor_triang,max_cargas) + " × " + largo + " / 2)</span>";
    }else{
     crg_trig = largo * (bcv[i] - acv[i]) / 2;
     crg_rect = largo * acv[i];
     momento_emp += (icv[i] + largo/2) * crg_rect;
     momento_emp += (icv[i] + largo * 2/3) * crg_trig;
     texto1 = texto1 + " + <span class=\"eq_crct\">(" + acv[i] + " × " + largo + ")</span>";
     texto2 = texto2 + " + <span class=\"eq_crct\">((" + icv[i] + " + (" + largo + " / 2)) × " + acv[i] + " × " + largo + ")</span>";
     var valor_triang = bcv[i] - acv[i]; // No es el área del triángulo sino su altura
     texto1 = texto1 + " + <span class=\"eq_crcv\">(" + mostrar_float(valor_triang,max_cargas) + " × " + largo + " / 2)</span>";
     texto2 = texto2 + " + <span class=\"eq_crcv\">((" + icv[i] + " + (" + largo + " × 2 / 3)) × " + mostrar_float(valor_triang,max_cargas) + " × " + largo + " / 2)</span>";
    }
   }else{
    if(cota_corte>icv[i]){//el valor del final, hay que adaptarle al valor que haya donde esté el final del trozo
     valor_cv_der=acv[i]+ (( bcv[i]-acv[i])*(cota_corte-icv[i])/(fcv[i]-icv[i] )) ; pos_cv_der=cota_corte;//Doble parétesis ¡A que me recordará!
     largo=pos_cv_der-icv[i];//                Arriba ((Radical))
     float_tmpB=largo*(acv[i]+valor_cv_der)/2;
     fuerza_emp+=float_tmpB;
     cgt+=float_tmpB;
     if(acv[i]>valor_cv_der){
      crg_trig=largo*(acv[i]-valor_cv_der)/2;
      crg_rect=largo*valor_cv_der;
      momento_emp+=(icv[i]+largo/2)*crg_rect;
      momento_emp+=(icv[i]+largo/3)*crg_trig;
      texto1 = texto1 + " + <span class=\"eq_crct\">(" + mostrar_float(valor_cv_der,max_cargas) + " × " + largo + ")</span>";
      texto2 = texto2 + " + <span class=\"eq_crct\">((" + icv[i] + " + (" + largo + " / 2)) × " + mostrar_float(valor_cv_der,max_cargas) + " × " + largo + ")</span>";
      var valor_triang = acv[i] - valor_cv_der; // No es el área del triángulo sino su altura
      texto1 = texto1 + " + <span class=\"eq_crcv\">(" + mostrar_float(valor_triang,max_cargas) + " × " + largo + " / 2)</span>";
      texto2 = texto2 + " + <span class=\"eq_crcv\">((" + icv[i] + " + (" + largo + " / 3)) × " + mostrar_float(valor_triang,max_cargas) + " × " + largo + " / 2)</span>";
     }else{
      crg_trig=largo*(valor_cv_der-acv[i])/2;
      crg_rect=largo*acv[i];
      momento_emp += (icv[i]+largo/2)*crg_rect;
      momento_emp += (icv[i]+largo*2/3)*crg_trig;
      texto1 = texto1 + " + <span class=\"eq_crct\">(" + acv[i] + " × " + largo + ")</span>";
      texto2 = texto2 + " + <span class=\"eq_crct\">((" + icv[i] + " + (" + largo + " / 2)) × " + acv[i] + " × " + largo + ")</span>";
      var valor_triang = valor_cv_der - acv[i]; // No es el área del triángulo sino su altura
      texto1 = texto1 + " + <span class=\"eq_crcv\">(" + mostrar_float(valor_triang,max_cargas) + " × " + largo + " / 2)</span>";
      texto2 = texto2 + " + <span class=\"eq_crcv\">((" + icv[i] + " + (" + largo + " × 2 / 3)) × " + mostrar_float(valor_triang,max_cargas) + " × " + largo + " / 2)</span>";
     }
    }//sin else, porque si está fuera, no pinta nada la carga en el trozo que se está calculando
   }
  }else{//Apoyo al otro lado, a la derecha
   if(cota_corte<icv[i]){
    largo = fcv[i] - icv[i];//TEMAZO: Jakatta - American dream
    float_tmpB = largo * (acv[i] + bcv[i])/2;
    fuerza_emp += float_tmpB;
    cgt += float_tmpB;
    if(acv[i] > bcv[i]){
     crg_trig = largo * (acv[i]-bcv[i])/2;
     crg_rect = largo * bcv[i];
     momento_emp += (lng-(icv[i] + largo/2)) * crg_rect;
     momento_emp += (lng-(icv[i] + largo/3)) * crg_trig;
     texto1 = texto1 + " + <span class=\"eq_crct\">(" + bcv[i] + " × " + largo + ")</span>";
     texto2 = texto2 + " + <span class=\"eq_crct\">((" + lng + " - " + icv[i] + " - (" + largo + " / 2)) × " + bcv[i] + " × " + largo + ")</span>";
     var valor_triang = (acv[i]-bcv[i]); // No es el área del triángulo sino su altura
     texto1 = texto1 + " + <span class=\"eq_crcv\">(" + mostrar_float(valor_triang,max_cargas) + " × " + largo + " / 2)</span>";
     texto2 = texto2 + " + <span class=\"eq_crcv\">((" + lng + " - " + icv[i] + " - (" + largo + " / 3)) × " + mostrar_float(valor_triang,max_cargas) + " × " + largo + " / 2)</span>";
    }else{
     crg_trig = largo * (bcv[i] - acv[i])/2;
     crg_rect = largo * acv[i];
     momento_emp += (lng - (icv[i] + largo*2/3)) * crg_trig;
     momento_emp += (lng - (icv[i] + largo/2)) * crg_rect;
     texto1 = texto1 + " + <span class=\"eq_crct\">(" + acv[i] + " × " + largo + ")</span>";
     texto2 = texto2 + " + <span class=\"eq_crct\">((" + lng + " - " + icv[i] + " - (" + largo + " / 2)) × " + acv[i] + " × " + largo + ")</span>";
     var valor_triang = (bcv[i] - acv[i]); // No es el área del triángulo sino su altura
     texto1 = texto1 + " + <span class=\"eq_crcv\">(" + mostrar_float(valor_triang,max_cargas) + " × " + largo + " / 2)</span>";
     texto2 = texto2 + " + <span class=\"eq_crcv\">((" + lng + " - " + icv[i] + " - (" + largo + " × 2 / 3)) × " + mostrar_float(valor_triang,max_cargas) + " × " + largo + " / 2)</span>";
    }
   }else{ //A la derecha con la cota de corte pasada
    if(cota_corte<fcv[i]){
     valor_cv_izq = acv[i]+((bcv[i] - acv[i]) * (cota_corte - icv[i]) / (fcv[i] - icv[i])); pos_cv_izq=cota_corte;//Doble parétesis ¡A que me recordará!
     largo = fcv[i] - pos_cv_izq;//Y qué me recordará la linea de arriba... que caña el controlcé&controluve, lo mejor para el autoplagio.
     float_tmpB = largo * (valor_cv_izq + bcv[i])/2;
     fuerza_emp += float_tmpB;
     cgt += float_tmpB;
     if(valor_cv_izq > bcv[i]){//TEMAZO: Scorpia vol. 1 feat. Marian Dacal - By your side
      crg_trig = largo*(valor_cv_izq - bcv[i])/2;
      crg_rect = largo * bcv[i];
      momento_emp += (lng - (pos_cv_izq + (largo/2)))*crg_rect;
      momento_emp += (lng - (pos_cv_izq + (largo/3)))*crg_trig;
      texto1 = texto1 + " + <span class=\"eq_crct\">(" + bcv[i] + " × " + largo + ")</span>";
      texto2 = texto2 + " + <span class=\"eq_crct\">((" + lng + " - " + icv[i] + " - (" + largo + " / 2)) × " + bcv[i] + " × " + largo + ")</span>";
      var valor_triang = (valor_cv_izq - bcv[i]); // No es el área del triángulo sino su altura
      texto1 = texto1 + " + <span class=\"eq_crcv\">(" + mostrar_float(valor_triang,max_cargas) + " × " + largo + " / 2)</span>";
      texto2 = texto2 + " + <span class=\"eq_crcv\">((" + lng + " - " + icv[i] + " - (" + largo + " / 3)) × " + mostrar_float(valor_triang,max_cargas) + " × " + largo + " / 2)</span>";
     }else{
      crg_trig=largo * (bcv[i] - valor_cv_izq) / 2;
      crg_rect=largo * valor_cv_izq;
      momento_emp += (lng-(pos_cv_izq + (largo / 3 * 2 ))) * crg_trig;
      momento_emp += (lng-(pos_cv_izq + (largo / 2))) * crg_rect;
      texto1 = texto1 + " + <span class=\"eq_crct\">(" + mostrar_float(valor_cv_izq,max_cargas) + " × " + largo + ")</span>";
      texto2 = texto2 + " + <span class=\"eq_crct\">((" + lng + " - " + icv[i] + " - (" + largo + " / 2)) × " + mostrar_float(valor_cv_izq,max_cargas) + " × " + largo + ")</span>";
      var valor_triang = (bcv[i] - valor_cv_izq); // No es el área del triángulo sino su altura
      texto1 = texto1 + " + <span class=\"eq_crcv\">(" + mostrar_float(valor_triang,max_cargas) + " × " + largo + " / 2)</span>";
      texto2 = texto2 + " + <span class=\"eq_crcv\">((" + lng + " - " + icv[i] + " - (" + largo + " × 2 / 3)) × " + mostrar_float(valor_triang,max_cargas) + " × " + largo + " / 2)</span>";
     }
    }
   }
  }
 }
 if(control_vacio == texto1){
  texto1 = texto1 + "0";
  texto2 = texto2 + "0";
 }
 texto1 = texto1 + "</div>";
 texto2 = texto2 + "</div>";
 return [fuerza_emp, momento_emp, cgt, texto1, texto2];
}//educir_rot_emptr





/*
Función principal para cálculo de vigas biapoyadas. Esta función también calcula vigas compuestas mediante cotas de corte.

Recibe la longitud de la viga, las cotas de corte (0 y longitud en vigas simples), la distancia de los apoyos (o rótulas en vigas compuestas), la carga que puede estar recibida de otras vigas
en vigas compuestas, la carga total (cgt), las listas con las cargas, el máximo valor de las cargas (para formatear textos) y cadenas de texto para escribir el nombre de los apoyos o rótulas.
*/

function calcular_2apoyos(lng, cota_inicio, cota_fin, apoyoA, apoyoB, mag_rot_izq, mag_rot_der, cgt, mcp, dcp, mmp, dmp, mcc, icc, fcc, acv, bcv, icv, fcv, max_cargas, str1, str2){
var magnappoyoa = 0;
var magnappoyob = 0;

 var texto1 = "<div class=\"eq_calc\">" + str1 + " = ";
 var texto2 = "<div class=\"eq_calc\">" + str2 + " = ";
 var control_vacio = texto1;
 var carga = 1.0;
 var centro = 1.0;
 var largo = 1.0;
 var acv_calc = 1.0;
 var bcv_calc = 1.0;
 var valor_cv_izq, valor_cv_der, pos_cv_izq, pos_cv_der, cargaquevaria;
 var i;
 var extrem_der, extrem_izq;
 if(cota_inicio == 0) extrem_izq=0; else extrem_izq=1;
 if(cota_fin == lng) extrem_der=0; else extrem_der=1;
 var sumaA = 0;
 var sumaB = 0;

  //Cargas en extremos
 if(mag_rot_der != 0){
  sumaA += (cota_fin-apoyoB) * mag_rot_der;
  sumaB += (cota_fin-apoyoA) * mag_rot_der;
  texto1 = texto1 + " + <span class=\"eq_rotl\">((" + cota_fin + " - " + apoyoB + ") × " + mostrar_float(mag_rot_der,max_cargas) + ")</span>";
  texto2 = texto2 + " + <span class=\"eq_rotl\">((" + cota_fin + " - " + apoyoA + ") × " + mostrar_float(mag_rot_der,max_cargas) + ")</span>";
 }
 if(mag_rot_izq != 0){
  sumaA += (cota_inicio-apoyoB) * mag_rot_izq;
  sumaB += (cota_inicio-apoyoA) * mag_rot_izq;
  texto1 = texto1 + " + <span class=\"eq_rotl\">((" + cota_inicio + " - " + apoyoB + ") × " + mostrar_float(mag_rot_izq,max_cargas) + ")</span>";
  texto2 = texto2 + " + <span class=\"eq_rotl\">((" + cota_inicio + " - " + apoyoA + ") × " + mostrar_float(mag_rot_izq,max_cargas) + ")</span>";
 }

  //Cargas puntuales
 for(i in mcp){
  if(cota_inicio==dcp[i] && extrem_izq){  //Carga justo a la izquierda
   sumaA += (dcp[i]-apoyoB)*mcp[i]/2;  //Sólo cuenta media carga, la otra media en la otra parte
   sumaB += (dcp[i]-apoyoA)*mcp[i]/2;
   texto1 = texto1 + " + <span class=\"eq_crpt\">((" + dcp[i] + " - " + apoyoB + ") × " + mcp[i] + ") / 2</span>";
   texto2 = texto2 + " + <span class=\"eq_crpt\">((" + dcp[i] + " - " + apoyoA + ") × " + mcp[i] + ") / 2</span>";
   cgt += mcp[i]/2;
  }
  if(cota_fin==dcp[i] && extrem_der){  //Carga justo a la derecha
   sumaA += (dcp[i]-apoyoB)*mcp[i]/2;
   sumaB += (dcp[i]-apoyoA)*mcp[i]/2;
   texto1 = texto1 + " + <span class=\"eq_crpt\">((" + dcp[i] + " - " + apoyoB + ") × " + mcp[i] + ") / 2</span>";
   texto2 = texto2 + " + <span class=\"eq_crpt\">((" + dcp[i] + " - " + apoyoA + ") × " + mcp[i] + ") / 2</span>";
   cgt += mcp[i]/2;
  }
  if(cota_fin>dcp[i] && cota_inicio<dcp[i]){
   sumaA += (dcp[i]-apoyoB)*mcp[i];
   sumaB += (dcp[i]-apoyoA)*mcp[i];
   texto1 = texto1 + " + <span class=\"eq_crpt\">((" + dcp[i] + " - " + apoyoB + ") × " + mcp[i] + ")</span>";
   texto2 = texto2 + " + <span class=\"eq_crpt\">((" + dcp[i] + " - " + apoyoA + ") × " + mcp[i] + ")</span>";
   cgt += mcp[i];
  }
  if(cota_inicio==dcp[i] && extrem_izq==0){
   sumaA += (dcp[i]-apoyoB)*mcp[i];
   sumaB += (dcp[i]-apoyoA)*mcp[i];
   texto1 = texto1 + " + <span class=\"eq_crpt\">((" + dcp[i] + " - " + apoyoB + ") × " + mcp[i] + ")</span>";
   texto2 = texto2 + " + <span class=\"eq_crpt\">((" + dcp[i] + " - " + apoyoA + ") × " + mcp[i] + ")</span>";
   cgt += mcp[i];
  }
  if(cota_fin==dcp[i] && extrem_der==0){
   sumaA += (dcp[i]-apoyoB)*mcp[i];
   sumaB += (dcp[i]-apoyoA)*mcp[i];
   texto1 = texto1 + " + <span class=\"eq_crpt\">((" + dcp[i] + " - " + apoyoB + ") × " + mcp[i] + ")</span>";
   texto2 = texto2 + " + <span class=\"eq_crpt\">((" + dcp[i] + " - " + apoyoA + ") × " + mcp[i] + ")</span>";
   cgt += mcp[i];
  }
 }

 //Momentos
 for(i in mmp){
  if(cota_inicio==dmp[i] && extrem_izq){
   sumaA -= mmp[i]/2;   sumaB -= mmp[i]/2;
   texto1 = texto1 + " + <span class=\"eq_mmpt\">(" + -mmp[i] + ") / 2</span>";
   texto2 = texto2 + " + <span class=\"eq_mmpt\">(" + -mmp[i] + ") / 2</span>";
  }
  if(cota_fin==dmp[i] && extrem_der){
   sumaA -= mmp[i]/2;   sumaB -= mmp[i]/2;
   texto1 = texto1 + " + <span class=\"eq_mmpt\">(" + -mmp[i] + ") / 2</span>";
   texto2 = texto2 + " + <span class=\"eq_mmpt\">(" + -mmp[i] + ") / 2</span>";
  }
  if(cota_inicio==dmp[i] && extrem_izq==0){
   sumaA -= mmp[i];   sumaB -= mmp[i];
   texto1 = texto1 + " + <span class=\"eq_mmpt\">(" + -mmp[i] + ")</span>";
   texto2 = texto2 + " + <span class=\"eq_mmpt\">(" + -mmp[i] + ")</span>";
  }
  if(cota_fin==dmp[i] && extrem_der==0){
   sumaA -= mmp[i];   sumaB -= mmp[i];
   texto1 = texto1 + " + <span class=\"eq_mmpt\">(" + -mmp[i] + ")</span>";
   texto2 = texto2 + " + <span class=\"eq_mmpt\">(" + -mmp[i] + ")</span>";
  }
  if(cota_fin>dmp[i] && cota_inicio<dmp[i]){
   sumaA -= mmp[i];   sumaB -= mmp[i];
   texto1 = texto1 + " + <span class=\"eq_mmpt\">(" + -mmp[i] + ")</span>";
   texto2 = texto2 + " + <span class=\"eq_mmpt\">(" + -mmp[i] + ")</span>";
  }
 }
  //alert("He pasado por aquí.");

 // Cargas contínuas
 for(i in mcc){
  if(cota_inicio<icc[i]){  // Cuando tiene el inicio y el fin dentro
   if(cota_fin>fcc[i]){
    largo = fcc[i]-icc[i];
    centro = icc[i] + largo/2;
    carga = largo*mcc[i];
    sumaA += (centro - apoyoB) * carga;
    sumaB += (centro - apoyoA) * carga;
    texto1 = texto1 + " + <span class=\"eq_crcc\">(((" + icc[i] + "+" + fcc[i] + ") / 2 - " + apoyoB + ") × " + mcc[i] + " × (" + fcc[i] + "-" + icc[i] + "))</span>";
    texto2 = texto2 + " + <span class=\"eq_crcc\">(((" + icc[i] + "+" + fcc[i] + ") / 2 - " + apoyoA + ") × " + mcc[i] + " × (" + fcc[i] + "-" + icc[i] + "))</span>";
    cgt += carga;
   }else{  // Cuando tiene el fin fuera y el inicio dentro
    if(cota_fin>icc[i]){
     largo = cota_fin-icc[i];
     centro = icc[i] + largo/2;
     carga = largo*mcc[i];
     sumaA += (centro - apoyoB) * carga;
     sumaB += (centro - apoyoA) * carga;
     texto1 = texto1 + " + <span class=\"eq_crcc\">(((" + icc[i] + "+" + cota_fin + ") / 2 - " + apoyoB + ") × " + mcc[i] + " × (" + fcc[i] + "-" + cota_inicio + "))</span>";
     texto2 = texto2 + " + <span class=\"eq_crcc\">(((" + icc[i] + "+" + cota_fin + ") / 2 - " + apoyoA + ") × " + mcc[i] + " × (" + fcc[i] + "-" + cota_inicio + "))</span>";
     cgt += carga;
    }
   }
  }else{
   if(cota_fin>fcc[i]){  // Cuando tiene el inicio fuera y el fin dentro
    if(cota_inicio<fcc[i]){
     largo = fcc[i]-cota_inicio;
     centro = cota_inicio + largo/2;
     carga = largo*mcc[i];
     sumaA += (centro - apoyoB) * carga;
     sumaB += (centro - apoyoA) * carga;
     texto1 = texto1 + " + <span class=\"eq_crcc\">(((" + cota_inicio + "+" + fcc[i] + ") / 2 - " + apoyoB + ") × " + mcc[i] + " × (" + cota_fin + "-" + icc[i] + "))</span>";
     texto2 = texto2 + " + <span class=\"eq_crcc\">(((" + cota_inicio + "+" + fcc[i] + ") / 2 - " + apoyoA + ") × " + mcc[i] + " × (" + cota_fin + "-" + icc[i] + "))</span>";
     cgt += carga;
    }
   }else{  // se sale por ambos lados{
    largo = cota_fin - cota_inicio;
    centro = cota_inicio + largo/2;
    carga = largo*mcc[i];
    sumaA += (centro - apoyoB) * carga;
    sumaB += (centro - apoyoA) * carga;
    texto1 = texto1 + " + <span class=\"eq_crcc\">(((" + cota_inicio + "+" + cota_fin + ") / 2 - " + apoyoB + ") × " + mcc[i] + " × (" + cota_fin + "-" + cota_inicio + "))</span>";
    texto2 = texto2 + " + <span class=\"eq_crcc\">(((" + cota_inicio + "+" + cota_fin + ") / 2 - " + apoyoA + ") × " + mcc[i] + " × (" + cota_fin + "-" + cota_inicio + "))</span>";
    cgt += carga;
   }
  }
 }
 //Cargas variables
 for(i in icv){
  var incluir_estacarga = 1;
  if(cota_inicio <= icv[i]){
   if(cota_fin >= fcv[i]){ //Cuando tiene el inicio y el fin dentro
    valor_cv_izq=acv[i]; pos_cv_izq=icv[i];
    valor_cv_der=bcv[i]; pos_cv_der=fcv[i];
   }else{ //Cuando tiene el fin fuera y el inicio dentro
    if(cota_fin>icv[i]){
     valor_cv_izq=acv[i]; pos_cv_izq=icv[i];
     valor_cv_der=acv[i]+ (( bcv[i]-acv[i])*(cota_fin-icv[i])/(fcv[i]-icv[i] )) ; pos_cv_der=cota_fin; //Doble parétesis ¡A que me recordará!
    }else{
     incluir_estacarga=0; //Es que estaba fuera
    }
   }
  }else{
   if(cota_fin >= fcv[i]){ //Cuando tiene el inicio fuera y el fin dentro
    if(cota_inicio<fcv[i]){
     valor_cv_der=bcv[i]; pos_cv_der=fcv[i];//la linea de abajo está bien
     valor_cv_izq=acv[i]+((bcv[i]-acv[i])*(cota_inicio-icv[i])/(fcv[i]-icv[i])); pos_cv_izq=cota_inicio;
    }else{
     incluir_estacarga=0; //Es que estaba fuera
    }
   }else{//se sale por ambos lados
    largo=fcv[i]-icv[i]; cargaquevaria=bcv[i]-acv[i];
    valor_cv_izq=acv[i]+((bcv[i]-acv[i])*(cota_inicio-icv[i])/(fcv[i]-icv[i])); pos_cv_izq=cota_inicio;
    valor_cv_der=acv[i]+ (cargaquevaria*(cota_fin-icv[i])/largo) ; pos_cv_der=cota_fin;
   }
  }
  largo = pos_cv_der - pos_cv_izq;
  if(incluir_estacarga){
   if(valor_cv_izq < valor_cv_der){  /*  Carga  _^·,_ */
    carga=largo*valor_cv_izq;
    cgt += carga;
    centro=pos_cv_izq + (largo / 2);
    sumaA += (centro - apoyoB) * carga;
    sumaB += (centro - apoyoA) * carga;
    texto1 = texto1 + " + <span class=\"eq_crcv\">(((" + pos_cv_izq + "+" + largo + " / 2) - " + apoyoB + ") × " + mostrar_float(valor_cv_izq,max_cargas) + " × " + largo + ")</span>";
    texto2 = texto2 + " + <span class=\"eq_crcv\">(((" + pos_cv_izq + "+" + largo + " / 2) - " + apoyoA + ") × " + mostrar_float(valor_cv_izq,max_cargas) + " × " + largo + ")</span>";
    carga = largo * (valor_cv_der - valor_cv_izq) / 2;
    cgt += carga;
    centro = pos_cv_izq + largo * 2 / 3;
    sumaA += (centro - apoyoB) * carga;
    sumaB += (centro - apoyoA) * carga;
    texto1 = texto1 + " + <span class=\"eq_crct\">(((" + pos_cv_izq + "+" + largo + " × 2 / 3) - " + apoyoB + ") × " + mostrar_float(valor_cv_der - valor_cv_izq,max_cargas) + " × " + largo + " / 2)</span>";
    texto2 = texto2 + " + <span class=\"eq_crct\">(((" + pos_cv_izq + "+" + largo + " × 2 / 3) - " + apoyoA + ") × " + mostrar_float(valor_cv_der - valor_cv_izq,max_cargas) + " × " + largo + " / 2)</span>";
   }else{
    carga=largo * valor_cv_der;
    cgt += carga;
    centro = pos_cv_izq + (largo / 2);
    sumaA += (centro - apoyoB) * carga;
    sumaB += (centro - apoyoA) * carga;
    texto1 = texto1 + " + <span class=\"eq_crcv\">(((" + pos_cv_izq + "+" + largo + " / 2) - " + apoyoB + ") × " + mostrar_float(valor_cv_der,max_cargas) + " × " + largo + ")</span>";
    texto2 = texto2 + " + <span class=\"eq_crcv\">(((" + pos_cv_izq + "+" + largo + " / 2) - " + apoyoA + ") × " + mostrar_float(valor_cv_der,max_cargas) + " × " + largo + ")</span>";
    carga=largo*(valor_cv_izq-valor_cv_der)/2;
    cgt += carga;
    centro=pos_cv_izq + largo * 1 / 3;
    sumaA += (centro - apoyoB) * carga;
    sumaB += (centro - apoyoA) * carga;
    texto1 = texto1 + " + <span class=\"eq_crct\">(((" + pos_cv_izq + "+" + largo + " / 3) - " + apoyoB + ") × " + mostrar_float(valor_cv_izq - valor_cv_der,max_cargas) + " × " + largo + " / 2)</span>";
    texto2 = texto2 + " + <span class=\"eq_crct\">(((" + pos_cv_izq + "+" + largo + " / 3) - " + apoyoA + ") × " + mostrar_float(valor_cv_izq - valor_cv_der,max_cargas) + " × " + largo + " / 2)</span>";
   }/*if(acv[i]<bcv[i])*/
  }
 }/*for(i=0;i<ncv;i++)*///apoyoA

 sumaA = (sumaA / (apoyoA - apoyoB));
 sumaB = (sumaB / (apoyoB - apoyoA));
 if(control_vacio == texto1){
  texto1 = texto1 + "0";
  texto2 = texto2 + "0";
 }
 texto1 = texto1 + " / (" + apoyoA + " - " + apoyoB + ")</div>";
 texto2 = texto2 + " / (" + apoyoB + " - " + apoyoA + ")</div>";
 return [sumaA, sumaB, cgt, texto1, texto2];
}


//function calc_hiper_integr_desc(tipo, lng, unidades, elasticidad, inercia){
//}
//	 calc_hiper_integr_desc(tipo, lng, unidades, elasticidad, inercia, dapp, yapp, mcp, dcp, mmp, dmp, mcc, icc, fcc, acv, bcv, icv, fcv){//vectof[tam]*= (-1);

function calc_hiper_integr_desc(tipo, lng, unidades, elasticidad, inercia, dapp, yapp, mcp, dcp, mmp, dmp, mcc, icc, fcc, acv, bcv, icv, fcv){ //FILE *archivo;
 var float_temp, float_temp2, float_temp3, largo;//
 //var i, j, k, float_temp_int, temp_int2, temp_int3;
 var napp = dapp.length;
 var ncp = mcp.length;
 var nmp = mmp.length;
 var ncc = mcc.length;
 var ncv = acv.length;

 var tam = napp + 2;// tamaño de la matriz (es cuadrada tam×tam) y el largo del vector.
 if(tipo == 10){
  tam += 2;
 }
 var cgt=0;
 var memptr1, femptr1, memptr2, femptr2;
 var mapp = new Array(napp);
 var matrif = new Array(tam);
 var vectof = new Array(tam);
 for(i=0; i<tam; i++){
  matrif[i] = new Array(tam);
  for(j=0; j<tam; j++){
   matrif[i][j] =0;
  }
  vectof[i]=0;
 }
// empotr |app1 app2 ...
// mom  fz| fuerzas
//  1   0  distancias...
//  0   1   1   1   ...
// Aquí las ecuaciones de flechas sustituidas para un valor dado.
//
 switch(tipo){
  case 7:
   matrif[0][0]=1;   //Momento del empotramiento y el momento de su reacción
   matrif[0][1]=0;   //respecto a su propia posición, que vale cero siempre.
   for(i=0;i<napp;i++){
    matrif[0][i+2]=dapp[i];  //El momento de los apoyos siempre es su distancia.
   }
   matrif[1][0]=0;    //Ecuación de fuerzas, el momento del empotramiento es cero
   for(i=1;i<tam;i++){  //El resto de apoyos y la reacción del empotramiento es uno.
    matrif[1][i]=1;   //Poner unos en la segunda fila.
   }
  break;
  case 8://Como en las vigas 'i' se calculan dando la vuelta a la viga
   matrif[0][0]=1;   //Momento del empotramiento y el momento de su reacción
   matrif[0][1]=0;   //respecto a su propia posición, que vale cero siempre.
   temp_int3=tam-1;   //se da la vuelta a sus distancias
   for(i=0;i<napp;i++){
    temp_int2=temp_int3-i;
    matrif[0][temp_int2]=lng-dapp[i];
   }
   matrif[1][0]=0;   //Ecuación de fuerzas, el momento del empotramiento es cero
   for(i=1;i<tam;i++){   //El resto de apoyos y la reacción del empotramiento es uno.
    matrif[1][i]=1;   //Poner unos en la segunda fila.
   }
  break;
  case 9:
   for(i=0;i<napp;i++){
    matrif[i][0]=6;
    matrif[i][1]=dapp[i]*6;
   }
   for(i=0;i<napp;i++){
    matrif[napp][i+2]=dapp[i];   //El momento de los apoyos siempre es su distancia.
   }
   //alert("case 9");
    matrif[napp+1][i+2]=1;   //Suma de fuerzas verticales  <-- Revisar esto
  break;
  case 10://   |---+--+--+---|
   matrif[0][0]=1;   //Momento del empotramiento y el momento de su reacción
   matrif[0][1]=0;   //respecto a su propia posición, que vale cero siempre.
   matrif[0][2]=1;   //Momento del empotramiento y el momento de su reacción
   matrif[0][3]=lng;   //respecto a su propia posición, que vale cero siempre.
   for(i=0;i<napp;i++){
    matrif[0][i+4]=dapp[i];   //El momento de los apoyos siempre es su distancia.
   }
   matrif[1][0]=0;   //Ecuación de fuerzas, el momento del empotramiento es cero
   for(i=3;i<tam;i++){   //El resto de apoyos y la reacción del empotramiento es uno.
    matrif[1][i]=1;   //Poner unos en la segunda fila.
   }
   matrif[1][1]=1;
  break;
 }
 //el vectof... donde irían los términos independientes, cargas y desplazamientos prescritos.
 switch(tipo){
  case 7:
   for(i in mcp){
    vectof[1]+=mcp[i];//Se suman las fuerzas creadas por las cargas...
    cgt+=mcp[i];
    vectof[0]+=dcp[i]*mcp[i];//... y sus momentos.
   }
   for(i in mmp){
    vectof[0]-=mmp[i];
   }
   for(i in mcc){
    largo=fcc[i]-icc[i];
    float_temp=largo*mcc[i];
    vectof[1]+=float_temp;
    cgt+=float_temp;
    largo/=2;
    largo+=icc[i];
    vectof[0]+=float_temp*largo;
   }
   for(i in icv){
    largo=fcv[i]-icv[i];
    float_temp=largo*(bcv[i]+acv[i])/2;
    vectof[1]+=float_temp;
    cgt+=float_temp;
    if(acv[i]>bcv[i]){
     float_temp=largo*(acv[i]-bcv[i])/2;
     float_temp2=largo/3;
     float_temp2+=icv[i];
     vectof[0]+=float_temp*float_temp2;//Esto es el triángulo
     float_temp=largo*bcv[i];
     float_temp2=largo/2;
     float_temp2+=icv[i];
     vectof[0]+=float_temp*float_temp2;//Esto es el rectángulo
    }else{
     float_temp=largo*(bcv[i]-acv[i])/2;
     float_temp2=-largo/3;// float_temp2*=2;
     float_temp2+=fcv[i];
     vectof[0]+=float_temp*float_temp2;//Esto es el triángulo
     float_temp=largo*acv[i];
     float_temp2=largo/2;
     float_temp2+=icv[i];
     vectof[0]+=float_temp*float_temp2;//Esto es el rectángulo
    }
   }
   for(var i=0; i < napp; i++){
    //var temp_int2 = 2;
    var temp_int2 = parseInt(2) + parseInt(i);
    matrif[temp_int2][0]= -dapp[i]*dapp[i]*3;
    matrif[temp_int2][1]= dapp[i]*dapp[i]*dapp[i];
    for(var j=0; j < napp; j++){   //El resto de líneas
     float_temp=dapp[i]-dapp[j];
     if(float_temp >= 0)
      matrif[2+i][j+2]= float_temp*float_temp*float_temp;
    }   //Meter el descenso del apoyo
    vectof[temp_int2] = yapp[i] * elasticidad * inercia * 6;
    for(j=0; j < mcp.length; j++){
     float_temp=dcp[j]-dapp[i];
     if(float_temp <= 0){
      vectof[2+i]-=float_temp*float_temp*float_temp*mcp[j];
     }
    }
    for(j in mmp){
     float_temp=dmp[j]-dapp[i];
     if(float_temp <= 0){
      vectof[2+i]+=float_temp*float_temp*mmp[j]*3;
     }
    }
    for(j in mcc){
     float_temp=icc[j]-dapp[i];
     if(float_temp <= 0){
      float_temp2=float_temp*float_temp;
      vectof[2+i]+=float_temp2*float_temp2*mcc[j]/4;
     }
     float_temp=fcc[j]-dapp[i];
     if(float_temp <= 0){
      float_temp2=float_temp*float_temp;
      vectof[2+i]-=float_temp2*float_temp2*mcc[j]/4;
     }
    }
    for(j in acv){
     float_temp=icv[j]-dapp[i];//Distancia apoyo carga, para la ecuación elástica
     largo=icv[j]-fcv[j];
     if(float_temp <= 0){
      float_temp3=float_temp*float_temp;   //Tan requeteoptimizado, que no me entero ni yo que lo he escrito, bueno es float_temp al cuadrado
      float_temp2=(bcv[j]-acv[j])/largo;   //float_temp2->parte triangular--creo que lng debe ser largo, está mal
      vectof[2+i]+=float_temp3*float_temp3*float_temp*float_temp2/20;
      float_temp2=acv[j];   //¿Pero esto que es?
      vectof[2+i]+=float_temp3*float_temp3*float_temp2/4;
     }
     float_temp=fcv[j]-dapp[i];
     if(float_temp <= 0){
      float_temp3=float_temp*float_temp;
      float_temp2=(bcv[j]-acv[j])/largo;
      vectof[2+i]-=float_temp3*float_temp3*float_temp*float_temp2/20;
      float_temp2=bcv[j];
      vectof[2+i]-=float_temp3*float_temp3*float_temp2/4;
     }
    }
   }
   var texto_matriz = escribir_matriz(matrif, vectof,["M Emptr. 1","F Emptr. 1"]);
   document.getElementById('calc_int').innerHTML = "<h4>" + txt_res[EQ_REACCIONES] + "</h4>" + texto_matriz;
   var vect_resultado = resolver_sis_ecuac(matrif, vectof);
   memptr1 = vect_resultado[0];
   femptr1 = vect_resultado[1];
   memptr2 = 0;
   femptr2 = 0;
   for(i=0; i<napp; i++){   //El resto de líneas
    mapp[i] = vect_resultado[i+2];
   }
   //alert("texto-" + mapp[0] + " " + mapp[1] + " " + mapp[2] + " " + typeof i);
   //return [cgt, memptr1, femptr1, memptr2, femptr2, mapp];
  break;
  case 8:
   for(i=0;i<ncp;i++){
    float_temp=mcp[i];
    vectof[1]+=float_temp;
    cgt+=float_temp;
    vectof[0]+=(lng-dcp[i])*float_temp;
   }
   for(i=0;i<nmp;i++)
    vectof[0]+=mmp[i];
   for(i=0;i<ncc;i++){
    largo=fcc[i]-icc[i];
    float_temp=largo*mcc[i];
    vectof[1]+=float_temp;
    cgt+=float_temp;
    largo/=2;
    largo+=lng-fcc[i];
    vectof[0]+=float_temp*largo;
   }
   for(i=0;i<ncv;i++){
    largo=fcv[i]-icv[i];
    float_temp=largo*(bcv[i]+acv[i])/2;
    vectof[1]+=float_temp;
    cgt+=float_temp;
    if(acv[i]>bcv[i]){
     float_temp=largo*(acv[i]-bcv[i])/2;
     float_temp2=largo/3; float_temp2*=2;
     float_temp2+=lng-fcv[i];
     vectof[0]+=float_temp*float_temp2;//Esto es el triángulo
     float_temp=largo*bcv[i];
     float_temp2=largo/2;
     float_temp2+=lng-fcv[i];
     vectof[0]+=float_temp*float_temp2;//Esto es el rectángulo
    }else{
     float_temp=largo*(bcv[i]-acv[i])/2;
     float_temp2=largo/3;
     float_temp2+=lng-fcv[i];
     vectof[0]+=float_temp*float_temp2;//Esto es el triángulo
     float_temp=largo*acv[i];
     float_temp2=largo/2;
     float_temp2+=lng-fcv[i];
     vectof[0]+=float_temp*float_temp2;//Esto es el rectángulo
    }
   }
   //float_temp_i=napp-2;
   temp_int3=tam-1;
   for(i=0;i<napp;i++){
    temp_int2=temp_int3-i;
    float_temp=lng-dapp[i];
    float_temp2=float_temp*float_temp;//Optimizo
    matrif[temp_int2][0]= -float_temp*float_temp*3;//Está bien, creo
    matrif[temp_int2][1]= float_temp*float_temp*float_temp;
    for(j=0;j<napp;j++){//El resto de líneas
     float_temp=dapp[i]-dapp[j];
     if(float_temp >= 0){
      temp_int2=temp_int3-i;
      matrif[tam-j-1][tam-1-i]= float_temp*float_temp*float_temp;
     }
    } //Meter el descenso del apoyo
    vectof[temp_int2] = yapp[i] * elasticidad * inercia * 6;
    for(j=0;j<ncp;j++){
     float_temp=dapp[i]-dcp[j];
     if(float_temp <= 0){
      temp_int2=temp_int3-i;
      vectof[temp_int2]-=float_temp*float_temp*float_temp*mcp[j];
     }
    }
    for(j=0;j<nmp;j++){
     float_temp=dmp[j]-dapp[i];
     if(float_temp >= 0){
      temp_int2=temp_int3-i;
      vectof[temp_int2]-=float_temp*float_temp*mmp[j]*3;
     }
    }
    for(j=0;j<ncc;j++){
     float_temp=dapp[i]-icc[j];//Aquí podría ir cambiado respecto al modo h, aunque ahora ya lo tengo bien
     if(float_temp <= 0){
      float_temp2=float_temp*float_temp;
      temp_int2=temp_int3-i;
      vectof[temp_int2]-=float_temp2*float_temp2*mcc[j]/4;
     }
     float_temp=dapp[i]-fcc[j];
     if(float_temp <= 0){
      float_temp2=float_temp*float_temp;
      temp_int2=temp_int3-i;
      vectof[temp_int2]+=float_temp2*float_temp2*mcc[j]/4;
     }
    }
    for(j=0;j<ncv;j++){//TEMAZO: Dj Ceres y Dj Made - SHAKRAL - Why (Original MiX)
     largo=icv[j]-fcv[j];
     float_temp=fcv[j]-dapp[i];
     if(float_temp > 0){
      float_temp3=float_temp*float_temp;
      float_temp2=(acv[j]-bcv[j])/largo;
      temp_int2=temp_int3-i;
      vectof[temp_int2]-=float_temp3*float_temp3*float_temp*float_temp2/20;
      float_temp2=bcv[j];
      temp_int2=temp_int3-i;
      vectof[temp_int2]+=float_temp3*float_temp3*float_temp2/4;
     }
     float_temp=icv[j]-dapp[i];
     if(float_temp > 0){
      float_temp3=float_temp*float_temp;
      float_temp2=(acv[j]-bcv[j])/largo;
      temp_int2=temp_int3-i;
      vectof[temp_int2]+=float_temp3*float_temp3*float_temp*float_temp2/20;
      float_temp2=acv[j];
      temp_int2=temp_int3-i;
      vectof[temp_int2]-=float_temp3*float_temp3*float_temp2/4;
     }
    }
   }
   alert("texto-" + ncp + " " + typeof ncp);
   var texto_matriz = escribir_matriz(matrif, vectof,["M Emptr. 2","F Emptr. 2"]);
   document.getElementById('calc_int').innerHTML = "<h4>" + txt_res[EQ_REACCIONES] + "</h4>" + texto_matriz;
   var vect_resultado = resolver_sis_ecuac(matrif, vectof);
   memptr1 = 0;
   femptr1 = 0;
   memptr2 = -vect_resultado[0];
   femptr2 = vect_resultado[1];
   for(i=0; i<napp; i++){
    mapp[napp - i - 1] = vect_resultado[i+2];
   }
  break;
  case 9:
   for(i=0;i<ncp;i++){   //napp posición de la ecuación de momentos
    vectof[napp+1]+=mcp[i];   //Se suman las fuerzas creadas por las cargas...
    cgt+=mcp[i];
    vectof[napp]+=dcp[i]*mcp[i];//... y sus momentos.
   }
   for(i=0;i<nmp;i++)
    vectof[napp]-=mmp[i];
   for(i=0;i<ncc;i++){
    largo=fcc[i]-icc[i];
    float_temp=largo*mcc[i];
    vectof[napp+1]+=float_temp;
    cgt+=float_temp;
    largo/=2;
    largo+=icc[i];
    vectof[napp]+=float_temp*largo;
   }
   for(i=0;i<ncv;i++){
    largo=fcv[i]-icv[i];
    float_temp=largo*(bcv[i]+acv[i])/2;
    vectof[napp+1]+=float_temp;
    cgt+=float_temp;
    if(acv[i]>bcv[i]){
     float_temp=largo*(acv[i]-bcv[i])/2;
     float_temp2=largo/3;
     float_temp2+=icv[i];
     vectof[napp]+=float_temp*float_temp2;//Esto es el triángulo
     float_temp=largo*bcv[i];
     float_temp2=largo/2;
     float_temp2+=icv[i];
     vectof[napp]+=float_temp*float_temp2;//Esto es el rectángulo
    }else{
     float_temp=largo*(bcv[i]-acv[i])/2;
     float_temp2=-largo/3;// float_temp2*=2;
     float_temp2+=fcv[i];
     vectof[napp]+=float_temp*float_temp2;//Esto es el triángulo
     float_temp=largo*acv[i];
     float_temp2=largo/2;
     float_temp2+=icv[i];
     vectof[napp]+=float_temp*float_temp2;//Esto es el rectángulo
    }
   }
   //float_temp_i=napp-2;
   for(i=0;i<napp;i++){

///Me llego por aquí


    temp_int2=2+i;
    matrif[napp][i+2]= dapp[i];
    matrif[napp+1][i+2]= 1;
    for(j=0;j<napp;j++){//El resto de líneas
     float_temp=dapp[i]-dapp[j];
     if(float_temp >= 0)
      matrif[i][j+2]= float_temp*float_temp*float_temp;
    }//Meter el descenso del apoyo
    vectof[i] = yapp[i] * elasticidad * inercia * 6;
    for(j=0;j<ncp;j++){
     float_temp=dcp[j]-dapp[i];
     if(float_temp <= 0)
      vectof[i]-=float_temp*float_temp*float_temp*mcp[j];
    }
    for(j=0;j<nmp;j++){
     float_temp=dmp[j]-dapp[i];
     if(float_temp <= 0)
      vectof[i]+=float_temp*float_temp*mmp[j]*3;
    }
    for(j=0;j<ncc;j++){
     float_temp=icc[j]-dapp[i];
     if(float_temp <= 0){
      float_temp2=float_temp*float_temp;
      vectof[i]+=float_temp2*float_temp2*mcc[j]/4;
     }
     float_temp=fcc[j]-dapp[i];
     if(float_temp <= 0){
      float_temp2=float_temp*float_temp;
      vectof[i]-=float_temp2*float_temp2*mcc[j]/4;
     }
    }
    for(j=0;j<ncv;j++){
     float_temp=icv[j]-dapp[i];//Distancia apoyo carga, para la ecuación elástica
     largo=icv[j]-fcv[j];
     if(float_temp <= 0){
      float_temp3=float_temp*float_temp;//Tan requeteoptimizado, que no me entero ni yo que lo he escrito, bueno es float_temp al cuadrado
      float_temp2=(bcv[j]-acv[j])/largo;//float_temp2->parte triangular--creo que lng debe ser largo, está mal
      vectof[i]+=float_temp3*float_temp3*float_temp*float_temp2/20;
      float_temp2=acv[j];//¿Pero esto que es?
      vectof[i]+=float_temp3*float_temp3*float_temp2/4;
     }
     float_temp=fcv[j]-dapp[i];
     if(float_temp <= 0){
      float_temp3=float_temp*float_temp;
      float_temp2=(bcv[j]-acv[j])/largo;
      vectof[i]-=float_temp3*float_temp3*float_temp*float_temp2/20;
      float_temp2=bcv[j];
      vectof[i]-=float_temp3*float_temp3*float_temp2/4;
     }
    }
   }
   var texto_matriz = escribir_matriz(matrif, vectof,["EI&sigma;<sub>0</sub>","EIY<sub>0</sub>"]);
   document.getElementById('calc_int').innerHTML = "<h4>" + txt_res[EQ_REACCIONES] + "</h4>" + texto_matriz;
   var vect_resultado = resolver_sis_ecuac(matrif, vectof);
   memptr1 = vect_resultado[0];
   femptr1 = vect_resultado[1];
   //alert("pwnage" + vect_resultado[0] + " " + vect_resultado[1])
   memptr2 = 0;
   femptr2 = 0;
   for(i=0; i<napp; i++){
    mapp[i] = vect_resultado[i+2];
   }
  break;
  case 10:////////////////////////////////////////////////Viga biempotrada
   matrif[2][1]= lng*lng*3;
   matrif[2][0]= -lng*6;
   matrif[3][1]= lng*lng*lng;
   matrif[3][0]= -lng*lng*3;
   for(i=0;i<ncp;i++){
    vectof[1]+=mcp[i];  //Se suman las fuerzas creadas por las cargas...
    cgt+=mcp[i];
    vectof[0]+=dcp[i]*mcp[i];  //... y sus momentos.
    float_temp=lng-dcp[i];
    vectof[3]+=float_temp*float_temp*float_temp*mcp[i];
    vectof[2]+=float_temp*float_temp*mcp[i]*3;
   }
   for(i=0;i<nmp;i++){
    vectof[0]-=mmp[i];
    float_temp=lng-dmp[i];
    vectof[3]+=float_temp*float_temp*mmp[i]*3;
    vectof[2]+=float_temp*mmp[i]*6;
   }
   for(i=0;i<ncc;i++){
    largo=fcc[i]-icc[i];
    float_temp=largo*mcc[i];
    vectof[1]+=float_temp;
    cgt+=float_temp;
    largo/=2;
    largo+=icc[i];
    vectof[0]+=float_temp*largo;
    //flecha empotramiento
    float_temp=lng-icc[i];
    float_temp2=float_temp*float_temp;
    vectof[3]+=float_temp2*float_temp2*mcc[i]/4;
    vectof[2]+=float_temp2*float_temp*mcc[i];
    float_temp=lng-fcc[i];
    float_temp2=float_temp*float_temp;
    vectof[3]-=float_temp2*float_temp2*mcc[i]/4;
    vectof[2]-=float_temp2*float_temp*mcc[i];
   }
   for(i=0;i<ncv;i++){
    largo=fcv[i]-icv[i];
    float_temp=largo*(bcv[i]+acv[i])/2;
    vectof[1]+=float_temp;
    cgt+=float_temp;
    if(acv[i]>bcv[i]){
     float_temp=largo*(acv[i]-bcv[i])/2;
     float_temp2=largo/3;
     float_temp2+=icv[i];
     vectof[0]+=float_temp*float_temp2;//Esto es el triángulo
     float_temp=largo*bcv[i];
     float_temp2=largo/2;
     float_temp2+=icv[i];
     vectof[0]+=float_temp*float_temp2;//Esto es el rectángulo
    }else{
     float_temp=largo*(bcv[i]-acv[i])/2;
     float_temp2=-largo/3;// float_temp2*=2;
     float_temp2+=fcv[i];
     vectof[0]+=float_temp*float_temp2;//Esto es el triángulo
     float_temp=largo*acv[i];
     float_temp2=largo/2;
     float_temp2+=icv[i];
     vectof[0]+=float_temp*float_temp2;//Esto es el rectángulo
    }
    float_temp=lng-icv[i];
    float_temp2=float_temp*float_temp;
    vectof[3]+=float_temp2*float_temp2*acv[i]/4;
    vectof[2]+=float_temp2*float_temp*acv[i];
    float_temp3=(bcv[i]-acv[i])/largo;
    vectof[3]+=float_temp2*float_temp2*float_temp*float_temp3/20;
    vectof[2]+=float_temp2*float_temp2*float_temp3/4;
    float_temp=lng-fcv[i];
    float_temp3=(bcv[i]-acv[i])/largo;
    float_temp2=float_temp*float_temp;
    vectof[3]-=float_temp2*float_temp2*bcv[i]/4;
    vectof[2]-=float_temp2*float_temp*bcv[i];
    vectof[3]-=float_temp2*float_temp2*float_temp*float_temp3/20;
    vectof[2]-=float_temp2*float_temp2*float_temp3/4;
   }
   for(i=0;i<napp;i++){
    temp_int2=4+i;
    matrif[temp_int2][0]= -dapp[i]*dapp[i]*3;
    matrif[temp_int2][1]= dapp[i]*dapp[i]*dapp[i];
     float_temp=lng-dapp[i];
     matrif[2][4+i]= float_temp*float_temp*3;
     matrif[3][4+i]= float_temp*float_temp*float_temp;
    for(j=0;j<napp;j++){//El resto de líneas
     float_temp=dapp[i]-dapp[j];
     if(float_temp >= 0)
      matrif[4+i][j+4]= float_temp*float_temp*float_temp;  //Actualizado, los apoyos irían a partir de la cuarta fila.
    }  //Meter el descenso del apoyo
    vectof[temp_int2] = yapp[i] * elasticidad * inercia * 6;
    for(j=0;j<ncp;j++){
     float_temp=dcp[j]-dapp[i];
     if(float_temp <= 0)
      vectof[4+i]-=float_temp*float_temp*float_temp*mcp[j];
    }
    for(j=0;j<nmp;j++){
     float_temp=dmp[j]-dapp[i];
     if(float_temp <= 0)
      vectof[4+i]+=float_temp*float_temp*mmp[j]*3;
    }
    for(j=0;j<ncc;j++){
     float_temp=icc[j]-dapp[i];
     if(float_temp <= 0){
      float_temp2=float_temp*float_temp;
      vectof[4+i]+=float_temp2*float_temp2*mcc[j]/4;
     }
     float_temp=fcc[j]-dapp[i];
     if(float_temp <= 0){
      float_temp2=float_temp*float_temp;
      vectof[4+i]-=float_temp2*float_temp2*mcc[j]/4;
     }
    }
    for(j=0;j<ncv;j++){
     float_temp=icv[j]-dapp[i];//Distancia apoyo carga, para la ecuación elástica
     largo=icv[j]-fcv[j];
     if(float_temp <= 0){
      float_temp3=float_temp*float_temp;  //Tan requeteoptimizado, que no me entero ni yo que lo he escrito, bueno es float_temp al cuadrado
      float_temp2=(bcv[j]-acv[j])/largo;  //float_temp2->parte triangular--creo que lng debe ser largo, está mal
      vectof[4+i]+=float_temp3*float_temp3*float_temp*float_temp2/20;
      float_temp2=acv[j];  //¿Pero esto que es?
      vectof[4+i]+=float_temp3*float_temp3*float_temp2/4;
     }
     float_temp=fcv[j]-dapp[i];
     if(float_temp <= 0){
      float_temp3=float_temp*float_temp;
      float_temp2=(bcv[j]-acv[j])/largo;
      vectof[4+i]-=float_temp3*float_temp3*float_temp*float_temp2/20;
      float_temp2=bcv[j];
      vectof[4+i]-=float_temp3*float_temp3*float_temp2/4;
     }
    }
   }
   var texto_matriz = escribir_matriz(matrif, vectof,[txt_res[EMPOTRM_M] + " 1",txt_res[EMPOTRM_F] + " 1",txt_res[EMPOTRM_M] + " 2",txt_res[EMPOTRM_F] + " 2"]);
   document.getElementById('calc_int').innerHTML = "<h4>" + txt_res[EQ_REACCIONES] + "</h4>" + texto_matriz;
   var vect_resultado = resolver_sis_ecuac(matrif, vectof);
   memptr1 = vect_resultado[0];
   femptr1 = vect_resultado[1];
   memptr2 = -vect_resultado[2];
   femptr2 = vect_resultado[3];
   for(i=0; i<napp; i++){
    mapp[i] = vect_resultado[i+4];
   }
  break;
 }
 return [cgt, memptr1, femptr1, memptr2, femptr2, mapp];
}










function calcular(){
 calcular_proceso(arr_cargas_puntuales_mag, arr_cargas_puntuales_pos, arr_momentos_puntuales_mag, arr_momentos_puntuales_pos, arr_cargas_continuas_mag, arr_cargas_continuas_pos_A, arr_cargas_continuas_pos_B, arr_cargas_variables_mag_A, arr_cargas_variables_mag_B, arr_cargas_variables_pos_A, arr_cargas_variables_pos_B);
}

function calcular_proceso(mcp, dcp, mmp, dmp, mcc, icc, fcc, acv, bcv, icv, fcv){
 var i = 0;
 var lng = parseFloat(document.datos_viga.longitud.value);
 var elasticidad = parseFloat(document.datos_viga.elasticidad.value);
 var inercia = parseFloat(document.datos_viga.inercia.value);
 if(lng <= 0 || isNaN(lng) || !isFinite(lng)){
  lng = 1;
 }
 if(elasticidad <= 0 || isNaN(elasticidad) || !isFinite(elasticidad)){
  elasticidad = 1;
 }
 if(inercia <= 0 || isNaN(inercia) || !isFinite(inercia)){
  inercia = 1;
 }
 var unidades = 'I';
 var apoyos_f = new Array(10);
 var femptr1 = 0; // Fuerza empotramiento
 var memptr1 = 0; // Momento empotramiento
 var femptr2 = 0; // Fuerza empotramiento
 var memptr2 = 0; // Momento empotramiento
 var cgt = 0; // Carga total
 var temp_cgt = 0; // Quizás innecesario


 var vector_max = max_cargas(mcp, mmp, mcc, acv, bcv);
 var max_general = vector_max[4];


 // Esto lee los campos con las variables principales de la viga:
 var vector_datos = leer_viga_y_apoyos(lng);
 var tipo = vector_datos[0];
 var subtipo = vector_datos[1];
 var apoyos_d = vector_datos[2];
 var apoyos_y = vector_datos[3];

 var maa_temp = 0; var mab_temp = 0; var mac_temp = 0; var mad_temp = 0; var mae_temp = 0; var maf_temp = 0;
 var maa = 0; var mab = 0; var mac = 0; var mad = 0; var mae = 0; var maf = 0;
 var daa = apoyos_d[0]; var dab = apoyos_d[1]; var dac = apoyos_d[2]; var dad = apoyos_d[3]; var dae = apoyos_d[4]; var daf = apoyos_d[5];


 // Variables para recibir los resultados:
 var resultado_apoyos = new Array(3);
 var resultado_emptr = new Array(3);
 var ctes_gir_tmp, ctes_def_tmp;

  //alert("ncp " + ncp + "valor " + dcp[0] + "valor " + mcp[0] );
 switch(tipo){
  case 0:
   // Calcular reacciones en apoyos y tomar el resultado
   resultado_apoyos = calcular_2apoyos(lng, 0, lng, apoyos_d[0], apoyos_d[1], 0, 0, 0, mcp, dcp, mmp, dmp, mcc, icc, fcc, acv, bcv, icv, fcv, max_general, txt_may[APOYO] + " 1", txt_may[APOYO] + " 2");
   apoyos_f[0] = resultado_apoyos[0];
   apoyos_f[1] = resultado_apoyos[1];
   cgt = resultado_apoyos[2];
   //var texto = "<span>Apoyo 1: " + apoyos_f[0] + "<br>Apoyo 2: " + apoyos_f[1] + "<br>Total: " + cgt + "</span>";
   var texto = "<table><tr><td>" + txt_may[APOYO] + " 1:</td><td>" + mostrar_float(apoyos_f[0],cgt) + "</td></tr><tr><td>" + txt_may[APOYO] + " 2:</td><td>" + mostrar_float(apoyos_f[1],cgt) + "</td></tr><tr><td>" + txt_may[C_TOTAL] + ":</td><td>" + cgt + "</td></tr></table>";
   document.getElementById('res_apoyos').innerHTML = texto;
   document.getElementById('calc_int').innerHTML = "<h4>" + txt_res[EQ_REACCIONES] + "</h4>" + resultado_apoyos[3] + resultado_apoyos[4];
  break;
  case 1:
   resultado_emptr = calcular_empotramiento(lng, 'i', 0, lng, mcp, dcp, mmp, dmp, mcc, icc, fcc, acv, bcv, icv, fcv, max_general);
   femptr1 = resultado_emptr[0];
   memptr1 = resultado_emptr[1];
   cgt = resultado_emptr[2];
   //var texto = "<span>Fuerza vertical: " + femptr1 + "<br>Momento: " + memptr1 + "</span>";
   var texto = "<table><tr><td>" + txt_res[EMP_IZQ_F] + "</td><td>" + mostrar_float(femptr1,cgt) + "</td></tr><tr><td>" + txt_res[EMP_IZQ_M] + "</td><td>" + mostrar_float(memptr1,cgt) + "</td></tr></table>";
   document.getElementById('res_apoyos').innerHTML = texto;
   document.getElementById('calc_int').innerHTML = "<h4>" + txt_res[EQ_REACCIONES] + "</h4>" + resultado_emptr[3] + resultado_emptr[4];
  break;
  case 2:
   resultado_emptr = calcular_empotramiento(0,   'd', 0, lng, mcp, dcp, mmp, dmp, mcc, icc, fcc, acv, bcv, icv, fcv, max_general);
   femptr2 = resultado_emptr[0];
   memptr2 = resultado_emptr[1];
   cgt = resultado_emptr[2];
   //var texto = "<span>Fuerza vertical: " + femptr1 + "<br>Momento: " + memptr1 + "</span>";
   var texto = "<table><tr><td>" + txt_res[EMP_DER_F] + "</td><td>" + mostrar_float(femptr2,cgt) + "</td></tr><tr><td>" + txt_res[EMP_DER_M] + "</td><td>" + mostrar_float(memptr2,cgt) + "</td></tr></table>";
   document.getElementById('res_apoyos').innerHTML = texto;
   document.getElementById('calc_int').innerHTML = "<h4>" + txt_res[EQ_REACCIONES] + "</h4>" + resultado_emptr[3] + resultado_emptr[4];
  break;
  case 3:  case 4:  case 5:  case 6: // Vigas compuestas
   //alert("Llega hasta aquí" + cortes[resolver_comp[tipo-3][subtipo][i][0] + 1]);
   //alert("Llega hasta aquí" + apoyos_d.length);
   var cortes = apoyos_d.slice(0); // Se copia el vector de apoyos
   cortes.splice(0,0,0); // Se añade 0 al principio
   cortes.push(lng); // Se añade la longitud al final
   var resultado_txt = "<table>";
   var intermedio_txt = "<h4>" + txt_res[EQ_REACCIONES] + "</h4>"; // Texto para reacciones en apoyos o rótulas
   cgt = 0;
   var cgt_trozo = new Array(resolver_comp[tipo-3][subtipo].length); // Vector con cargas totales en cada tramo
   var contar_apoyos = 1;
   var contar_rotulas = 1;
   for(i in resolver_comp[tipo-3][subtipo]){
    resultado_apoyos = calcular_2apoyos(lng, cortes[resolver_comp[tipo-3][subtipo][i][0] + 1], cortes[resolver_comp[tipo-3][subtipo][i][1] + 1], apoyos_d[resolver_comp[tipo-3][subtipo][i][2]],apoyos_d[resolver_comp[tipo-3][subtipo][i][3]], (resolver_comp[tipo-3][subtipo][i][4] == -1 ? 0 : apoyos_f[resolver_comp[tipo-3][subtipo][i][4]]), (resolver_comp[tipo-3][subtipo][i][5] == -1 ? 0 : apoyos_f[resolver_comp[tipo-3][subtipo][i][5]]), 0, mcp, dcp, mmp, dmp, mcc, icc, fcc, acv, bcv, icv, fcv, max_general, (apoyos_rotulas[tipo][subtipo][resolver_comp[tipo-3][subtipo][i][2]] ? (txt_may[APOYO] + " " + contar_apoyos++) : (txt_may[ROTULA] + " " + contar_rotulas++)), (apoyos_rotulas[tipo][subtipo][resolver_comp[tipo-3][subtipo][i][3]] ? (txt_may[APOYO] + " " + contar_apoyos++) : (txt_may[ROTULA] + " " + contar_rotulas++)));
    apoyos_f[resolver_comp[tipo-3][subtipo][i][2]] = resultado_apoyos[0];
    apoyos_f[resolver_comp[tipo-3][subtipo][i][3]] = resultado_apoyos[1];
    cgt += resultado_apoyos[2];  
    cgt_trozo[resolver_comp[tipo-3][subtipo][i][6]] = resultado_apoyos[2]; // Carga parcial del tramo correspondiente
    intermedio_txt = intermedio_txt + resultado_apoyos[3] + resultado_apoyos[4];
   }
   //alert('a' + cgt_trozo[1]);
   if(tipo == 3 || tipo == 6){ // Si hay un empotramiento a la izquierda
    resultado_emptr = calcular_empotramiento(apoyos_d[0],'i',apoyos_f[0], lng, mcp, dcp, mmp, dmp, mcc, icc, fcc, acv, bcv, icv, fcv, max_general);
    femptr1 = resultado_emptr[0];
    memptr1 = resultado_emptr[1];
    cgt += resultado_emptr[2];
    cgt_trozo.splice(0,0,resultado_emptr[2]);
    resultado_txt = resultado_txt + "<tr><td>" + txt_res[EMP_IZQ_F] + "</td><td>" + mostrar_float(femptr1,cgt) + "</td></tr><tr><td>" + txt_res[EMP_IZQ_M] + "</td><td>" + mostrar_float(memptr1,cgt) + "</td></tr>";
    intermedio_txt = intermedio_txt + resultado_emptr[3] + resultado_emptr[4];
   }
   if(tipo == 4 || tipo == 6){ // Si hay un empotramiento a la derecha
    var ultima_rot = num_apoyos_tipos[tipo][subtipo] - 1;
    resultado_emptr = calcular_empotramiento(apoyos_d[ultima_rot],'d',apoyos_f[ultima_rot], lng, mcp, dcp, mmp, dmp, mcc, icc, fcc, acv, bcv, icv, fcv, max_general);
    femptr2 = resultado_emptr[0];
    memptr2 = resultado_emptr[1];
    cgt += resultado_emptr[2];
    cgt_trozo.push(resultado_emptr[2]);
    resultado_txt = resultado_txt + "<tr><td>" + txt_res[EMP_DER_F] + "</td><td>" + mostrar_float(femptr2,cgt) + "</td></tr><tr><td>" + txt_res[EMP_DER_M] + "</td><td>" + mostrar_float(memptr2,cgt) + "</td></tr>";
    intermedio_txt = intermedio_txt + resultado_emptr[3] + resultado_emptr[4];
   }
   var apoyo_num = 1;
   var rotula_num = 1;
   for(i in apoyos_d){
    resultado_txt = resultado_txt + "<tr><td>" + (apoyos_rotulas[tipo][subtipo][i] ? (txt_may[APOYO] + " " + apoyo_num) : ("<i>" + txt_may[ROTULA] + " " + rotula_num + "</i>")) + "</td><td>" + mostrar_float(apoyos_f[i],cgt) + "</td></tr>";
    if(apoyos_rotulas[tipo][subtipo][i]){
     apoyo_num++;
    }else{
     rotula_num++;
    }
   }
   resultado_txt = resultado_txt + "</table><h4>" + txt_res[CARGA_TRAMOS] + ":</h4><table>";
   var tramo = 0;
   for(i in cgt_trozo){
    resultado_txt = resultado_txt + "<tr><td>" + txt_res[TRAMO] + " " + tramo + " </td><td>" + mostrar_float(cgt_trozo[i],cgt) + "</td></tr>";
    tramo++;
   }
   resultado_txt = resultado_txt + "<tr><td>" + txt_may[C_TOTAL] + " </td><td>" + cgt + "</td></tr></table>";
   document.getElementById('res_apoyos').innerHTML = resultado_txt;
   document.getElementById('calc_int').innerHTML = intermedio_txt;
  break;
  case 7:
//alert("texto");
//calc_hiper_integr_desc(tipo, lng, unidades, elasticidad, inercia, dapp, yapp, mcp);
   // Devuelve: [cgt, memptr1, femptr1, memptr2, femptr2, mapp]
   //var resultado_ecuaciones = calc_hiper_integr_desc(tipo, lng, unidades, elasticidad, inercia, dapp, yapp, mcp);
   resultado_ecuaciones = calc_hiper_integr_desc(tipo, lng, unidades, elasticidad, inercia, apoyos_d, apoyos_y, mcp, dcp, mmp, dmp, mcc, icc, fcc, acv, bcv, icv, fcv);
   // return [cgt, memptr1, femptr1, memptr2, femptr2, mapp];
   cgt = resultado_ecuaciones[0];
   memptr1 = resultado_ecuaciones[1];
   femptr1 = resultado_ecuaciones[2];
   memptr2 = resultado_ecuaciones[3];
   femptr2 = resultado_ecuaciones[4];
   apoyos_f = resultado_ecuaciones[5];
   //var texto = "<span>Fuerza vertical (emp. izq.): " + femptr1 + "<br>Momento (emp. izq.): " + memptr1;
   var texto = "<table><tr><td>" + txt_res[EMP_IZQ_F] + "</td><td>" + mostrar_float(femptr1,cgt) + "</td></tr><tr><td>" + txt_res[EMP_IZQ_M] + "</td><td>" + mostrar_float(memptr1,cgt) + "</td></tr>";
   var ii = 1;
   for(i in apoyos_f){
    texto = texto + "<tr><td>" + txt_may[APOYO] + " " + ii + "</td><td>" + mostrar_float(apoyos_f[i],cgt) + "</td></tr>";
    ii++;
   }
   texto = texto + "<tr><td>" + txt_may[C_TOTAL] + " </td><td>" + cgt + "</td></tr></table>"; // + "<br>" + apoyos_f[0] + "<br>" + apoyos_f[1]
   document.getElementById('res_apoyos').innerHTML = texto;
  break;
  case 8:
   resultado_ecuaciones = calc_hiper_integr_desc(tipo, lng, unidades, elasticidad, inercia, apoyos_d, apoyos_y, mcp, dcp, mmp, dmp, mcc, icc, fcc, acv, bcv, icv, fcv);
   cgt = resultado_ecuaciones[0];
   memptr1 = resultado_ecuaciones[1];
   femptr1 = resultado_ecuaciones[2];
   memptr2 = resultado_ecuaciones[3];
   femptr2 = resultado_ecuaciones[4];
   apoyos_f = resultado_ecuaciones[5];
   //var texto = "<span>Fuerza vertical (emp. der.): " + femptr2 + "<br>Momento (emp. der.): " + memptr2;
   var texto = "<table><tr><td>" + txt_res[EMP_DER_F] + "</td><td>" + mostrar_float(femptr2,cgt) + "</td></tr><tr><td>" + txt_res[EMP_DER_M] + "</td><td>" + mostrar_float(memptr2,cgt) + "</td></tr>";
   var ii = 1;
   for(i in apoyos_f){
    //texto = texto + "<br>Apoyo " + ii + ": " + apoyos_f[i];
    texto = texto + "<tr><td>" + txt_may[APOYO] + " " + ii + "</td><td>" + mostrar_float(apoyos_f[i],cgt) + "</td></tr>";
    ii++;
   }
   //texto = texto + "<br>Carga total: " + cgt + "</span>";
   texto = texto + "<tr><td>" + txt_may[C_TOTAL] + " </td><td>" + cgt + "</td></tr></table>"; // + "<br>" + apoyos_f[0] + "<br>" + apoyos_f[1]
   document.getElementById('res_apoyos').innerHTML = texto;
  break;
  case 9:
   resultado_ecuaciones = calc_hiper_integr_desc(tipo, lng, unidades, elasticidad, inercia, apoyos_d, apoyos_y, mcp, dcp, mmp, dmp, mcc, icc, fcc, acv, bcv, icv, fcv);
   cgt = resultado_ecuaciones[0];
   //alert("texto");
   memptr1 = 0;
   femptr1 = 0;
   memptr2 = 0;
   femptr2 = 0;
   ctes_def_tmp = resultado_ecuaciones[1];
   ctes_gir_tmp = resultado_ecuaciones[2];
   apoyos_f = resultado_ecuaciones[5];
   var texto = "<table>";
   var ii = 1;
   for(i in apoyos_f){
    texto = texto + "<tr><td>" + txt_may[APOYO] + " " + ii + "</td><td>" + mostrar_float(apoyos_f[i],cgt) + "</td></tr>";
    ii++;
   }
   texto = texto + "<tr><td>" + txt_may[C_TOTAL] + " </td><td>" + cgt + "</td></tr></table>"; // + "<br>" + apoyos_f[0] + "<br>" + apoyos_f[1]
   document.getElementById('res_apoyos').innerHTML = texto;
  break;
  case 10:
   resultado_ecuaciones = calc_hiper_integr_desc(tipo, lng, unidades, elasticidad, inercia, apoyos_d, apoyos_y, mcp, dcp, mmp, dmp, mcc, icc, fcc, acv, bcv, icv, fcv);
   cgt = resultado_ecuaciones[0];
   memptr1 = resultado_ecuaciones[1];
   femptr1 = resultado_ecuaciones[2];
   memptr2 = resultado_ecuaciones[3];
   femptr2 = resultado_ecuaciones[4];
   apoyos_f = resultado_ecuaciones[5];
   var texto = "<table><tr><td>" + txt_res[EMP_IZQ_F] + "</td><td>" + mostrar_float(femptr1,cgt) + "</td></tr><tr><td>" + txt_res[EMP_IZQ_M] + "</td><td>" + mostrar_float(memptr1,cgt) + "</td></tr><tr><td>" + txt_res[EMP_DER_F] + "</td><td>" + mostrar_float(femptr2,cgt) + "</td></tr><tr><td>" + txt_res[EMP_DER_M] + "</td><td>" + mostrar_float(memptr2,cgt) + "</td></tr>";
   var ii = 1;
   for(i in apoyos_f){
    texto = texto + "<tr><td>" + txt_may[APOYO] + " " + ii + "</td><td>" + mostrar_float(apoyos_f[i],cgt) + "</td></tr>";
    ii++;
   }
   texto = texto + "<tr><td>" + txt_may[C_TOTAL] + " </td><td>" + cgt + "</td></tr></table>"; // + "<br>" + apoyos_f[0] + "<br>" + apoyos_f[1]
   document.getElementById('res_apoyos').innerHTML = texto;
  break;
 }

 var dcmp = campos(apoyos_d, lng, dcp, dmp, icc, fcc, icv, fcv);
 var resultado_funciones = funcion(lng, tipo, subtipo, femptr1, memptr1, apoyos_d, apoyos_f, apoyos_y, dcmp, mcp, dcp, mmp, dmp, mcc, icc, fcc, acv, bcv, icv, fcv, ctes_gir_tmp, ctes_def_tmp, cortes);
 var crt = resultado_funciones[0]; var flc = resultado_funciones[1];
 var gir = resultado_funciones[2]; var def = resultado_funciones[3];
 var ctes_gir = resultado_funciones[4]; var ctes_def = resultado_funciones[5];
 var resultado_val_ext = val_ext(dcmp, crt, flc, gir, def, ctes_gir, ctes_def, (elasticidad * inercia));
 var izq_c = resultado_val_ext[0]; var der_c = resultado_val_ext[1];
 var izq_f = resultado_val_ext[2]; var der_f = resultado_val_ext[3];
 var izq_g = resultado_val_ext[4]; var der_g = resultado_val_ext[5];
 var izq_d = resultado_val_ext[6]; var der_d = resultado_val_ext[7];
 var resultado_max_min = maxmin(dcmp, crt, flc, gir, def, ctes_gir, ctes_def, izq_c, der_c, izq_f, der_f, izq_g, der_g, izq_d, der_d, (elasticidad * inercia));
 var max_abs_c = resultado_max_min[0]; var max_abs_f = resultado_max_min[2];
 var max_abs_g = resultado_max_min[4]; var max_abs_d = resultado_max_min[6];
 max_crt_js = max_abs_c; max_flc_js = max_abs_f;
 max_gir_js = max_abs_g; max_def_js = max_abs_d;
 graf(lng, tipo, subtipo, apoyos_d, dcmp, crt, flc, gir, def, ctes_gir, ctes_def, izq_c, der_c, izq_f, der_f, izq_g, der_g, izq_d, der_d, max_abs_c, max_abs_m, max_abs_g, max_abs_d); //
 document.getElementById('resultado').innerHTML = FRASE_CALCULO_CONCL;
 document.getElementById('zona_resultados').style.display = '';
}








function vista_previa(){
 vista_previa_proceso(arr_cargas_puntuales_mag, arr_cargas_puntuales_pos, arr_momentos_puntuales_mag, arr_momentos_puntuales_pos, arr_cargas_continuas_mag, arr_cargas_continuas_pos_A, arr_cargas_continuas_pos_B, arr_cargas_variables_mag_A, arr_cargas_variables_mag_B, arr_cargas_variables_pos_A, arr_cargas_variables_pos_B);
}


function vista_previa_proceso(mcp, dcp, mmp, dmp, mcc, icc, fcc, acv, bcv, icv, fcv){
 var lng = parseFloat(document.datos_viga.longitud.value);
 var vector_datos = leer_viga_y_apoyos(lng);
 var tipo = vector_datos[0];
 var subtipo = vector_datos[1];
 var apoyos_d = vector_datos[2];
 var apoyos_y = vector_datos[3];
 var texto_svg = graficar_svg(lng, tipo, subtipo, apoyos_d, mcp, dcp, mmp, dmp, mcc, icc, fcc, acv, bcv, icv, fcv, 1);

 var texto_vista_previa = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"600px\" height=\"300px\">\n" + texto_svg + "</svg>";
 document.getElementById('vista_previa').innerHTML = texto_vista_previa;
 document.getElementById('zona_resultados').style.display = 'none';
 document.getElementById('resultado').innerHTML = FRASE_CALCULO_NO;
 // Eliminar las consultas con datos antiguos
 // http://www.randomsnippets.com/2008/03/26/how-to-dynamically-remove-delete-elements-via-javascript/
 var lista = document.getElementById("div_dar_valores");
 while(num_consultas){
  var quitar = document.getElementById("div_result_" + num_consultas);
  lista.removeChild(quitar);
  num_consultas--;
 }
}

/* Esta función actualiza el diálogo del subtipo de viga activando los campos que son necesarios
y poniendo el nombre "apoyo" o "rótula" según sea neceario */
function actualizar_gui_viga_apoyos(num, vector_apoyos_rotulas){
 var napp = 1;
 var nrot = 1;
 for(i=0; i<num; i++){
  document.getElementById('apoyos_fila_' + i).style.display = '';
  document.txt_apoyos.despl[i].disabled = false;
  document.txt_apoyos.apoyo[i].disabled = false;
  if(vector_apoyos_rotulas[i] == 1){
   document.getElementById('etiqueta_distancia_horz_' + i).innerHTML = txt_may[APOYO] + " " + napp + ":";
   napp ++;
  }else{
   document.getElementById('etiqueta_distancia_horz_' + i).innerHTML = txt_may[ROTULA] + " " + nrot + ":";
   nrot ++;
  }
 }
 for(i=num; i<6; i++){    // 6 es el número de campos actual
  document.txt_apoyos.despl[i].disabled = true;
  document.txt_apoyos.apoyo[i].disabled = true;
  document.getElementById('etiqueta_distancia_horz_' + i).innerHTML = '-';
  document.getElementById('apoyos_fila_' + i).style.display = 'none';
 }
}



function actualizar_gui_tipo(){
 var tipo = leer_opciones('radio_choice_tipo_viga');
 var subtipo;
 if(tipo < 3 || tipo > 6){
  subtipo = 0;
 }else{
  subtipo = leer_opciones('radio_choice_subtipo_viga');
 }
 //alert("Tipo: " + tipo + " subtipo: " + subtipo);
 var dibujo_viga = "<rect x=\"25\" y=\"149\" width=\"550\" height=\"2\" fill=\"black\" opacity=\"1\" />\n";
 switch(tipo){
  case 1:  case 2:
   document.getElementById('gui_apoyos_general').style.display = 'none';
   document.getElementById('gui_apoyos_variables').style.display = 'none';
   document.getElementById('gui_apoyos_fijos').style.display = 'none';
   document.getElementById('div_subtipo_viga').style.display = 'none';
  break;
  case 0:
   document.getElementById('gui_apoyos_general').style.display = '';
   actualizar_gui_viga_apoyos(num_apoyos_tipos[tipo][subtipo], apoyos_rotulas[tipo][subtipo]);
   document.getElementById('gui_apoyos_fijos').style.display = '';
   document.getElementById('gui_apoyos_variables').style.display = 'none';
   document.getElementById('div_subtipo_viga').style.display = 'none';
  break;
  case 3:  case 4:  case 5:  case 6:
   document.getElementById('gui_apoyos_general').style.display = '';
   actualizar_gui_viga_apoyos(num_apoyos_tipos[tipo][subtipo], apoyos_rotulas[tipo][subtipo]);
   //document.getElementById("gui_apoyos_fijos").style.visibility = "visible";
   document.getElementById('gui_apoyos_fijos').style.display = '';
   //document.getElementById("gui_apoyos_variables").style.visibility = "hidden";
   document.getElementById('gui_apoyos_variables').style.display = 'none';
   document.getElementById('div_subtipo_viga').style.display = '';
  break;
  default: // Vigas hiperestáticas
   document.getElementById('gui_apoyos_general').style.display = '';
   //document.getElementById("gui_apoyos_fijos").style.visibility = "hidden";
   document.getElementById('gui_apoyos_fijos').style.display = 'none';
   //document.getElementById("gui_apoyos_variables").style.visibility = "visible";
   document.getElementById('gui_apoyos_variables').style.display = '';
   document.getElementById('div_subtipo_viga').style.display = 'none';
  break;
 }
  //alert("Punto de control." + document.getElementById('etiqueta_distancia_horz_' + 1).innerHTML);
 if(tipo > 2 && tipo < 7){
  for(var i=0; i < apoyos_rotulas[tipo].length; i++){
   var iconos = "<span class=\"cont_dibujos\">";
   for(var j=0; j < iconos_esquema[tipo-3][i].length; j++){
    iconos = iconos + "<span class=\"dibujos " + iconos_string[iconos_esquema[tipo-3][i][j]] + "\"></span>";
   }
   iconos = iconos + "</span>";
   var texto = "<span class=\"cont_texto sub\">" + ((tipo == 3 || tipo == 6) ? (txt_min[EMPOTRM] + " - ") : "");
   texto = texto + (apoyos_rotulas[tipo][i][0] ? txt_min[APOYO] : txt_min[ROTULA]);
   for(var j=1; j < num_apoyos_tipos[tipo][i]; j++){
    texto = texto + " - " + (apoyos_rotulas[tipo][i][j] ? txt_min[APOYO] : txt_min[ROTULA]);
   }
   texto = texto + ((tipo == 4 || tipo == 6) ? (" - " + txt_min[EMPOTRM]) : "") + "</span>";
   document.getElementById('label_subtipo_viga_2' + num_letras[i]).innerHTML = iconos + texto;
  }
  document.getElementById('div_subtipo_viga_2g').style.display = (tipo == 5) ? 'none' : '';
 }
} // alert('2 apoyos');








// Lee los datos de los apoyos a partir de los datos del formulario y actualiza 2 vectores globales
// Esta función evita la introducción de apoyos con la misma posición, y al introducirlos los ordena.
function intro_apoyo_nuevo(){
 var lng = parseFloat(document.datos_viga.longitud.value);
 var temp_xx = parseFloat(document.frm_apoyos.number_apoyo_pos_x.value);
 if (validar_distancia(lng, temp_xx)){
  var temp_yy = parseFloat(document.frm_apoyos.number_apoyo_pos_y.value);
  if (!isNaN(temp_yy)){
   if(arr_lista_apoyos_pos_x.length > 0){
    if(temp_xx < arr_lista_apoyos_pos_x[0]){
     arr_lista_apoyos_pos_x.splice(0,0,temp_xx);
     arr_lista_apoyos_pos_y.splice(0,0,temp_yy);
    }else{
     var i = 0;
     var seguir = 1;
     var repetido = 0;
     while(i < arr_lista_apoyos_pos_x.length && seguir){
      if(temp_xx == arr_lista_apoyos_pos_x[i]){
       alert("Ya existe un apoyo en esta posición.");
       seguir = 0;
       repetido = 1;
      }else{
       if(temp_xx < arr_lista_apoyos_pos_x[i]){ // Se introducen en orden
        arr_lista_apoyos_pos_x.splice(i,0,temp_xx);
        arr_lista_apoyos_pos_y.splice(i,0,temp_yy);
        seguir = 0;
        repetido = 1;
       }
      }
      i++;
     }
     if(repetido == 0){
      arr_lista_apoyos_pos_x.push(temp_xx);
      arr_lista_apoyos_pos_y.push(temp_yy);
     }
    }
   }else{
    arr_lista_apoyos_pos_x.push(temp_xx);
    arr_lista_apoyos_pos_y.push(temp_yy);
   }
  }
 }
 document.getElementById('lista_apoyos').innerHTML = escribir_lista_apoyos(arr_lista_apoyos_pos_x, arr_lista_apoyos_pos_y);
}

// Quita un apoyo seleccionado por el usuario
function quitar_apoyo(num){
 arr_lista_apoyos_pos_x.splice(num,1);
 arr_lista_apoyos_pos_y.splice(num,1);
 document.getElementById('lista_apoyos').innerHTML = escribir_lista_apoyos(arr_lista_apoyos_pos_x, arr_lista_apoyos_pos_y);
}

// Escribe la lista de apoyos de la pantalla.
function escribir_lista_apoyos(arr_apoyos_x, arr_apoyos_y){
 var texto = "";
 for(i in arr_apoyos_x){
  texto = texto + "<div class=\"fila_form_2filas\"><div class=\"form_num form_app_var\">" + (parseInt(i) + 1) + "</div><div class=\"form_txt form_app_var\">" + arr_apoyos_x[i] + "</div><div class=\"form_txt form_app_var\">" + arr_apoyos_y[i] + "</div><div class=\"form_btn form_app_var\"><a class=\"btn quitar\" href=\"#\" onclick=\"quitar_apoyo(" + i + ");vista_previa();return false;\">×</a></div></div>"; /* papelera:  &#128465;    &#10060;*/
 }
 return texto; // + "</table>";
}



// Lee los datos de las cargas puntuales a partir de los datos del formulario y actualiza 2 vectores globales
function intro_carga_puntual_nueva(){
 var lng = parseFloat(document.datos_viga.longitud.value);
 var temp_mcp = parseFloat(document.frm_cargas_puntuales.number_carga_puntual_mag.value);
 if(temp_mcp != 0 && !isNaN(temp_mcp) && isFinite(temp_mcp)){
  var temp_dcp = parseFloat(document.frm_cargas_puntuales.number_carga_puntual_pos.value);
  if (validar_distancia(lng, temp_dcp)){
   arr_cargas_puntuales_mag.push(temp_mcp);
   arr_cargas_puntuales_pos.push(temp_dcp);
  }
 }
 document.getElementById('lista_cargas_puntuales').innerHTML = escribir_lista_cargas_puntuales(arr_cargas_puntuales_mag, arr_cargas_puntuales_pos);
}

// Quita una carga puntual seleccionada por el usuario
function quitar_carga_puntual(num){
 arr_cargas_puntuales_mag.splice(num,1);
 arr_cargas_puntuales_pos.splice(num,1);
 document.getElementById('lista_cargas_puntuales').innerHTML = escribir_lista_cargas_puntuales(arr_cargas_puntuales_mag, arr_cargas_puntuales_pos);
}

// Escribe la lista de cargas puntuales de la pantalla.
function escribir_lista_cargas_puntuales(arr_cargas_puntuales_mag, arr_cargas_puntuales_pos){
 var texto = "";
 for(i in arr_cargas_puntuales_mag){
  texto = texto + "<div class=\"fila_form_2filas\"><div class=\"form_num form_cargas_punt\">" + (parseInt(i) + 1) + "</div><div class=\"form_txt form_cargas_punt\">" + arr_cargas_puntuales_mag[i] + "</div><div class=\"form_txt form_cargas_punt\">" + arr_cargas_puntuales_pos[i] + "</div><div class=\"form_btn form_cargas_punt\"><a class=\"btn quitar\" href=\"#\" onclick=\"quitar_carga_puntual(" + i + ");vista_previa();return false;\">×</a></div></div>"; /* papelera:  &#128465;    &#10060;*/
 }
 return texto; // + "</table>";
}





// Lee los datos de los momentos puntuales a partir de los datos del formulario y actualiza 2 vectores globales
function intro_momento_puntual_nuevo(){
 var lng = parseFloat(document.datos_viga.longitud.value);
 var temp_mmm = parseFloat(document.frm_momentos_puntuales.number_momento_puntual_mag.value);
 if(temp_mmm != 0 && !isNaN(temp_mmm) && isFinite(temp_mmm)){
  var temp_dmm = parseFloat(document.frm_momentos_puntuales.number_momento_puntual_pos.value);
  if (validar_distancia(lng, temp_dmm)){
   arr_momentos_puntuales_mag.push(temp_mmm);
   arr_momentos_puntuales_pos.push(temp_dmm);
  }
 }
 document.getElementById('lista_momentos_puntuales').innerHTML = escribir_lista_momentos_puntuales(arr_momentos_puntuales_mag, arr_momentos_puntuales_pos);
}

// Quita una momento puntual seleccionado por el usuario
function quitar_momento_puntual(num){
 arr_momentos_puntuales_mag.splice(num,1);
 arr_momentos_puntuales_pos.splice(num,1);
 document.getElementById('lista_momentos_puntuales').innerHTML = escribir_lista_momentos_puntuales(arr_momentos_puntuales_mag, arr_momentos_puntuales_pos);
}

// Escribe la lista de momentos puntuales de la pantalla.
function escribir_lista_momentos_puntuales(arr_momentos_puntuales_mag, arr_momentos_puntuales_pos){
 var texto = "";
 for(i in arr_momentos_puntuales_mag){
  texto = texto + "<div class=\"fila_form_2filas\"><div class=\"form_num form_moment_punt\">" + (parseInt(i) + 1) + "</div><div class=\"form_txt form_moment_punt\">" + arr_momentos_puntuales_mag[i] + "</div><div class=\"form_txt form_moment_punt\">" + arr_momentos_puntuales_pos[i] + "</div><div class=\"form_btn form_moment_punt\"><a class=\"btn quitar\" href=\"#\" onclick=\"quitar_momento_puntual(" + i + ");vista_previa();return false;\">×</a></div></div>"; /* papelera:  &#128465;    &#10060;*/
 }
 return texto; // + "</table>";
}








// Lee los datos de las cargas continuas a partir de los datos del formulario y actualiza 3 vectores globales
function intro_carga_continua_nueva(){
 var lng = parseFloat(document.datos_viga.longitud.value);
 var temp_mcc = parseFloat(document.frm_cargas_continuas.number_carga_continua_mag.value);
 if(temp_mcc != 0 && !isNaN(temp_mcc) && isFinite(temp_mcc)){
  var temp_icc = parseFloat(document.frm_cargas_continuas.number_carga_continua_pos_A.value);
  var temp_fcc = parseFloat(document.frm_cargas_continuas.number_carga_continua_pos_B.value);
  if (validar_distancia(lng, temp_icc) && validar_distancia(lng, temp_fcc) && temp_icc < temp_fcc){
   arr_cargas_continuas_mag.push(temp_mcc);
   arr_cargas_continuas_pos_A.push(temp_icc);
   arr_cargas_continuas_pos_B.push(temp_fcc);
  }
 }
 document.getElementById('lista_cargas_continuas').innerHTML = escribir_lista_cargas_continuas(arr_cargas_continuas_mag, arr_cargas_continuas_pos_A, arr_cargas_continuas_pos_B);
}

// Quita una carga continua seleccionada por el usuario
function quitar_carga_continua(num){
 arr_cargas_continuas_mag.splice(num,1);
 arr_cargas_continuas_pos_A.splice(num,1);
 arr_cargas_continuas_pos_B.splice(num,1);
 document.getElementById('lista_cargas_continuas').innerHTML = escribir_lista_cargas_continuas(arr_cargas_continuas_mag, arr_cargas_continuas_pos_A, arr_cargas_continuas_pos_B);
}

// Escribe la lista de cargas contínuas de la pantalla.
function escribir_lista_cargas_continuas(arr_cargas_continuas_mag, arr_cargas_continuas_pos_A, arr_cargas_continuas_pos_B){
 var texto = "";
 for(i in arr_cargas_continuas_mag){
  texto = texto + "<div class=\"fila_form_2filas\"><div class=\"form_num form_cargas_rep\">" + (parseInt(i) + 1) + "</div><div class=\"form_txt form_cargas_rep\">" + arr_cargas_continuas_mag[i] + "</div><div class=\"form_txt form_cargas_rep\">" + arr_cargas_continuas_pos_A[i] + "</div><div class=\"form_txt form_cargas_rep\">" + arr_cargas_continuas_pos_B[i] + "</div><div class=\"form_btn form_cargas_rep\"><a class=\"btn quitar\" href=\"#\" onclick=\"quitar_carga_continua(" + i + ");vista_previa();return false;\">×</a></div></div>"; /* papelera:  &#128465;    &#10060;*/
 }
 return texto;
}








// Lee los datos de las cargas variables a partir de los datos del formulario y actualiza 4 vectores globales
function intro_carga_variable_nueva(){
 var lng = parseFloat(document.datos_viga.longitud.value);
 var temp_acv = parseFloat(document.frm_cargas_variables.number_carga_variable_mag_A.value);
 var temp_bcv = parseFloat(document.frm_cargas_variables.number_carga_variable_mag_B.value);
 if( !isNaN(temp_acv) && isFinite(temp_acv) && !isNaN(temp_bcv) && isFinite(temp_bcv) && temp_acv != temp_bcv){
  var temp_icv = parseFloat(document.frm_cargas_variables.number_carga_variable_pos_A.value);
  var temp_fcv = parseFloat(document.frm_cargas_variables.number_carga_variable_pos_B.value);
  if (validar_distancia(lng, temp_icv) && validar_distancia(lng, temp_fcv) && temp_icv < temp_fcv){
   arr_cargas_variables_mag_A.push(temp_acv);
   arr_cargas_variables_mag_B.push(temp_bcv);
   arr_cargas_variables_pos_A.push(temp_icv);
   arr_cargas_variables_pos_B.push(temp_fcv);
   document.getElementById('lista_cargas_variables').innerHTML = escribir_lista_cargas_variables(arr_cargas_variables_mag_A, arr_cargas_variables_mag_B, arr_cargas_variables_pos_A, arr_cargas_variables_pos_B);
  }
 }
}

// Quita una carga variable selecvionada por el usuario
function quitar_carga_variable(num){
 arr_cargas_variables_mag_A.splice(num,1);
 arr_cargas_variables_mag_B.splice(num,1);
 arr_cargas_variables_pos_A.splice(num,1);
 arr_cargas_variables_pos_B.splice(num,1);
 document.getElementById('lista_cargas_variables').innerHTML = escribir_lista_cargas_variables(arr_cargas_variables_mag_A, arr_cargas_variables_mag_B, arr_cargas_variables_pos_A, arr_cargas_variables_pos_B);
}

// Escribe la lista de cargas variables de la pantalla.
function escribir_lista_cargas_variables(arr_cargas_variables_mag_A, arr_cargas_variables_mag_B, arr_cargas_variables_pos_A, arr_cargas_variables_pos_B){
 var texto = "";
 for(i in arr_cargas_variables_mag_A){
  // texto = texto + "<div class=\"form_num\">" + i + "</div><div class=\"form_txt\">" + arr_cargas_variables_mag_A[i] + "</div><div class=\"form_txt\">" + arr_cargas_variables_mag_B[i] + "</div><div class=\"form_txt\">" + arr_cargas_variables_pos_A + "</div><div class=\"form_txt\">" + arr_cargas_variables_pos_B[i] + "</div><div class=\"form_txt\"><td class=\"form_btn\"><a class=\"btn\" href=\"#\" onclick=\"quitar_carga_variable(" + i + ");vista_previa();return false;\">×</a></div><br>";
  texto = texto + "<div class=\"fila_form_2filas\"><div class=\"form_num form_cargas_var\">" + (parseInt(i) + 1) + "</div><div class=\"form_txt form_cargas_var\">" + arr_cargas_variables_mag_A[i] + "</div><div class=\"form_txt form_cargas_var\">" + arr_cargas_variables_mag_B[i] + "</div><div class=\"form_txt form_cargas_var\">" + arr_cargas_variables_pos_A[i] + "</div><div class=\"form_txt form_cargas_var\">" + arr_cargas_variables_pos_B[i] + "</div><div class=\"form_btn form_cargas_var\"><a class=\"btn quitar\" href=\"#\" onclick=\"quitar_carga_variable(" + i + ");vista_previa();return false;\">×</a></div></div>"; /* papelera:  &#128465;    &#10060;*/
 }
 return texto;
}



// Lee la distancia y calcula el valor de las funciones y lo muestra por pantalla
function dar_valor_punto(){
 var lng = parseFloat(document.datos_viga.longitud.value);
 var cota = parseFloat(document.frm_dar_valores.dar_valores_distancia.value);
 var inercia = parseFloat(document.datos_viga.inercia.value);
 var elasticidad = parseFloat(document.datos_viga.elasticidad.value);
 var denominador = inercia * elasticidad;
 if(isNaN(cota) == true || cota < 0){ // Si el usuario se empeña en meter algo raro se lo retocamos a nuestro gusto. :-p
  cota=0;
 }
 if(cota > lng){
  cota=lng;
 }
 var num_campo = campo_distancia(cota, dcmp_js);
 derecha = document.frm_dar_valores.dar_valores_derecha.checked ? 1 : 0;
 if(derecha){
  if(cota == dcmp_js[num_campo + 1]){
   if(cota < lng){
    num_campo++;
   }
  }
 }
 //func_js[crt=0, flc, gir, def, ctes_gir, ctes_def=5][número de campo];
 var cortante = sustituir_b(cota, func_js[0][num_campo]);
 var flector = sustituir_b(cota, func_js[1][num_campo]);
 var giro = (sustituir_b(cota, func_js[2][num_campo]) + func_js[4][num_campo]) / denominador; //
 var deformada = (sustituir_b(cota, func_js[3][num_campo]) + sustituir_b(cota, [func_js[5][num_campo] , func_js[4][num_campo]])) / denominador; //

 var txt_cota = document.createTextNode(cota + (derecha ? " (d)" : ""));
 var txt_cortante = document.createTextNode(mostrar_float(cortante,max_crt_js) +"");
 var txt_flector = document.createTextNode(mostrar_float(flector,max_crt_js) +"");
 var txt_giro = document.createTextNode(mostrar_float(giro,max_crt_js) +"");
 var txt_flecha = document.createTextNode(mostrar_float(deformada,max_crt_js) +"");

 num_consultas ++; // Nueva fila con una consulta nueva
 var div_resultados = document.createElement("div");   
 div_resultados.className = "fila_form_2filas";
 div_resultados.setAttribute("id", "div_result_" + num_consultas);

 var div_cota = document.createElement("DIV");
 div_cota.className = "form_num";
 div_cota.appendChild(txt_cota);

 var div_cortante = document.createElement("DIV");
 div_cortante.className = "form_res";
 div_cortante.appendChild(txt_cortante);

 var div_flector = document.createElement("DIV");
 div_flector.className = "form_res";
 div_flector.appendChild(txt_flector);

 var div_giro = document.createElement("DIV");
 div_giro.className = "form_res";
 div_giro.appendChild(txt_giro);

 var div_flecha = document.createElement("DIV");
 div_flecha.className = "form_res";
 div_flecha.appendChild(txt_flecha);

 div_resultados.appendChild(div_cota);
 div_resultados.appendChild(div_cortante);
 div_resultados.appendChild(div_flector);
 div_resultados.appendChild(div_giro);
 div_resultados.appendChild(div_flecha);
 document.getElementById("div_dar_valores").appendChild(div_resultados);
}


function iniciar(){
 actualizar_gui_tipo();
 document.getElementById('div_elast').style.display = 'none';
 document.getElementById('div_perfiles').style.display = 'none';
 document.getElementById('div_calculadora').style.display = 'none';
 mostrar_IPN(0);
 vista_previa();
}

/* orientar: posición del perfil, 0 es la mayor inercia y 1 la menor. */
function mostrar_IPE(orientar){
 var texto = tabla_tecn(tabla_IPE, orientar);
 document.getElementById('cont_perfiles').innerHTML = texto;
}

function mostrar_IPN(orientar){
 var texto = tabla_tecn(tabla_IPN, orientar);
 document.getElementById('cont_perfiles').innerHTML = texto;
}

function mostrar_HEA(orientar){
 var texto = tabla_tecn(tabla_HEA, orientar);
 document.getElementById('cont_perfiles').innerHTML = texto;
}

function mostrar_HEB(orientar){
 var texto = tabla_tecn(tabla_HEB, orientar);
 document.getElementById('cont_perfiles').innerHTML = texto;
}

function mostrar_HEM(orientar){
 var texto = tabla_tecn(tabla_HEM, orientar);
 document.getElementById('cont_perfiles').innerHTML = texto;
}

function tabla_tecn(tabla_perfil, orientar){
 var texto = "<table><tr><th>Perfil</th><th>m<sup>4</sup></th><th>cm<sup>4</sup></th><th>in<sup>4</sup></th></tr>";
 for(i in tabla_perfil){
  texto = texto + "<tr><td class=\"lst_perf\">" + tabla_perfil[i][0] + "</td><td class=\"lst_perf\"><a href=\"#\" onclick=\"inercia_tabla(\'" + tabla_perfil[i][1 + orientar]/100000000 + "\');return false;\">" + tabla_perfil[i][1 + orientar] + " × 10<sup>-8</sup></a></td><td class=\"lst_perf\"><a href=\"#\" onclick=\"inercia_tabla(\'" + tabla_perfil[i][1 + orientar] + "\');return false;\">" + tabla_perfil[i][1 + orientar] + "</a></td><td class=\"lst_perf\"><a href=\"#\" onclick=\"inercia_tabla(\'" + tabla_perfil[i][1 + orientar]/41.62314256 + "\');return false;\">" + tabla_perfil[i][1 + orientar]/41.62314256 + "</a></td></tr>";
 }
 return texto = texto + "</table>";
}

/* Se cierra la ventana y se pone el número seleccionado de inercia por tabla */
function inercia_tabla(num){
 document.getElementById("inercia").value = num;
 document.getElementById('div_perfiles').style.display = 'none';
}

/* Se cierra la ventana y se pone el número seleccionado de inercia por cálculo */
function inercia_calcular(tipo){
 var a = parseFloat(document.datos_viga.iner_a.value);
 var b = parseFloat(document.datos_viga.iner_b.value);
 var e = parseFloat(document.datos_viga.iner_e.value);
 var inercia;
 switch(tipo){
  case 0: // Cuadrado
   if(e == 0){ // Relleno
    inercia = a * a * a * b / 12; // Correcto
   }else{ // Contorno
    if(e > 0){ // Grueso
     var interior_a = a - e;
     var interior_b = b - e;
     inercia = (a * a * a * b - interior_a * interior_a * interior_a * interior_b) / 12; // Correcto
    }else{ // Delgado (invertir signo)
     inercia = - e * a * a * (b + a / 3) / 4; // Correcto
    }
   }
  break;
  case 1: // Redondel
   if(e == 0){ // Círculo
    inercia = Math.PI * a * a * a * b / 4; // Correcto
   }else{ // Círcunferencia
    if(e > 0){ // Grueso
     var interior_a = a - e;
     var interior_b = b - e;
     inercia = Math.PI * (a * a * a * b - interior_a * interior_a * interior_a * interior_b) / 4; // Correcto
    }else{ // Delgado (invertir signo)
     inercia = - Math.PI * e * a * a * (a + 3 * b) / 4; // Correcto
    }
   }
  break;
 }
 document.getElementById("inercia").value = inercia;
 document.getElementById('div_calculadora').style.display = 'none';
}

/* Se cierra la ventana y se pone el número seleccionado de elasticidad */
function elast(num){
 document.getElementById("elasticidad").value = num;
 document.getElementById('div_elast').style.display = 'none';
}

/* Se abre la ventana de elasticidad */
function tabla_elast(){
 document.getElementById('div_elast').style.display = '';
}

/* Se abre la ventana de cálculo de inercias */
function inercia_calculadora(){
 document.getElementById('div_calculadora').style.display = '';
}

/* Se abre la ventana de perfiles */
function tabla_pefiles(){
 document.getElementById('div_perfiles').style.display = '';
}




/* Función para mostrar números mejores
la idea de detectar periodos y mostrarlos como tal
no se realizará por el momento, ya que podría haber
bibliotecas en Internet que hagan mejor esta función
de lo que yo pueda programar.

Recibe el número a mostrar y una referencia.
Si el número está varios órdenes de magnitudes de magnitud por debajo de la referencia se devuelve cero.
Si no se devuelve un número exponencial si es un número pequeño y sino uno decimal. */

function mostrar_float(num, ref){
 if(Math.abs(num / ref) < 0.00000001){
  return "0";
 }else{
  if(Math.abs(num) < 0.01){
   return num.toExponential(4);
  }else{
   if(Math.abs(num) > 0.1){
    return num.toPrecision(5);
   }else{
    return num.toPrecision(6);
   }
  }
 }
}

function cargar_float(texto){
 var tmp = parseFloat(texto);
}