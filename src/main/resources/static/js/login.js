// Call the dataTables jQuery plugin
$(document).ready(function() {
//
});

async function iniciarSession(){
  let datos = {};
   datos.email    = document.getElementById('exampleInputEmail').value;
   datos.password = document.getElementById('exampleInputPassword').value;


  const rawResponse = await fetch('api/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)

  });

  const response = await rawResponse.text();
    if (response != "FAIL"){
    localStorage.token = response;
    localStorage.email = datos.email;
    window.location.href = 'usuarios.html'
    }else{
    alert("La credenciales son incorrectas");
    }
}



