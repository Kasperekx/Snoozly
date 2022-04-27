import React, { ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default Layout;
