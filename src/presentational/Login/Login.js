import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';

import { Logo } from '@/components';

import background from '@/assets/background.png';

import useStrings from '@/hooks/useStrings';

import { LOGIN } from '@/store/slices/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const { t } = useStrings('login');
  const { error } = useSelector(({ user: userReducer }) => userReducer);

  const [email, setEmail] = useState('desafio@ioasys.com.br');
  const [password, setPassword] = useState('12341234');

  const onPressLogin = () => {
    dispatch(LOGIN({ email, password }));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <StyledBackground source={background}>
        <Logo />
        <StyledView>
          <StyledInputTitle>{t('email')}</StyledInputTitle>
          <StyledTextInput keyboardType='email-address' onChangeText={v => setEmail(v)} />
        </StyledView>
        <StyledView>
          <StyledRow>
            <StyledColumn>
              <StyledInputTitle>{t('password')}</StyledInputTitle>
              <StyledTextInput secureTextEntry onChangeText={v => setPassword(v)} />
            </StyledColumn>
            <StyledLogInButton onPress={onPressLogin}>
              <StyledText>{t('login')}</StyledText>
            </StyledLogInButton>
          </StyledRow>
        </StyledView>
        {error ? (
          <StyledRow>
            <StyledErrorView>
              <StyledErrorMessage>{error.errors.message}</StyledErrorMessage>
            </StyledErrorView>
          </StyledRow>
        ) : null}
      </StyledBackground>
    </KeyboardAvoidingView>
  );
};

const StyledBackground = styled.ImageBackground`
  padding: 0px 15px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StyledTextInput = styled.TextInput`
  height: 24px;
  line-height: 0px;
  margin-top: 5px;
  padding: 0px;
  color: ${({ theme: { colors } }) => colors.white};
`;

const StyledView = styled.View`
  width: 100%;
  margin-bottom: 15px;
  border-radius: 4px;
  padding: 8px 16px;
  background-color: ${({ theme: { colors } }) => colors.inputBackground};
`;

const StyledInputTitle = styled.Text`
  color: ${({ theme: { colors } }) => colors.white};
  opacity: 0.5;
`;

const StyledRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledColumn = styled.View`
  width: 50%;
  flex-direction: column;
`;

const StyledLogInButton = styled.TouchableOpacity`
  width: 85px;
  height: 36px;
  align-self: center;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  border-radius: 44px;
  background-color: ${({ theme: { colors } }) => colors.white};
`;

const StyledText = styled.Text`
  align-self: center;
  font-size: 16px;
  font-family: 'Heebo-Bold';
  color: ${({ theme: { colors } }) => colors.primary};
`;

const StyledErrorView = styled.View`
  width: 70%;
  margin-top: 5%;
  padding: 20px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.4);
`;

const StyledErrorMessage = styled.Text`
  font-size: 16px;
  line-height: 20px;
  font-family: 'Heebo-Bold';
  color: ${({ theme: { colors } }) => colors.white};
`;

export default Login;
