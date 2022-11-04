// Call the dataTables jQuery plugin
$(document).ready(function() {
//
});

async function registerUsuarios(){
  let datos = {};
   datos.nombre   = document.getElementById('exampleFirstName').value;
   datos.apellido = document.getElementById('exampleLastName').value;
   datos.email    = document.getElementById('exampleInputEmail').value;
   datos.password = document.getElementById('exampleInputPassword').value;

   let repetirPassword = document.getElementById('exampleRepeatPassword').value;

   if (repetirPassword != datos.password){
     alert('Las contraseñas no coinciden');
     return;
   }

  const rawResponse = await fetch('api/usuarios', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)

  });
  alert("La cuenta fue creada con exito!");
  window.location.href = 'usuarios.html';
}



