import styled, { css } from "styled-components";

const defaultStyle = css`
  background-color: #ffffff;
`;

const primaryStyle = css`
  background-color: #009dff;
  color: #ffffff;
  :hover {
    background-color: #4cbaff;
  }
`;

const transparentStyle = css`
  background-color: rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div<{ type: string }>`
  button {
    min-width: 120px;
    padding: 12px;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    white-space: nowrap;

    ${props => {
      switch (props.type) {
        case "primary":
          return primaryStyle;
          break;
        case "transprent":
          return transparentStyle;
          break;
        default:
          return defaultStyle;
      }
    }};
  }
`;

export default Wrapper;
