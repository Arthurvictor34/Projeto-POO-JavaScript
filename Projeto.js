class Pessoa{
    constructor(nome, idade, cpf, endereço, celular){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.endereço = endereço;
        this.celular = celular;
    }

    // preencher as informações da pessoa
    preencherinformação(){
        this.nome = prompt("Qual o seu nome? ");
        this.idade = prompt("Qual a sua idade? ");
        this.idade = parseInt(this.idade);
        this.cpf = prompt("Qual o seu cpf? ");
        this.endereço = prompt("Qual o seu endereço? ");
        this.celular = prompt("Qual o seu numero de celular? ");

    }

    // exibir na tela as informações
    exibirinformação(){
        console.log(" ");
        console.log(`Seu nome é: ${this.nome}`);
        console.log(`Sua idade é: ${this.idade}`);
        console.log(`Seu cpf é: ${this.cpf}`);
        console.log(`Seu endereço é: ${this.endereço}`);
        console.log(`Seu numero de celular: ${this.celular}`);
    }
}

// atribuidos especificos do aluno
class Aluno extends Pessoa{
    constructor(nome, idade, cpf, endereço, celular, matricula, periodo){
        super(nome, idade, cpf, endereço, celular);

        this.matricula = matricula;
        this.periodo = periodo;
    }

    //preenchendo as informações do aluno
    preencherinformação(){
        super.preencherinformação();
        console.log(" ");
        this.matricula = prompt("Qual o seu numero de matricula? ");
        this.periodo = prompt("Qual o seu periodo? ");
    }

    // exibir as informações do aluno
    exibirinformação(){
        super.exibirinformação();

        console.log(" ");
        console.log(`A matricula do aluno é: ${this.matricula}`);
        console.log(`O seu periodo é: ${this.periodo}`);
    }
}

// atribuidos especifico do professor
class Professor extends Pessoa{
    constructor(nome, idade, cpf, endreço, celular, cadastro, salario){
        super(nome, idade, cpf, endreço, celular);

        this.cadastro = cadastro;
        this.salario = salario;
    }

    preencherinformação(){
        super.preencherinformação();

        console.log(" ");
        this.cadastro = prompt("Qual o seu cadastro? ");
        this.salario = parseFloat(prompt("Qual o seu salario? "));
    }

    exibirinformação(){
        super.exibirinformação();

        console.log(" ");
        console.log(`O seu cadastro é: ${this.cadastro}`);
        console.log(`Seu salario é: ${this.salario}`);
    }
}


//criando o objeto aluno
var meuAluno = new Aluno();
var meuProfessor = new Professor();

let escolha = prompt(" Você é um Professor ou Aluno? ");

if( escolha === "Aluno"){
      //Preenchendo as informações do aluno
      meuAluno.preencherinformação();

      //Exibindo as informações do aluno 
      meuAluno.exibirinformação();
} else if(escolha === "Professor") {
      //Preencehando as informações do professor
      meuProfessor.preencherinformação();

      //Exibindo as informações do professor
      meuProfessor.exibirinformação();
}  