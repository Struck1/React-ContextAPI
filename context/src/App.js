import Footer from './components/Footer';
import Form from './components/Form';
import List from './components/List';
import { DataProvider } from './components/DataProvider';

function App() {
  return (
    <DataProvider>
      <div className='App'>
        <h1>To do list</h1>
        <Form />
        <List />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
