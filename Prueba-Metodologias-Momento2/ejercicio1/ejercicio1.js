'use strict'

/*Crear una función constructora para crear un Estudiante con las siguientes propiedades:
    nombre, 
    correo
    promedio.
    Una Funcion validarPromedio Que devuelva "Aprobado" si el promedio es mayor a 70 y "Reprobado" si es menor.
    Una Función obtenerUsuario que devuelva únicamente el nombre de usuario del email

 Crear un objeto a partir de la función anterior y comprobar funciones*/

function Student(nombre,correo,promedio){
    this.nombre=nombre;
    this.correo=correo;
    this.promedio=promedio;
   
    this.validadPromedio=function(){
        if(promedio>=70){
            return "Aprobado";
        }else{
            return "Reprobado";
        } 
    }
        
    this.obtainUser=function(){
            let user=correo.indexOf("@");
            return this.correo.substring(0,user);
    }
}

let student=new Student("Juan","jdgutierrez.2@sudamericano.edu.ec",70)
alert(student.validadPromedio());
alert(student.obtainUser());
