class Http {
    constructor() {
        // HTTP Server Settings
        this.port = process.env.HTTP_PORT || 3000;
        this.host = process.env.HTTP_HOST || '0.0.0.0';
        this.keepAliveTimeout = process.env.HTTP_KEEP_ALIVE_TIMEOUT || 5000; // 5 seconds

        // Middlewares: List of default middlewares and their execution order
        this.middlewares = process.env.DEFAULT_MIDDLEWARES || ['cors', 'bodyParser', 'rateLimiter'];

        // Optimizations
        this.optimizations = {
            keepAlive: process.env.HTTP_KEEP_ALIVE_ENABLED || true,
            compression: process.env.HTTP_COMPRESSION_ENABLED || true,
            maxPayloadSize: process.env.HTTP_MAX_PAYLOAD_SIZE || '1mb',
            http2Enabled: process.env.HTTP_HTTP2_ENABLED || false, // Enable HTTP/2
            spdyEnabled: process.env.HTTP_SPDY_ENABLED || false, // Enable SPDY (HTTP/2 predecessor)
        };

        // SSL/TLS Configuration
        this.ssl = {
            enabled: process.env.HTTP_SSL_ENABLED || false,
            keyPath: process.env.HTTP_SSL_KEY_PATH,
            certPath: process.env.HTTP_SSL_CERT_PATH,
            caPath: process.env.HTTP_SSL_CA_PATH,
            requestCert: process.env.HTTP_SSL_REQUEST_CERT || false,
            rejectUnauthorized: process.env.HTTP_SSL_REJECT_UNAUTHORIZED || true
        };

        // CORS Configuration
        this.cors = {
            enabled: process.env.HTTP_CORS_ENABLED || true,
            origins: process.env.HTTP_CORS_ORIGINS ? process.env.HTTP_CORS_ORIGINS.split(',') : ['*'],
            methods: process.env.HTTP_CORS_METHODS || ['GET', 'POST', 'PUT', 'DELETE'],
            headers: process.env.HTTP_CORS_HEADERS || ['Content-Type', 'Authorization']
        };

        // Rate Limiting
        this.rateLimiting = {
            enabled: process.env.HTTP_RATE_LIMITING_ENABLED || true,
            windowMs: process.env.HTTP_RATE_LIMIT_WINDOW || 15 * 60 * 1000, // 15 minutes
            maxRequests: process.env.HTTP_RATE_LIMIT_MAX || 100
        };
    }
    /**
     * Get the HTTP server settings.
     * @returns {object} - Object with server settings.
     */
    getServerSettings() {
        return {
            port: this.port,
            host: this.host,
            keepAliveTimeout: this.keepAliveTimeout
        };
    }

    /**
     * Get the list of default middlewares and their execution order.
     * @returns {array} - Array of middlewares.
     */
    getMiddlewares() {
        return this.middlewares;
    }

    /**
     * Get the optimization settings.
     * @returns {object} - Object with optimization settings.
     */
    getOptimizationSettings() {
        return this.optimizations;
    }
    
    /**
     * Get the SSL/TLS settings.
     * @returns {object} - Object with SSL/TLS settings.
     */
    getSslSettings() {
        return this.ssl;
    }

    /**
     * Get the CORS settings.
     * @returns {object} - Object with CORS settings.
     */
    getCorsSettings() {
        return this.cors;
    }

    /**
     * Get the rate limiting settings.
     * @returns {object} - Object with rate limiting settings.
     */
    getRateLimitingSettings() {
        return this.rateLimiting;
    }
}

export default new Http()