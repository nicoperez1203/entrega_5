function mostrarNomb() {
    var nombre = document.getElementById("usuariolog");
    var userName = JSON.parse(sessionStorage.getItem("user"));
    nombre.innerHTML = `Bienvenido <font color="palegreen"><strong>${userName.usuario}</strong></font> a e-mercado`;
}

mostrarNomb()


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART_INFO_URL).then(function (resultObj) {

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
        let total = datoscarrito.unitCost * datoscarrito.count;
        
        {

            data +=
            
`
                        <thead class="text-muted">
                            <tr class="small text-uppercase">
                                <th scope="col">Producto</th>
                                <th scope="col" width="120">Unidades</th>
                                <th scope="col" width="120">Sub-total</th>
                                <th scope="col" class="text-right d-none d-md-block" width="200"></th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td>
                                        <figure class="itemside align-items-center">
                                        <div class="aside"><img src="` + datoscarrito.src + `" class="img-sm"></div>
                                        <figcaption class="info"> <a href="#" class="title text-dark" data-abc="true">`+ datoscarrito.name + `</a>
                                        <p class="text-muted small">Unidades: ` + datoscarrito.count + ` <br> Costo unitario: `+ datoscarrito.currency +` $` + datoscarrito.unitCost + `</p>
                        
                    </figcaption>
                </figure>
            </td>
            <td> <small class="text-muted">Maximo 10 unidades</small> 
            <input type="number" id="tentacles" name="tentacles"  min="1" max="10"> </td>
            <td>
                <div class="price-wrap"> <var class="price">UYU $` + total + `</var></div>
            </td>
            <td class="text-right d-none d-md-block"><a href="" class="btn btn-danger" data-abc="true"><i class="fa fa-trash"></i> Remover</a></td>
        </tr>

        
        ` 
        
        /*`
                    
                   
                    <div>
                    <h5>`+ datoscarrito.name + `</h5> 
                    <br>
                        <div>
                        <p>`+ datoscarrito.count + `</p>
                        </div>
                        <img src="` + datoscarrito.src + `" width="45" height="25" alt="`+ datoscarrito.name + `">
                        
                            
                             <div>
                              <small class="text-muted">Costo: ` + datoscarrito.unitCost + ` </small>
                             </div>
                        
                    </div>
                    <hr>
                
                `*/
        }

        document.getElementById("prueba").innerHTML = data;
    }
}









