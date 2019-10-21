import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pet from '../../components/Pet/Pet';
import petsData from '../../pets.json';

class PetPage extends Component {
  state = {
    pet: null,
  };

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;

    this.setState({ pet: petsData.find(pet => pet.id === id) });
  }

  handleGoback = () => {
    const { history } = this.props;

    history.push('/pets');
  };

  render() {
    const { pet } = this.state;
    return <>{pet && <Pet pet={pet} handleGoback={this.handleGoback} />}</>;
  }
}

PetPage.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default PetPage;
