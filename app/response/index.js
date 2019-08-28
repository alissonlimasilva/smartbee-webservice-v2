exports.responseError = function(message, status = "404") {
  return {
    message,
    status
  };
};

exports.responseSuccess = function(message, data, status = "200") {
  return { message, data, status };
};

exports.responseAuth = function(token, user, expires) {
  return { token, user, expires };
};
