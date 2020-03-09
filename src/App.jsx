import React from 'react';
import Header from './components/header/Header';
import Headline from './components/headline/Headline';
import './styles.scss';


const App = () => (
  <div className="App">
    <Header />
    <section className="main">
      <Headline header="Posts" desc="Click the button to render posts!" />
    </section>
  </div>
);

export default App;