function main({
  name
}) {
  var msg = 'you did not tell me who you are.';
  if (name) {
    msg = `Hello my name is ${name}!`
  }
  return {
    body: `<html><body><h1>${msg}</h1></body></html>`
  }
}