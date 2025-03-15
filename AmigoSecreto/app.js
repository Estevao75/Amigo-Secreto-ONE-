let list_names = [];


function textInScreen(tag, text){
    let field = document.querySelector(tag);
    field.innerHTML = text;
}

function keyEnter(){
     document.querySelector('input').addEventListener('keypress',function(event){
        if(event.key==='Enter'){
        msgNameAdd();
        }
    });
}

keyEnter();

function msgNameAdd(){
    var name = document.querySelector('input').value;
    if(name===""){
        textInScreen('h2', 'O espaço está em branco.<br>Favor digitar um nome!');
    }else if(!isNaN(parseFloat(name))) {
        textInScreen('h2', 'Você digitou um número.<br>Favor digitar um nome!');
        cleanField();
    }else{ 
         if(!list_names.includes(name)){
            list_names.push(name);
            textInScreen('h2', 'Nome '+name+' adicionado com sucesso!');
            console.log(list_names);
            displayNames();
            cleanField();
        } else {
            textInScreen('h2', 'O nome '+name+' já encontra na lista.');
            cleanField();
        }

    }
  
}

function displayNames() {
    const elementList = document.getElementById('list');
    textInScreen('h3', 'Lista de amigos:');
    elementList.innerHTML = list_names.map(name => `<li>${name}</li>`).join('');
}

function raffleName() {
    if(list_names==0){
        alert("A lista de nomes está vazia. Para sortear é preciso que primeiramente os nomes sejam preenchidos.")
    }else{
        const randomIndex = Math.floor(Math.random()*list_names.length);
        const randomName = list_names[randomIndex];
        textInScreen('h2', 'O nome escolhido é: '+randomName+'')
        cleanField();
    }
}
    
function cleanField(){
    let fieldFull = document.querySelector('input');
    fieldFull.value = '';
}

function restart(){
    textInScreen('h2', 'Digite o nome dos seus amigos');
    textInScreen('h3', '');
    cleanField();
    list_names = [];
    document.getElementById('list').innerHTML='';
}