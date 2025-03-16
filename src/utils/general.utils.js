export const errorFormatter = (error) => {
  const _errors = {};
  if (!error.success) {
    error.error.issues.forEach((issue) => {
      const _path = issue.path.join(".");
      if (!_errors[_path] && issue.message) {
        _errors[_path] = [issue.message];
      } else {
        _errors[_path].push(issue.message);
      }
    });
  }

  return _errors;
};
