module.exports = {
  apps : [{
    name: "journal-app",
    script: "./index.js",
    env: {
      NODE_ENV: "development",
    },
    // env_production: {
    //   NODE_ENV: "production",
    // }
  }]
}
