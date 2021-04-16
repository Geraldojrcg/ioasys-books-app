import React, { memo } from 'react';
import styled from 'styled-components/native';
import { string } from 'prop-types';

import useStrings from '@/hooks/useStrings';

const Logo = ({ color }) => {
  const { t } = useStrings('logo');

  return (
    <StyledTitleContainer>
      <StyledTitle color={color} fontType='ExtraBold'>
        {t('ioasys')}
      </StyledTitle>
      <StyledTitle color={color} size={35} top={6} fontType='ExtraLight'>
        {t('books')}
      </StyledTitle>
    </StyledTitleContainer>
  );
};

Logo.defaultProps = {
  color: 'white'
};

Logo.propTypes = {
  color: string
};

const StyledTitleContainer = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 45px;
`;

const StyledTitle = styled.Text`
  margin-right: 5%;
  margin-top: ${props => (props.top || 0) + 'px'};
  font-size: ${props => (props.size || 42) + 'px'};
  font-family: ${({ fontType = 'Regular' }) => `Heebo-${fontType}`};
  color: ${({ theme: { colors }, color }) => colors[color]};
`;

export default memo(Logo);
