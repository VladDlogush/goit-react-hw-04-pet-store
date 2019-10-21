import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './PetsList.module.css';

const PetsList = ({ pets = [], match }) => (
  <ul className={styles.PetsList}>
    {pets.map(pet => (
      <li key={pet.id} className={styles.PetsListItem}>
        <Link
          to={{
            pathname: `${match.path}/${pet.id}`,
          }}
          className={styles.link}
        >
          <img src={pet.image} alt="pet" className={styles.ItemImage} />
          <h5 className={styles.ItemHeadline}>{pet.name}</h5>
        </Link>
      </li>
    ))}
  </ul>
);

PetsList.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(PetsList);
