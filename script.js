
var peso;
var altura;
var imc;
var resultado;



function calcular(event){
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    imc = peso / (altura * altura);

    resultado = document.getElementById('resultado');
    if(imc < 17){
        resultado.innerHTML = '<br/> Seu resultado foi ' + imc.toFixed(2) + '<br/> Cuidado, está muito abaixo do peso';
    } else if(imc > 17 && imc < 18.49){
        resultado.innerHTML = '<br/> Seu resultado foi ' + imc.toFixed(2) + '<br/> Cuidado, está abaixo do peso';
    }else if(imc > 18.5 && imc < 24.49){
        resultado.innerHTML = '<br/> Seu resultado foi ' + imc.toFixed(2) + '<br/> Seu peso está normal';
    }else if(imc > 25 && imc <= 29.99){
        resultado.innerHTML = '<br/> Seu resultado foi ' + imc.toFixed(2) + '<br/> Está acima do peso';
    }else if(imc >30){
            resultado.innerHTML = '<br/> Seu resultado foi ' + imc.toFixed(2) + '<br/> Gordo';
            
    }
   document.getElementById('peso').value = '';
   document.getElementById('altura').value = '';
}