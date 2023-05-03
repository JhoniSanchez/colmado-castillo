import { data } from "./js.js";




for (let i = 115; i < 120; i++) {




    let insetar = document.querySelector(".container-fluid");

    let nueva = document.createElement("div");

    nueva.innerHTML = `
<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5 card">
    <figure class="effect-ming tm-video-item">
        <img src=./templatemo_556_catalog_z/img/${i}.jpg alt="Image" class="img-fluid">
        <figcaption class="d-flex align-items-center justify-content-center">
            <h2>Comprar</h2>
            <a href="photo-detail.html">View more</a>
        </figcaption>
    </figure>
    <div class="d-inline-block">
        <span class="tm-text-gray">${data[i].Producto}</span>
        <h6 class="text-black">Caja Completa: ${data[i].siete}
            <a target="_blank" class="imagen"
                href="https://api.whatsapp.com/send?phone=18092425374&text= Prefacturar:${data[i].Producto} *caja completa* por => ${data[i].siete} Cantidad || Cliente. "
                class="precio">
                <span target="_blank" class="coco">
                    Pref.
                </span>
            </a>
        </h6>
        <button type="button" id="sumacajacompleta">Agregar</button> <button type="button"
            id="restacajacompleta">Restar</button>
        <div id="cajaCompletaXCantidad"></div>
        <div id="CantidadCajaCompleta"></div>
        <h6 class="text-black">Media Caja: ${data[i].nueve}
            <a target="_blank" class="imagen"
                href="https://api.whatsapp.com/send?phone=18092425374&text= Prefacturar:${data[i].Producto} *media caja* por => ${data[i].nueve} Cantidad || Cliente. "
                class="precio">
                <span target="_blank" class="coco">
                    Pref.
                </span>
            </a>
        </h6>
        <button type="button" id="sumamediacaja">Agregar</button> <button type="button"
            id="restamediacaja">Restar</button>
        <div id="mediacajaXcantidad"></div>
        <div id="cantidadMediaCaja"></div>
    </div>
    <span id="cajaCompletaXCantidadT">Total A Prefacturar</span>
    <h4 id="totalCajas"></h4>
    <button type="button" id="prefacturar">Prefacturar</button> 
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

    let cajaCompletaXCantidad = document.querySelector('#cajaCompletaXCantidad');
    let CantidadCajaCompleta = document.querySelector('#CantidadCajaCompleta');

    let mediacajaXcantidad = document.querySelector('#mediacajaXcantidad');
    let cantidadMediaCaja = document.querySelector('#cantidadMediaCaja');

    let totalCajas = document.querySelector('#totalCajas');

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


const totalcajaCompletaXCantidad = document.getElementById("cajaCompletaXCantidad").innerHTML || 0;
const totalCantidadCajaCompleta = document.getElementById("CantidadCajaCompleta").innerHTML || 0;
const totalmediacajaXcantidad = document.getElementById("mediacajaXcantidad").innerHTML || 0;
const totalcantidadMediaCaja = document.getElementById("cantidadMediaCaja").innerHTML || 0;
const totaltotalCajas = document.getElementById("totalCajas").innerHTML || 0;
// 18092425374
let url = `https://api.whatsapp.com/send?phone=18493802222&text= 
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





