const { json } = require('micro');

module.exports = async (req, res) => {
  const resp = await json(req);
  console.log(`${new Date().toLocaleString()} \n\n\n`);
  console.log(resp);
  console.log('\n\n\n');

  return resp;
};
