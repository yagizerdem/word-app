import db from './db';

export const selectAll = (successCallback) => {
    db.transaction(
      tx => {
        tx.executeSql(
          'SELECT * FROM wordlist',
          [],
          (_, { rows: { _array } }) => {
            successCallback(_array);
          }
        );
      },
    );
  }

  export const InsertRow = (word , desc) => {
    return new Promise((resolve, reject) => {
        db.transaction(
          tx => {
            tx.executeSql('INSERT INTO wordlist (word,description) VALUES (?, ?)', [word , desc]);
          },
          reject,
          resolve
        );
      });
  }

export const  DeleteRow = (id) =>{
    return new Promise((resolve, reject) => {
        db.transaction(
          tx => {
            tx.executeSql('DELETE from wordlist WHERE id == (?)', [id]);
          },
          reject,
          resolve
        );
      });
}

export const DeleteAllRecords = () => {
    return new Promise((resolve, reject) => {
        db.transaction(
          tx => {
            tx.executeSql('DELETE from wordlist');
          },
          reject,
          resolve
        );
      });
}