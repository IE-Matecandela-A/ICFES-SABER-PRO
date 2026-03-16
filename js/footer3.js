    }

    window.renderMathModule3 = (containerId) => {
        const container = document.getElementById(containerId);
        if (container) {
            const root = ReactDOM.createRoot(container);
            root.render(React.createElement(ModuloArgumentacion));
        }
    };
})();
