//Nokhali calculation
document.getElementById('noakhali-button').addEventListener('click', function (event) {
    event.preventDefault()
    const wallet=moneySectionHave('money-have')
    const moneyAdd = getInputMoney('noakhali-input-money')
    const money = moneySectionHave('noakhali-money')
    if(moneyAdd>wallet){
        alert('you do not have sufficient balance')
        return
    }
    if(isNaN(moneyAdd)){
        alert('enter a valid number')
        return
    }
    const total = moneyAdd + money
    const noakhali = document.getElementById('noakhali-money')
    noakhali.innerText = total

    //update
    const walletMoney=wallet-moneyAdd
    const myWallet=document.getElementById('money-have')
    myWallet.innerText= walletMoney
})



//feni calculation
document.getElementById('feni-button').addEventListener('click', function (event) {
    event.preventDefault()
    const wallet=moneySectionHave('money-have')
    const moneyAdd = getInputMoney('feni-input-money')
    const money = moneySectionHave('feni-money')
    if(moneyAdd>wallet){
        alert('you do not have sufficient balance')
        return
    }
    if(isNaN(moneyAdd)){
        alert('enter a valid number')
        return
    }
    const total = moneyAdd + money
    const noakhali = document.getElementById('feni-money')
    noakhali.innerText = total

    //update
    const walletMoney=wallet-moneyAdd
    const myWallet=document.getElementById('money-have')
    myWallet.innerText= walletMoney
})


//quota movement calculation
document.getElementById('quota-button').addEventListener('click', function (event) {
    event.preventDefault()
    const wallet=moneySectionHave('money-have')
    const moneyAdd = getInputMoney('quota-input-money')
    const money = moneySectionHave('quota-money')
    if(moneyAdd>wallet){
        alert('you do not have sufficient balance')
        return
    }
    if(isNaN(moneyAdd)){
        alert('enter a valid number')
        return
    }
    const total = moneyAdd + money
    const noakhali = document.getElementById('quota-money')
    noakhali.innerText = total

    //update
    const walletMoney=wallet-moneyAdd
    const myWallet=document.getElementById('money-have')
    myWallet.innerText= walletMoney
})