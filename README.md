# Central das Ligas

Protótipo editorial de Fut7 amador. Requer Node.js 22 ou superior.

- `npm ci` instala as dependências.
- `npm run dev` inicia o servidor local.
- `npm run build` gera a versão estática em `dist/`.
- `npm run preview` serve a versão gerada.

As matérias fictícias ficam em `src/noticias.js`. As fotos de referência são servidas pelo Unsplash e precisam de conexão. A identidade visual usa variáveis em `src/portal.css`.

O recorte e seus critérios estão em [docs/especificacao.md](docs/especificacao.md).

## Tabelas das ligas

Cadastre a URL fornecida pela organização em `src/ligas.js`. A página da liga abre esse endereço em uma nova aba pelo botão **Ver tabela**.

Para vincular uma notícia a uma liga, inclua o slug da liga no campo `ligas` do objeto da notícia. Uma notícia pode ter mais de uma liga.

## Piloto editorial local

Em um terminal PowerShell, instale as dependências do painel e inicie-o com uma chave local:

```powershell
npm --prefix cms install
$env:PAYLOAD_SECRET = [Convert]::ToHexString([Security.Cryptography.RandomNumberGenerator]::GetBytes(32))
npm --prefix cms run dev
```

Acesse http://127.0.0.1:3000/admin, crie o primeiro usuário local e cadastre uma notícia com slug único. Escolha uma liga e salve como rascunho para verificar a separação do conteúdo público. Depois publique a matéria.

Em outro terminal, gere a versão estática conectada ao painel:

```powershell
$env:CMS_URL = 'http://127.0.0.1:3000'
npm run build
npm run preview
```

Após publicar alterações, rode o build novamente. Sem CMS_URL, o portal usa as notícias demonstrativas. O piloto usa SQLite local e as ligas já existentes no portal.
