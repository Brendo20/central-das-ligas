# Primeiro recorte

A home tem três manchetes com foto. No desktop, duas ficam empilhadas ao lado da principal. No celular, as três aparecem em sequência. As últimas notícias incluem exemplos com e sem foto.

Cada matéria tem rota própria, identificação de conteúdo fictício e link de volta à home.

A próxima etapa inclui ligas, favorita, tabelas externas e agenda com próximos jogos. A integração com Payload fica para depois da validação visual.

## Ligas, favorita e agenda

- Ligas abre páginas com notícias vinculadas e tabela externa quando cadastrada.
- Minha Liga permite escolher e trocar a favorita, preservada neste navegador.
- Agenda exibe apenas próximos jogos, com busca textual e filtro pesquisável por liga. A lista de ligas também tem busca textual.
- Menu inferior tem Início, Minha Liga, Ligas, Agenda e Menu. O menu de tela cheia reúne também Notícias e Tabelas.
- Jogos e liga de demonstração são identificados como fictícios.


## Modelo editorial do Payload

| Cadastro | Campos |
| --- | --- |
| Notícias | Título, slug único, corpo, foto de capa opcional, ligas relacionadas, data de publicação e posição opcional de destaque de 1 a 3. |
| Ligas | Nome, slug único e URL opcional da tabela oficial. |
| Jogos | Liga, mandante, visitante, data e hora e local. |
| Mídia | Arquivo de imagem e texto alternativo. |

O editor pode salvar notícias como rascunho. A home e as páginas das ligas exibem apenas matérias publicadas. Cada posição de destaque aceita uma matéria publicada com foto. As demais matérias aparecem por data de publicação.

O cadastro da liga valida URLs HTTP e HTTPS. Quando há URL, o botão Ver tabela abre a fonte oficial em outra aba. A favorita continua salva no navegador pelo slug da liga.

A Agenda lista partidas futuras em ordem cronológica, com horários exibidos no fuso de São Paulo. A busca por texto e o filtro por liga podem ser usados juntos.

### Aceite da integração local

- Publicar uma matéria com foto e conferir a home, a rota da matéria e a página da liga vinculada.
- Conferir que uma matéria em rascunho fica fora do portal público.
- Cadastrar uma liga com tabela externa e conferir o botão na página da liga.
- Cadastrar um jogo futuro e conferir sua exibição e seus filtros na Agenda.
- Validar com banco e mídia locais antes de preparar a implantação.
