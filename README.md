# 🇨🇱 Novos Chilenos - Lista de Viagens

Uma Single Page Application (SPA) simples e responsiva desenvolvida para organizar datas de viagens em grupo para o Chile. O objetivo do projeto é facilitar o encontro de pessoas do mesmo grupo que estarão no país em datas sobrepostas, permitindo combinar passeios, saídas e ajuda mútua.

## 🚀 Funcionalidades

- **Cadastro de Viajantes:** Inserção de nome, data de chegada, data de retorno, WhatsApp (obrigatório) e Instagram (opcional).
- **Ordenação Automática:** A lista de cards é automaticamente organizada em ordem cronológica com base na data de chegada de cada viajante.
- **Links Dinâmicos:**
  - O número de WhatsApp inserido é formatado automaticamente e gera um link direto para a API do WhatsApp Web (`wa.me`).
  - O `@` do Instagram é tratado para gerar um link clicável direto para o perfil do usuário.
- **Validação de Datas:** Impede que a data de retorno inserida seja anterior à data de chegada.
- **Armazenamento Local:** Nesta versão inicial, os dados inseridos e manipulados são gerenciados pelo navegador via JavaScript.

## 🛠️ Ferramentas e Tecnologias

- **HTML5:** Estrutura semântica da aplicação.
- **JavaScript (Vanilla):** Lógica de ordenação, formatação de links e manipulação do DOM.
- **Tailwind CSS (via CDN):** Estilização rápida, moderna e totalmente responsiva (Mobile First).
- **FontAwesome:** Utilizado para a inserção de ícones vetoriais (WhatsApp, Instagram, Calendário).
- **Cloudflare Pages:** Plataforma de hospedagem e Continuous Integration (CI) conectada diretamente ao repositório.
- **Neon:** Postgres Serverless. Banco de dados que permite criar "branches" do banco.

## ⚙️ Como executar o projeto localmente

Como o projeto é uma SPA baseada em arquivos estáticos e sem dependências de build, executá-lo é extremamente simples:

1. Faça o clone do repositório:
   ```bash
   git clone [https://github.com/soumaisalex/Trip-for-Chile.git](https://github.com/soumaisalex/Trip-for-Chile.git)