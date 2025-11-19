import './App.css';
import UsersList from './components/UsersList';

function App() {

  return (
    <>

      <h1>Vite + React + Redux Toolkit</h1>
      <UsersList /> {/* traemos la lista de los usuarios ---> tener cuidado con la importacion aveces no se hace automatico */}
    </>
  )
}

export default App
