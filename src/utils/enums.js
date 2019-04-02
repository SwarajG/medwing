const baseUrl = 'http://localhost:3000';

const headers = {
  headers: {
    'Content-Type': 'application/json'
  },
  credentials: 'include' 
};

const methods = {
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  GET: 'GET'
}

export {
  baseUrl,
  headers,
  methods
}