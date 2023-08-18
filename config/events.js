class Events {
    constructor() {
        // Mapping of events to their listeners
        this.events = {
            userRegistered: ['sendWelcomeEmail', 'updateStats'],
            orderPlaced: ['processOrder', 'sendOrderEmail'],
            // ... other events as needed
        };

        // Propagation & Priority Policies
        this.policies = {
            propagation: process.env.EVENT_PROPAGATION || 'sync', // 'sync' or 'async'
            defaultPriority: process.env.EVENT_DEFAULT_PRIORITY || 'normal' // e.g., 'high', 'normal', 'low'
        };
    }

    /**
     * Get the listeners associated with a specific event.
     * @param {string} eventName - The name of the event.
     * @returns {string[]} - Array of listener names.
     */
    getListenersForEvent(eventName) {
        return this.events[eventName];
    }

    /**
     * Get the event propagation and priority policies.
     * @returns {object} - Object with event policies.
     */
    getPolicies() {
        return this.policies;
    }
}

export default new Events();