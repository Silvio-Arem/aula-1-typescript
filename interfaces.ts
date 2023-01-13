// Bibliografia https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
// Criando uma interface (são mais recomendadas do que utilizar o Alias, tem praticamente o mesmo propósito)
interface Usuario {
    nome: string;
    email: string;
    endereco?: string;
}

function getUser(): Usuario {
    return {
        nome: 'Silvio',
        email: 'silvio@email.com'
    }
}

function setUser(usuario: Usuario) {
    // ...
}