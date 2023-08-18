export class App {
    constructor() {
        this.env = process.env.APP_ENV || 'dev';
        this.timezone = process.env.APP_TIMEZONE || 'UTC';
        this.locale = process.APP_LOCALE || 'en'
        this.optimization = {
            compression: process.env.APP_COMPRESSION_ENABLED || true,
            minification: process.env.APP_MINIFICATION_ENABLED || true
        };
    }

    /**
     * Set the application environment.
     * @param {string} env - Environment ('dev', 'prod', 'staging', etc.)
     */
    setEnvironment(env) {
        this.env = env;
    }

    /**
     * Get the application environment.
     * @returns {string} - Current environment.
     */
    getEnvironment() {
        return this.env;
    }

    /**
     * Set the application timezone.
     * @param {string} timezone - Timezone (e.g., 'UTC', 'America/New_York')
     */
    setTimezone(timezone) {
        this.timezone = timezone;
    }

    /**
     * Get the application timezone.
     * @returns {string} - Current timezone.
     */
    getTimezone() {
        return this.timezone;
    }

    /**
     * Set the application locale.
     * @param {string} locale - Locale (e.g., 'en', 'es')
     */
    setLocale(locale) {
        this.locale = locale;
    }

    /**
     * Get the application locale.
     * @returns {string} - Current locale.
     */
    getLocale() {
        return this.locale;
    }

    /**
     * Enable or disable compression.
     * @param {boolean} isEnabled - True to enable, false to disable.
     */
    toggleCompression(isEnabled) {
        this.optimization.compression = isEnabled;
    }

    /**
     * Enable or disable minification.
     * @param {boolean} isEnabled - True to enable, false to disable.
     */
    toggleMinification(isEnabled) {
        this.optimization.minification = isEnabled;
    }

    /**
     * Get the optimization settings.
     * @returns {object} - Object with optimization settings.
     */
    getOptimizationSettings() {
        return this.optimization;
    }
}