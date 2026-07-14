# Mercado Libre — Suite de Pruebas


![CI Jest](https://github.com/Arascely/Lab09_QUALITY-GATE/actions/workflows/ci.yml/badge.svg)
![CI Playwright](https://github.com/Arascely/Lab09_QUALITY-GATE/actions/workflows/playwright.yml/badge.svg)
[![Quality Gate](https://sonarcloud.io/api/project_badges/measure?project=Arascely_Lab09_QUALITY-GATE&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Arascely_Lab09_QUALITY-GATE)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Arascely_Lab09_QUALITY-GATE&metric=coverage)](https://sonarcloud.io/summary/new_code?id=Arascely_Lab09_QUALITY-GATE)

# Reporte de Calidad — Mercado Libre
**IS-489 | Semestre 2026-I | Rodriguez Quispe Grissel Arascely**

---

## 1. Resumen ejecutivo

| Indicador          | Valor         | Estado   |
|---------------------|---------------|----------|
| Tests unitarios      | 7 passing     | ✓ OK     |
| Tests de API         | 10 passing    | ✓ OK     |
| Tests E2E            | 4 passing     | ✓ OK     |
| Cobertura total       | 68.75% statements / 72% branches | ⚠ Por debajo del umbral (70%) |
| Quality Gate          | [PASSED / FAILED] | [✓ OK / ✗ Revisar] |
| Bugs (Sonar)           | [completar desde el dashboard de SonarQube Cloud] | [ ] |
| Code Smells             | [completar desde el dashboard de SonarQube Cloud] | [ ] |

> Nota: el umbral de cobertura configurado en `coverageThreshold` (jest) es 70% en statements, branches, functions y lines. Statements (68.75%) está actualmente por debajo del umbral; branches (72%), functions (88.88%) y lines (79.16%) sí lo superan.

---

## 2. Cobertura por módulo

| Módulo              | Statements | Branches | Functions | Lines  | Líneas sin cubrir |
|----------------------|-----------|----------|-----------|--------|--------------------|
| src/buscador.js       | 77.77%    | 71.42%   | 100%      | 85.71% | 5, 22              |
| src/carrito.js        | 57.14%    | 72.72%   | 50%       | 70%    | 14-16              |
| **Total (all files)** | **68.75%**| **72%**  | **88.88%**| **79.16%** | —              |

---

## 3. Trazabilidad: casos de prueba por tipo

**IS-489 Pruebas y Aseguramiento de Calidad de Software**

| Tipo        | Lab     | Cantidad | Estado         |
|-------------|---------|----------|----------------|
| Manuales    | Lab 03  | [completar] | Ejecutados     |
| Unitarios   | Lab 05  | 7        | Automatizados  |
| API         | Lab 06  | 10       | Automatizados  |
| E2E         | Lab 07  | 4        | Automatizados  |

---

## 4. Estado del pipeline CI/CD

- **Pipeline Jest** (`ci-jest.yml`): ejecuta tests unitarios + API + quality gate de cobertura en cada Push y Pull Request a `main`.
- **Pipeline Playwright** (`playwright.yml`): ejecuta la suite E2E contra MercadoLibre en cada Push/PR a `main`.
- **SonarQube Cloud** (`sonarcloud.yml`): analiza calidad de código y reporta el Quality Gate en cada Push/PR a `main`.

| Pipeline     | Estado actual |
|--------------|----------------|
| CI Jest      | [PASS / FAIL] |
| CI Playwright| [PASS / FAIL] |
| SonarQube Cloud Quality Gate | [PASSED / FAILED] |

---

## 5. Hallazgos y recomendaciones

- **Code smells detectados:** [completar con el listado de la pestaña "Issues" en SonarQube Cloud, filtrando por tipo "Code Smell"]
- **Ramas no cubiertas (branches):** según el reporte HTML de Jest (`coverage/lcov-report/index.html`), las líneas 14-16 de `carrito.js` no están cubiertas — corresponden a [completar: describir qué lógica cubren esas líneas, ej. validación de stock excedido]. Las líneas 5 y 22 de `buscador.js` tampoco están cubiertas — corresponden a [completar].
- **Tests recomendados para subir la cobertura:**
  - Agregar un caso de prueba para la rama no cubierta de `carrito.js` (líneas 14-16), probablemente relacionada con el manejo de un caso límite (por ejemplo, cantidad inválida o carrito vacío).
  - Agregar un caso de prueba para las líneas 5 y 22 de `buscador.js`, para llevar `statements` por encima del umbral de 70% requerido por el quality gate de Jest.
  - Considerar agregar tests unitarios adicionales para funciones con baja cobertura de `functions` en `carrito.js` (actualmente 50%).

---

## 6. Evidencias

Evidencia de todos los test pasados


Antes de la cobertura del 70%


Despues de la cobertura del 70%


Luego de implementar sonarcloud


Evidencia en GitGub del comportamiento de todos los flujos de trabajo