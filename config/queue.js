class Queue {
    constructor() {
        // Background Processing
        this.backgroundProcessing = process.env.BACKGROUND_PROCESSING_ENABLED || true;

        // Queue System Type: Can be 'rabbitmq', 'kafka', etc.
        this.type = process.env.QUEUE_TYPE || 'rabbitmq';

        // Connection Settings
        this.connection = {
            host: process.env.QUEUE_HOST || 'localhost',
            port: process.env.QUEUE_PORT || this.getDefaultPort(),
            username: process.env.QUEUE_USERNAME || 'guest',
            password: process.env.QUEUE_PASSWORD || 'guest',
            vhost: process.env.QUEUE_VHOST || '/'
        };

        // Priorities, Attempts & Timeouts
        this.settings = {
            defaultPriority: process.env.QUEUE_DEFAULT_PRIORITY || 'normal',
            maxAttempts: process.env.QUEUE_MAX_ATTEMPTS || 3,
            jobTimeout: process.env.QUEUE_JOB_TIMEOUT || 60000 // 60 seconds
        };
    }

    /**
     * Get the default port based on the queue type.
     */
    getDefaultPort() {
        switch (this.type) {
            case 'rabbitmq': return 5672;
            case 'kafka': return 9092;
            default: return 5672;
        }
    }

    /**
     * Get the connection settings.
     * @returns {object} - Object with connection settings.
     */
    getConnectionSettings() {
        return this.connection;
    }

    /**
     * Get the queue settings (priorities, attempts, timeouts).
     * @returns {object} - Object with settings.
     */
    getQueueSettings() {
        return this.settings;
    }

    /**
     * Get the worker and concurrency settings.
     * @returns {object} - Object with worker settings.
     */
    getWorkerSettings() {
        return this.workers;
    }

    /**
     * Get the monitoring and logging settings.
     * @returns {object} - Object with monitoring settings.
     */
    getMonitoringSettings() {
        return this.monitoring;
    }
}

export default new Queue()