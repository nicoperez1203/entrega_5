function mostrarNomb() {
    var nombre = document.getElementById("usuariolog");
    var userName = JSON.parse(sessionStorage.getItem("user"));
    nombre.innerHTML = `Bienvenido <font color="palegreen"><strong>${userName.usuario}</strong></font> a e-mercado`;
}

mostrarNomb()


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CARRO_2_ARTICULOS).then(function (resultObj) {

        if (resultObj.status === "ok") {

            prodCarrito = resultObj.data;
            datosCarro = prodCarrito.articles;
            mostrarCarrito(datosCarro);


        }
    });
});

var prodCarrito = [];




function mostrarCarrito(array) {

    let data = "";
    for (let i = 0; i < array.length; i++) {
        let datoscarrito = array[i];
        let totalProducto = datoscarrito.unitCost * datoscarrito.count;
        // let subTotal =+ subTotal + totalProducto;
        
        if (datoscarrito.currency === "USD"){
            totalProducto = totalProducto * 40;
            }

        // let subTotal = totalProducto + subTotal;
        // document.getElementById("precioSubTotal").innerHTML = subTotal;

         
       

        {

            data +=

                `
                        
                        
                                <tr>
                                    <td>
                                        <figure class="itemside align-items-center">
                                        <div class="aside"><img src="` + datoscarrito.src + `" class="img-sm"></div>
                                        <figcaption class="info"> <a href="#" class="title text-dark" data-abc="true">`+ datoscarrito.name + `</a>
                                        <p class="text-muted small" name="subtotal" >Costo unitario: ` + datoscarrito.currency + ` ` + datoscarrito.unitCost + `</p>
                                        </figcaption>
                                        </figure>
                                    </td>
                                    <td> 
                                        <input type=number value="` + datoscarrito.count + `">
                                    </td>
                                    <td>
                                        <div class="price-wrap"> <var class="price">$` + totalProducto + `</var></div>
                                    </td>
                                    <td class="text-right d-none d-md-block"><a href="" class="btn btn-danger" data-abc="true"><i class="fa fa-trash"></i> Remover</a>
                                    </td>
                                </tr>
                                

        
        `
        }
    

        document.getElementById("carrito").innerHTML = data;
        // document.getElementById("precioSubTotal").innerHTML = subTotal;
        
        
    }
}





    




















