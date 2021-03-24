import { ToastContainer } from 'react-toastify';

import Form from './components/form';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Form />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
