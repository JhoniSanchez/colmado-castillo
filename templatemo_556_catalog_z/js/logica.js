import { data } from "./js.js";


for (let i = 0; i < data.length; i++) {




let insetar = document.querySelector(".container-fluid");

let nueva = document.createElement("div");

nueva.innerHTML = `
<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5 card">
    <figure class="effect-ming tm-video-item">
        <img src=img/${i}.jpg alt="Image" class="img-fluid">
        <figcaption class="d-flex align-items-center justify-content-center">
            <h2>Clocks</h2>
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


        <h6 class="text-black">Media Caja: ${data[i].nueve}
                <a target="_blank" class="imagen"
            href="https://api.whatsapp.com/send?phone=18092425374&text= Prefacturar:${data[i].Producto} *media caja* por => ${data[i].nueve} Cantidad || Cliente. "
            class="precio">
            <span target="_blank" class="coco">
                Pref.
            </span>
        </a>

        </h6>


        

    </div>
</div>
`;
nueva.classList.add("tm-gallery")

insetar.insertAdjacentElement("afterbegin", nueva)


  console.log(data[i].Producto);
}



console.log(insetar);

