import { data } from "./js.js";




for (let i = 1; data.length; i++) {

    const formateador = new Intl.NumberFormat("en");

    let insetar = document.querySelector(".container-fluid");

    let nueva = document.createElement("div");

    nueva.innerHTML = `

    <div class=" col-sm-24 col-24 mb-5 card">
    <figure class="lllll">

        <img src=./templatemo_556_catalog_z/img/${data[i].imagen}.jpg alt="Image" class="img-fluid" >

<div id="precios">
    <h6><span class="text-black"> Caja Completa por:
            <b>${formateador.format(data[i].caja.toFixed(2))}</b><span>c/u</span></p></h6>
            
            <h6><span class="text-black"> Media Caja por:
                    <b>${formateador.format(data[i].mediacaja.toFixed(2))}</b><span>c/u</span></p></h6>
                    
                    <h6> </span><span class="text-black"> Unidad por:
                            <b>${formateador.format(data[i].unidad.toFixed(2))}</b><span>c/u</span></p></h6>

</div>
      </figure> 
      
      <div class="d-inline-block">
                                <h4 class="tm-text mt-2">${data[i].Producto}</h4>
                                <b id="CantidadCajaCompleta${i}"></b><span class="text-black"> Caja Completa X 
                                    <b>${formateador.format(data[i].caja.toFixed(2))}</b><span>c/u</span>

                                </span>
                                <button type="button" id="sumacajacompleta">Agregar</button> <button type="button"
                                    id="restacajacompleta">Quitar</button>
                                <div id="cajaCompletaXCantidad${i}"></div>


                                </br>
                                <b id="cantidadMediaCaja${i}"></b><span class="text-black"> Media Caja X 
                                    <b>${formateador.format(data[i].mediacaja.toFixed(2))}</b><span>c/u</span>

                                </span>
                                <button type="button" id="sumamediacaja">Agregar</button> <button type="button"
                                    id="restamediacaja">Quitar</button>
                                <div id="mediacajaXcantidad${i}"></div>

                                </br>
                                <b id="cantidadUnidad${i}"></b><span class="text-black"> Unidad X
                                    <b>${formateador.format(data[i].unidad.toFixed(2))}</b><span>c/u</span>

                                </span>
                                <button type="button" id="sumaUnidad">Agregar</button> <button type="button"
                                    id="restaUnidad">Quitar</button>
                                <div id="unidadXcantidad${i}"></div>

                            </div>
                            </br>
                            <h5 id="cajaCompletaXCantidadT">Total A Prefacturar Via WhatsApp</h5>
                            <h4 id="totalCajas${i}"></h4>
                            <button type="button" id="prefacturar">Enviar Prefactura</button>
</div>

`
        ;


    nueva.classList.add("tm-gallery")

    insetar.insertAdjacentElement("afterbegin", nueva)

    



    let prefacturar = document.querySelector('#prefacturar');

    let sumaUnaCajaCompleta = document.querySelector('#sumacajacompleta');
    let restaUnaCajaCompleta = document.querySelector('#restacajacompleta');

    let sumaMediaCaja = document.querySelector('#sumamediacaja');
    let restaMediaCaja = document.querySelector('#restamediacaja');

    let sumaUnidad = document.querySelector('#sumaUnidad');
    let restaUnidad = document.querySelector('#restaUnidad');


    let cajaCompletaXCantidad = document.querySelector(`#cajaCompletaXCantidad${i}`);
    let CantidadCajaCompleta = document.querySelector(`#CantidadCajaCompleta${i}`);

    let mediacajaXcantidad = document.querySelector(`#mediacajaXcantidad${i}`);
    let cantidadMediaCaja = document.querySelector(`#cantidadMediaCaja${i}`);



    let unidadXcantidad = document.querySelector(`#unidadXcantidad${i}`);
    let cantidadunidad = document.querySelector(`#cantidadUnidad${i}`);

    let totalCajas = document.querySelector(`#totalCajas${i}`);

    let counterUna = 0;
    let counterMedia = 0;
    let counterunidad = 0;

    let resultadoUna = 0
    let resultadoMedia = 0
    let resultadounidad = 0

    function sumaunacaja() {
        counterUna++;
        resultadoUna = Number.parseFloat(data[i].caja) * counterUna
        cajaCompletaXCantidad.innerHTML = formateador.format(resultadoUna.toFixed(2));
        CantidadCajaCompleta.innerHTML = formateador.format(counterUna.toFixed(2));
        totalCajas.innerHTML = formateador.format((resultadounidad+resultadoMedia + resultadoUna));
    }
    function restaunacaja() {
        counterUna--;
        resultadoUna = Number.parseFloat(data[i].caja) * counterUna
        cajaCompletaXCantidad.innerHTML = formateador.format(resultadoUna.toFixed(2));
        CantidadCajaCompleta.innerHTML = formateador.format(counterUna.toFixed(2));
        totalCajas.innerHTML = formateador.format((resultadounidad+resultadoMedia + resultadoUna));
    }
    function sumaumediacaja() {
        counterMedia++;

        resultadoMedia = Number.parseFloat(data[i].mediacaja) * counterMedia
        mediacajaXcantidad.innerHTML = formateador.format(resultadoMedia.toFixed(2));
        cantidadMediaCaja.innerHTML = formateador.format(counterMedia.toFixed(2));
        totalCajas.innerHTML = formateador.format((resultadounidad+resultadoMedia + resultadoUna));
    }
    function restamediacaja() {
        counterMedia--;
        resultadoMedia = Number.parseFloat(data[i].mediacaja) * counterMedia
        mediacajaXcantidad.innerHTML = formateador.format(resultadoMedia.toFixed(2));
        cantidadMediaCaja.innerHTML = formateador.format(counterMedia.toFixed(2));
        totalCajas.innerHTML = formateador.format((resultadounidad+resultadoMedia + resultadoUna));
    }


    function sumaunidad() {
        counterunidad++;

        resultadounidad = Number.parseFloat(data[i].unidad) * counterunidad
        unidadXcantidad.innerHTML = formateador.format(resultadounidad.toFixed(2));
        cantidadunidad.innerHTML = formateador.format(counterunidad.toFixed(2));
        totalCajas.innerHTML = formateador.format((resultadounidad+resultadoMedia + resultadoUna));
    }
    function restaunidad() {
        counterunidad--;
        resultadounidad = Number.parseFloat(data[i].unidad) * counterunidad
        unidadXcantidad.innerHTML = formateador.format(resultadounidad.toFixed(2));
        cantidadunidad.innerHTML = formateador.format(counterunidad.toFixed(2));
        totalCajas.innerHTML = formateador.format((resultadounidad+resultadoMedia + resultadoUna));
    }



prefacturar.addEventListener("click", e => {

// const taskId = e.target.previousSibling.previousSibling.getAttribute('id');
// const contents = document.getElementById(taskId);


const totalcajaCompletaXCantidad = document.getElementById(`cajaCompletaXCantidad${i}`).innerHTML;

const totalCantidadCajaCompleta = document.getElementById(`CantidadCajaCompleta${i}`).innerHTML;
const totalcantidadMediaCaja = document.getElementById(`cantidadMediaCaja${i}`).innerHTML;
const totalcantidadunidad = document.getElementById(`cantidadUnidad${i}`).innerHTML;


const totalmediacajaXcantidad = document.getElementById(`mediacajaXcantidad${i}`).innerHTML;

const totalunidadXcantidad = document.getElementById(`unidadXcantidad${i}`).innerHTML;



const totaltotalCajas = document.getElementById(`totalCajas${i}`).innerHTML;
// 18092425374
let url = `https://api.whatsapp.com/send?phone=18092425374&text= 
${data[i].Producto}           
                                                                                                            
 *${totalCantidadCajaCompleta} cajas*   ,    *${totalcantidadMediaCaja} media cajas*     y  *${totalcantidadunidad} unidad*                                                                                                                                  
${totalCantidadCajaCompleta} cajas X ${data[i].caja} = ${totalcajaCompletaXCantidad}                        
                                                                                                                
${totalcantidadMediaCaja} media cajas X ${data[i].mediacaja} 
${totalunidadXcantidad} media cajas X ${data[i].unidad} 
=  ${totalmediacajaXcantidad}   
.        total a prefacturar: *${totaltotalCajas}*      *****     al cliente:`


window.open(url, "_blank");
// window.focus();
});

    sumaUnaCajaCompleta.addEventListener('click', sumaunacaja);

    restaUnaCajaCompleta.addEventListener('click', restaunacaja);

    sumaMediaCaja.addEventListener('click', sumaumediacaja);

    restaMediaCaja.addEventListener('click', restamediacaja);

    sumaUnidad.addEventListener('click', sumaunidad);

    restaUnidad.addEventListener('click', restaunidad);
}





