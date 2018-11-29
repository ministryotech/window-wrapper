/*
    Window Wrapper
    --------------
    Wraps window path methods for easy mocking. Should not be used directly - this is a direct dependency of path-manager.

    https://github.com/ministryotech/window-wrapper
*/
(function() {

    const root = window

    const funcs = {
        getHref: () => window.location.href,
        getHost: () => window.location.hostname,
        getPath: () => window.location.pathname
    }

    // Exports to the global scope
    if (typeof define === 'function' && define.amd) {
        define('window-wrapper', [], function() { return funcs })
    } else if (typeof exports === 'object') {
        module.exports = funcs
    } else {
        root.Wrapper = funcs // Somewhat pointless usage but there we go...
    }
    
})()