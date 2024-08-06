function updateRiskPercentage() {
    const balance = parseFloat(document.getElementById('balance').value);
    const profit = parseFloat(document.getElementById('profit').value);
    if (!isNaN(balance) && !isNaN(profit) && balance > 0) {
        const riskPercentage = (profit / balance) * 100;
        document.getElementById('riskPercentage').value = riskPercentage.toFixed(2);
    }
}

function updateProfit() {
    const balance = parseFloat(document.getElementById('balance').value);
    const riskPercentage = parseFloat(document.getElementById('riskPercentage').value);
    if (!isNaN(balance) && !isNaN(riskPercentage) && balance > 0) {
        const profit = (riskPercentage / 100) * balance;
        document.getElementById('profit').value = profit.toFixed(2);
    }
}

function toggleRiskInput() {
    const riskType = document.querySelector('input[name="riskMode"]:checked').value;
    if (riskType === 'percentage') {
        document.getElementById('percentageGroup').style.display = 'flex';
        document.getElementById('priceGroup').style.display = 'none';
    } else {
        document.getElementById('percentageGroup').style.display = 'none';
        document.getElementById('priceGroup').style.display = 'flex';
    }
}

function calculate() {
    const balance = parseFloat(document.getElementById('balance').value);
    const leverage = parseFloat(document.getElementById('leverage').value);
    const profit = parseFloat(document.getElementById('profit').value);
    const riskPercentage = parseFloat(document.getElementById('riskPercentage').value) / 100;
    const riskType = document.querySelector('input[name="riskMode"]:checked').value;
    let distanceToSL, entryPrice, stopLoss, takeProfit, positionSize, marginRequired, quantity, tradeType, lossAmount, profitAmount;

    if (riskType === 'percentage') {
        distanceToSL = parseFloat(document.getElementById('distance').value) / 100;
        const amountRisked = balance * riskPercentage;
        marginRequired = (amountRisked / distanceToSL) / leverage;
        positionSize = marginRequired * leverage;

        document.getElementById('marginRequired').textContent = marginRequired.toFixed(2);
        document.getElementById('positionSize').textContent = positionSize.toFixed(2);
        document.getElementById('quantity').textContent = '-';
        document.getElementById('tradeType').textContent = '-';
        document.getElementById('lossAmount').textContent = '-';
        document.getElementById('profitAmount').textContent = '-';
    } else {
        entryPrice = parseFloat(document.getElementById('entryPrice').value);
        stopLoss = parseFloat(document.getElementById('stopLoss').value);
        takeProfit = parseFloat(document.getElementById('takeProfit').value);

        const tradeTypeElement = document.getElementById('tradeType');

        // Paso 1: Determinar la ganancia por unidad de movimiento del precio
        const movement = Math.abs(takeProfit - entryPrice);

        // Paso 2: Calcular el tamaño del trade necesario para alcanzar la ganancia deseada
        const tradeSize = profit / movement;

        // Paso 3: Calcular el margen requerido sin apalancamiento
        const tradeValue = tradeSize * entryPrice;

        // Paso 4: Aplicar el apalancamiento
        marginRequired = tradeValue / leverage;

        positionSize = tradeValue;
        quantity = tradeSize;
        tradeType = takeProfit > entryPrice ? 'long' : 'short';

        // Calcular la ganancia o pérdida en USD
        const slMovement = tradeType === 'long' ? entryPrice - stopLoss : stopLoss - entryPrice;
        lossAmount = Math.abs(slMovement * tradeSize);
        profitAmount = movement * tradeSize;

        document.getElementById('marginRequired').textContent = marginRequired.toFixed(2);
        document.getElementById('positionSize').textContent = positionSize.toFixed(2);
        document.getElementById('quantity').textContent = quantity < 1 ? quantity.toFixed(8) : quantity.toFixed(2);
        tradeTypeElement.textContent = tradeType;
        tradeTypeElement.className = tradeType === 'long' ? 'trade-long' : 'trade-short';
        document.getElementById('lossAmount').textContent = (tradeType === 'long' ? '-' : '') + lossAmount.toFixed(2);
        document.getElementById('profitAmount').textContent = profitAmount.toFixed(2);
    }

    document.getElementById('result').style.display = 'block';
}

function copyToClipboard(elementId) {
    const value = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(value).catch(err => {
        console.error("Error al copiar al portapapeles", err);
    });
}
