// mudar main.js no bundle para o nome desse arquivo
// Initializing a class
class Usuario{
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }
    // Adding a method to the constructor
    isAdmin(){
        if(this.admin) return true;
        else return false;
    }
}
// Creating a new class from the parent
class Admin extends Usuario{
    constructor(email, senha){
        // Chain constructor with super
        super(email, senha);

        // Add a new property
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Admin1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()) //false
console.log(Admin1.isAdmin()) //true
