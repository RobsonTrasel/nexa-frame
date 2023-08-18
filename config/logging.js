class Log {
    constructor() {
        // Log Levels: 'info', 'warn', 'error', etc.
        this.level = process.env.LOG_LEVEL || 'info';
    
        // Log Destinations
        this.destinations = process.env.LOG_DESTINATIONS || ['console', 'file'];
    
        // Formats & Rotation
        this.format = process.env.LOG_FORMAT || 'combined'; // e.g., 'combined', 'tiny', 'dev'
        this.rotation = {
            enabled: process.env.LOG_ROTATION_ENABLED || true,
            interval: process.env.LOG_ROTATION_INTERVAL || '1d', // '1d' for daily
            maxFiles: process.env.LOG_ROTATION_MAX_FILES || '14' // Keep logs for 14 days
        };
    }

    /**
     * Get the current log level.
     * @returns {string} - The log level.
     */
    getLevel() {
        return this.level;
    }

    /**
     * Get the list of log destinations.
     * @returns {string[]} - Array of destinations.
     */
    getDestinations() {
        return this.destinations;
    }

    /**
     * Get the log format.
     * @returns {string} - The log format.
     */
    getFormat() {
        return this.format;
    }

    /**
     * Get the log rotation settings.
     * @returns {object} - Object with rotation settings.
     */
    getRotationSettings() {
        return this.rotation;
    }
}

export default new Log()