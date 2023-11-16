import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Dashboard = (props) => {
    const { loggedIn } = props
    const [ devices, setDevices ] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
      if (loggedIn == true) {
        fetchDevices()
        console.log(devices)
      } else {
        navigate("/")
      }
    }, [])
    
    const onButtonClick = () => {
      navigate("/")
    }

    const notify = () => {
      fetch("http://35.201.2.209:8000/notify", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({name: "Shealtiel Canon", email: "shealtielccanon@gmail.com", repoUrl: "url", message: "Had fun with the task, a bit challenging"})
      })
      .then(r => r.json())
    }

    const fetchDevices = async () => {
      await fetch("http://35.201.2.209:8000/devices", {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          },
      })
      .then(r => r.json())
      .then(r => {
        setDevices(r.devices.length)
      })
    }

    return <div className="mainContainer">        
        {(loggedIn ? 
          <div className={"titleContainer"}>
            <div>Welcome!</div>
          </div> : <div/>
        )}
        {(loggedIn ? 
          <div>
            This is the home page.
          </div> : <div/>
        )}
        <div className={"buttonContainer"}>          
            
            <div className='row'>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={loggedIn ? "Log out" : "Log in"} />
              {( loggedIn ?
                <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={"Notify"} /> : <input></input>
              )}
            </div>
        </div>


    </div>
}

export default Dashboard