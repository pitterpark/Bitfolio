
import React, { useContext, useState } from "react";
import { useEffect } from 'react';

import { useHistory } from 'react-router';
import styled from "styled-components";
import { SStyledBox , STitleText,  SGrayText, SSubTitleText, SSizedBox} from '../../Components/GlobalComponents';
import { UserContext } from '../../Provider/UserProvider';
import { getCryptoPricesList } from '../../Service/Apis';


export const FavoriteContainer = () => {
  const history = useHistory();
  const [prices, setPrices] = useState({});
  const { favorites , isLoggedIn} = useContext(UserContext);

  useEffect(() => {
    if (Object.keys(favorites).length !== 0) {
      getCryptoPricesList(Object.keys(favorites)).then((response) => {
    
        setPrices(response);
      });
    }
  }, [favorites])
  
 
  function routeDetails(id) {
    history.push({
      pathname: `/details/${id}`,
      state: {
        id: id,
      },
    });
  }
 
    return (
       <Wrapper>
        <STitleText>Favorites</STitleText>
        <SSizedBox height="16px" />
        <Container>
        <ScrollRow>
          {Object.keys(favorites).length !== 0 ?
              Object.keys(favorites).map((e, i) => (
                <span key={i} onClick={()=>routeDetails(e)}><ElementContainer>
                  <Logo src={favorites[e].imageUrl} />
                  <div>
                    <CryptoName>{favorites[e].fullName}</CryptoName>
                    <SSizedBox height="4px"/>
                {Object.keys(prices).includes(e)&&
                  <SGrayText>{`$${prices[e].usd}`}</SGrayText>}</div>
                </ElementContainer></span>
              ))
             : 
              <EmptyWapper>{ isLoggedIn ? "Add to favorites!" : "Login to use this feature!"}</EmptyWapper>
            }
          </ScrollRow>
          </Container></Wrapper>)
}
const Wrapper = styled.div`
 
`;

const CryptoName = styled(SSubTitleText)`

`;

const Container = styled.div`
position: relative;
width:100%;
`;

const ScrollRow = styled.div`
position: absolute;
width:100%;
display:flex;
overflow-x: scroll;
padding-bottom: 16px;
&::-webkit-scrollbar {
    width: 8px;
    border-radius: 6px;
    background: ${(props) => props.theme.colors.gray3};
  }
  &::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 6px;
  }
`;

const EmptyWapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height:13vh;
  margin : 24px;
  font-size : 1.6rem;
  font-weight: bold;
`;

const Logo = styled.img`
width:7.5vh;
border-radius:50px;
transition: width 300ms ease-out 100ms;

`;

const ElementContainer = styled(SStyledBox)`
align-items:space-around;
justify-content: space-between;
width:13vh;
height:13vh;
margin-right:32px;
padding:24px;


&:hover{
  background-color: grey;
  cursor: pointer
}
  &:hover ${SGrayText} {
    color: white;
  }
  &:hover ${Logo}{
  width:6.5vh;
}
`;
