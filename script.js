const passos = document.querySelectorAll('.numero')
const paginas = document.querySelectorAll('.card')
const proximo = document.querySelectorAll('.nxtStep')
const anterior = document.querySelectorAll('.prevStep')
const planoEscolhido = document.querySelectorAll('.escolhaPlano')
const ativaPlano = document.querySelectorAll('.listaAtivo')
const adicionais = document.querySelectorAll('.checado')
const planoNome = document.querySelector('.planoNome')
const precoPlano = document.querySelector('.precoPlano')
const adicionaisFinal = document.querySelector('.adicionaisTexto')
const valorTot = document.querySelector('.valorTotal')

passos.forEach((passo,index)=>{
    passo.addEventListener('click', ()=>{
        passos.forEach(conteudo=>{conteudo.classList.remove('ativado')}) /* Remove de todos, depois adiciona a classe apenas em um */
        passo.classList.add('ativado')
        paginas.forEach(pagina =>{pagina.classList.remove('ativo')})
        paginas[index].classList.add('ativo')
        carregaValor(index)
    })
})

proximo.forEach((botao,i)=>{
    botao.addEventListener('click', ()=>{
        paginas.forEach(pagina =>{pagina.classList.remove('ativo')})
        paginas[i+1].classList.add('ativo')
        passos[i].classList.remove('ativado')
        passos[i+1].classList.add('ativado')
        carregaValor(i+1)
    })
})

anterior.forEach((botao,i)=>{
    botao.addEventListener('click', ()=>{
        paginas.forEach(pagina =>{pagina.classList.remove('ativo')})
        paginas[i].classList.add('ativo')
        passos[i+1].classList.remove('ativado')
        passos[i].classList.add('ativado')
    })
})

ativaPlano.forEach((plano)=>{
    plano.addEventListener('click', () =>{
        ativaPlano.forEach(conteudo=>{conteudo.classList.remove('check')}) 
        plano.classList.add('check')
    })
})

function carregaValor(teste){
    if(teste == 3){
        valorTotal = 0
        planoEscolhido.forEach(inp=>{
            if(inp.checked){
                precoPlano.innerHTML = `R$${inp.value}/mes`
                valorTotal += parseInt(inp.value)
                if(inp.value == 15){
                    planoNome.innerHTML = 'Plano Basico'
                } else if (inp.value == 22){
                    planoNome.innerHTML = 'Plano Avançado'
                } else{
                    planoNome.innerHTML = 'Plano Mestre'
                }
            }
        })
        adicionaisFinal.innerHTML = ''
        adicionais.forEach((add, i)=>{
            if(add.checked){
                if(i == 0){
                    adicionaisFinal.innerHTML += `<div class='novadiv'><p>+adicional de Capacidade</p><span class="adicionaisPreco">R$${add.value}/mes</span></div>`
                    
                    valorTotal += parseInt(add.value)
                } else if(i == 1){
                    adicionaisFinal.innerHTML += `<div class='novadiv'><p>+adicional de Velocidade</p><span class="adicionaisPreco">R$${add.value}/mes</span></div>`
                    
                    valorTotal += parseInt(add.value)
                } else {
                    adicionaisFinal.innerHTML += `<div class='novadiv'><p>+adicional de Internet</p><span class="adicionaisPreco">R$${add.value}/mes</span></div>`
                    
                    valorTotal += parseInt(add.value)
                }
            }
        })
        valorTot.innerHTML = `R$${valorTotal}/mes`
    }
}
