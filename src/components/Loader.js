import React from 'react';
import { ActivityIndicator, Modal } from 'react-native';
import styled from 'styled-components/native';

import { useSelector } from 'react-redux';
import COLORS from '../config/colors';

const Loader = () => {
  const { isLoading } = useSelector(({ books }) => books);

  return (
    <Modal transparent={true} animationType='fade' visible={isLoading}>
      <StyledLoadingContainer>
        <ActivityIndicator size='large' color={COLORS.primary}></ActivityIndicator>
      </StyledLoadingContainer>
    </Modal>
  );
};

const StyledLoadingContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

export default Loader;
