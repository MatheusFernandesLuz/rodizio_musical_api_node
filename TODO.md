TODO: Se não houver músico franco na voz principal, verifica na voz alternativa.

TODO 1: Comparar a quantidade tocada considerando o dia da semana. Exemplo:
musico1: {
  voz principal = contralto,
  vozes alternativas = soprano, tenor
  quantidade tocada no dia x = 2 vezes
  quantidade tocada total = 10 vezes
}

musico2: {
  voz principal = soprano,
  vozes alternativas = contrato
  quantidade tocada no dia x = 4 vezes
  quantidade tocada no total = 5 vezes
}

Eu quero = músico para tocar no dia x
Resultado = músico 1, pois apesar de ter tocado mais vezes, tocou menos no dia x.


TODO 2: Considerar todas as vozes ao fazer a ordenação de quantidade tocada. Exemplo:
musico1: {
  voz principal = contralto,
  vozes alternativas = soprano, tenor
  quantidade tocada no dia x = 2 vezes
}

musico2: {
  voz principal = soprano,
  vozes alternativas = contrato
  quantidade tocada no dia x = 4 vezes
}

Eu quero = musico para o dia x que toca SOPRANO.
Resultado = músico 1, pois toca soprano (como alternativa), mas tocou menos vezes no dia x.
