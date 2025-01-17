const key = "530aacdfe836140e4ab1e3da463b7d9a"

function colocarTela(dados) {
    console.log(dados)
    document.querySelector('.cidade').innerHTML = `Tempo em ${dados.name}`
    document.querySelector('.temp').innerHTML = `Temperatura Atual ${Math.floor(dados.main.temp)}°C`
    document.querySelector('.nublado').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML = `Umidade: ${dados.main.humidity}%`
    document.querySelector('.imagem').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    colocarTela(dados)
}

function cliqueBotao() {
    const cidade = document.querySelector('.input-cidade').value

    buscarCidade(cidade)
}