var trueNumber = '1234';

class Codebreaker{
  adivinar(numero){
    if(isNaN(numero)){
      return "error"
    }

    if(numero.length == 4 ){
      let resultadoX = ''
      let resultado_ = ''
      let arrayNumber = []
      for(var x = 0; x < numero.length; x++)
      {
        if (arrayNumber[numero[x]] == true){
          return 'error';
        }
        arrayNumber[numero[x]] = true;
      }
      numero = numero.split('')
      numero.map(function(n, index){
        if(trueNumber.charAt(index) === numero[index]){
          resultadoX+='X'
        }
        else if(trueNumber.indexOf(n)!=-1){
          resultado_+='_'
        }
      })
      return resultadoX + resultado_;
    }else{
      return 'error';
  }
}



}



module.exports = Codebreaker;
