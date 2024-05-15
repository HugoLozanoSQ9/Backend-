const nombre = process.argv[2]

let reverse  = (nombre)=> nombre.split('').reverse().join('')

console.log(reverse(nombre))