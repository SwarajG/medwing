import { baseUrl, headers, methods } from './enums';

const getAllLocations = () => fetch(`${baseUrl}/locations`);

const createLocation = location => fetch(`${baseUrl}/locations`, {
  method: methods.POST,
  ...headers,
  body: JSON.stringify(location)
});

const editLocation = location => fetch(`${baseUrl}/locations`, {
  method: methods.PUT,
  ...headers,
  body: JSON.stringify(location)
});

const deleteLocation = locationId => fetch(`${baseUrl}/locations/${locationId}`);

export {
  getAllLocations,
  createLocation,
  editLocation,
  deleteLocation
}