let carro = { marca: "Toyota", modelo: "Corolla", ano: 2020 };
let descricaoCarro = "";

for (let chave in carro) {
  descricaoCarro += `${chave}: ${carro[chave]} `;
}

console.log(descricaoCarro.trim()); // .trim() remove o espaço extra no final