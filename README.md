📦 Controle de Estoque
Uma aplicação completa para gerenciamento de estoque, com funcionalidades de autenticação e manipulação de produtos. Este projeto está dividido em dois repositórios: um para o frontend e outro para o backend.

🚀 Tecnologias Utilizadas
Frontend
React
Styled Components
Vite
Backend
Node.js
Express
Banco de Dados: [PostgreSQL/MySQL/etc.] (especificar o banco usado)
JWT para autenticação.
🌟 Funcionalidades
🆕 Cadastrar produtos: Adicione novos itens ao estoque.
✏️ Editar produtos: Atualize informações de itens já cadastrados.
❌ Excluir produtos: Remova itens do estoque.
🔒 Autenticação: Login com senha criptografada para maior segurança.
📂 Estrutura do Projeto
Frontend: O código do frontend está disponível neste repositório: estoqueFront.
Backend: O código do backend está disponível neste repositório: estoqueBack.
🔧 Instalação e Execução
Pré-requisitos
Certifique-se de ter instalado na sua máquina:

Node.js
Git
Configuração do Frontend
1. Clone o repositório:
bash
Copiar código
git clone https://github.com/VitorMoraes99/estoqueFront.git
2. Navegue até o diretório do projeto:
bash
Copiar código
cd estoqueFront
3. Instale as dependências:
bash
Copiar código
npm install
4. Inicie o servidor de desenvolvimento:
bash
Copiar código
npm run dev
Configuração do Backend
1. Clone o repositório:
bash
Copiar código
git clone https://github.com/VitorMoraes99/estoqueBack.git
2. Navegue até o diretório do projeto:
bash
Copiar código
cd estoqueBack
3. Instale as dependências:
bash
Copiar código
npm install
4. Configure as variáveis de ambiente no arquivo .env:
env
Copiar código
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=estoque
JWT_SECRET=sua_chave_secreta
5. Inicie o servidor:
bash
Copiar código
npm start
🐳 Usando Docker
1. Configuração do Docker para o Frontend
Crie um arquivo Dockerfile no diretório raiz do frontend com o seguinte conteúdo:

dockerfile
Copiar código
# Usando a imagem oficial do Node.js
FROM node:16

# Definindo o diretório de trabalho
WORKDIR /app

# Copiando o arquivo package.json e package-lock.json
COPY package*.json ./

# Instalando as dependências
RUN npm install

# Copiando o código fonte para o contêiner
COPY . .

# Expondo a porta da aplicação
EXPOSE 5173

# Comando para rodar a aplicação
CMD ["npm", "run", "dev"]
Crie também um arquivo docker-compose.yml no diretório raiz do frontend:

yaml
Copiar código
version: "3.8"
services:
  frontend:
    build: .
    ports:
      - "5173:5173"
    volumes:
      - .:/app
    environment:
      - CHOKIDAR_USEPOLLING=true
2. Configuração do Docker para o Backend
Crie um arquivo Dockerfile no diretório raiz do backend com o seguinte conteúdo:

dockerfile
Copiar código
# Usando a imagem oficial do Node.js
FROM node:16

# Definindo o diretório de trabalho
WORKDIR /app

# Copiando o arquivo package.json e package-lock.json
COPY package*.json ./

# Instalando as dependências
RUN npm install

# Copiando o código fonte para o contêiner
COPY . .

# Expondo a porta da aplicação
EXPOSE 3000

# Comando para rodar o servidor
CMD ["npm", "start"]
Crie também um arquivo docker-compose.yml no diretório raiz do backend:

yaml
Copiar código
version: "3.8"
services:
  backend:
    build: .
    ports:
      - "3000:3000"
    env_file:
      - .env
    depends_on:
      - db
  db:
    image: mysql:8
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: root_password
      MYSQL_DATABASE: estoque
      MYSQL_USER: seu_usuario
      MYSQL_PASSWORD: sua_senha
    ports:
      - "3306:3306"
    volumes:
      - db_data:/var/lib/mysql
volumes:
  db_data:
3. Iniciar os contêineres com Docker Compose
Na raiz de ambos os repositórios (frontend e backend), execute:

bash
Copiar código
docker-compose up --build
Os serviços estarão disponíveis em:

Frontend: http://localhost:5173
Backend: http://localhost:3000
Banco de dados: localhost:3306 (para o MySQL)
🤝 Contribuição
Contribuições são bem-vindas!

Faça um fork do projeto.
Crie uma branch para sua feature:
bash
Copiar código
git checkout -b minha-feature
Faça o commit das alterações:
bash
Copiar código
git commit -m 'Adiciona minha feature'
Envie as alterações para a branch principal:
bash
Copiar código
git push origin minha-feature
Abra um Pull Request.
🛠️ Futuras Melhorias
Adicionar relatórios detalhados do estoque.
Implementar gráficos analíticos.
Melhorar a interface com temas dinâmicos.
📜 Licença
Este projeto está sob a licença MIT.

🧑‍💻 Contato
Vitor Moraes
Github: https://github.com/VitorMoraes99
Linkedin: https://www.linkedin.com/in/vitor-matheus-de-moraes/

