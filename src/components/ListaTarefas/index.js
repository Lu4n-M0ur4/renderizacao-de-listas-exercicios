import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal,
} from "../ListRemoved/styled";
import bin from "../../assets/bin.png";

export function ListaTarefas({ removed, setRemoved }) {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    novaTarefa !== ""
      ? setLista([...lista, novaTarefa])
      : alert("Adicione uma tarefa");
    setNovaTarefa("");
  };

  const addComEnter = (e) => {
    if (e.key === "Enter") {
      adicionaTarefa();
    }
  };

  const removeTarefa = (tarefa, i) => {
    // alert(`Excluido tarefa ${tarefa} na posição ${i + 1}`);
    setLista(lista.filter((itens, index) => index !== i));
    
    
  };

  const ListRemoved = (tarefa) => {
    const newList = lista.filter((itens, index) => itens !== tarefa)
    setRemoved([...removed,newList]);
    console.log(removed);
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyDown={addComEnter}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton onClick={() =>{ removeTarefa(tarefa, index); ListRemoved()}}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal />
    </ListaTarefasContainer>
  );
}
