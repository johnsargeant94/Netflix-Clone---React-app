import React from 'react';
import './App.css';
import Box from './components/Box';

const App = () => {
  return (
  <div>

    <h1>Frequently Asked Questions</h1>
    
    <br/>
      
        <Box question="What is Netflix?"/> 
        <Box question="How much does Netflix cost?"/> 
        <Box question="Where can I watch?"/> 
        <Box question="How do I cancel?"/> 
        <Box question="What can I watch on Netflix?"/> 
        <Box question="How does the free trail work?"/> 
    
    <input type="button" class="button" value="TRY 30 DAYS FREE >"/>
        
  </div>
  )
}

export default App;
