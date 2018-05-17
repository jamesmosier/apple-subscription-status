const { json } = require('micro');

module.exports = async (req, res) => {
  const resp = await json(req);
  // `resp` will be an object like found here in the "Status Update Notifications" section: 
  // https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/StoreKitGuide/Chapters/Subscriptions.html
  console.log(resp);

  return resp;
};
