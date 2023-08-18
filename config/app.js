export class App {
    constructor() {
        // Environment: Can be 'dev', 'prod', 'staging', etc.
        this.env = process.env.APP_ENV || 'dev';

        // Timezone & Locale
        this.timezone = process.env.APP_TIMEZONE || 'UTC';
        this.locale = process.env.APP_LOCALE || 'en';

        // Optimization
        this.optimization = {
            compression: process.env.APP_COMPRESSION_ENABLED || true,
            minification: process.env.APP_MINIFICATION_ENABLED || true,
            lazyLoading: process.env.APP_LAZY_LOADING_ENABLED || true
        };

        // Security
        this.security = {
            cors: {
                enabled: process.env.CORS_ENABLED || true,
                origins: process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',') : ['*']
            },
            rateLimit: {
                enabled: process.env.RATE_LIMIT_ENABLED || true,
                maxRequests: process.env.RATE_LIMIT_MAX || 1000,
                window: process.env.RATE_LIMIT_WINDOW || 15 * 60 * 1000 // 15 minutes
            }
        };

        // Session & Cookies
        this.session = {
            cookieName: process.env.SESSION_COOKIE_NAME || 'nexaframe_session',
            expiration: process.env.SESSION_EXPIRATION || 24 * 60 * 60 * 1000, // 24 hours
            secure: process.env.SESSION_SECURE || false // true for HTTPS only
        };

        // Logging
        this.logging = {
            level: process.env.LOGGING_LEVEL || 'info',
            format: process.env.LOGGING_FORMAT || 'combined'
        };

        // Assets & Static Files
        this.assets = {
            path: process.env.ASSETS_PATH || '/public',
            cacheControl: process.env.ASSETS_CACHE_CONTROL || 'public, max-age=31536000' // 1 year
        };

        // API Settings
        this.api = {
            prefix: process.env.API_PREFIX || '/api',
            version: process.env.API_VERSION || 'v1'
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

    /**
     * Get the security settings.
     * @returns {object} - Object with security settings.
     */
    getSecuritySettings() {
        return this.security;
    }

    /**
     * Get the session settings.
     * @returns {object} - Object with session settings.
     */
    getSessionSettings() {
        return this.session;
    }

    /**
     * Get the logging settings.
     * @returns {object} - Object with logging settings.
     */
    getLoggingSettings() {
        return this.logging;
    }

    /**
     * Get the assets settings.
     * @returns {object} - Object with assets settings.
     */
    getAssetsSettings() {
        return this.assets;
    }

    /**
     * Get the API settings.
     * @returns {object} - Object with API settings.
     */
    getApiSettings() {
        return this.api;
    }
}