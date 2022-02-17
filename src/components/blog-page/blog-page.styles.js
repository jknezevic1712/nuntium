import styled from "styled-components";

export const BlogPageInnerContainer = styled.div`
  position: relative;
  width: 85%;
  box-shadow: 0 0 5px 1px #888888;
  border-radius: 15px;
  margin: 0 auto;
  padding: 0.5em 4em 0.5em 4em;

  &:before {
    border-radius: 15px;
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    background-image: url(${(props) => props.bg});
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
  }
`;

export const BlogPageContent = styled.div`
  position: relative;
`;
export const BlogPageTitle = styled.div`
  margin-bottom: 5em;

  h2 {
    font-family: "Dancing Script", cursive;
    font-size: 3.5rem;
  }

  span {
    font-family: "Lobster", cursive;
    font-size: 2em;
    font-weight: normal;
  }
`;

export const BlogPagePgs = styled.div`
  line-height: 2;
`;

export const BlogPagePg = styled.div``;

export const BlogPageImg = styled.figure`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 600px;
  width: 1024px;
  padding: 2em 0 5em 0;

  img {
    height: 600px;
    width: 1024px;
    box-shadow: 0 0 5px 1px #888888;
    border-radius: 15px;
  }

  figcaption {
    margin-top: 0.5em;
    font-family: "Lobster", cursive;
    font-size: 1.5rem;
    font-weight: normal;
  }
`;
