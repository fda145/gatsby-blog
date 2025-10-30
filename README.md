```markdown
# Gatsby Blog - Projeto Jamstack

Blog profissional construído com Gatsby, React e MDX, seguindo a arquitetura Jamstack.

## 🚀 Funcionalidades

- ✅ Rotas dinâmicas geradas a partir de arquivos MDX
- ✅ Formulário de contato com validação completa
- ✅ Design responsivo com CSS-in-JS (Emotion)
- ✅ Otimização automática de imagens
- ✅ SEO otimizado (meta tags, sitemap, robots.txt)
- ✅ CI/CD com GitHub Actions
- ✅ Deploy automático no GitHub Pages

## 📋 Pré-requisitos

- Node.js 18+
- npm ou yarn

## 🔧 Instalação

```bash
# Clonar o repositório
git clone https://github.com/seu-username/gatsby-blog.git

# Entrar na pasta
cd gatsby-blog

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run develop
```

Acesse `http://localhost:8000`

## 📦 Scripts Disponíveis

```bash
npm run develop   # Inicia servidor de desenvolvimento
npm run build     # Build para produção
npm run serve     # Serve o build localmente
npm run clean     # Limpa cache do Gatsby
```

## 🏗️ Estrutura do Projeto

```
gatsby-blog/
├── src/
│   ├── components/      # Componentes React
│   ├── pages/          # Páginas estáticas
│   ├── templates/      # Templates para rotas dinâmicas
│   ├── styles/         # Estilos globais
│   └── content/        # Posts em MDX
├── static/             # Arquivos estáticos
├── gatsby-config.js    # Configuração do Gatsby
├── gatsby-node.js      # API Node do Gatsby
└── .github/workflows/  # CI/CD com GitHub Actions
```

## 📝 Como Adicionar um Novo Post

1. Crie um arquivo `.mdx` em `src/content/posts/`
2. Adicione o frontmatter:

```markdown
---
title: "Título do Post"
date: "2024-10-25"
author: "Seu Nome"
excerpt: "Breve descrição do post"
slug: "titulo-do-post"
featuredImage: "../images/imagem.jpg"
---

# Seu conteúdo aqui...
```

3. O Gatsby irá gerar automaticamente a rota `/posts/titulo-do-post`

## 🚀 Deploy

O projeto está configurado para deploy automático:

1. Faça push para a branch `main`
2. GitHub Actions executa o build
3. Se bem-sucedido, faz deploy no GitHub Pages
4. Site atualizado em: `https://seu-username.github.io/gatsby-blog`

## 🛠️ Tecnologias Utilizadas

- **Gatsby 5** - Framework React para sites estáticos
- **React 18** - Biblioteca JavaScript
- **MDX** - Markdown + JSX
- **Emotion** - CSS-in-JS
- **GraphQL** - Camada de dados
- **GitHub Actions** - CI/CD
- **GitHub Pages** - Hospedagem

## 📊 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- SEO Score: 100

## 📄 Licença

MIT License - veja LICENSE.md

## 👤 Autor

Seu Nome - [@seu-username](https://github.com/seu-username)
```

## ✅ Checklist de Deploy

Antes de fazer o deploy, verifique:

- [ ] Todas as dependências instaladas (`npm ci`)
- [ ] Build local funciona (`npm run build`)
- [ ] Imagens otimizadas e no lugar correto
- [ ] URLs no `gatsby-config.js` atualizadas
- [ ] `pathPrefix` configurado corretamente
- [ ] `.gitignore` configurado
- [ ] GitHub Pages habilitado nas configurações do repo
- [ ] Workflow do GitHub Actions criado

## 🐛 Troubleshooting

### Erro de build no GitHub Actions

```bash
# Limpe o cache localmente e teste
npm run clean
npm run build
```

### Imagens não carregam

- Verifique se as imagens estão em `static/images/`
- Verifique os caminhos no frontmatter dos posts
- Certifique-se de que `gatsby-plugin-image` está configurado

### Rotas 404 no GitHub Pages

- Verifique se o `pathPrefix` está correto
- Certifique-se de que está usando Link do Gatsby, não `<a>`
- Verifique se o deploy foi concluído com sucesso

## 📚 Recursos Adicionais

- [Documentação do Gatsby](https://www.gatsbyjs.com/docs/)
- [MDX Documentation](https://mdxjs.com/)
- [Emotion Documentation](https://emotion.sh/docs/introduction)
- [GitHub Actions Docs](https://docs.github.com/en/actions)

---

## 🚀 Deploy Alternativo com Netlify

Se preferir usar Netlify ao invés de GitHub Pages:

### netlify.toml

```toml
[build]
  command = "npm run build"
  publish = "public"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Passos:

1. Crie conta no [Netlify](https://netlify.com)
2. Conecte seu repositório GitHub
3. Configure o build command: `npm run build`
4. Configure o publish directory: `public`
5. Deploy automático a cada push!
