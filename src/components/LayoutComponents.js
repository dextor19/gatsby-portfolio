import styled from 'styled-components';

export const MainWrapper = styled.div`
  margin: 0 auto;
  max-width: ${(props) => (props.padded ? '1200px' : 'none')};
  padding: ${(props) => (props.padded ? '0 13rem' : '0')};
  @media screen and (max-width: 768px) {
    padding: 0;
    max-width: 100%;
  }
`;

export const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 0px 1.0875rem;
  padding-top: 0;
`;
export const Row = styled.div`
  display: flex;
  flex: ${(props) => (props.flex ? props.flex : 'initial')};
  flex-direction: row;
  flex-wrap: ${(props) => (props.wrap ? props.wrap : 'initial')};
  align-content: ${(props) => (props.alignContent ? props.alignContent : 'initial')};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'initial')};
  @media screen and (max-width: 768px) {
    flex-direction: ${(props) => (props.mobile ? 'column' : 'row')};
  }
`;

export const Column = styled.div`
  flex: ${(props) => (props.flex ? props.flex : 'initial')};
  flex-direction: column;
  align-content: ${(props) => (props.alignContent ? props.alignContent : 'initial')};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'initial')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  width: ${(props) => (props.width ? props.width : 'auto')};
`;
