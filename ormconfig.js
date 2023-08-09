require('dotenv/config')
/* eslint @typescript-eslint/no-var-requires: 0 */
const { SnakeNamingStrategy } = require('typeorm-naming-strategies')

const { DB_NAME, DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD } = process.env

module.exports = {
  type: 'postgres',
  database: DB_NAME,
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  synchronize: false,
  autoLoadEntities: true,
  keepConnectionAlive: true,
  logging: true,
  namingStrategy: new SnakeNamingStrategy(),
  // entities: [UserEntity],
  entities: ['src/**/*.entity.ts'],
  migrations: ['migrations/**/*.ts'],
  cli: { migrationsDir: 'migrations' },
  seeds: ['src/seeds/**/*.ts'],
}
