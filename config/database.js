class Database {
    constructor() {
        // Database Type: Can be 'mysql', 'postgresql', 'mongodb', etc.
        this.type = process.env.DB_TYPE || 'mysql';

        // Connection Settings
        this.connection = {
            host: process.env.DB_HOST || 'localhost',
            port: process.env.DB_PORT || this.getDefaultPort(),
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || '',
            database: process.env.DB_NAME || 'nexaframe_db',
            charset: process.env.DB_CHARSET || 'utf8',
            ssl: process.env.DB_SSL_ENABLED || false,  // SSL for secure DB connections
            timeout: process.env.DB_CONNECTION_TIMEOUT || 5000 // Connection timeout in ms
        };
        // Replication (useful for read-write splitting)
        this.replication = {
            enabled: process.env.DB_REPLICATION_ENABLED || false,
            write: {
                host: process.env.DB_WRITE_HOST || this.connection.host,
                user: process.env.DB_WRITE_USER || this.connection.user,
                password: process.env.DB_WRITE_PASSWORD || this.connection.password,
            },
            read: [
                {
                    host: process.env.DB_READ_HOST_1,
                    user: process.env.DB_READ_USER_1,
                    password: process.env.DB_READ_PASSWORD_1,
                }
            ]
        };

        // Pooling & Cache Settings
        this.pooling = {
            min: process.env.DB_POOL_MIN || 0,
            max: process.env.DB_POOL_MAX || 10,
            acquireTimeout: process.env.DB_POOL_ACQUIRE_TIMEOUT || 30000, // Time to wait before throwing connection timeout
            idleTimeout: process.env.DB_POOL_IDLE_TIMEOUT || 10000 // Time a connection can be idle before being released
        };
        this.cache = {
            enabled: process.env.DB_CACHE_ENABLED || false,
            ttl: process.env.DB_CACHE_TTL || 300, // 5 minutes
            prefix: process.env.DB_CACHE_PREFIX || 'nexaframe_db:' // Prefix for cache keys
        };

        // Specific Optimizations
        this.optimizations = {
            indexConfig: process.env.DB_INDEX_CONFIG || {},
            sharding: {
                enabled: process.env.DB_SHARDING_ENABLED || false,
                shards: process.env.DB_SHARDS || 2,
                strategy: process.env.DB_SHARDING_STRATEGY || 'range' // e.g., 'range', 'hash'
            },
            logging: process.env.DB_LOGGING_ENABLED || false // Enables query logging for debugging
        };

        // Migration & Seeding
        this.migrations = {
            directory: process.env.DB_MIGRATIONS_DIR || './migrations',
            tableName: process.env.DB_MIGRATIONS_TABLE || 'nexaframe_migrations'
        };
        this.seeds = {
            directory: process.env.DB_SEEDS_DIR || './seeds'
        };
    }

     /**
     * Get the default port based on the database type.
     */
     getDefaultPort() {
        switch (this.type) {
            case 'mysql': return 3306;
            case 'postgresql': return 5432;
            case 'mongodb': return 27017;
            default: return 3306; 
        }
    }

    /**
     * Get the database type.
     * @returns {string} - Current database type.
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
     * Get the pooling settings.
     * @returns {object} - Object with pooling settings.
     */
    getPoolingSettings() {
        return this.pooling;
    }

    /**
     * Get the cache settings.
     * @returns {object} - Object with cache settings.
     */
    getCacheSettings() {
        return this.cache;
    }

    /**
     * Get the specific optimization settings.
     * @returns {object} - Object with specific optimization settings.
     */
    getOptimizationSettings() {
        return this.optimizations;
    }

    /**
     * Get the replication settings.
     * @returns {object} - Object with replication settings.
     */
    getReplicationSettings() {
        return this.replication;
    }

    /**
     * Get the migration settings.
     * @returns {object} - Object with migration settings.
     */
    getMigrationSettings() {
        return this.migrations;
    }

    /**
     * Get the seeding settings.
     * @returns {object} - Object with seeding settings.
     */
    getSeedingSettings() {
        return this.seeds;
    }
}

export default new Database()