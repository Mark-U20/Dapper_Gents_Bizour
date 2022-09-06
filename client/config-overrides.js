module.exports = {
    devServer: function (configFunction) {
      return function (proxy, allowedHost) {
        // Create the default config by calling configFunction with the proxy/allowedHost parameters
        const config = configFunction(proxy, allowedHost);
  
        config.client = {
          overlay: false,
        };
  
        return config;
      };
    },
  };