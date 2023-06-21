import React, { useState } from "react";
import { ListaContainer, Tarefa } from "./styled.jsx";




export default function ListRemoved(props) {
  const {removed, setRemoved} =props

  return (
    <ListaContainer>
      <ul>
        {removed.map((tarefa, index) => {
          return (
            <Tarefa key={index}>
              <p>
                <strike>{tarefa}</strike>
              </p>
            </Tarefa>
          );
        })}
      </ul>
    </ListaContainer>
  );
}
