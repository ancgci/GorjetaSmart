function formatMoney(value) {
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return 'R$ ' + value
}

function formatSplit(value) {
    if (value == 1) return value + ' pessoa'
    return value + '  pessoas'
}

function update() {
    let conta = Number(document.getElementById('yourBill').value)
    let PercentualGorjeta = document.getElementById('tipInput').value
    let diviSao = document.getElementById('splitInput').value
    
    let valorGorgeta = conta * (PercentualGorjeta / 100)
    let valorTotal = conta + valorGorgeta
    let billEach = valorTotal / diviSao
    
    document.getElementById('tipPercent').innerHTML = PercentualGorjeta + ' % ' 
    document.getElementById('tipValue').innerHTML = formatMoney(valorGorgeta)
    document.getElementById('totalWithTip').innerHTML = formatMoney(valorTotal)
    document.getElementById('splitValue').innerHTML = formatSplit(diviSao)
    document.getElementById('billEach').innerHTML = formatMoney(valorTotal / diviSao) 
}