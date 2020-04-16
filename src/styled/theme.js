import { css } from 'styled-components';

export const theme = {
  col: {
    accent5: 'crimson',
    accent9: '#ce97a2',

    sec5: '#004c99',
    prim1: '#01141d',
    prim2: '#0a1f29',
    prim3: '#0e2c3a',
    prim5: '#00699e',
    prim7: '#5da6cb',
    prim9: '#c7d4db',
    gray1: '#090a0b',
    gray3: '#2e3133',
    gray5: '#33444d',
    gray7: '#9bb2c0',
    gray9: '#f2f2f3',
  },
  fontSize: {
    responsive: (minWidth, maxWidth, minSize, maxSize) =>
      css`
        font-size: calc(
          ${minSize}px + (${maxSize} - ${minSize}) *
            ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth}))
        );
      `,
    xxs: css`
      font-size: 0.75rem;
    `,
    xs: css`
      font-size: 0.8125rem;
    `,
    s: css`
      font-size: 0.875rem;
    `,
    m: css`
      font-size: 1rem;
    `,
    l: css`
      font-size: 1.125rem;
    `,
    xl: css`
      font-size: 1.25rem;
    `,
    xxl: css`
      font-size: 1.5rem;
    `,
    xxxl: css`
      font-size: 1.875rem;
    `,
  },
};
