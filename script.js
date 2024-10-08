document.getElementById('input-button').addEventListener('click', () => {       // Hacemos el evento click //
const nombre = document.getElementById('input-name').value;
const apellido = document.getElementById('input-lastname').value;           // Guardamos en constantes los datos de ingreso //
const fechaNacimiento = document.getElementById('input-date').value;

const datos = { 
    name: nombre,                       //** creamos un objeto con todos **//
    lastname: apellido,                 //***** los datos de ingreso *****//       
    date_of_birth: fechaNacimiento
};

fetch('https://jsonplaceholder.typicode.com/users', {   
      method: 'POST',   // Creamos una solicitud de tipo POST
      headers: {
        'Content-Type': 'application/json'  // Especificamos el tipo de contenido que le vamos a enviar
      },
      body: JSON.stringify(datos)  // Convertimos los datos a un JSON
})
    .then(response => {     
        if (response.ok) { alert('La informacion llegó correctamente');}   //**** Creamos alertas para verificar si  ****//
        else { alert('La informacion no llegó (todo roto)');}              //**** la respuesta fue exitosa o fracasó ****//
        
    })
    .catch(error => console.error(error.message));  
});