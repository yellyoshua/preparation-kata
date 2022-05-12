import CatsList from './components/Cats/CatDetails.jsx';
import usePets from './hooks/usePets.js';


function App() {
  const { cats, dogs, loading } = usePets();

  console.log({cats, dogs, loading});

  return (
    <div>
      <CatsList cats={cats} />
    </div>
  )
}

export default App
