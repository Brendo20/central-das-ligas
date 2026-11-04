const fotos = ['1579952363873-27f3bade9f55', '1431324155629-1a6deb1dec8d', '1551958219-acbc608c6377', '1517466787929-bc90951d0974'];
export const noticias = [
  ['virada', 'Virada no último minuto incendeia a Copa da Vila', 'O Vila Norte bateu o Estrela por 3 a 2 com um gol na última jogada.', fotos[0]],
  ['derbi', 'Dérbi promete lotar a Arena Central', 'Central e União disputam a liderança do grupo na próxima rodada.', fotos[1]],
  ['defesa', 'A defesa que fez o bairro comemorar', 'O goleiro do Horizonte pegou um pênalti e garantiu o empate fora de casa.', fotos[2]],
  ['horario', 'Rodada de sábado ganha novo horário', 'O primeiro jogo da rodada começa às 18h. A Arena Central recebe a partida.'],
  ['treino', 'Vila Norte abre treino para a torcida', 'A equipe recebe a torcida na sexta-feira, antes da próxima rodada.', fotos[3]],
].map(([slug, titulo, texto, foto]) => ({
  slug, titulo, texto,
  ligas: ['virada', 'defesa', 'treino'].includes(slug) ? ['copa-da-vila'] : [],
  foto: foto && `https://images.unsplash.com/photo-${foto}?w=1100&auto=format&fit=crop`,
}));
