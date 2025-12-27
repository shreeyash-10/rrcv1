const getBackendBaseUrl = () =>
  process.env.API_BASE_URL ||
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  'http://localhost:5001';

export const proxyToBackend = async (req, res, path) => {
  const baseUrl = getBackendBaseUrl();
  const headers = {};

  if (req.headers.authorization) {
    headers.Authorization = req.headers.authorization;
  }
  if (req.headers['content-type']) {
    headers['Content-Type'] = req.headers['content-type'];
  } else {
    headers['Content-Type'] = 'application/json';
  }

  const options = {
    method: req.method,
    headers,
  };

  if (!['GET', 'HEAD'].includes(req.method)) {
    options.body = req.body ? JSON.stringify(req.body) : undefined;
  }

  const response = await fetch(`${baseUrl}${path}`, options);
  const text = await response.text();

  const contentType = response.headers.get('content-type');
  if (contentType) {
    res.setHeader('Content-Type', contentType);
  }

  return res.status(response.status).send(text);
};
