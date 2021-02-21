import React from 'react';
import styled from 'styled-components';

<<<<<<< HEAD
const posts = [{ id: 1 }, { id: 2 }, { id: 3 }];

export function MainContainer() {
	const postList = posts.map((post) => (
		<div key={posts.id}>asdf</div>
	));

  return (
    <Positioner>
      <MainWrapper>메인페이지입니다</MainWrapper>

      {postList}
=======
export function MainContainer() {
  return (
    <Positioner>
      <MainWrapper>메인페이지입니다</MainWrapper>
>>>>>>> 1effe184b7675380a59a569f0337845b14674f4f
    </Positioner>
  );
}

const Positioner = styled.div`
  height: 100vh;
`;

const MainWrapper = styled.div`
<<<<<<< HEAD
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
=======
  padding-top: 50%;
  position: absolute;
  right: 50%;
>>>>>>> 1effe184b7675380a59a569f0337845b14674f4f
`;
