import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pet.module.css';

const Pet = ({ pet, handleGoback }) => (
  <div className={styles.PetWrapper}>
    <button
      type="button"
      onClick={handleGoback}
      className={styles.returnButton}
    >
      Return
    </button>
    <h3>All about {pet.name}</h3>
    <div className={styles.stats}>
      <div className={styles.statsItem}>
        <img src={pet.image} alt="pet" />
      </div>

      <div className={styles.statsItem}>
        <p>Age: {pet.age}</p>
        <p>Gender: {pet.gender}</p>
        <p>Color: {pet.color}</p>
        <p>Breed: {pet.breed}</p>
      </div>
    </div>
    <p className={styles.description}>{pet.description}</p>
  </div>
);

Pet.propTypes = {
  pet: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  handleGoback: PropTypes.func.isRequired,
};

export default Pet;
