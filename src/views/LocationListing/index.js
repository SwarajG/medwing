import React from 'react';
import Location from '../Location';

const LocationListing = ({ locations = [] }) => locations.map(location => (
  <Location location={location} />
));

export default LocationListing;