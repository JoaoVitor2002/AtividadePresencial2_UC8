let readlineSync = require('readline-sync');
var valor 

valor = readlineSync.question("Digite o valor correspondente a quantidade de alunos presentes na sala:");
for(var i = 0; i <= valor; i++){
    if(i ==0){
        console.log("O número é Zero");
        
    }else if(i%2 == 0){
        console.log("O número "+i+" é par");
    }else{
        console.log("O número "+i+" é impar");
    }
}