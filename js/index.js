const cad = document.querySelector('.cadastrar')
const itemLista = document.querySelector('.textItem')
const lista = document.querySelector('.lista')
//novo
itemLista.addEventListener('keypress',(e)=>{

    if(e.keyCode == 13){
        listar(itemLista.value)
    }
})

//criando limpando tarefa
function limpaInput(){
    itemLista.value= '';
    itemLista.focus()
}

cad.addEventListener('click', (e)=>{
    if(!itemLista.value) return;
    e.preventDefault()
    listar(itemLista.value)
    
    
})

function criarElemento(){
    const li = document.createElement('li')
    return li;
}

function listar(item){
    const lista = document.querySelector('.lista')
    const li = criarElemento()
    
    li.innerText += item
    lista.appendChild(li)
    limpaInput()
    criarBotaoApagar(li)
    salvartarefas()
    
}

function criarBotaoApagar(li){
    li.innerText += ' ';
    const buttonApagar = document.createElement('button')
    buttonApagar.innerText = 'Apagar'
    //buttonApagar.classList.add('apagar')
    buttonApagar.setAttribute('class','apagar')
    buttonApagar.setAttribute('title','Apagar esta tarefa')
    li.appendChild(buttonApagar)
}

document.addEventListener('click', (e)=>{
    const el = e.target;
    
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvartarefas()
    }
})

function salvartarefas(){
    const liTarefas = lista.querySelectorAll('li')
    const listaDeTarefas = []

    for(let lista of liTarefas){
        let listaTexto = lista.innerText;
        listaTexto = listaTexto.replace('Apagar', '  ' ).trim()
        listaDeTarefas.push(listaTexto)
        
    }
    //criando json.
    const listaJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('lista', listaJSON)
    
}

function AdicionaTarefasSalvas(){
    
    const lista = localStorage.getItem('lista')
    const listaDeTarefas = JSON.stringify(lista)
    console.log(lista)
  
    for(let lista of listaDeTarefas){
        listar(lista)
    }

}
AdicionaTarefasSalvas()

