let pessoa = { nome: "Ana", idade: 25, cidade: "Curitiba" };

for (let chave in pessoa) {
  console.log(pessoa[chave]); // Acessa o valor usando a chave
}