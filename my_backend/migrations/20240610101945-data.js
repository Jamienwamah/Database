module.exports = {
  async up(db, client) {
    // Ensure the collection exists, and create it if it doesn't
    const collections = await db.listCollections({ name: "gmoniecollection" }).toArray();
    if (collections.length === 0) {
      await db.createCollection("gmoniecollection");
    }
    
    // Update the documents in the collection
    await db.collection("gmoniecollection").updateMany(
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
    await db.collection("gmoniecollection").updateMany(
      {},
      {
        $unset: {
          newField: "",
        },
      }
    );
  },
};
