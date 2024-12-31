# Entendendo o Fenômeno Físico Representado

## Gravidade: O Motor Fundamental

A gravidade é a força responsável por puxar os corpos em direção ao centro da Terra. Na física clássica, sua intensidade é representada por g=9,8 m/s2g=9,8m/s2. Isso significa que, a cada segundo de queda, a velocidade de um objeto em queda livre aumenta 9,8 metros por segundo.

No nosso experimento, adaptamos essa aceleração para um ambiente visual em pixels, utilizando o tempo decorrido entre cada atualização para calcular o incremento na velocidade. A fórmula básica utilizada é:

    v=v+g⋅Δt
    v=v+g⋅Δt

Aqui:

    vv é a velocidade atual.
    gg é a aceleração gravitacional.
    ΔtΔt é o intervalo de tempo entre as atualizações (neste caso, 16 milissegundos).

Esse cálculo assegura que a velocidade aumenta de maneira proporcional ao tempo, exatamente como ocorre no mundo real.

## Velocidade Terminal: O Efeito da Resistência do Ar

Na realidade, um objeto em queda não acelera indefinidamente. Isso acontece porque o ar exerce uma força contrária ao movimento, conhecida como resistência do ar ou força de arrasto. Quando essa força se iguala à força gravitacional, o objeto atinge sua velocidade terminal, ou seja, sua velocidade máxima de queda.

Para simular isso, definimos um limite para a velocidade no experimento:


    v=min⁡(v+g⋅Δt,vterminal)
    v=min(v+g⋅Δt,vterminal​)

Nesse caso, `vterminal` é um valor arbitrário que representa a máxima velocidade que o ponto pode atingir. No mundo real, a velocidade terminal depende de fatores como:

    A área do objeto (quanto maior, maior a resistência).
    A densidade do ar.
    A forma e a massa do objeto.

## Força de Impulso: Resistindo à Gravidade

Quando você clica, aplicamos uma força oposta à gravidade para empurrar o ponto para cima. A fórmula usada é:

    v=v−Fpush
    v=v−Fpush​

Aqui:

    vv é a velocidade atual.
    FpushFpush​ é a força gerada pelo clique, que subtrai da velocidade atual, invertendo momentaneamente o movimento.

No mundo real, isso é equivalente a um foguete ou balão que aplica uma força ascendente para vencer a gravidade.

## Posição: Movendo-se no Espaço

A posição do ponto é atualizada com base na velocidade, respeitando o intervalo de tempo entre cada quadro:

    y=y+v⋅Δt
    y=y+v⋅Δt

Aqui:

    yy é a posição vertical do ponto.
    vv é a velocidade atual.
    ΔtΔt é o intervalo de tempo.

Essa fórmula garante que o movimento do ponto seja contínuo e suave.

## Como a Gravidade e a Resistência do Ar se Relacionam?

**Fase Inicial (Aceleração Livre):** Quando o ponto começa a cair, a gravidade é a única força atuando, acelerando o movimento.

**Fase de Velocidade Terminal:** À medida que a velocidade aumenta, a resistência do ar cresce. Quando essa resistência se iguala à força gravitacional, a aceleração para, e o objeto mantém uma velocidade constante.

**Interferência da Força de Impulso:** Quando clicamos, criamos uma força contrária que altera momentaneamente a velocidade e, consequentemente, a posição do ponto.