function mostrarNomb(){
    var nombre = document.getElementById("usuariolog");
    var userName = JSON.parse(sessionStorage.getItem("user"));
    nombre.innerHTML = `Bienvenido <font color="palegreen"><strong>${userName.usuario}</strong></font> a e-mercado`;
}

mostrarNomb()


Swal.fire({
    position: 'center',
    icon: 'info',
    title: '¡Gracias por visitar e-mercado!',
    showConfirmButton: false,
    timer: 2000
  })





