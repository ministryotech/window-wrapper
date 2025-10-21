/**
 * Wraps window path methods for easy mocking. Should not be used directly - this is a direct dependency of path-manager.
 */
const WindowWrapper = {

    /**
     * Gets the current URI.
     * @returns The current URI.
     */
    getHref: function(): string {
        return window.location.href
    },

    /**
     * Gets the current host.
     * @returns The current host.
     */
    getHost: function(): string {
        return window.location.hostname
    },

    /**
     * Gets the current path.
     * @returns The current path.
     */
    getPath: function(): string {
        return window.location.pathname
    },

    /**
     * Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will
     * be invoked when the event is dispatched.
     *
     * The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method
     * behaves exactly as if the value was specified as options capture.
     *
     * When set to true, options capture prevents callback from being invoked when the events eventPhase attribute value is
     * BUBBLING_PHASE. When false (or not present), callback will not be invoked when events eventPhase attribute value is
     * CAPTURING_PHASE. Either way, callback will be invoked if events eventPhase attribute value is AT_TARGET.
     *
     * When set to true, options passive indicates that the callback will not cancel the event by invoking preventDefault().
     * This is used to enable performance optimizations described in § 2.8 Observing event listeners.
     *
     * When set to true, options once indicates that the callback will only be invoked once, after which the event listener
     * will be removed.
     *
     * The event listener is appended to target's event listener list and is not appended if it has the same type, callback,
     * and capture.
     * @param type The event type.
     * @param listener The event listener.
     * @param [options]
     */
    addEventListener: function(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) {
        return window.addEventListener(type, listener, options)
    },

    /**
     * Removes the event listener in target's event listener list with the same type, callback, and options.
     * @param type The event type.
     * @param listener The event listener.
     * @param [options]
     */
    removeEventListener: function(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions) {
        return window.removeEventListener(type, listener, options)
    },
}

// noinspection JSUnusedGlobalSymbols
export default WindowWrapper
