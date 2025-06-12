const cardsContainer = document.querySelector('.cards');
const form = document.getElementById('conexaoForm');

// Projetos iniciais fictícios
const projetos = [
  {
    nome: "Feira do Produtor Local",
    descricao: "Agricultores da região vendem direto na cidade todo sábado.",
  },
  {
    nome: "Horta Comunitária Urbana",
    descricao: "é um espaço em área urbana, geralmente pública ou compartilhada, onde membros da comunidade se reúnem para cultivar alimentos de forma colaborativa. ",
  },
  {
    nome: "Caminho do Leite",
    descricao: "Este percurso envolve a ordenha, o transporte para uma fábrica de processamento.",
  }
];

// Função para criar cards
function renderCards() {
  cardsContainer.innerHTML = '';
  projetos.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${p.nome}</h3><p>${p.descricao}</p>`;
    cardsContainer.appendChild(card);
  });
}

// Evento de envio de formulário
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const projeto = document.getElementById('projeto').value;
  const descricao = document.getElementById('descricao').value;

  projetos.push({ nome: projeto, descricao });
  renderCards();

  form.reset();
  alert('Projeto adicionado com sucesso!');
});

renderCards();
