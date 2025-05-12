import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Question", collectionName: string) => {
  try {
    let modelExists = await models[modelName]?.db?.db?.listCollections({
      name: collectionName,
    }).toArray();

    // If modelExists is defined and the collection exists, drop it
    if (modelExists?.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
};
