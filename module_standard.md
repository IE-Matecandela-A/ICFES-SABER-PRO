# Estándar de Arquitectura para Módulos React (Estándar Profe Chiguiro)

Para garantizar la estabilidad y el rendimiento al integrar nuevos módulos React mediante la transformación de Babel en el navegador, todos los módulos deben seguir estas reglas arquitectónicas.

## 1. Estructura de Archivo (IIFE Wrapper)
Cada módulo debe estar encerrado en una Función de Expresión Invocada Inmediatamente (IIFE) para evitar fugas de variables globales.

```javascript
(function() {
    const React = window.React;
    const { useState, useEffect, useMemo, useCallback } = React;
    
    // ... Lógica del Módulo ...

    window.renderMathModuleX = (containerId) => {
        // ... Lógica de Renderizado ...
    };
})();
```

## 2. Implementación de Iconos (Material Icons)
**IMPORTANTE:** Evita usar `LucideReact` directamente, ya que a menudo falla en este entorno específico. Usa el patrón de componente `Icon` definido con Material Icons Round (que ya está cargado en el index.html).

```javascript
const Icon = ({ name, className = "", style = {} }) => (
  React.createElement("span", { 
    className: `material-icons-round ${className}`, 
    style: { fontSize: 'inherit', verticalAlign: 'middle', ...style } 
  }, name)
);

// Ejemplo de uso como componente
const Brain = (props) => React.createElement(Icon, { name: "psychology", ...props });
```

## 3. Renderizado Seguro y Gestión de Raíces
Para evitar advertencias de "createRoot redundante" y asegurar una navegación limpia entre módulos, utiliza el registro global `_reactRoots`.

```javascript
window.renderMathModuleX = (containerId) => {
    const container = document.getElementById(containerId);
    if (container && window.ReactDOM) {
        try {
            if (!window._reactRoots) window._reactRoots = {};
            if (!window._reactRoots[containerId]) {
                window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
            }
            window._reactRoots[containerId].render(React.createElement(ModuloArgumentacion)); // Reemplazar con el componente principal
            console.log("mathModuleX.js: Renderizado exitoso.");
        } catch (e) {
            console.error("Error de Renderizado:", e);
            container.innerHTML = `<div class="p-10 text-center" style="color: #f87171"><h2 class="text-xl font-bold">Error en renderizado: ${e.message}</h2></div>`;
        }
    } else {
        console.warn("mathModuleX.js: No se encontró ReactDOM o el contenedor.");
    }
};
```

## 4. Codificación y Caracteres Especiales
Asegúrate de que los archivos se guarden con codificación **UTF-8** para preservar los caracteres españoles (á, é, í, ó, ú, ñ). Si se detectan caracteres corrompidos (ej. `Ã³`), deben ser corregidos inmediatamente.

## 5. Etiquetas de Script en `index.html`
El registro en `index.html` debe utilizar el tipo y los presets correctos:
```html
<script type="text/babel" data-presets="env,react" src="js/mathModuleX.js"></script>
```
