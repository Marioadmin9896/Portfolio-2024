const fecha = document.querySelector('#fecha');
const lista = document.querySelector('#lista');
const elemento = document.querySelector('#elemento');
const input = document.querySelector('#input');
const botonEnter = document.querySelector('#boton-enter');
const check = 'fa-check-circle';
const uncheck = 'fa-circle';
const lineThrough = 'line-through';
let id;
let LIST;



// FUNCION FECHA

const FECHA = new Date()
fecha.innerHTML = FECHA.toLocaleDateString('es-AR',{weekday: 'long', month: 'short' , day:'numeric'});




// funcion agregar tarea

function agregarTarea(tarea,id,realizado,eliminado){

    if (eliminado) { return } // Si existe eliminado es true si no es false

    const REALIZADO = realizado ?check :uncheck;
    const LINE = realizado ?lineThrough :'';

 const elemento = `<li id="elemento">
                   <i class="far ${REALIZADO}" data="realizado" id="${id}"></i>
                   <p class="text ${LINE}">${tarea}</p>
                   <i class="fas fa-trash de" data="eliminado" id="${id}"></i></li>
                  `
        lista.insertAdjacentHTML("beforeend",elemento);
}

// FUNCION TAREA REALIZADA 

function tareaRealizada(element) {
    element.classList.toggle(check);
    element.classList.toggle(uncheck);
    element.parentNode.querySelector('.text').classList.toggle(lineThrough);
    LIST[element.id].realizado = LIST[element.id].realizado ?false :true; // SI
}


// FUNCION TAREA ELIMINADA 

function tareaEliminada(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].eliminado = true;
}


// CREA UN EVENTO PARA ESCUCHAR EL ENTER Y PARA HABILITAR BOTON


botonEnter.addEventListener('click',() =>{
    const tarea = input.value
    if (tarea) {
        agregarTarea(tarea,id,false,false);
        LIST.push({
            nombre: tarea,
            id:id,
            realizado:false,
            eliminado:false
    })
    localStorage.setItem('TODO',JSON.stringify(LIST));
    id++;
    input.value='';
    console.log(LIST);
    }
})

document.addEventListener('keyup',function(event){
    if(event.key=='Enter'){
        const tarea = input.value;
        if (tarea) {
            agregarTarea(tarea,id,false,false);
            LIST.push({
                nombre: tarea,
                id:id,
                realizado:false,
                eliminado:false
            });
        }
        localStorage.setItem('TODO',JSON.stringify(LIST));
        input.value = '';
        id++;
    }
})


lista.addEventListener('click',function(event){
    const element = event.target;
    const elementData = element.attributes.data.value;
    console.log(elementData);

    if(elementData == 'realizado') {
        tareaRealizada(element);
    }
    else if(elementData == 'eliminado') {
        tareaEliminada(element);
        console.log("eliminado");
    }
    localStorage.setItem('TODO',JSON.stringify(LIST));

})

//local storage get item

let data = localStorage.getItem('TODO')
if (data) {
    LIST=JSON.parse(data);
    id = LIST.length;
    cargarLista(LIST);
}else {
    LIST = [];
    id=0;
}

// funcion cargar lista

function cargarLista(DATA) {
    DATA.forEach(function(item){
        agregarTarea(item.nombre,item.id,item.realizado,item.eliminado);
    })
}


