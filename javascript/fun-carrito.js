document.addEventListener("DOMContentLoaded", () => 
    {
    const carritoItemsStorage = JSON.parse(localStorage.getItem('cart')) || [];
    const carritoTableBody = document.getElementById('carrito-items');
    const totalgeneral = document.getElementById('total');
    let total = 0;

 
    // Cargar productos en la tabla del carrito
    carritoItemsStorage.forEach(item => 
    {
        const row = document.createElement('tr');

        // Nombre del producto
        const nombreCelda = document.createElement('td');
        nombreCelda.textContent = item.tit;
        row.appendChild(nombreCelda);

        // Precio del producto
        const precioCelda = document.createElement('td');
        precioCelda.textContent = `$${item.pre}`;
        row.appendChild(precioCelda);

        // Cantidad (hardcodeado a 1)
        const cantidadCelda = document.createElement('td');
        cantidadCelda.textContent = 1;
        row.appendChild(cantidadCelda);

        // Agregar fila a la tabla
        carritoTableBody.appendChild(row);

        // Sumar al total
        total += subtotal;
    });

    // Mostrar el total
    totalgeneral.textContent = total.toFixed(2);

    // Botón para limpiar el carrito y volver al inicio
    document.getElementById('limpiar-carrito').addEventListener('click', () => 
    {
        localStorage.removeItem('cart'); 
        window.location.href = 'index.html'; 
    });

    // Botón para finalizar la compra con sweet Alert
    document.getElementById('finalizar-compra').addEventListener('click', () => 
    {
        Swal.fire({
            title: 'Toma caprichosa aca tenes',
            text: 'grasias por salvarnos ahora tenemos hogar',
            icon: 'success',
            confirmButtonText: 'volvé'
        });

        
        localStorage.removeItem('cart'); 
        
        
        setTimeout(() => {
        window.location.href = 'index.html'; 
        }, 4000);     
    });
});