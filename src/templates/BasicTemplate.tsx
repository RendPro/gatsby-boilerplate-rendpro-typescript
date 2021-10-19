import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import { WEBSITE_TITLE } from "@config/main";
import GlobalStyles from "@theme/GlobalStyles";
import { theme } from "@theme/theme";

const BasicTemplate: FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Helmet>
        <title>{WEBSITE_TITLE}</title>
      </Helmet>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default BasicTemplate;
