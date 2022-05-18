import CatsList from './components/Cats/CatList.jsx';
import usePets from './hooks/usePets.js';
import ToDoBoard from './screens/ToDoBoard.jsx';


function App() {
  const { cats, dogs, loading } = usePets();

  console.log({cats, dogs, loading});

  return (
    <div className='app-container'>
      {/* <CatsList cats={cats} /> */}
      <ToDoBoard/>
    </div>
  )
}

export default App
