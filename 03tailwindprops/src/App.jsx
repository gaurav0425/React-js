import './App.css'
import Card from './components/Card';

function App() {
  let myobj = {
    username:"gaurav0425",
    age : 21
  }

  let newarr = [1,2,3];

  return (
    <>
      <h1 className="bg-green-600 text-orange-400 p-4 rounded-2xl mb-5">
        Tailwind Test
      </h1>
      <Card name = "Gaurav" nickname = "Nick" someobj = {myobj} arr = {newarr}/>
      <Card name = "Golu" nickname = "Papa"/> 
    </>
  );
}

export default App;