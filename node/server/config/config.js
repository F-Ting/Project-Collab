  module.exports = {
    development: {
      username: "project-collab-admin",
      password: "collab-project",
      database: "project-collab-db",
      host: "127.0.0.1",
      port: 5432,
      dialect: "postgres"
    },
    test: {
      username: "root",
      password: "",
      database: "project-collab-test-db",
      host: "127.0.0.1",
      port: 5432,
      dialect: "postgres"
    },
    production: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOSTNAME,
      dialect: 'postgres',
      dialectOptions: {
          ssl: true
      },
      use_env_variable: 'DATABASE_URL'
  }
}
