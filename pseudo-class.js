class Pessoa{
    constructor = function(name){
        this.name = name;
    }

    fala = function(){
        console.log(name);
    }
}

class PessoaFisica extends Pessoa{

}

var pessoaFisica = new PessoaFisica("Leonardo");

console.log(pessoaFisica);
