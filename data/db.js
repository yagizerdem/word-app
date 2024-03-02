import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('appdb'); 

db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS wordlist (id INTEGER PRIMARY KEY NOT NULL, word TEXT NOT NULL, description TEXT NOT NULL);'
    );
  });

export default db