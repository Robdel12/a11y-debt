module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'a11y-debt',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
