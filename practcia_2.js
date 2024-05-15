const num= parseFloat(process.argv[2])

let numParOrImarp = (num)=>{
    if(num%2 == 0){
        console.log('par')
    }else{
        console.log('impar')
    }
}
numParOrImarp(num)