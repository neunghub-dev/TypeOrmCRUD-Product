// src/data-source.ts
import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";  // import your entities here

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "yourUsername",
  password: "yourPassword",
  database: "yourDatabaseName",
  synchronize: true,
  logging: false,
  entities: [User],  // add all your entities here
  migrations: [],
  subscribers: [],
});

// Initialize the data source
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });
