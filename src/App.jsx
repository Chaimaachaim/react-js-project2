import {useState} from "react";
function App() {
 const [show , setShow ]=useState(false);
  const [data , setData]=useState({
    name:"chaimaa",
    age :"18",
  });
  const [ bob , setBob]=useState(
    {
      name:" ",
      age:" ",

    }
  );
  return(
    <div className={show  }>
    <h1>{data.name}</h1>
    <h1>{data.age}</h1>
    <button onClick={()=>setShow(!show)}> {show ? "hide":"show"}</button>

    </div>
      )
};
export default App;