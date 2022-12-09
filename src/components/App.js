import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const element = <p>I am learning React. My life is getting better. </p>
  return (
   root.render(element)
  )
}


export default App;
