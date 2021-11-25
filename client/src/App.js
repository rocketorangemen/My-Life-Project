import React from "react";
import './App.css';
// import body from './pages/components/body/index.html';

function App() {
  // data const not being used
  const [setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  }, []);
  
  
  return (
    <div className="App">
      <text>index.html here </text>
    </div>
  );
}

export default App;
