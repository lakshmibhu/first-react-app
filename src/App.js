
      import React from 'react';
      import './App.css';
      import Typewiter from "typewriter-effect";

      function App(){
        return(
          <div className="App">
          <Typewiter
          onInit={(typewriter) => {
            typewriter
            .typeString("THANK YOU")
            .pauseFor(2000)
            .deleteAll()
            .typeString("Vist Again")
            .start();

          }}
          />
          </div>
        );
        
        }
        export default App;
      