# Lucas Zamberlan — Portfólio

Site de portfólio de Lucas Zamberlan — Estratégia & Design.

Repositório: [github.com/LZamber/SITE-PORTIFOLIO](https://github.com/LZamber/SITE-PORTIFOLIO)

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173).

## Deploy (GitHub Pages)

O deploy é automático via GitHub Actions ao fazer push na branch `main`.

1. **Settings → Pages → Build and deployment**
   - Source: **GitHub Actions**
2. Após o primeiro push, o workflow publica em `github-pages`.

## Domínio customizado (.com.br — Registro.br)

### 1. Criar o arquivo CNAME

Edite `public/CNAME` e coloque **apenas** seu domínio (uma linha, sem `https://`):

```
www.seudominio.com.br
```

> Recomendado usar `www` — no Registro.br é mais simples apontar com CNAME.

Faça commit e push. O GitHub Pages lerá esse arquivo automaticamente.

### 2. DNS no Registro.br

Acesse o painel do [Registro.br](https://registro.br) → seu domínio → **DNS**.

**Opção A — subdomínio `www` (recomendado)**

| Tipo  | Nome | Destino              |
| ----- | ---- | -------------------- |
| CNAME | www  | `lzamber.github.io`  |

**Opção B — domínio raiz (`seudominio.com.br`)**

| Tipo | Nome | Destino           |
| ---- | ---- | ----------------- |
| A    | @    | `185.199.108.153` |
| A    | @    | `185.199.109.153` |
| A    | @    | `185.199.110.153` |
| A    | @    | `185.199.111.153` |

E redirecione `www` → raiz (ou use CNAME no `www` também).

### 3. Ativar no GitHub

1. Repositório → **Settings → Pages**
2. Em **Custom domain**, informe: `www.seudominio.com.br`
3. Marque **Enforce HTTPS** (pode levar até 24h após o DNS propagar)

### 4. Verificar

- DNS propagado: [dnschecker.org](https://dnschecker.org)
- Site no ar: `https://www.seudominio.com.br`

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4
- React Router
- GitHub Pages + GitHub Actions
