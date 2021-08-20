import Content from './components/content/content';
import Header from './components/header/header';
import { printName } from './compulsory_task/print_name_function';
import {useEffect} from 'react'

function App() {

  useEffect(() => {
   printName();
  }, [])

  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

export default App;
