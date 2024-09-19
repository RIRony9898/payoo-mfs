document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const addAmountInput = document.getElementById('add-amount-input').value;
    const pinNumberInput = document.getElementById('pin-number-input').value;
    const currentBalance = document.getElementById('current-balance').innerText;
    if(pinNumberInput === '1234'){
        const balance = parseFloat(currentBalance) + parseFloat(addAmountInput);
        document.getElementById('current-balance').innerText = balance.toFixed(2);
    }else{
        alert('Add money failed! Try again later.')
    }
})