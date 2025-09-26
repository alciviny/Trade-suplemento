const supplementos = [
  {
    id: 1,
    nome_produto: "Creatina Monohidratada Hardcore (300g)",
    preco_atual: 79.90,
    preco_mais_caro: 99.90,
    descricao: "Aumente sua força e desempenho nos treinos com a creatina monohidratada pura. Essencial para a recuperação muscular e ganho de massa.",
    descricao_desconto_pix: "Pague R$ 71,91 no Pix (10% de desconto)",
    foto_produto_url: "https://via.placeholder.com/400x400.png?text=Creatina"
  },
  {
    id: 2,
    nome_produto: "Whey Protein Concentrado (900g) - Sabor Chocolate",
    preco_atual: 189.90,
    preco_mais_caro: 229.90,
    descricao: "Proteína de alta qualidade para auxiliar na recuperação e construção muscular. Ideal para o seu pós-treino.",
    descricao_desconto_pix: "Pague R$ 170,91 no Pix (10% de desconto)",
    foto_produto_url: "https://via.placeholder.com/400x400.png?text=Whey+Protein"
  },
  {
    id: 3,
    nome_produto: "Pré-treino Égide (150g) - Sabor Frutas Vermelhas",
    preco_atual: 99.90,
    preco_mais_caro: 119.90,
    descricao: "Fórmula explosiva para dar mais energia, foco e disposição para seus treinos. Supere seus limites a cada série.",
    descricao_desconto_pix: "Pague R$ 89,91 no Pix (10% de desconto)",
    foto_produto_url: "https://via.placeholder.com/400x400.png?text=Pre-treino"
  },
  {
    id: 4,
    nome_produto: "BCAA 2400 (120 Cápsulas)",
    preco_atual: 65.50,
    preco_mais_caro: 80.00,
    descricao: "Aminoácidos de cadeia ramificada essenciais para a síntese proteica, recuperação muscular e prevenção da fadiga.",
    descricao_desconto_pix: "Pague R$ 58,95 no Pix (10% de desconto)",
    foto_produto_url: "https://via.placeholder.com/400x400.png?text=BCAA"
  },
  {
    id: 5,
    nome_produto: "Multivitamínico A-Z (90 Cápsulas)",
    preco_atual: 59.90,
    preco_mais_caro: 75.00,
    descricao: "Complexo completo de vitaminas e minerais para fortalecer o sistema imunológico e garantir o bom funcionamento do corpo.",
    descricao_desconto_pix: "Pague R$ 53,91 no Pix (10% de desconto)",
    foto_produto_url: "https://via.placeholder.com/400x400.png?text=Multivitaminico"
  },
  {
    id: 6,
    nome_produto: "Massa Hipercalórica (3kg) - Sabor Baunilha",
    preco_atual: 145.00,
    preco_mais_caro: 179.90,
    descricao: "Ideal para quem busca ganhar peso e massa muscular de forma saudável. Combinação de carboidratos e proteínas.",
    descricao_desconto_pix: "Pague R$ 130,50 no Pix (10% de desconto)",
    foto_produto_url: "https://via.placeholder.com/400x400.png?text=Hipercalorico"
  },
  {
    id: 7,
    nome_produto: "Glutamina Micronizada (150g)",
    preco_atual: 72.90,
    preco_mais_caro: 89.90,
    descricao: "Aminoácido importante para a saúde intestinal e para o sistema imunológico. Auxilia na recuperação pós-treino.",
    descricao_desconto_pix: "Pague R$ 65,61 no Pix (10% de desconto)",
    foto_produto_url: "https://via.placeholder.com/400x400.png?text=Glutamina"
  },
  {
    id: 8,
    nome_produto: "Albumina Pura (500g) - Sem Sabor",
    preco_atual: 49.90,
    preco_mais_caro: 64.90,
    descricao: "Proteína de alta qualidade extraída da clara do ovo, com digestão lenta, ideal para ser consumida antes de dormir.",
    descricao_desconto_pix: "Pague R$ 44,91 no Pix (10% de desconto)",
    foto_produto_url: "https://via.placeholder.com/400x400.png?text=Albumina"
  }
];

exports.ListarProdutos=(req,res)=>{
    res.json(supplementos)
}

exports.BuscarProdutoPorId=(req,res)=>{}