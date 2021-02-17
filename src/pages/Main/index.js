import React, { useState } from 'react';
import styled from 'styled-components';
import { MainContainer } from '../../containers/Main';
import { Header, Footer, Modal } from '../../components';
import { HeaderButton } from '../../lib';
import Portal from '../../components/Portal';
import {Modal2} from '../../components/Main'

export function MainPage() {
  const [isShow, setIsShow] = useState(false);

  const handlePopup = () => {
    setIsShow(true);
  };
  const onConfirm = () => {
    console.log('확인');
    setIsShow(false);
  };
  const onCancel = () => {
    console.log('취소');
    setIsShow(false);
  };


  return (
    <>
      <Header>
        {/* <HeaderButton color="white" background="#00BFA5" >onclick={handlePopup} */}
        <HeaderButton color="white" background="#00BFA5" >
          로그인
        </HeaderButton>
        <HeaderButton color="black" background="lightgrey">
          회원가입
        </HeaderButton>
      </Header>
      <MainContainer />
      <Footer />

     <Portal>
     <Modal2
title="Login"
 confirmText="삭제"
 cancelText="취소"
  onConfirm={onConfirm}
   onCancel={onCancel}
   visible={isShow}
 >
   <div><p>email<input></input></p></div>
   <div><p>password<input></input></p></div>
</Modal2> 
</Portal>


    </>
  );
}

// {isShow &&(
//   <Modal2
//   visible={isShow}
//   closable={true}
//   maskClosable={true}
//   onClose={closeModal}>Hello</Modal2>
//  )}