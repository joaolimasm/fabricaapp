function cadastrar(usuarios, ...novosusuarios) {
    let totalUsuarios = [
        ...usuarios,
        ...novosusuarios

    ];
    return console.log(totalUsuarios);

}

let usuarios = ["jhon", "magalhaes"];

let novosusuarios = cadastrar(usuarios, "joao", "lima");