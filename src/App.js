import { ListaTarefas } from "./components/ListaTarefas";
import ListRemoved from "./components/ListRemoved";
import { useState } from "react";

import { GlobalStyle } from "./GlobalStyle";


function App() {

  const [removed, setRemoved] = useState(["Luan","Moura"]);


  return (
    <div>
      <GlobalStyle />
     <ListaTarefas removed={removed} setRemoved={setRemoved}/>
     <ListRemoved removed={removed} setRemoved={setRemoved}/>
    
    </div>
  );
}

export default App;
