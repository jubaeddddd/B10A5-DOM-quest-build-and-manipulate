document.getElementById('history-button').addEventListener('click',function(){
    show('transaction')    
})
document.getElementById('donation-button').addEventListener('click',function(){
    show('donation')    
})


//Noakhali transaction
document.getElementById('noakhali-button').addEventListener('click',function(){
    //to get time
    const currentTime = new Date();
    const formattedTime = currentTime.toString();

    const balance=getInputMoney('noakhali-input-money')
    const place=document.getElementById('noa').innerText
    const motherSection=document.getElementById('transaction')
    const div=document.createElement('div')
    div.classList.add('border-2','border-gray-400','rounded-lg','mt-16','ml-24','mr-24','p-10')
    div.innerHTML= `
       <h2 class="text-xl font-bold"> ${balance} Taka is Donated for famine-2024 ${place}</h2>
       <h3 class="bg-gray-200 ml-4 mt-2">${formattedTime}<h3>
    `
    motherSection.appendChild(div)
})


//Feni transaction
document.getElementById('feni-button').addEventListener('click',function(){
    //to get time
    const currentTime = new Date();
    const formattedTime = currentTime.toString();

    const balance=getInputMoney('feni-input-money')
    const motherSection=document.getElementById('transaction')
    const div=document.createElement('div')
    div.classList.add('border-2','border-gray-400','rounded-lg','mt-16','ml-24','mr-24','p-10')
    div.innerHTML= `
       <h2 class="text-xl font-bold"> ${balance} Taka is Donated for Flood Relief in Feni,Bangladesh</h2>
       <h3 class="bg-gray-200 ml-4 mt-2">${formattedTime}<h3>
    `
    motherSection.appendChild(div)
})

//Quota transaction
document.getElementById('quota-button').addEventListener('click',function(){
    //to get time
    const currentTime = new Date();
    const formattedTime = currentTime.toString();

    const balance=getInputMoney('quota-input-money')
    const motherSection=document.getElementById('transaction')
    const div=document.createElement('div')
    div.classList.add('border-2','border-gray-400','rounded-lg','mt-16','ml-24','mr-24','p-10')
    div.innerHTML= `
       <h2 class="text-xl font-bold"> ${balance} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h2>
       <h3 class="bg-gray-200 ml-4 mt-2">${formattedTime}<h3>
    `
    motherSection.appendChild(div)
})

