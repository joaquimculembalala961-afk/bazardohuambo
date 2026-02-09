const produtos = [
  {
    nome: "Samsung galaxi a06",
    preco: "80.000 Kz",
    imagem: "https://res.cloudinary.com/derpqbbd0/image/upload/v1770555941/download_n4bblx.jpg",
    whatsapp: "244928836835"
  },
  {
    nome: "TV LED 32 Polegadas",
    preco: "120.000 Kz",
    imagem: "https://res.cloudinary.com/derpqbbd0/image/upload/v1770621095/download_1_qyasrk.jpg",
    whatsapp: "244926870276"
  }
];

const container = document.getElementById("produtos");

produtos.forEach(produto => {
  const div = document.createElement("div");
  div.className = "produto";

  div.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}">
    <div class="info">
      <h3>${produto.nome}</h3>
      <p>${produto.preco}</p>
      <a href="https://wa.me/${produto.whatsapp}" target="_blank">
        Falar com o vendedor
      </a>
    </div>
  `;

  container.appendChild(div);
});
