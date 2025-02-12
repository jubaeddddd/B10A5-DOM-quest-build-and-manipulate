//money want to donate
function getInputMoney(id){
    const input=document.getElementById(id).value 
    const inputMoney=parseFloat(input)
    return inputMoney
}

//money,section have
function moneySectionHave(id){
    const money=document.getElementById(id).innerText
    const moneyReturn=parseFloat(money)
    return moneyReturn
}


//once call show,another will be hidden
function show(id){
    document.getElementById('donation').classList.add('hidden')
    document.getElementById('transaction').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}

//got to blog
document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href='blog.html'
})

