// In this file you can configure migrate-mongo

const config = {
  mongodb: {
    // The URL to your MongoDB instance
    url: "mongodb://localhost:27017",

    // The name of the database to apply migrations to
    databaseName: "data",

    options: {
      // These options are deprecated in the latest MongoDB driver and can be removed
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      
      // It's good practice to set these timeouts if you expect long-running migrations
      connectTimeoutMS: 3600000, // Optional: increase connection timeout to 1 hour
      socketTimeoutMS: 3600000,  // Optional: increase socket timeout to 1 hour

      // You can add other options as needed
    },
  },

  // Directory where migration files are stored
  migrationsDir: "migrations",

  // Collection name for tracking applied migrations
  changelogCollectionName: "changelog",

  // File extension for migration files
  migrationFileExtension: ".js",

  // Whether to use a checksum to detect changes in migration files
  useFileHash: false,

  // Module system to use for migrations (CommonJS)
  moduleSystem: "commonjs",
};

module.exports = config;
