
tinymce.init({
    selector: '#descripcion-txt',
    height: 150,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });

const pokemones = [];
const cargarTabla = ()=>{

    //1. obtener una referencia a la tabla
    let tbody = document.querySelector("#tbody-tabla");
    //eliminar contenido del tbody
    tbody.innerHTML = "";
    //2. recorrer lista de pokemon
    for(let i=0; i < pokemones.length; ++i){
        let p =pokemones[i];
    //3. por cada pokemon generar una fila de la tabla (tr)
    let tr = document.createElement("tr");
    //4. por cada atributo generar un td de la tabla
    let tdNro = document.createElement("td");
    let tdNombre = document.createElement("td");
    let tdTipo = document.createElement("td");
    let tdDescripcion = document.createElement("td");
    let tdAcciones = document.createElement("td");
    //definir lo que va en la tabla
    tdNro.innerText = i + 1;
    tdNombre.innerText = p.nombre;
    let tipo = document.createElement("i");
    if (p.tipo == "1"){
        //<i class="fas fa-leaf"></i>
        tipo.classList.add("fas", "fa-leaf", "text-success", "fa-2x");
    }else if(p.tipo == "2"){
        //<i class="fas fa-fire-alt"></i>
        tipo.classList.add("fas", "fa-fire-alt", "text-danger", "fa-2x");
    }else if(p.tipo == "3"){
        //<i class="fas fa-bolt"></i>
        tipo.classList.add("fas", "fa-bolt", "text-warning", "fa-2x");
    }else if(p.tipo == "4"){
        //<i class="fas fa-tint"></i>
        tipo.classList.add("fas", "fa-tint", "text-info", "fa-2x");
    }else {
        //<i class="far fa-circle"></i>
        tipo.classList.add("fas", "fa-circle", "fa-2x");
    }
    tdTipo.classList.add("text-center");
    tdTipo.appendChild(tipo);
    //cuando quiero agregar un elemento dentro de otro es appendChild
    //cuando quiero definir texto, innerText
    //cuando quiero definir directamente el html, innerHTML
    tdDescripcion.innerHTML = p.descripcion;
    //TODO: que hago con las acciones
    //5. agregar los td al tr
    tr.appendChild(tdNro);
    tr.appendChild(tdNombre);
    tr.appendChild(tdTipo);
    tr.appendChild(tdDescripcion);
    tr.appendChild(tdAcciones);
    //6. agregar los tr a la tabla
    tbody.appendChild(tr);
    }
}

document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let tipo = document.querySelector("#tipo-select").value;
    let legendario = document.querySelector("#legendario-si").checked;
    let descripcion = tinymce.get("descripcion-txt").getContent(); //Solo para el tinymce

    let pokemon = {};
    pokemon.nombre = nombre;
    pokemon.tipo = tipo;
    pokemon.legendario = legendario;
    pokemon.descripcion = descripcion;

    pokemones.push(pokemon)
    cargarTabla();
    Swal.fire("Resultado exitoso!", "Pokemon registrado", "info");

});
  