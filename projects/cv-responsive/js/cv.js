document.addEventListener("DOMContentLoaded", () =>{

    //click del boton

    const $boton = document.querySelector("#download-pdf");
    $boton.addEventListener("click", () =>{
        const $elementoParaConvertir = document.body; // elegimos cualquier elemento del DOM
        html2pdf()
            .set({
                margin: 1,
                pagebreak: { mode: ['css'] },
                filename: 'MarioTapiaAyalaCv.pdf',
                image:{
                    type: 'jpeg',
                    quality: 0.98
                },
                jsPDF:{
                    unit:"mm",
                    format:"a3",
                    orientation: 'portrait' //landscape o portrait
                }
            })
            .from($elementoParaConvertir)
            .save()
            .catch(err => console.log(err))
            .finally()
            .then(() =>{
                console.log("Guardado");
            })
            

    })
})

           

           