function calculate() {
    const filamentCost = parseFloat(document.getElementById('filament-cost').value);
    const filamentUsed = parseFloat(document.getElementById('filament-used').value);
    const printTime = parseFloat(document.getElementById('print-time').value);
    const profitMargin = parseFloat(document.getElementById('profit-margin').value) / 100;

    // Custo do filamento
    const costPerGram = filamentCost / 1000;
    const filamentTotalCost = costPerGram * filamentUsed;

    // Custo da energia
    const energyCostPerHour = 0.01;
    const energyTotalCost = energyCostPerHour * printTime;

    // Custo total
    const totalCost = filamentTotalCost + energyTotalCost;

    // Lucro sugerido
    const suggestedProfit = totalCost * (1 + profitMargin);

    // Exibir os resultados
    document.getElementById('total-cost').textContent = totalCost.toFixed(2);
    document.getElementById('suggested-profit').textContent = suggestedProfit.toFixed(2);
}
