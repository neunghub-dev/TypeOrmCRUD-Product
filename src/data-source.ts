import "reflect-metadata";
import { DataSource } from "typeorm";
import { Product } from "./entitys/product.entity";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "111111Aa",
    database: "shopping-typeorm",
    synchronize: true,
    logging: true,
    entities: [Product],
    migrations: [__dirname + "/migration/*.ts"],
    subscribers: [],
});
