# ActiveBrain Front-End

## Estructura de Carpetas

`components`: En esta carpeta van todos los componentes que comprenden
otros componentes o otras partes de la aplicación. Si un componente esta
conformado por varios otros componentes van dentro de una carpeta coon
el nombre del componente.

**Ejemplo:**

    components/MiComponente/PiezaComponente.js

Además si ese componente necesita estilos CSS va en la misma carpeta
donde se encuentre y con el mismo nombre.

    components/MiComponente/PiezaComponente.css

`pages`: Aquí van los componentes que representan una página completa.

## Convenciones de Nombre para Archivos

### Componentes

Se debe utilizar PascalCase, es decir, la primer letra de cada palabra
va en mayuscula. Como si fuera una clase. **Ejemplo:**

    MenuPrincipal
