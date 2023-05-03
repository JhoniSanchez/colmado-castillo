import { data } from "./js.js";




for (let i = 100; i < 120; i++) {




    let insetar = document.querySelector(".container-fluid");

    let nueva = document.createElement("div");

    nueva.innerHTML = `
<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5 card">
    <figure class="effect-ming tm-video-item">
        <img src=./templatemo_556_catalog_z/img/${i}.jpg alt="Image" class="img-fluid">
    </figure>
    <div class="d-inline-block">
        <h4 class="tm-text">${data[i].Producto}</h4>
        <span id="CantidadCajaCompleta${i}"></span><span class="text-black"> Caja Completa por: <b>${data[i].siete}</b><span>c/u</span>

        </span>
        <button type="button" id="sumacajacompleta">Agregar</button> <button type="button"
            id="restacajacompleta">Quitar</button>
        <div id="cajaCompletaXCantidad${i}"></div>
        </br>
        <span id="cantidadMediaCaja${i}"></span><span class="text-black"> Media Caja por: <b>${data[i].nueve}</b><span>c/u</span>

        </span>
        <button type="button" id="sumamediacaja">Agregar</button> <button type="button"
            id="restamediacaja">Quitar</button>
        <div id="mediacajaXcantidad${i}"></div>
        
    </div>
      </br><h5 id="cajaCompletaXCantidadT">Total A Prefacturar Via WhatsApp</h5>
    <h4 id="totalCajas${i}"></h4>
    <button type="button" id="prefacturar">Enviar Prefactura</button> 
</div>
`
        ;


    nueva.classList.add("tm-gallery")

    insetar.insertAdjacentElement("afterbegin", nueva)

    const formateador = new Intl.NumberFormat("en");



    let prefacturar = document.querySelector('#prefacturar');

    let sumaUnaCajaCompleta = document.querySelector('#sumacajacompleta');
    let restaUnaCajaCompleta = document.querySelector('#restacajacompleta');

    let sumaMediaCaja = document.querySelector('#sumamediacaja');
    let restaMediaCaja = document.querySelector('#restamediacaja');

    let cajaCompletaXCantidad = document.querySelector(`#cajaCompletaXCantidad${i}`);
    let CantidadCajaCompleta = document.querySelector(`#CantidadCajaCompleta${i}`);

    let mediacajaXcantidad = document.querySelector(`#mediacajaXcantidad${i}`);
    let cantidadMediaCaja = document.querySelector(`#cantidadMediaCaja${i}`);

    let totalCajas = document.querySelector(`#totalCajas${i}`);

    let counterUna = 0;
    let counterMedia = 0;
    let resultadoUna = 0
    let resultadoMedia = 0

    function sumaunacaja() {
        counterUna++;
        resultadoUna = Number.parseFloat(data[i].siete) * counterUna
        cajaCompletaXCantidad.innerHTML = formateador.format(resultadoUna.toFixed(2));
        CantidadCajaCompleta.innerHTML = formateador.format(counterUna.toFixed(2));
        totalCajas.innerHTML = formateador.format((resultadoMedia + resultadoUna));
    }
    function restaunacaja() {
        counterUna--;
        resultadoUna = Number.parseFloat(data[i].siete) * counterUna
        cajaCompletaXCantidad.innerHTML = formateador.format(resultadoUna.toFixed(2));
        CantidadCajaCompleta.innerHTML = formateador.format(counterUna.toFixed(2));
        totalCajas.innerHTML = formateador.format((resultadoMedia + resultadoUna));
    }
    function sumaumediacaja() {
        counterMedia++;

        resultadoMedia = Number.parseFloat(data[i].nueve) * counterMedia
        mediacajaXcantidad.innerHTML = formateador.format(resultadoMedia.toFixed(2));
        cantidadMediaCaja.innerHTML = formateador.format(counterMedia.toFixed(2));
        totalCajas.innerHTML = formateador.format((resultadoMedia + resultadoUna));
    }
    function restamediacaja() {
        counterMedia--;
        resultadoMedia = Number.parseFloat(data[i].nueve) * counterMedia
        mediacajaXcantidad.innerHTML = formateador.format(resultadoMedia.toFixed(2));
        cantidadMediaCaja.innerHTML = formateador.format(counterMedia.toFixed(2));
        totalCajas.innerHTML = formateador.format((resultadoMedia + resultadoUna));
    }



prefacturar.addEventListener("click", e => {

// const taskId = e.target.previousSibling.previousSibling.getAttribute('id');
// const contents = document.getElementById(taskId);


const totalcajaCompletaXCantidad = document.getElementById(`cajaCompletaXCantidad${i}`).innerHTML;
const totalCantidadCajaCompleta = document.getElementById(`CantidadCajaCompleta${i}`).innerHTML;
const totalmediacajaXcantidad = document.getElementById(`mediacajaXcantidad${i}`).innerHTML;
const totalcantidadMediaCaja = document.getElementById(`cantidadMediaCaja${i}`).innerHTML;
const totaltotalCajas = document.getElementById(`totalCajas${i}`).innerHTML;
// 18092425374
let url = `https://api.whatsapp.com/send?phone=18092425374&text= 
${data[i].Producto}           
                                                                                                            
 *${totalCantidadCajaCompleta} cajas*   y    *${totalcantidadMediaCaja} media cajas*                                                                                                                                        
${totalCantidadCajaCompleta} cajas X ${data[i].siete} = ${totalcajaCompletaXCantidad}                        
                                                                                                                
${totalcantidadMediaCaja} media cajas X ${data[i].nueve} =  ${totalmediacajaXcantidad}   
.                                                                                                                                                              total a prefacturar: *${totaltotalCajas}*      *****     al cliente:`


window.open(url, "_blank");
// window.focus();
});

    sumaUnaCajaCompleta.addEventListener('click', sumaunacaja);

    restaUnaCajaCompleta.addEventListener('click', restaunacaja);

    sumaMediaCaja.addEventListener('click', sumaumediacaja);

    restaMediaCaja.addEventListener('click', restamediacaja);

}





