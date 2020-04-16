import React from 'react';
import { Container, Row, Label, Value } from './GenericDetails';

const Crew = ({ crew }) => {
  const relevantJobs = [
    'Director',
    'Writer',
    'Screenplay',
    'Producer',
    'Director of Photography',
    'Cinematography',
    'Editor',
    'Casting',
  ];
  const getRelevantCrew = role => {
    return crew.filter(person => role === person.job);
  };
  const getRoleTitle = (role, index) => {
    if (index !== 0) return '';
    if (role === 'Director of Photography') return 'Cinematography';
    return role;
  };
  return (
    <Container>
      {relevantJobs.map((job, jobIndex) => {
        return getRelevantCrew(job).map((person, index) => (
          <Row key={person.id} first={jobIndex !== 0 && index === 0}>
            <Label>{getRoleTitle(person.job, index)}</Label>
            <Value>{person.name}</Value>
          </Row>
        ));
      })}
    </Container>
  );
};

export default Crew;
