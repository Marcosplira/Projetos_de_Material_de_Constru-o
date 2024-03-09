// Suponha que você tenha uma lista de produtos
let products = [
    { name: "Tinta Látex", category: "Pintura" },
    { name: "Argamassa", category: "Construção" },
    { name: "Parafusos", category: "Ferramentas" },
    // Adicione mais produtos conforme necessário
];

// Função para filtrar produtos com base no termo de pesquisa
function searchProducts(query) {
    query = query.toLowerCase();
    return products.filter(product => {
        return product.name.toLowerCase().includes(query) || product.category.toLowerCase().includes(query);
    });
}

// Função para exibir os produtos filtrados
function displayProducts(filteredProducts) {
    // Limpa a lista de produtos atual
    // Aqui você deve ter um elemento HTML onde a lista de produtos é exibida, 
    // você pode limpá-lo da maneira que preferir, por exemplo:
    // document.getElementById('productsList').innerHTML = '';
    console.log("Produtos filtrados:", filteredProducts);
}

// Evento de clique no botão de pesquisa
document.getElementById("searchButton").addEventListener("click", function() {
    let searchTerm = document.getElementById("searchInput").value;
    let filteredProducts = searchProducts(searchTerm);
    displayProducts(filteredProducts);
});

// Evento de pressionar a tecla Enter na barra de pesquisa
document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        let searchTerm = document.getElementById("searchInput").value;
        let filteredProducts = searchProducts(searchTerm);
        displayProducts(filteredProducts);
    }
});