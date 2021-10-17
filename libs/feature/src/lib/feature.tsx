import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FeatureProps {}

const StyledFeature = styled.div`
  color: pink;
`;

export function Feature(props: FeatureProps) {
  return (
    <StyledFeature>
      <h1>Welcome to Feature!</h1>
    </StyledFeature>
  );
}

export default Feature;
