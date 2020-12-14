/*
    Window Wrapper
    --------------
    Wraps window path methods for easy mocking. Should not be used directly - this is a direct dependency of path-manager.

    https://github.com/ministryotech/window-wrapper
*/
(function() {

    const root = window

    const funcs = {

        /**
         * Gets the current URI.
         * @returns {string} The current URI.
         */
        getHref: function() {
            return window.location.href
        },
        
        /**
         * Gets the current host.
         * @returns {string} The current host.
         */
        getHost: function() {
            return window.location.hostname
        },
        
        /**
         * Gets the current path.
         * @returns {string} The current path.
         */
        getPath: function() {
            return window.location.pathname
        },

        /**
         * Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will 
         * be invoked when the event is dispatched.
         * 
         * The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method 
         * behaves exactly as if the value was specified as options's capture.
         * 
         * When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is 
         * BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is 
         * CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.
         * 
         * When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). 
         * This is used to enable performance optimizations described in § 2.8 Observing event listeners.
         * 
         * When set to true, options's once indicates that the callback will only be invoked once after which the event listener 
         * will be removed.
         * 
         * The event listener is appended to target's event listener list and is not appended if it has the same type, callback, 
         * and capture.
         * 
         * @param {string} type The event type.
         * @param {EventListenerOrEventListenerObject} listener The event listener.
         * @param {boolean | AddEventListenerOptions} options
         */        
        addEventListener: function(type, listener, options) {
            return window.addEventListener(type, listener, options)
        },

        /**
         * Removes the event listener in target's event listener list with the same type, callback, and options.
         * 
         * @param {string} type The event type.
         * @param {EventListenerOrEventListenerObject} listener The event listener.
         * @param {boolean | EventListenerOptions} options
         */        
        removeEventListener: function(type, listener, options) {
            return window.removeEventListener(type, listener, options)
        }
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