import { expect, test } from '@playwright/test';

// Modulo con las pruebas relacionadas con búsquedas
    test('TC-001: Buscar producto genérico (Laptop Lenovo)', async ({ page }) => {
        await page.goto('https://www.mercadolibre.com.pe/');
        //Se busca el termino
        const terminoBusqueda = 'Laptop Lenovo';
        await page.locator('input[id="cb1-edit"]').fill(terminoBusqueda);
        await page.keyboard.press('Enter');
        //Resultados cargados 
        const contenedorResultados = page.locator('ol.ui-search-layout');
        await expect(contenedorResultados).toBeVisible({ timeout: 15000 });
        //Capturas resultados de todos los titulos
        const elementosTitulo = page.locator('.poly-component__title');
        const primerTitulo = await elementosTitulo.first().innerText();
        console.log(`El primer resultado es: "${primerTitulo}"`);
        //Verificación
        expect(primerTitulo.toLowerCase()).toMatch(/lenovo/);
    });

    test('TC-002: Búsqueda sin coincidencias', async ({ page }) => {
    await page.goto('https://www.mercadolibre.com.pe/');

    // Se busca un termino destinado a fallar
    await page.locator('input[id="cb1-edit"]').fill('laptopinexistente99996434');
    await page.keyboard.press('Enter');

    const mensajeError = page.locator('.ui-search-rescue__title'); 
    
    // Verificación de que el mensaje de error es visible y contiene el texto esperado
    await expect(mensajeError).toBeVisible({ timeout: 10000 });
    
    // Corroboración de que el mensaje contiene el texto esperado
    await expect(mensajeError).toContainText('No encontramos resultados para tu búsqueda');
  });


  test('TC-004: Inyección de caracteres especiales (XSS)', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.pe/');
  
  // Caracteres especiales
  await page.locator('input[id="cb1-edit"]').fill("&%");
  await page.keyboard.press('Enter');

  // Validar que se muestre el mensaje de "No encontramos resultados"
  const mensajeError = page.locator('.ui-search-rescue__title'); 
  await expect(mensajeError).toBeVisible({ timeout: 10000 });
  await expect(mensajeError).toContainText('No encontramos resultados para tu búsqueda');
});
  
  test('TC-005: Procesamiento de Filtros Simultáneos', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.pe/');
  await page.locator('input[id="cb1-edit"]').fill('Audifonos Bluetooth');
  await page.keyboard.press('Enter');
  
  // Esperar que carguen los resultados
  await expect(page.locator('.ui-search-layout')).toBeVisible({ timeout: 15000 });
  
  // Aplicar filtros
  await page.getByRole('link', { name: 'Negro', exact: true }).click(); 
  await page.getByRole('link', { name: 'Es inalámbrico', description: 'Es inalámbrico' }).click();
  
  await page.waitForTimeout(2000);
  
  // Validamos las etiquetas de filtros aplicados
  const etiquetasAplicadas = page.locator('.andes-tag');
  await expect(etiquetasAplicadas).toHaveCount(2, { timeout: 15000 });
});