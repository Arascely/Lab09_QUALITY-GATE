
// TC-006 y TC-007
function agregarProducto(producto, cantidad, carritoActual, stockReal = 999) {
    // REFACTOR: Validaciones defensivas iniciales
    if (!producto || !producto.id) throw new Error("Producto inválido");
    if (cantidad <= 0) throw new Error("La cantidad debe ser mayor a 0");
    if (cantidad > stockReal) throw new Error("No se puede agregar más unidades del stock real");
    
    // REFACTOR: En lugar de duplicarlo, buscamos su índice y le sumamos la cantidad nueva.
    const indiceProducto = carritoActual.findIndex(item => item.id === producto.id);
    
    if (indiceProducto !== -1) {
        // Clonamos el carrito (Inmutabilidad)
        const nuevoCarrito = [...carritoActual];
        nuevoCarrito[indiceProducto].cantidad += cantidad;
        return nuevoCarrito;
    }

    // Agregar el producto si es nuevo
    return [...carritoActual, { ...producto, cantidad }];
}

module.exports = { agregarProducto };
