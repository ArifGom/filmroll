import { Container, Label, Row, Value } from './GenericDetails';

import React from 'react';

const Details = ({
  genres,
  runtime,
  companies,
  countries,
  budget,
  revenue,
}) => {
  return (
    <Container>
      {genres.map((genre, index) => (
        <Row key={genre.id}>
          <Label>{index === 0 ? 'Genres' : ''}</Label>
          <Value>{genre.name}</Value>
        </Row>
      ))}
      <Row first={true}>
        <Label>Runtime</Label>
        <Value>{runtime} min</Value>
      </Row>
      {companies.map((company, index) => (
        <Row key={company.id} first={index === 0}>
          <Label>{index === 0 ? 'Studios' : ''}</Label>
          <Value>{company.name}</Value>
        </Row>
      ))}
      {countries.map((country, index) => (
        <Row key={country.iso_3166_1} first={index === 0}>
          <Label>{index === 0 ? 'Countries' : ''}</Label>
          <Value>{country.name}</Value>
        </Row>
      ))}
      <Row first={true}>
        <Label>Budget</Label>
        <Value>{(budget / 1000000).toFixed(1)} Million $ </Value>
      </Row>
      <Row first={true}>
        <Label>Revenue</Label>
        <Value>{(revenue / 1000000).toFixed(1)} Million $ </Value>
      </Row>
    </Container>
  );
};

export default Details;
