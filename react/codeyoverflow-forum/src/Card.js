import React from 'react';
import Header from './Header'; // Импорт компонента Header
import Body from './Body';     // Импорт компонента Body

function Card(props) {
  return (
   <>
    <Header profileImg = {props.commentObject.profileImg} username = {props.commentObject.username}/>
    <Body comment = {props.commentObject.comment}/>
   </>
  );
}

export default Card;