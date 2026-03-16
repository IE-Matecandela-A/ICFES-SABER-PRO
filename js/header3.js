(function() {
    console.log("mathModule3.js: Iniciando carga...");
    const React = window.React;
    const { useState, useEffect, useMemo, useCallback } = React;
    const LucideReact = window.LucideReact || {};

    const { 
        Brain, ArrowRight, ArrowDown, RefreshCw, Award, Search, Scale, 
        ShieldCheck, XCircle, CheckCircle, AlertTriangle, Lightbulb, 
        MessageSquare, TrendingUp, EyeOff, BookOpen, Calculator,
        Shapes, Sigma, Percent, Dices
    } = LucideReact;

    const Icon = ({ name, className = "", style = {} }) => (
      React.createElement("span", { className: `material-icons-round ${className}`, style: { fontSize: 'inherit', verticalAlign: 'middle', ...style } }, name)
    );

    function ModuloArgumentacion() {
