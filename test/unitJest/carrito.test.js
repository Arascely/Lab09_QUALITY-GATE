const { agregarProducto } = require('../../src/carrito');

describe('Módulo de Carrito de Compras - Mercado Libre', () => {

    test('TC-006: Agregar producto al carrito', () => {
        const carritoActual = [];
        const producto = { id: 1, nombre: "Laptop Asus", precio: 3500 };
        const nuevoCarrito = agregarProducto(producto, 1, carritoActual);
        
        expect(nuevoCarrito.length).toBe(1);
        expect(nuevoCarrito[0].cantidad).toBe(1);
    });

    test('TC-007: Límite superior de stock', () => {
        const stockReal = 3;
        expect(() => agregarProducto({ id: 1 }, 5, [], stockReal)).toThrow("No se puede agregar más unidades del stock real");
    });

});