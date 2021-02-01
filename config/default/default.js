const config = {
    db: {
      uri: process.env.MONGO_DB_URI,
    },
    // JWT Secret
    jwt: {
      secret: process.env.JWT_SECRET,
      tokenExpirePeriod: '365d', // 365 day
    },
    PORT: process.env.PORT || 3000,
  
    IP: '0.0.0.0',

    // Redirection Host Addresses
    HOST_ADDR: {
        ui: 'http://localhost:4200',
        server: 'http://localhost:3000'
    },
  };
  
  module.exports = config;
  