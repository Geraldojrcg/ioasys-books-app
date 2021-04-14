import React, { useEffect } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Logo } from '@/components';
import BookCard from './BookCard';

import useStrings from '@/hooks/useStrings';

import { GET_BOOKS } from '@/store/slices/bookSlice';
import { LOGOUT } from '@/store/slices/userSlice';

const Home = () => {
  const dispatch = useDispatch();

  const { t } = useStrings('home');

  const { booksList, page, totalPages } = useSelector(({ books }) => books);

  useEffect(() => {
    dispatch(GET_BOOKS({ page }));
  }, [dispatch]);

  function getBooksPerPage(page) {
    if (page > 0) {
      dispatch(GET_BOOKS({ page }));
    }
  }

  return (
    <>
      <StyledHeaderContainer>
        <StyledHeaderRow>
          <Logo color='black' />
        </StyledHeaderRow>
        <StyledHeaderRow>
          <StyledLogoutButton onPress={() => dispatch(LOGOUT())}>
            <Icon name='logout' size={20}></Icon>
          </StyledLogoutButton>
        </StyledHeaderRow>
      </StyledHeaderContainer>
      <StyledContainer
        data={booksList}
        renderItem={({ item }) => <BookCard item={item} />}
        ListFooterComponent={() => (
          <StyledFooterContainer>
            {booksList.length ? (
              <>
                <StyledControlButtons onPress={() => getBooksPerPage(page - 1)}>
                  <Icon name='chevron-left' size={20}></Icon>
                </StyledControlButtons>
                <Text>
                  {t('pages')} <StyledTextBold>{page}</StyledTextBold> {t('of')}{' '}
                  <StyledTextBold>{totalPages}</StyledTextBold>
                </Text>
                <StyledControlButtons onPress={() => getBooksPerPage(page + 1)}>
                  <Icon name='chevron-right' size={20}></Icon>
                </StyledControlButtons>
              </>
            ) : null}
          </StyledFooterContainer>
        )}
      />
    </>
  );
};

const StyledContainer = styled.FlatList.attrs(() => ({
  contentContainerStyle: {
    paddingHorizontal: 15
  }
}))`
  flex: 1;
  background-color: ${({ theme: { colors } }) => colors.background};
`;

const StyledHeaderContainer = styled.View`
  flex-direction: row;
  padding-top: 30px;
  padding-horizontal: 15px;
`;

const StyledHeaderRow = styled.View`
  width: 50%;
  flex-direction: row;
`;

const StyledLogoutButton = styled.TouchableOpacity`
  position: absolute;
  right: 0%;
  align-self: flex-start;
  padding: 10px;
  margin-top: 10px;
  border: 0.5px solid gray;
  border-radius: 20px;
`;

const StyledFooterContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 50px;
  margin-horizontal: 15%;
`;

const StyledTextBold = styled.Text`
  font-weight: bold;
`;

const StyledControlButtons = styled.TouchableOpacity`
  padding: 10px;
  border: 0.5px solid gray;
  border-radius: 20px;
`;

export default Home;
