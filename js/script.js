const calcular = document.getElementById('calcular');

function pace() {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const distancia = document.getElementById('distancia').value;
    const tempo = document.getElementById('tempo').value;

    const resultado = document.getElementById('resultado');

    if (nome !== '' && peso !== '' && distancia !== '' && tempo !== '') {

        const tempo_sep = tempo.split(':');

        const horas = parseInt(tempo_sep[0]);
    
        const minutos = parseInt(tempo_sep[1]);

        const segundos = parseInt(tempo_sep[2]);

        const tempo_em_horas =  horas + minutos/60 + segundos/3600;

        const tempo_em_minutos =  horas*60 + minutos + segundos/60;

        const velocidade = (distancia/(tempo_em_horas)).toFixed(2);

        const pace = ((60/velocidade)).toFixed(2);

        const calorias = (velocidade*peso*0.0175*(tempo_em_minutos)).toFixed(2);


        resultado.textContent =`Olá, ${nome}! Você percorreu ${distancia}km em ${horas}h ${minutos}min ${segundos}s, o que implica em uma velocidade média de ${velocidade}km/h ou pace de ${pace}km/min. Estima-se que você tenha consumido ${calorias}cal`;


    }else{
        resultado.textContent = 'Para ter acesso ao seu desmpenho, preencha todos os campos!!!';
    }
}
calcular.addEventListener('click', pace);