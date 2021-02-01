const config = {
    db: {
      uri: process.env.MONGO_DB_URI,
    },
  
    // JWT Secret
    jwt: {
      secret: process.env.JWT_SECRET,
      tokenExpirePeriod: '365d', // 7 day
    },
    // NODE ENV VARIABLES
  
    PORT: process.env.NODE_PORT,

    // Ip
    IP: '0.0.0.0',

    // Redirection Host Addresses

    HOST_ADDR: {
        ui: 'http://localhost:4200',
        server: 'http://localhost:8080'
    }
  
  };
  
  module.exports = config;
  