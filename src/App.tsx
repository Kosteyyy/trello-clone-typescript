import React from 'react';
import logo from './logo.svg';
import { Column } from "./Column";
import { Card } from "./Card";
import { AppContainer } from "./styles";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./AppStateContext";



const App = () => {
  const {state, dispatch} = useAppState();

  //temporary function to console.log new task
  const tempConsoleFunction = (text:string) => {
    console.log(text);
  };

  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column id={list.id} text={list.text} key={list.id} index={i}/>
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={text => dispatch({ type: "ADD_LIST", payload: text })} 
      />
    </AppContainer>
  )
}

export default App;
