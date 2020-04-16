import React, { useState } from 'react';

import styled, { css } from 'styled-components';

const TabbedArea = ({ children }) => {
  const [activeHandle, setActiveHandle] = useState(children[0].props.handle);
  return (
    <Container>
      <TabContainer>
        {children.map(content => (
          <TabHandle
            active={activeHandle === content.props.handle}
            tabIndex={0}
            onClick={() => {
              setActiveHandle(content.props.handle);
            }}
            onKeyDown={e =>
              e.keyCode === 13 && setActiveHandle(content.props.handle)
            }
            key={content.props.handle}
          >
            {content.props.handle}
          </TabHandle>
        ))}
      </TabContainer>

      {children.map(content => (
        <ContentArea
          active={activeHandle === content.props.handle}
          key={content.props.handle}
        >
          {activeHandle === content.props.handle && content}
        </ContentArea>
      ))}
    </Container>
  );
};

export default TabbedArea;

const Container = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;
  width: 100%;
`;

const TabContainer = styled.div(
  ({ theme }) => css`
    align-items: stretch;
    border-bottom: 1px solid hsla(200, 20%, 50%, 30%);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  `
);

const TabHandle = styled.div(
  ({ theme, active }) => css`
    border-bottom: ${active ? '2px solid crimson' : 'none'};
    color: ${active ? 'hsl(200, 20%, 95%)' : 'hsl(200, 40%, 60%)'};
    cursor: pointer;

    ${theme.fontSize.m};
    text-shadow: ${active ? '0px 0px 1px white' : 'none'};
    margin-right: 20px;
    padding: 1px;
  `
);

const ContentArea = styled.div(
  ({ theme, active }) => css`
    display: ${active ? 'block' : 'none'};
    padding: 10px 0px;
  `
);
