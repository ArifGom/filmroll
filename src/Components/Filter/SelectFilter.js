import styled, { css } from 'styled-components';

export const Select = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 90vw;
  padding: 5px;
`;

export const SelectItem = styled.span(
  ({ theme }) => css`
	${theme.fontSize.s}

	color: ${theme.col.prim9};
	cursor: pointer;
	font-weight: 500;
	letter-spacing: 1px;
	padding: 5px;
	
	&:hover {
		color: ${theme.col.gray9};
	}
`
);

export const SelectSeparator = styled.div(
  ({ theme }) => css`
    border-bottom: solid 1px ${theme.col.prim7};
    margin-bottom: 10px;
    padding-bottom: 10px;
    width: 100%;
  `
);
