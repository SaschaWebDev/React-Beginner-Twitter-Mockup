import React from 'react';
import Tweet from './Tweet';


function App() {
  return(
    <div className="app">
      <Tweet name="Sascha Majewsky" message="test tweet"/>
      <Tweet name="Max Mustermann" message="An average tweet"/>
      <Tweet name="John Snow" message="Winter is Coming"/>
      <Tweet name="Harry Potter" message="Lumos"/>
    </div>
  );
}

export default App;