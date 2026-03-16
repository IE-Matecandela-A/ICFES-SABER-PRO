    }

    window.renderMathModule3 = (containerId) => {
        console.log("mathModule3.js: Ejecutando render en", containerId);
        const container = document.getElementById(containerId);
        if (container && window.ReactDOM) {
            try {
                const root = window.ReactDOM.createRoot(container);
                root.render(React.createElement(ModuloArgumentacion));
                console.log("mathModule3.js: Renderizado exitoso.");
            } catch (e) {
                console.error("mathModule3.js Error:", e);
                container.innerHTML = `<div class="p-10 text-center" style="color: #f87171"><h2 class="text-xl font-bold">Error en renderizado: \${e.message}</h2></div>`;
            }
        } else {
            console.warn("mathModule3.js: No se encontró ReactDOM o el contenedor.");
        }
    };
})();
