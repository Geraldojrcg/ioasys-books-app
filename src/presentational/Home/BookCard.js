import React, { memo } from 'react';
import styled from 'styled-components/native';
import { string, number, shape, arrayOf } from 'prop-types';

import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import useStrings from '@/hooks/useStrings';

import { SELECT_BOOK } from '@/store/slices/bookSlice';

const BookCard = ({ item }) => {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const { t } = useStrings('book');

  const { imageUrl, title, authors, pageCount, publisher, published } = item;

  return (
    <StyledCard
      onPress={() => {
        dispatch(SELECT_BOOK({ book: item }));
        navigation.navigate('Book');
      }}
    >
      <StyledImage source={{ uri: imageUrl }} />
      <StyledColumn>
        <StyledDetails>
          <StyledTitle>{title}</StyledTitle>
          <StyledAuthors>{authors.join(', ')}</StyledAuthors>
        </StyledDetails>
        <StyledDetails>
          <StyledInfo>
            {pageCount} {t('pages')}
          </StyledInfo>
          <StyledInfo>
            {t('publisher')} {publisher}
          </StyledInfo>
          <StyledInfo>
            {t('publishedAt')} {published}
          </StyledInfo>
        </StyledDetails>
      </StyledColumn>
    </StyledCard>
  );
};

const StyledCard = styled.TouchableOpacity`
  height: 240px;
  width: 100%;
  flex-direction: row;
  margin-bottom: 15px;
  padding: 19px 16px;
  background-color: ${({ theme: { colors } }) => colors.white};
  box-shadow: ${({ theme: { colors } }) => `0px 6px 24px ${colors.boxShadow}`};
  elevation: 6;
  border-radius: 4px;
`;

const StyledImage = styled.Image`
  width: 35%;
  height: 100%;
`;

const StyledColumn = styled.View`
  width: 100%;
  flex-direction: column;
  padding-horizontal: 16px;
  justify-content: space-between;
`;

const StyledDetails = styled.View`
  width: 65%;
`;

const StyledTitle = styled.Text`
  font-family: 'Heebo-Regular';
  font-size: 20px;
  color: ${({ theme: { colors } }) => colors.black};
`;

const StyledAuthors = styled.Text`
  font-family: 'Heebo-Regular';
  font-size: 18px;
  color: ${({ theme: { colors } }) => colors.primary};
`;

const StyledInfo = styled.Text`
  font-family: 'Heebo-Regular';
  font-size: 16px;
  color: ${({ theme: { colors } }) => colors.grayText};
`;

BookCard.propTypes = {
  item: shape({
    imageUrl: string.isRequired,
    title: string.isRequired,
    authors: arrayOf(string),
    pageCount: number.isRequired,
    publisher: string.isRequired,
    published: number.isRequired
  }).isRequired
};

export default memo(BookCard);
