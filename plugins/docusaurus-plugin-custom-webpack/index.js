
module.exports = {
  default : function (context, options) {
  
    return {
      name: 'custom-webpack-config-plugin',
      configureWebpack(config, isServer) {
  
        return {
          module : {
            rules : [
              {
                test: /\.svg$/,
                use: [
                    {
                        loader: "svg-inline-loader",
                        options: {
                            removeSVGTagAttrs: false,
                        },
                    },
                ],
              }
            ]
          }
        };
        
      },
    };
  }
};