# 🍕 Bella Massa — Landing Page

Landing page premium para a pizzaria artesanal **Bella Massa**, projetada com foco total em **conversão via WhatsApp**.

Projeto 100% front-end, leve, rápido e pronto para produção — ideal para negócios locais que querem transformar visitas em pedidos.

---

## ✨ Preview do Projeto
<img width="2589" height="1617" alt="download" src="https://github.com/user-attachments/assets/1146bfae-3214-4d16-bbd7-a5a9335f8fea" />

---

## 🚀 Demonstração

* 🔗 Deploy: *(https://bellamassa-self.vercel.app/#hero)*
* 💬 Pedido direto via WhatsApp integrado

---

## 📁 Estrutura

```
bella-massa/
├── index.html    # Estrutura da página (SEO + semântica)
├── style.css     # Estilos, layout e animações
├── script.js     # Interações, carrinho e lógica
└── README.md
```

---

## ⚡ Como Rodar

Simples e direto — sem instalação:

```bash
# opção 1
abra o index.html no navegador

# opção 2 (recomendado)
use Live Server no VSCode
```

**Passos:**

1. Abra a pasta no VSCode
2. Clique com botão direito em `index.html`
3. `Open with Live Server`

> ⚠️ Os arquivos precisam estar na mesma pasta

---

## 🧠 Tecnologias

* **HTML5 semântico** → estrutura + SEO
* **CSS3 puro** → responsividade + animações modernas
* **JavaScript (ES6+)** → interatividade e estado

**Fontes:**

* *Playfair Display* → títulos elegantes
* *DM Sans* → leitura confortável

---

## 📄 Seções

* 🎯 **Hero** — impacto inicial + CTA
* 🍕 **Cardápio** — produtos com filtros
* ⭐ **Diferenciais** — proposta de valor
* 💬 **Depoimentos** — prova social
* 👨‍🍳 **Sobre** — storytelling da marca
* 🚀 **CTA Final** — conversão
* 📍 **Rodapé** — contato e redes

---

## 🛒 Funcionalidades

### Carrinho de Compras

* Adicionar / remover itens
* Controle de quantidade
* Total automático
* Frete grátis acima de R$ 80
* Persistência com `localStorage`
* Sidebar + overlay moderno
* Botão flutuante no mobile

---

### 📲 Integração com WhatsApp

* Botão flutuante com animação
* Pedido direto por item
* Checkout gera mensagem automática com:

  * itens
  * quantidades
  * valor total

---

### 🍕 Cardápio Interativo

* Filtro por categoria:

  * Tradicionais
  * Especiais
  * Bebidas
* Animações suaves
* **15 itens no total**

---

### 🎨 Experiência do Usuário

* Navbar dinâmica ao scroll
* Menu mobile (hambúrguer)
* Scroll suave entre seções
* Scroll reveal (fade + slide)
* Interface moderna e fluida

---

## 🎨 Design System

| Variável   | Cor       | Uso        |
| ---------- | --------- | ---------- |
| `--red`    | `#C8102E` | Principal  |
| `--red-dk` | `#9B0C23` | Hover      |
| `--orange` | `#E8521A` | Gradientes |
| `--amber`  | `#F5A623` | Destaques  |
| `--black`  | `#0E0E0E` | Fundo      |
| `--dark`   | `#1A1A1A` | Seções     |
| `--gray`   | `#2E2E2E` | Cards      |

---

## 📱 Responsividade

* 💻 Desktop → layout completo
* 📱 Tablet → adaptação de grids
* 📲 Mobile → navegação simplificada + foco em conversão

---

## ⚙️ Personalização

### 📞 Alterar WhatsApp

Substitua:

```
5511999999999
```

pelo número real (DDI + DDD)

---

### 🖼️ Imagens

* Atualmente via Unsplash
* Troque nos atributos:

  * `src`
  * `data-img`

---

### ➕ Novo Item no Cardápio

Copie um card existente e edite:

```html
data-cat="tradicionais"
data-name="Nome"
data-price="62"
data-img="url"
```

---

## 🔍 SEO

Já configurado com:

* `<title>`
* `description`
* `keywords`
* Open Graph básico

💡 Para produção:

* adicionar `og:image`
* adicionar `og:url`

---

## ♿ Acessibilidade

* `alt` em imagens
* `aria-label` em ações
* Contraste adequado
* Navegação por teclado

---

