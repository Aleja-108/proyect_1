const btnAbrirModal = document.querySelector("#btn_abrir_modal");
const btnCerrarModal = document.querySelector("#btn_cerrar_modal");
const modal = document.querySelector("#form_resto");

btnAbrirModal.addEventListener("click", ()=>{
    modal.showModal();
})

btnCerrarModal.addEventListener("click", ()=>{
    modal.close();
})