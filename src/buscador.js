// TC-001 y TC-002
function buscarProducto(termino, catalogo) {
    // REFACTOR: Programación defensiva. ¿Qué pasa si mandan un término vacío o un tipo de dato incorrecto?
    if (!termino || typeof termino !== 'string') {
        return "No hay publicaciones que coincidan con tu búsqueda";
    }

    const busquedaLimpia = termino.toLowerCase().trim();
    const resultados = catalogo.filter(producto => 
        producto.nombre.toLowerCase().includes(busquedaLimpia)
    );
    
    // REFACTOR: Operador ternario para hacer el código más corto y limpio
    return resultados.length === 0 ? "No hay publicaciones que coincidan con tu búsqueda" : resultados;
}

// TC-003
function validarFiltroPrecio(min, max) {
    // REFACTOR: Añadimos validaciones lógicas extra que faltaban
    if (min < 0 || max < 0) throw new Error("Los precios no pueden ser negativos");
    if (min > max) throw new Error("El precio mínimo no puede ser mayor al máximo");
    return true;
}

// TC-004
function sanitizarBusqueda(texto) {
    if (typeof texto !== 'string') return '';
    
    // REFACTOR EXTREMO: En lugar de usar .replace() básico, 
    // Expresión Regular (Regex) para destruir CUALQUIER etiqueta HTML (XSS), no solo <script>
    return texto.replace(/<\/?[^>]+(>|$)/g, "").trim();
}

// TC-005
function procesarFiltrosSimultaneos(filtros, catalogo) {
    // REFACTOR: En lugar de validar uno por uno manualmente, usamos Object.entries 
    // para soportar mas de 1 filtro
    return catalogo.filter(producto => {
        return Object.entries(filtros).every(([clave, valor]) => producto[clave] === valor);
    });
}

module.exports = { 
    buscarProducto, 
    validarFiltroPrecio, 
    sanitizarBusqueda, 
    procesarFiltrosSimultaneos 
};