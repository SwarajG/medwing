import { css } from 'emotion';

const buttonClass = filled => css`
  ${filled ? 'background-color: #03A9F4' : ''};
  border-radius: 3px;
  padding: 5px 10px;
`;

export default {
  buttonClass
};