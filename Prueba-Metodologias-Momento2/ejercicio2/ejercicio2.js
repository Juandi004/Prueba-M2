'use strict'

//A a partir del array ages=[15, 50, 45] agregue su edad. Usando un for con un if, muestre en pantalla  solo las edades mayores a 25

let edades=[15,50,45];
edades.splice(1,0,19);

edades.pop(45);
edades.splice(2,0,45);

for(let i=0; i < edades.length; i++){
    if(edades[i]>25){
        alert(edades[i]);
    }
}