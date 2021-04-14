import React from 'react';
import { ThemeProvider } from 'styled-components';
import { node } from 'prop-types';

import COLORS from './colors';

const theme = {
  colors: {
    ...COLORS
  }
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

Theme.propTypes = {
  children: node.isRequired
};

export default Theme;
