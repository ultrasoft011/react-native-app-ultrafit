import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("nutrition.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS food (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, image TEXT NOT NULL, food TEXT NOT NULL"
      ),
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        };
    });
  });
  return promise;
};

export const insertFood = (title, image, group) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO nutrition (title, image, group) VALUES (?, ?, ?);",
        [title, image, group],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};
