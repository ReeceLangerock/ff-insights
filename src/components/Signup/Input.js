import React from "react";
import styled from "styled-components";

export default function Input(props) {
  return <StyledInput {...props} />;
}

const StyledInput = styled.input`
  color: ${p => (p.color ? `var(--${p.color}-800)` : "var(--gray-800, gray)")};
  border: var(--border-s, 1px) solid ${p => (p.color ? `var(--${p.color}-800)` : "var(--gray-800, gray)")};
  border-radius: var(--border-radius-s, 5px);
  padding: var(--spacing-s, .5rem) var(--spacing-s, .5rem);
  font-size: var(--fontsize-m, 1rem);
  :focus {
    outline: none;
    ${p => {
      const hsl = getComputedStyle(document.body).getPropertyValue(`--blue-500`);

      let hsla = `${hsl.split(")")[0]}, .62)`;
      hsla = hsla.length > 6 ? hsla : "hsla(0, 0%, 0%, .62)";
      return `box-shadow: 0 0 3px 1px ${hsla}; border-color: ${hsla}`;
    }}
  }
`;
