let input1 = $('.input1');
let input2 = $('.input2');
let res = $('.res');







$('.somar').click(()=>{

    let num1 = parseInt(input1.val());
    let num2 = parseInt(input2.val());
    let soma = num1 + num2 ;

    
    
    if(num1 != '' && num2 != ''){
       
        res.html(soma);
        input1.val('') ;
        input2.val('') ;

    }else{
        alert("O resultado foi de vasco");
    }
  
  
})


$('.diminuir').click(()=>{

  

    let num1 = parseInt(input1.val());
    let num2 = parseInt(input2.val());
    let subitracao = num1 - num2 ;
    
    if(num1 != '' && num2 != ''){
       
        res.html(subitracao);
        input1.val('') ;
        input2.val('') ;
      
    }else{
        alert("O resultado foi de vasco");
    }
})


$('.multiplicar').click(()=>{

  

    let num1 = parseInt(input1.val());
    let num2 = parseInt(input2.val());
    let multiplicar = num1 * num2 ;
    
    if( num1 != '' && num2 != ''){
       
        res.html(multiplicar) ;
        input1.val('');
        input2.val('') ;
      
    }else{
        alert("O resultado foi de vasco") ;
    }
})

$('.dividir').click(()=>{

  

    let num1 = parseInt(input1.val()) ;
    let num2 = parseInt(input2.val());
    let divisao = num1 / num2 ;
    
    if( num1 != '' && num2 != ''){
       
        res.html(divisao) ;
        input1.val('');
        input2.val('');
      
    }else{
        alert("O resultado foi de vasco");
    }
})


$('.button2').click(()=>{

    let input3 = $(".input3") ;
    $('.isaac').html(input3.val()) ;
    input3.val("");
})




