module.exports = {
    plugins: [
      require('postcss-preset-env')({
        stage: 3, 
        features: {
          'custom-properties': true
        }
      }),
      require('postcss-svgo')({
        plugins: [
          { removeViewBox: false },
          { removeEmptyAttrs: false }
        ]
      })
    ]
  };
  