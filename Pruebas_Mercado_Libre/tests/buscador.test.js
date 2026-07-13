const { 
    buscarProducto, 
    validarFiltroPrecio, 
    sanitizarBusqueda, 
    procesarFiltrosSimultaneos 
} = require('../src/buscador');

const catalogoMock = [
    { id: 1, nombre: "Laptop Asus Zenbook", precio: 3500, envioGratis: true, condicion: "Nuevo" },
    { id: 2, nombre: "Mouse Inalámbrico Logitech", precio: 80, envioGratis: false, condicion: "Nuevo" },
    { id: 3, nombre: "Laptop HP Pavilion", precio: 2800, envioGratis: true, condicion: "Usado" }
];

describe('Módulo de Búsqueda y Filtros - Mercado Libre', () => {
    
    test('TC-001: Búsqueda exitosa con término genérico', () => {
        const resultados = buscarProducto("Laptop", catalogoMock);
        expect(resultados.length).toBe(2);
        expect(resultados[0].nombre).toMatch(/Laptop/); 
    });

    test('TC-002: Búsqueda sin coincidencias no rompe el sistema', () => {
        const resultados = buscarProducto("xyz999", catalogoMock);
        expect(resultados).toBe("No hay publicaciones que coincidan con tu búsqueda");
    });

    test('TC-003: Validación cruzada de Filtros de Precio', () => {
        expect(() => validarFiltroPrecio(500, 100)).toThrow("El precio mínimo no puede ser mayor al máximo");
    });

    test('TC-004: Inyección de caracteres especiales', () => {
        const textoInseguro = "<script>alert('hack')</script> Laptop";
        expect(sanitizarBusqueda(textoInseguro)).not.toContain("<script>");
    });

    test('TC-005: Procesamiento de Filtros Simultáneos', () => {
        const filtros = { envioGratis: true, condicion: "Nuevo" };
        const filtrados = procesarFiltrosSimultaneos(filtros, catalogoMock);
        //Se corrije al anterior codigo
        expect(filtrados.length).toBe(1);
        expect(filtrados[0].id).toBe(1);
    });
});