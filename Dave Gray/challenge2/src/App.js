import Form from "./Form";
import Table from "./Table";
import List from "./List";
import { useState, useEffect } from "react";
import './App.css';

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com";

  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [fetchError,setFetchError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
    try {
      const response = await fetch(API_URL + `/${reqType}`);
      if (!response.ok) throw Error('Did not receive expected data');
      const items = await response.json();
      console.log(items)
      setItems(items);
      setFetchError(null);
    } catch(e) {
      setFetchError(e.message);
    } finally {
      setIsLoading(false);
    }
  }
  fetchItems();
}, [reqType])



  return (
    <div className="App">
      <Form
        reqType={reqType}
        setReqType={setReqType}  
      />
      <List items={items} />
      {/* <Table items={items} /> */}
    </div>
  );
}

export default App;
