import React, { Component } from 'react';
import Map from './Map';
import AddLocation from './AddLocation';
import LocationListing from './LocationListing';
import s from './styles';

export default class Main extends Component {
  render() {
    return (
      <div className={s.contentWrapper}>
        <div className={s.mapWrapper}>
          <Map />
        </div>
        <div className={s.listingWrapper}>
          <AddLocation />
          <LocationListing />
        </div>
      </div>
    );
  }
}