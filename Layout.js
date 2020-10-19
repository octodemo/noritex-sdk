import styled from "styled-components";

export const Box = styled.div`
  background-color: white;
  border-radius: 6px;
  box-shadow: ${props => props.shadowless ? "" : "0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02)"};
  color: #4a4a4a;
  display: block;
  padding: 2rem;
`;

export const Container = styled.div`  
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;

  @media screen and (min-width: 1024px) {
    max-width: 960px;
  }

  @media screen and (min-width: 1216px) {
    max-width: 1152px;
  }

  @media screen and (min-width: 1408px) {
    max-width: 1344px;
  }

  ${props => props.isFluid ? 'max-width: inherit !important; padding: 0px 10px !important;' : ''}
`;

export const Section = styled.div`  
  padding: 3.6rem 10px;
  @media (max-width: 768px) {
    padding: 18px 5px;
  }
`;

export const Row = styled.div`
  display: block;
  & + & {
    border-top: solid 1px #e3e3e3;
    margin-top: 50px;
    padding-top: 50px;
    @media (max-width: 768px) {
      margin-top: 20px;
      padding-top: 20px;
    }
  }
`;

export const Column = styled.div`
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 1.2rem;
  flex: ${props => props.isNarrow ? "none" : ""};
`;

export const Columns = styled.div`
  margin-left: -1.2rem;
  margin-right: -1.2rem;
  margin-top: -1.2rem;

  :last-child {
    margin-bottom: -1.2rem;
  }

  :not(:last-child) {
    margin-bottom: calc(1.5rem - 1.2rem);
  }

  @media screen and (min-width: 769px), print {
    display: ${props => props.isDesktop ? "block" : "flex"};
  }
`;

export const Content = styled.div`
  padding: 30px 100px;
  min-height: 400px;
  @media (max-width: 1200px) {
    padding: 0;
  }
`;


export const Title = styled.h1`
  color: #363636;
  font-weight: 600;
  line-height: 1.125;
  margin-bottom: 20px;
  word-break: break-word;
  span {
    font-weight: inherit;
  }

  ${(props) => {
      if (props.size == "1") {
          return `
      font-size: 4.8rem;
    `;
      } else if (props.size == "2") {
          return `
      font-size: 4rem;
    `;
      } else if (props.size == "3") {
          return `
      font-size: 3.2rem;
    `;
      } else if (props.size == "4") {
          return `
      font-size: 2.4rem;
    `;
      } else if (props.size == "5") {
          return `
      font-size: 2rem;
    `;
      } else if (props.size == "6") {
          return `
      font-size: 1.6rem;
    `;
      } else if (props.size == "7") {
          return `
      font-size: 1.2rem;
    `;
      } else {
          return `
      font-size: 3.2rem;
    `;
      }
  }}
`;

export const Subtitle = styled(Title)`
  color: #4a4a4a;
  font-weight: 400;
  line-height: 1.25;
  font-size: ${props => props.size ? "" : "2rem"};

  &:not(:last-child) {
    margin-bottom: 2.4rem;
  }

  svg {
    width: 16px;
    height: 16px;
    display: inline-block;
    vertical-align: middle;
    color: #b7b7b7;
    margin-top: -4px;
    margin-right: 5px;
  }
`;

export const Heading = styled.div`
  padding-bottom: 20px;
  h2 {
    margin-bottom: 10px;
    text-transform: uppercase;
    font-size: 22px;
    color: #484848;
    position: relative;
    padding-left: 15px;
    :before {
      content: '';
      width: 10px;
      height: 10px;
      background-color: #112c55;
      position: absolute;
      left: 0;
      top: 50%;
      margin-top: -5px;
    }
  }
  h3 {
    font-size: 22px;
    color: #484848;
    padding-bottom: 10px;
    margin-bottom: 10px;
    position: relative;
    :before {
      content: '';
      width: 50px;
      height: 1px;
      background-color: #112c55;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  p {
    font-size: 15px;
    line-height: 22px;
  }
  h2, h3, p {
    width: 90%;
    max-width: 600px;
  }

  ${props => {
    if (props.isCentered) {
      return `
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        h3:before {
          left: 50%;
          margin-left: -25px;
        }
      `;
    }
  }}

  @media (max-width: 768px) {
    font-size: 16px;
    p {
      font-size: 13px;
      line-height: 18px;
    }
    h3 {
      font-size: 16px;
    }
  }
`;

export const BlankState = styled.div`
  > div {
    border: dashed 1px #e3e3e3;
    padding: 10%;
    border-radius: 3px;
  }
  text-align: center;
  svg {
    color: #eee;
    width: 60px;
  }
  h3 {
    padding: 20px 0 10px;
    font-size: 15px;
    font-weight: bold;
  }
  p {
    color: #7b7b7b;
    font-size: 14px;
  }
  a {
    color: royalblue;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const LevelLeft = styled.div`
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-start;
`;
export const LevelRight = styled(LevelLeft)`
  justify-content: flex-end;
`;
export const LevelItem = styled.div`
  align-items: center;
  display: flex;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;

  h1, h2, h3, h4, h5 {
    margin-bottom: 0;
  }

`;

export const Level = styled.div`
  align-items: center;
  justify-content: space-between;
  ${LevelItem} + ${LevelItem} {
    margin-left: 1.2rem;
  }
  ${props => {
    if(props.isMobile) {
      return `
        display: flex;

        ${LevelRight},
        ${LevelRight} {
          display: flex;
        }

        ${LevelLeft} + ${LevelRight} {
          margin-top: 0;
        }

        ${LevelItem} + ${LevelItem} {
          margin-bottom: 0;
        }

        ${LevelItem}:not(.is-narrow) {
          flex-grow: 1;
        }
      `
    } else {
      return `
        @media screen and (max-width: 768px) {
          ${LevelLeft} + ${LevelRight} {
            margin-top: 1.5rem;
          }
          ${LevelItem} + ${LevelItem} {
            margin-top: 1.2rem;
          }
        }
      `
    }
  }}

  img {
    display: inline-block;
    vertical-align: top;
  }


  @media screen and (min-width: 769px), print {
    display: flex;
    > ${LevelItem}:not(.is-narrow) {
      flex-grow: 1;
    }
  }

  @media screen and (min-width: 769px), print {
    ${LevelItem} + ${LevelItem} {
      margin-left: 1.2rem;
    }
  }

  @media screen and (min-width: 769px), print {
    ${LevelLeft} {
      display: flex;
    }
  }

  ${LevelRight} {
    align-items: center;
    justify-content: flex-end;
  }

  @media screen and (min-width: 769px), print {
    ${LevelRight} {
      display: flex;
    }
  }
`;

export const SimpleCard = styled.a`
  display: inline-block;
  vertical-align: top;
  font-size: 16px;
  width: 99%;
  margin: 0.5%;
  figure {
    position: relative;
    padding-top: 65%;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  h3 {
    display: block;
    text-align: center;
    margin: 0;
    padding: 0;
    padding-top: 10px;
    font-weight: bold;
    color: #464646;
  }
  &:hover h3 {
    color: #112c55;
  }
`;