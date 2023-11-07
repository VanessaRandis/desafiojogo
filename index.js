
class heroi{
    
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atack(){
        if( this.tipo === "mago" )
               this.tipoAtaque = "magia"
        else if( this.tipo === "guerreiro" )
                this.tipoAtaque = "espada"
        else if( this.tipo === "monge" )
                this.tipoAtaque = "artes marciais"
        else if( this.tipo === "ninja" )
                this.tipoAtaque = "shuriken"
        }

    mensagem(){
        this.atack()
        console.log(`O ${this.tipo} atacou usando ${this.tipoAtaque}`)
        }
}

let jogador = new heroi("Vanessa", 35, "guerreiro")

let jogadorNovo = new heroi("Gustavo", 8, "ninja")

let jogadorPremium = new heroi("Fabricio", 15, "monge")

let jogadorPro = new heroi("Beatriz", 32, "mago")


jogador.mensagem()
jogadorNovo.mensagem()
jogadorPremium.mensagem()
jogadorPro.mensagem()