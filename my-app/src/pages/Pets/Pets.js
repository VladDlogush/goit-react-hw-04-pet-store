import React, { Component } from 'react';
import petsData from '../../pets.json';
import PetsList from '../../components/PetsList/PetsList';
import styles from './Pets.module.css';

class Pets extends Component {
  state = {
    pets: [],
  };

  componentDidMount() {
    this.setState({ pets: petsData });
  }

  render() {
    const { pets } = this.state;
    return (
      <div className={styles.PetsWrapper}>
        <h3 className={styles.headline}>Available pets</h3>
        <PetsList pets={pets} />
      </div>
    );
  }
}

export default Pets;
