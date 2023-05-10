import styled from 'styled-components';

export const View = styled.div`
  padding: 20px;
  background-color: ${props => props.backgroundColor || '#ffffff'};
  width: ${props => props.width || 'auto'};

`;