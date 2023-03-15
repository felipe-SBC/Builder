var prompt = require('prompt-sync')();

class Portaria{
    permissao;
    entrar() {}
}

class Aluno extends Portaria{
    constructor(){
        super();
        this.permissao = true;
    }
    entrar(pessoa){
        return "O "+pessoa+" tem relação com a instituição como Aluno"
    }
}

class Professor extends Portaria{
    constructor(){
        super();
        this.permissao = false;
    }
    entrar(pessoa){
        return "O "+pessoa+" tem relação com a instituição como Professor"
    }
}

class Diretor extends Portaria{
    constructor(){
        super();
        this.permissao = false;
    }
    entrar(pessoa){
        return "O "+pessoa+" tem relação com a instituição como Diretor"
    }
}

class Vestibulando extends Portaria{
    constructor(){
        super();
        this.permissao = false;
    }
    entrar(pessoa){
        return "O "+pessoa+" tem relação com a instituição como Vestibulando"
    }
}

class Administrativo extends Portaria{
    constructor(){
        super();
        this.permissao = false;
    }
    entrar(pessoa){
        return "O "+pessoa+" tem relação com a instituição como Administrativo"
    }
}
class NaoPossui extends Portaria{
    constructor(){
        super();
        this.permissao = false;
    }
    entrar(pessoa){
        return "O "+pessoa+" não possui relacionamento com a instituição, acompanhar até a secretaria"
    }
}

var FabricaPortaria = function() {
    this.criarPessoa = function(cargo){
        var pessoa;
        if(cargo === "Aluno"){
            return pessoa = new Aluno();
        }else if(cargo === "Professor"){
            return pessoa = new Professor();
        }else if(cargo === "Diretor"){
            return pessoa = new Diretor()
        }else if(cargo === "Professor"){
            return pessoa = new Vestibulando();
        }else if(cargo === "Administrativo"){
            return pessoa = new Administrativo();
        }else{
            return pessoa = new NaoPossui();
        }
    }
}

class FabricaLanche{
    constructor(){
        this.lanche = {};
    }

    addPao(){
        console.log("\n Escolha um Pão: \n")
        console.log("1 - Italiano \n2 - 9 grãos \n3 - Parmesão e Orégano\n");
        var opcao = prompt("Digite a opção desejada: ");
        if(opcao == 1){
            this.lanche.pao = "Italiano";
        }else if(opcao == 2){
            this.lanche.pao = "9 grãos";
        }else if(opcao == 3){
            this.lanche.pao = "Parmesão e Orégano";
        }else{
            console.log("\nOpção inválida !!!\nDigite uma opção válida !!!");
            this.addPao();
        }
        return this;
    }

    addCarne(){
        console.log("\n Escolha uma Proteina: \n")
        console.log("1 - Carne \n2 - Frango \n3 - Vegetariano\n");
        var opcao = prompt("Digite a opção desejada: ");
        if(opcao == 1){
            this.lanche.carne = "Carne";
        }else if(opcao == 2){
            this.lanche.carne = "Frango";
        }else if(opcao == 3){
            this.lanche.carne = "Vegetariano";
        }else{
            console.log("\nOpção inválida !!!\nDigite uma opção válida !!!");
            this.addCarne();
        }
        return this;
    }

    addQueijo(){
        console.log("\n Escolha um Queijo: \n")
        console.log("1 - Cheddar \n2 - Suiço \n3 - Muzzarela\n");
        var opcao = prompt("Digite a opção desejada: ");
        if(opcao == 1){
            this.lanche.queijo = "Cheddar";
        }else if(opcao == 2){
            this.lanche.queijo = "Suiço";
        }else if(opcao == 3){
            this.lanche.queijo = "Muzzarela";
        }else{
            console.log("\nOpção inválida !!!\nDigite uma opção válida !!!");
            this.addQueijo();
        }
        return this;
    }

    addVeg(){
        console.log("\n Escolha um Vegetal: \n")
        console.log("1 - Azeitona \n2 - Alface \n3 - Tomate\n");
        var opcao = prompt("Digite a opção desejada: ");
        if(opcao == 1){
            this.lanche.veg = "Azeitona";
        }else if(opcao == 2){
            this.lanche.veg = "Alface";
        }else if(opcao == 3){
            this.lanche.veg = "Tomate";
        }else{
            console.log("\nOpção inválida !!!\nDigite uma opção válida !!!");
            this.addVeg();
        }
        return this;
    }
    
    addMolho(){
        console.log("\n Escolha um Molho: \n")
        console.log("1 - Barbecue \n2 - Chipotle \n3 - Supreme\n");
        var opcao = prompt("Digite a opção desejada: ");
        if(opcao == 1){
            this.lanche.molho = "Barbecue";
        }else if(opcao == 2){
            this.lanche.molho = "Chipotle";
        }else if(opcao == 3){
            this.lanche.molho = "Supreme";
        }else{
            console.log("\nOpção inválida !!!\nDigite uma opção válida !!!");
            this.addMolho();
        }
        return this;
    }

    build() {
        return this.lanche;
    }
    
    director(){
        this.addPao();
        this.addCarne();
        this.addQueijo();
        this.addVeg();
        this.addMolho();
    }
}

var fabricar = new FabricaPortaria();

var nomePessoa = prompt("Entre com seu nome: ");
var cargo = prompt("Qual sua relação com a FATEC: ");
console.log();
pessoa = fabricar.criarPessoa(cargo);
console.log(pessoa.entrar(nomePessoa));

console.log()
console.log("----------------------------------------------------------------------");
console.log()

if(pessoa.permissao == true){
    console.log("Digite 1 se deseja ir para a Lanchonete");
    console.log("Digite 2 Se deseja ir para Sala de Aula");
    console.log();
 
    var a = prompt("Deseja ir para Lanchonete ou para a Sala de Aula: ")
    do{
        if (a == 1){
            console.log("Iniciando atendimento ...");
            console.log();
            lanche = new FabricaLanche();
            lanche.director();
            console.log("\nSeu pedido é: ")
            console.log(lanche.build());        
        }else if (a == 2){
            console.log("Dirija-se para a FATEC WAY");
            process.exit();
        }
        console.log();
        var q = prompt("Digite Q para sair ou Enter para fazer um novo pedido: ");
    }while(q!="Q")
}