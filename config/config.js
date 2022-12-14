function runDotEnv() {
  if (process.env.ENV === 'development') {
    import('dotenv').then(dotenv => dotenv.config({ path: '.env' }));
  }
}

runDotEnv();

const config = {
  development: {
    username: process.env.DB_DEV_USER || 'postgresuser',
    password: process.env.DB_DEV_PASSWORD || 's0ffYuiO0UQtvYa6taMwNgbuFFbum9Hj',
    database: process.env.DB_DEV_DB_NAME || 'postgresdb_lpg3',
    host: process.env.DB_DEV_HOST || 'dpg-cdhg6pla499fh6gtbd8g-a',
    dialect: 'postgres',
  },
  test: {
    username: process.env.DB_TEST_USER || 'postgres',
    password: process.env.DB_TEST_PASSWORD || '1234567890',
    database: process.env.DB_TEST_DB_NAME || 'postgres',
    host:  process.env.DB_TEST_HOST || 'localhost',
    port: process.env.DB_TEST_PORT ||  5432,
    logging: true,
    dialect: process.env.DB_TEST_DIALECT || 'postgres',
  },
  production: {
    username: process.env.DB_DEV_USER,
    password: process.env.DB_DEV_PASSWORD,
    database: process.env.DB_DEV_DB_NAME,
    host: process.env.DB_DEV_HOST,
    logging: false,
    dialect: 'postgres',
  },
};

export default config;
