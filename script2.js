let input1 = document.querySelector('.input1')
let input2 = document.querySelector('.input2')
let res = document.querySelector('.res')

let form = document.querySelector('.form')






document.querySelector('.somar').addEventListener('click',()=>{

    let num1 = parseInt(input1.value)
    let num2 = parseInt(input2.value)
    let soma = num1 + num2 
    
    if(input1.value != '' && input2.value != ''){
       
        res.innerHTML = soma
        input1.value = ''
        input2.value = ''

    }else{
        alert("O resultado foi de vasco")
    }

  
})


document.querySelector('.diminuir').addEventListener('click',()=>{

  

    let num1 = parseInt(input1.value)
    let num2 = parseInt(input2.value)
    let subitracao = num1 - num2 
    
    if(input1.value != '' && input2.value != ''){
       
        res.innerHTML = subitracao
        input1.value = ''
        input2.value = ''
      
    }else{
        alert("O resultado foi de vasco")
    }
})


document.querySelector('.multiplicar').addEventListener('click',()=>{

  

    let num1 = parseInt(input1.value)
    let num2 = parseInt(input2.value)
    let subitracao = num1 * num2 
    
    if(input1.value != '' && input2.value != ''){
       
        res.innerHTML = subitracao
        input1.value = ''
        input2.value = ''
      
    }else{
        alert("O resultado foi de vasco")
    }
})

document.querySelector('.dividir').addEventListener('click',()=>{

  

    let num1 = parseInt(input1.value)
    let num2 = parseInt(input2.value)
    let subitracao = num1 / num2 
    
    if(input1.value != '' && input2.value != ''){
       
        res.innerHTML = subitracao
        input1.value = ''
        input2.value = ''
      
    }else{
        alert("O resultado foi de vasco")
    }
})





