// config.js - Centralized configuration for MathJax
window.MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']], // Define inline LaTeX delimiters
        displayMath: [['$$', '$$'], ['\\[', '\\]']], // Define display math delimiters
        processEscapes: true, // Allow \$ to produce a literal dollar sign
        tags: 'ams' // Use AMS numbering style: (1), (2), ...
    },
    options: {
        skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'], // Ignore these tags
        ignoreHtmlClass: 'ignore-mathjax' // Ignore elements with this class
    },
    startup: {
        ready: () => {
            console.log('MathJax is loaded and ready!');
            MathJax.startup.defaultReady();
        }
    }
};
