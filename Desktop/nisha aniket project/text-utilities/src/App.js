import Navbar from './Components/Navbar';
import Alert from './Components/Alerts';

import Form from './Components/Form';

import './App.css';

import React , {useState} from 'react'


function App() {


  const [mode , setMode] = useState('light')

  const [alert , setAlert] = useState(null);



  const showAlert = (message , type) =>{


    setAlert({
      msg: message,
      type:type
    })

    setTimeout( () =>{


      setAlert(null);
    }, 1900)
  }


 


  const toggleMode = () =>{
    if(mode === 'light') {
      setMode('dark')

      document.body.style.backgroundColor ='#042743';


      showAlert( "Dark Mode has been enabled", "success" )
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ='white' ;
      showAlert( "Light Mode has been enabled", "success" )


    }

  }
  return (
    <>


 <Navbar  mode={mode} toggleMode={toggleMode} />

 <Alert  alert={alert} />


< Form  heading="Enter your text"  mode={mode} showAlert={showAlert}/>


  


 </>



  
  );
}

export default App;
