import React from 'react';
import styled from 'styled-components/native';

import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Book = () => {
  const navigation = useNavigation();
  const { selectedBook } = useSelector(({ books }) => books);
  const {
    imageUrl,
    title,
    authors,
    pageCount,
    publisher,
    published,
    language,
    category,
    description,
    isbn10,
    isbn13
  } = selectedBook;
  return (
    <>
      <StyledHeadContainer>
        <StyledBackButton onPress={() => navigation.goBack()}>
          <Icon name='close' size={20}></Icon>
        </StyledBackButton>
      </StyledHeadContainer>
      <StyledContainer showsVerticalScrollIndicator={false}>
        <StyledImage source={{ uri: imageUrl }} />
        <StyledTitle ellipsizeMode='tail' numberOfLines={2}>
          {title}
        </StyledTitle>
        <StyledAuthors>{authors.join(', ')}</StyledAuthors>
        <StyledInfoContainer>
          <StyledSubtitle>Informações</StyledSubtitle>
          <StyledInfoRow>
            <StyledInfoLabel>Páginas</StyledInfoLabel>
            <StyledInfoText>{pageCount}</StyledInfoText>
          </StyledInfoRow>
          <StyledInfoRow>
            <StyledInfoLabel>Editora</StyledInfoLabel>
            <StyledInfoText>{publisher}</StyledInfoText>
          </StyledInfoRow>
          <StyledInfoRow>
            <StyledInfoLabel>Publicação</StyledInfoLabel>
            <StyledInfoText>{published}</StyledInfoText>
          </StyledInfoRow>
          <StyledInfoRow>
            <StyledInfoLabel>Idioma</StyledInfoLabel>
            <StyledInfoText>{language}</StyledInfoText>
          </StyledInfoRow>
          <StyledInfoRow>
            <StyledInfoLabel>Categoria</StyledInfoLabel>
            <StyledInfoText>{category}</StyledInfoText>
          </StyledInfoRow>
          <StyledInfoRow>
            <StyledInfoLabel>ISBN-10</StyledInfoLabel>
            <StyledInfoText>{isbn10}</StyledInfoText>
          </StyledInfoRow>
          <StyledInfoRow>
            <StyledInfoLabel>ISBN-13</StyledInfoLabel>
            <StyledInfoText>{isbn13}</StyledInfoText>
          </StyledInfoRow>
        </StyledInfoContainer>
        <StyledSubtitle>Resenha da Editora</StyledSubtitle>
        <StyledInfoText>{description}</StyledInfoText>
      </StyledContainer>
    </>
  );
};

const StyledHeadContainer = styled.View`
  margin-horizontal: 15px;
  margin-vertical: 15px;
`;

const StyledBackButton = styled.TouchableOpacity`
  align-self: flex-end;
  width: 40px;
  padding: 10px;
  border: 0.5px solid gray;
  border-radius: 30px;
`;

const StyledContainer = styled.ScrollView`
  margin-horizontal: 15%;
  margin-vertical: 10px;
`;

const StyledInfoContainer = styled.View`
  flex: 1;
  margin-vertical: 30px;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 300px;
`;

const StyledTitle = styled.Text`
  font-family: 'Heebo-Regular';
  font-weight: bold;
  font-size: 28px;
  line-height: 40px;
  color: ${({ theme: { colors } }) => colors.black};
`;

const StyledAuthors = styled.Text`
  font-family: 'Heebo-Regular';
  font-size: 14px;
  color: ${({ theme: { colors } }) => colors.primary};
`;

const StyledSubtitle = styled.Text`
  font-family: 'Heebo-Regular';
  font-weight: bold;
  font-size: 14px;
  line-height: 28px;
  text-transform: uppercase;
  color: ${({ theme: { colors } }) => colors.black};
`;

const StyledInfoRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const StyledInfoLabel = styled.Text`
  font-family: 'Heebo-Regular';
  font-weight: bold;
  font-size: 14px;
  line-height: 28px;
  color: ${({ theme: { colors } }) => colors.black};
`;

const StyledInfoText = styled.Text`
  font-family: 'Heebo-Regular';
  font-size: 14px;
  line-height: 28px;
  text-align: justify;
  color: ${({ theme: { colors } }) => colors.grayText};
`;

export default Book;
