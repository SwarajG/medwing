import React from 'react';
import Button from '../../components/Button';
import s from './styles';

function AddLocation(props) {
  return (
    <div className={s.buttonWrapper}>
      <Button onClick={props.onClick}>
        Add me
      </Button>
    </div>
  );
}

export default AddLocation;