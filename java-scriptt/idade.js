function verificar(){
    
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 ||fano.value > ano){
        alert('Verifique os dados e tente novamente');
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero ='';

        var img =document.createElement('img');
        img.setAttribute('id','foto')
      
        if(fsex[0].checked){
            genero ='Homem'
            if(idade >=0 && idade <  10){
                //criança 
                img.setAttribute('src','img/menino.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','img/jovem-masculino.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src','img/homem.png')
            }else{
                //idoso
                img.setAttribute('src','img/idoso.png')
            }
        }else if(fsex[1].checked){
            genero ='Mulher'
            if(idade >=0 && idade <  10){
                //criança
                img.setAttribute('src','img/menina.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','img/jovem-feminina.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src','img/mulher.png')
            }else{
                //idoso
                img.setAttribute('src','img/idosa.png')
            }
        }
       res.innerHTML = `Sua idade é de: ${idade} anos e seu gênero é ${genero}`;
       res.appendChild(img)
    }
}
        