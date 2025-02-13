const respondJSON = (request, response, status, object) => {
  const content = JSON.stringify(object);

  response.writeHead(status, {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(content, 'utf8'),
  });

  response.write(content);
  response.end();
};

const success = (request, response) => {
  // message to send
  const responseJSON = {
    message: 'This is a successful response',
  };

  // send our json with a success status code
  respondJSON(request, response, 200, responseJSON);
};

const notFound = (request, response) => {
  // error message with a description and consistent error id
  const responseJSON = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };

  // return our json with a 404 not found error code
  respondJSON(request, response, 404, responseJSON);
};

module.exports = {
  success,
  notFound,
};
