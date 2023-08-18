class Auth {
    constructor() {
        // Authentication Type: 'jwt', 'oauth2', etc.
        this.type = process.env.AUTH_TYPE || 'jwt';

        // Token & Session Settings
        this.token = {
            secret: process.env.AUTH_TOKEN_SECRET || 'nexaframe-secret',
            expiration: process.env.AUTH_TOKEN_EXPIRATION || '1h' // 1 hour
        };
        this.session = {
            secret: process.env.AUTH_SESSION_SECRET || 'nexaframe-session-secret',
            expiration: process.env.AUTH_SESSION_EXPIRATION || '24h' // 24 hours
        };

        // Blacklists & Rate Limiting Policies
        this.blacklist = process.env.AUTH_BLACKLIST || [];
        this.rateLimiting = {
            window: process.env.AUTH_RATE_LIMIT_WINDOW || 15 * 60 * 1000, // 15 minutes
            maxAttempts: process.env.AUTH_RATE_LIMIT_MAX_ATTEMPTS || 5
        };
    }

    /**
     * Get the authentication type.
     * @returns {string} - The authentication type.
     */
    getType() {
        return this.type;
    }

    /**
     * Get the token settings.
     * @returns {object} - Object with token settings.
     */
    getTokenSettings() {
        return this.token;
    }

    /**
     * Get the session settings.
     * @returns {object} - Object with session settings.
     */
    getSessionSettings() {
        return this.session;
    }

    /**
     * Get the list of blacklisted entities.
     * @returns {string[]} - Array of blacklisted entities.
     */
    getBlacklist() {
        return this.blacklist;
    }

    /**
     * Get the rate limiting settings.
     * @returns {object} - Object with rate limiting settings.
     */
    getRateLimitingSettings() {
        return this.rateLimiting;
    }
}

export default new Auth();