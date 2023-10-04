import { join } from "path";
import { DataSource, DataSourceOptions } from "typeorm";
import "reflect-metadata"
import { config } from "dotenv";
config()

export const typeormConfig: DataSourceOptions = {
    type: 'postgres',
    url: process.env.TYPEORM_LOCAL_DATABASE,
    entities: [join(__dirname, '/../**/*.entity{.ts,.js}')],
    migrations: [join(__dirname, '/../**/migrations/*{.ts,.js}')],
    synchronize: true
}

export const AppDataSource = new DataSource({
    ...typeormConfig
})