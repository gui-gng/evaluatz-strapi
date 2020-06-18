module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', `${process.env.DATABASE_HOST}`),
        port: env.int('DATABASE_PORT', `${process.env.DATABASE_PORT}`),
        database: env('DATABASE_NAME', `${process.env.DATABASE_NAME}`),
        username: env('DATABASE_USERNAME', `${process.env.DATABASE_USERNAME}`),
        password: env('DATABASE_PASSWORD', `${process.env.DATABASE_PASSWORD}`),
        ssl: env.bool('DATABASE_SSL', true),
      },
      options: {
        "useNullAsDefault": true,
        "pool": {
          "min": 1,
          "max": 4,
          "idleTimeoutMillis": 30000,
          "createTimeoutMillis": 30000,
          "acquireTimeoutMillis": 30000
        }
      }
    },
  },
});
