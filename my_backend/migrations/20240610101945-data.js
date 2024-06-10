module.exports = {
  async up(db, client) {
    // Ensure the collection exists, and create it if it doesn't
    const collections = await db.listCollections({ name: "datacollection" }).toArray();
    if (collections.length === 0) {
      await db.createCollection("datacollection");
    }
    
    // Update the documents in the collection
    await db.collection("datacollection").updateMany(
      {},
      {
        $set: {
          newField: "defaultValue",
        },
      }
    );
  },

  async down(db, client) {
    // Remove the field from the documents
    await db.collection("datacollection").updateMany(
      {},
      {
        $unset: {
          newField: "",
        },
      }
    );
  },
};
