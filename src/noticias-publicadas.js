import { noticias as demonstracao } from './noticias.js';

async function carregarNoticias() {
  const cms = import.meta.env.CMS_URL;
  if (!cms) return demonstracao;

  const url = new URL('/api/noticias', cms);
  url.searchParams.set('sort', '-createdAt');
  url.searchParams.set('where[_status][equals]', 'published');
  const noticias = [];
  for (let page = 1; ; page++) {
    url.searchParams.set('page', String(page));
    const resposta = await fetch(url, { signal: AbortSignal.timeout(10000) });
    if (!resposta.ok) throw new Error(`Falha ao consultar notícias do Payload (${resposta.status}).`);
    const dados = await resposta.json();
    noticias.push(...dados.docs);
    if (!dados.hasNextPage) return noticias;
  }
}

export const noticias = await carregarNoticias();
