// Call the dataTables jQuery plugin
$(document).ready(function() {
cargarUsuarios();
  $('#dataTable').DataTable();
});

async function cargarUsuarios(){


  const rawResponse = await fetch('api/usuarios', {
    method: 'GET',
    headers:  getHeaders()
  });
  const usuarios = await rawResponse.json();
     let ListadoHtml = '';
   for(let usuario of usuarios){
     let botonDelete = '<a href="#" onclick="deleteUser('+usuario.id+')"class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';

  let User = '<tr><td>'+usuario.id+'</td><td>'+usuario.nombre+'</td><td>'
  +usuario.email+'</td> <td>'+usuario.telefono
  +'</td><td>'+botonDelete+'</td></tr>';

 ListadoHtml += User;
}


  document.querySelector('#dataTable tbody').outerHTML = ListadoHtml;
}

function getHeaders(){
  return  {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
               'Authorization': localStorage.token
             };
}

async function deleteUser(id) {
if(!confirm("¿Desea eliminar este usuario?")){
return;
}
const rawResponse = await fetch('api/delete/'+id, {
    method: 'DELETE',
    headers: getHeaders()
  });
  location.reload();
}