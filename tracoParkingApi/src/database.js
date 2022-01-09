import sqlite3 from "sqlite3";
import { open } from "sqlite";

export const openDB = async () => {
    return await open({
        filename: './src/db/db.db',
        driver: sqlite3.Database
    })
}