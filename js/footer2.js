    }

    window.renderMathModule2 = (containerId) => {
        const container = document.getElementById(containerId);
        if (container) {
            const root = ReactDOM.createRoot(container);
            root.render(React.createElement(ModuloFormulacion));
        }
    };
})();
