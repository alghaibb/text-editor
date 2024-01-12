import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {

  // Creates a new database instance with the name 'jate' and version 1
  const db = await openDB('jate', 1);

  // Creates a new transaction with the database instance and the store name
  const tx = db.transaction('jate', 'readwrite');

  // Gets the store from the transaction
  const store = tx.objectStore('jate');

  // Adds the content to the store
  const req = store.put({ id: 1, value: content })

  const res = await req;

  console.log('Data saved to the database:', res);
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {

  // Create a new database instance with the name 'jate' and version 1
  const db = await openDB('jate', 1);

  // Create a new transaction with the database instance and the store name
  const tx = db.transaction('jate', 'readonly');

  // Get the store from the transaction
  const store = tx.objectStore('jate');

  // Get the content from the store
  const req = store.get(1);

  // Wait for the request to finish
  const res = await req;
  console.log('Data retrieved from the database:', res);

  // Return the content
  return res.value;
}

initdb();
