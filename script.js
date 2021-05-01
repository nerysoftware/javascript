function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // ano 4 digitos atual.
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('(ERRO) Verificar os dados e tente novamente!')
    }else{
 
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'bebehomen.jpg')
            }else if (idade < 21){
                //Jovem
                img.setAttribute ('src' , 'jovemhomen.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute ('src', 'homeadulto.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src','bebemulher.jpg')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'jovemmuher.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'mulheradulta.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}