    }

    window.renderMathModule3 = (containerId) => {
        console.log("mathModule3.js: Rendering to", containerId);
        try {
            const container = document.getElementById(containerId);
            if (container && ReactDOM) {
                const root = ReactDOM.createRoot(container);
                root.render(React.createElement(ModuloArgumentacion));
                console.log("mathModule3.js: Render success.");
            } else {
                console.warn("mathModule3.js: Container or ReactDOM missing.");
            }
        } catch (err) {
            console.error("mathModule3.js: Render error:", err);
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = `<div style="padding: 20px; color: #ef4444; background: #fee2e2; border: 1px solid #fecaca; rounded: 12px;"><h3>Error al cargar el módulo</h3><p>${err.message}</p></div>`;
            }
        }
    };
    console.log("mathModule3.js: IIFE Finished, renderMathModule3 registered.");
})();
