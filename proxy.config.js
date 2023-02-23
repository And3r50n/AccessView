const PROXY_CONFIG = [
  {  
    context: ['/api'],
    target: 'http://localhost:8080/',
    secure: false,
    logLevel: 'debug'
  }
]

module.exports = PROXY_CONFIG;

// Não esquerecer de apontar o proxy em package.jason, "start" ng serve --proxy-config proxy.config.js",