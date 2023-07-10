function EnvioDoCpf(codigo){
  Object.defineProperty(this, 'codLimpo', {
    enumerable: true,
    get: function(){
      return codigo.replace(/\D+/g, '')
    }
  })
}

EnvioDoCpf.prototype.AvaliarCpf = function() {
  if(typeof this.codLimpo === 'undefined') return false
  if(this.codLimpo.length !== 11) return false

  const cpfParcial = this.codLimpo.slice(0, -2)
  const digito1 = this.cpfToArray(cpfParcial)
  return true
}

EnvioDoCpf.prototype.cpfToArray = function(cpfParcial) {
  const cpfArray = Array.from(cpfParcial)
  console.log(cpfArray)
}

const usuario = new EnvioDoCpf('159.737.846-14')
console.log(usuario.codLimpo)
console.log(usuario.AvaliarCpf())





//1- função constr que pega o cpf em string e tira os pontos deixando apenas numeros ((ok))
//2- if(ter 11 numeros) retornar true se nao retornar false; if(typeof do cpf for undefined) retornar false (())
//3- pegar o cpf limpo e transforma-lo em um array (())
//4- realizar o calculo.....



// function cpf(cpf) {
//   let CPF = cpf
//   let cpfLimpo = cpf.replace(/\D+/g, '')
//   cpfArray = Array.from(cpfLimpo)
// }
// cpf('705.484.450-52')
// console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0))