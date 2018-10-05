module.exports = { generateRandomId };

function generateRandomId(userContext, events, done) {
  const randomId = Math.floor(Math.random() * 1000000 + 9000000);
  userContext.vars.randomId = randomId;
  return done();
}
