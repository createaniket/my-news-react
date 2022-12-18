import './App.css';
import React , {useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';





import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import LoadingBar from 'react-top-loading-bar'
 
const App = () =>  {
 

const [progress , setProgress] = useState(0)

 
    
    return  ( 

      <div>

      <Router>



      <LoadingBar
  color='#f11946'
  progress={progress}/>


      <Navbar />


        <Routes>
          <Route path="/"                           element={<News        setProgress={setProgress}    key="general" pageSize='8' country="in" category="general"/>}>  </Route>
          <Route path="/science"                    element={<News        setProgress={setProgress}     key="science" pageSize='8' country="in" category="science"/>}>  </Route>
          <Route path="/technology"                 element={<News        setProgress={setProgress}        key="technology" pageSize='8' country="in" category="technology"/>}>  </Route>
          <Route path="/sports"                    element={<News         setProgress={setProgress}     key="sports" pageSize='8' country="in" category="sports"/>}>  </Route>
          <Route path="/entertainment"             element={<News         setProgress={setProgress}           key="entertainment" pageSize='8' country="in" category="entertainment"/>}>  </Route>
          <Route path="/health"                    element={<News         setProgress={setProgress}    key="health" pageSize='8' country="in" category="health"/>}>  </Route>
          <Route path="/business"                    element={<News       setProgress={setProgress}     key="business" pageSize='8' country="in" category="business"/>}>  </Route>

          
        </Routes>




      </Router>
      
      </div>
   

    )
  
}

export default App;
