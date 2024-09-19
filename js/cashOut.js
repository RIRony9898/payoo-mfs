document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    const cashOutAmountInput = document.getElementById('cash-out-amount-input').value;
    const cashOutPinNumberInput = document.getElementById('cash-out-pin-number-input').value;
    const currentBalance = document.getElementById('current-balance').innerText;
    if(cashOutPinNumberInput === '1234'){
        const balance = parseFloat(currentBalance) - parseFloat(cashOutAmountInput);
        document.getElementById('current-balance').innerText = balance.toFixed(2);
    }else{
        alert('Cash out failed! Try again later.')
    }
})