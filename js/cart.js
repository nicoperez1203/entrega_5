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
var subTotal = 0;





function mostrarCarrito(array) {

    let data = "";
    for (let i = 0; i < array.length; i++) {
        let datoscarrito = array[i];
        let totalProducto = datoscarrito.unitCost * datoscarrito.count;
        
        
        if (datoscarrito.currency === "USD"){
            totalProducto = totalProducto * 40;
            }
        
        subTotal += totalProducto;
        

            {

            data +=

                `
                        
                        
                                <tr>
                                    <td>
                                        <figure class="itemside align-items-center">
                                        <div class="aside"><img src="` + datoscarrito.src + `" class="img-sm"></div>
                                        <figcaption class="info"> <a href="products.html" class="title" data-abc="true">`+ datoscarrito.name + `</a>
                                        <p class="text-muted small" name"costoUnitario" >Costo unitario: ` + datoscarrito.currency + ` ` + datoscarrito.unitCost + `</p>
                                        </figcaption>
                                        </figure>
                                    </td>
                                    <td> 
                                        <input type=number onchange="myFunction()" name="cantidades" min="0" value="` + datoscarrito.count + `">
                                    </td>
                                    <td>
                                        <div class="price-wrap" name="totalProducto"> <var class="price">$` + totalProducto + `</var></div>
                                    </td>
                                    <td class="text-right d-none d-md-block"><a href="" class="btn btn-danger" data-abc="true"><i class="fa fa-trash"></i> Remover</a>
                                    </td>
                                </tr>
                                

        
        `
        }
    
        
        
        document.getElementById("carrito").innerHTML = data;
        document.getElementById("precioSubTotal").innerHTML = `Sub-Total: $` +subTotal;
        
        
        
    }
}




function standard(){
    
    
    nuevoValor = (subTotal * 5) / 100;
    document.getElementById("costoEnvio").innerHTML = `Costo de envío: $` +nuevoValor;
    precioFinal = subTotal + nuevoValor;
    document.getElementById("precioFinal").innerHTML = `Total: $` +precioFinal;

}
    



function express(){

    
    
    nuevoValor = (subTotal * 7) / 100;
    document.getElementById("costoEnvio").innerHTML = `Costo de envío: $` +nuevoValor;
    precioFinal = subTotal + nuevoValor;
    document.getElementById("precioFinal").innerHTML = `Total: $` +precioFinal;
    

}

function premium(){

    
    
    nuevoValor = (subTotal * 15) / 100;
    document.getElementById("costoEnvio").innerHTML = `Costo de envío: $` +nuevoValor;
    precioFinal = subTotal + nuevoValor;
    document.getElementById("precioFinal").innerHTML = `Total: $` +precioFinal;

}
























    




















