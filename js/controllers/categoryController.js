import {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory
} from "../services/categoryService.js";

document.addEventListener("DOMContentLoaded", ()=>{
    const tableBody = document.querySelector("#categoriesTable tbody");
    const form = document.getElementById("categoryForm");
    const modal = new boostrap.Modal(document.getElementById("categoryModal"));
    const lblModal = document.getElementById("categoryModalLabel");
    const btnAdd = document.getElementById("btnAddCategory");

    Infinity();

    btnAdd.addEventListener("click", ()=>{
        form.reset();
        form.categoryId.value = "";
        lblModal.textContent = "Agregar categoría";
        modal.show();
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const id = form.categoryId.value;
        const data = {
          nombreCategoria: form.categoryName.value.trim(),
          descripcion: form.categoryDescription.value.trim()  
        };
    });
});