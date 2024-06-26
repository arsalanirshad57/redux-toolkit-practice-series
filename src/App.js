import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "./redux/slices/todo-slice/api-function";

function App() {

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  if (state.allTodos.isLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center ">
        <p className="font-bold text-lg">Loading....</p>
      </div>
    )
  }


  return (
    <div className="flex flex-col gap-10 justify-center items-center mt-5 ">
      <div>
        <button onClick={(e) => dispatch(getAllTodos())} className=" border rounded-md px-1 py-1.5 hover:bg-gray-50 transition-all duration-300" >Fetch Todos</button>      </div>
      <ul className="w-full self-start  ">
        {state?.allTodos && state.allTodos?.todos?.map((todo) =>
          <li className="text-base p-1">
            {todo?.userId}: 
             { todo?.title} ::::::::::::::
            {todo?.completed ? ' Yes' : ' No'} 
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;