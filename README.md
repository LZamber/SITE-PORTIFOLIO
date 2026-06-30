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

## Domínio: lzamber.com.br

Arquivo `public/CNAME` já configurado com `lzamber.com.br`.

### Passo 1 — GitHub (repositório)

1. Acesse [Settings → Pages](https://github.com/LZamber/SITE-PORTIFOLIO/settings/pages)
2. **Build and deployment → Source:** selecione **GitHub Actions** (se ainda não estiver)
3. Em **Custom domain**, digite: `lzamber.com.br` → **Save**
4. Aguarde a verificação DNS (pode demorar alguns minutos)
5. Quando aparecer, marque **Enforce HTTPS**

> Cada push na branch `main` republica o site automaticamente.

### Passo 2 — Registro.br (DNS)

1. Acesse [registro.br](https://registro.br) → **Meus Domínios** → **lzamber.com.br**
2. Clique em **DNS** ou **Editar zona**
3. Remova registros conflitantes (A/AAAA/CNAME antigos apontando para outro lugar)
4. Adicione **4 registros A** para o domínio raiz:

| Tipo | Nome / Host | Valor / Destino   | TTL  |
| ---- | ----------- | ----------------- | ---- |
| A    | `@`         | `185.199.108.153` | 3600 |
| A    | `@`         | `185.199.109.153` | 3600 |
| A    | `@`         | `185.199.110.153` | 3600 |
| A    | `@`         | `185.199.111.153` | 3600 |

5. *(Opcional)* Para `www.lzamber.com.br` também funcionar, adicione:

| Tipo  | Nome / Host | Valor / Destino     | TTL  |
| ----- | ----------- | ------------------- | ---- |
| CNAME | `www`       | `lzamber.github.io` | 3600 |

6. Salve e aguarde a propagação (15 min a 48 h; geralmente 1–4 h)

### Passo 3 — Verificar

- DNS: [dnschecker.org/#A/lzamber.com.br](https://dnschecker.org/#A/lzamber.com.br)
- Site: [https://lzamber.com.br](https://lzamber.com.br)
- Rota `/sobre` deve abrir normalmente (SPA configurada)

### Ordem recomendada

```
GitHub Pages (Actions) → push com CNAME → DNS no Registro.br → Custom domain no GitHub → HTTPS
```

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4
- React Router
- GitHub Pages + GitHub Actions
