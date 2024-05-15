const num= parseFloat(process.argv[2])

if(isNaN(num)){
    console.error('Argumento invalido')
    process.exit(1) //Finaliza el script 
}

console.log('Esto no debería de verse en consola si el argumento es invalido')

for(let i=1 ; i<=num ; i++){
    if (i%3 == 0 && i%5 == 0){
        console.log(`${i}-FizzBuzz`)
    }else if (i%3 == 0){
        console.log(`${i}-Fizz`)
    }else if (i%5 == 0){
        console.log(`${i}-Buzz`)
    }
    else{
        console.log(i)

    }
}