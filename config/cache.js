class Cache {
    constructor() {
        // Cache System Type: Can be 'redis', 'memcached', etc.
        this.type = process.env.CACHE_TYPE || 'redis';

        // Connection & Authentication Settings
        this.connection = {
            host: process.env.CACHE_HOST || 'localhost',
            port: process.env.CACHE_PORT || this.getDefaultPort(),
            password: process.env.CACHE_PASSWORD || null,
            db: process.env.CACHE_DB || 0,
            retryStrategy: process.env.CACHE_RETRY_STRATEGY || this.defaultRetryStrategy,
            useTLS: process.env.CACHE_USE_TLS || false, // Use TLS for secure connections
            tlsOptions: process.env.CACHE_TLS_OPTIONS || {} // Options for TLS (e.g., certificate details)
        };

        // Invalidation & TTL
        this.policies = {
            defaultTTL: process.env.CACHE_DEFAULT_TTL || 3600,
            autoPrune: process.env.CACHE_AUTO_PRUNE_ENABLED || true,
            namespace: process.env.CACHE_NAMESPACE || 'nexaframe:',
            staleWhileRevalidate: process.env.CACHE_SWRV || 60 // SWR policy duration in seconds
        };

        // Clustering (useful for distributed caching systems like Redis Cluster)
        this.clustering = {
            enabled: process.env.CACHE_CLUSTER_ENABLED || false,
            nodes: process.env.CACHE_CLUSTER_NODES ? process.env.CACHE_CLUSTER_NODES.split(',') : [], // List of node addresses
            options: process.env.CACHE_CLUSTER_OPTIONS || {} // Options for clustering
        };

        // Backup & Persistence
        this.backup = {
            enabled: process.env.CACHE_BACKUP_ENABLED || false,
            path: process.env.CACHE_BACKUP_PATH || './backups/cache',
            frequency: process.env.CACHE_BACKUP_FREQUENCY || 'daily' // Could be 'hourly', 'weekly', etc.
        };
    }

    /**
     * Get the default port based on the cache type.
     */
    getDefaultPort() {
        switch (this.type) {
            case 'redis': return 6379;
            case 'memcached': return 11211;
            default: return 6379; 
        }
    }

    /**
     * Default retry strategy if the connection is lost.
     */
    defaultRetryStrategy(times) {
        // Reconnect after this time
        // This can be expanded with more logic if needed
        return Math.min(times * 50, 2000);
    }

    /**
     * Get the cache type.
     * @returns {string} - Current cache type.
     */
    getType() {
        return this.type;
    }

    /**
     * Get the connection settings.
     * @returns {object} - Object with connection settings.
     */
    getConnectionSettings() {
        return this.connection;
    }

    /**
     * Get the invalidation and TTL policies.
     * @returns {object} - Object with policies settings.
     */
    getPolicies() {
        return this.policies;
    }

    /**
     * Get the clustering settings.
     * @returns {object} - Object with clustering settings.
     */
    getClusteringSettings() {
        return this.clustering;
    }

    /**
     * Get the backup and persistence settings.
     * @returns {object} - Object with backup settings.
     */
    getBackupSettings() {
        return this.backup;
    }
}

export default new Cache()