import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
  const [userchoice,setuserchoice]=useState('rock')
  const [computerchoice,setcomputerchoice]=useState('rock')
  const [userpoints,setuserpoints]=useState(0)
  const [computerpoints,setcomputerpoints]=useState(0)
  const [roundresult,setroundresult]=useState(`Let's see`)
  const [result,setresult]=useState(`Let's see the result ! ! !`)
  const [gameover,setgameover]=useState(false)

  const choices=['rock','paper','scissor']

  const handleclick =(choice)=>{
    setuserchoice(choice)
    comptergeneration()
  }

  const comptergeneration = () =>{
    const randomchoice = choices[Math.floor(Math.random () * choices.length)]
    setcomputerchoice(randomchoice)
  }

  useEffect(()=>{
     const combo=userchoice+computerchoice
     if(userpoints<=4 && computerpoints <=4)
     {
      if(combo==='rockscissor' || combo==='paperrock' || combo==='scissorpaper')
      {
        const updateuserpoints=userpoints + 1
        setuserpoints(updateuserpoints)
        setroundresult('User Got The Point ..')
        if(updateuserpoints===5)
        {
          setgameover(true)
          setresult('User Wins The Match ! ! !')
        }
      }

      if (combo==='scissorrock' || combo==='rockpaper' || combo==='paperscissor')
      {
        const updatecomputerpoints= computerpoints +1
        setcomputerpoints(updatecomputerpoints)
        setroundresult('Computer Got the Point..')
        if(updatecomputerpoints===5)
        {
          setgameover(true)
          setresult('Computer Wins The Match ! ! !')
        }
      }
       
      if(combo==='rockrock' || combo==='paperpaper' || combo==='scissorscissor')
      {
        setroundresult('This Round Ties ...')
      }
     }
  },[computerchoice,userchoice])

  function functionreset()
  {
    window.location.reload();
  }
  return (
    <div className="App">
     <div className='container'>
     <h1 className='heading'>Rock Paper Scissors</h1>
      <div className='scores'>
        <h1 className='userscore'>User points :{userpoints}</h1>
        <h1 className='computerscore'>Computer Points :{computerpoints}</h1>
      </div>
      <div className='choiceimages'>
        <div className='choice-user'>
          <img src={`./images/${userchoice}.png`} className='user-hand'  alt='user'/>
        </div>
        <div className='choice-computer'>
          <img className='computer-hand' src={`../images/${computerchoice}.png`} alt='computer'/>
        </div>
      </div>
      <div className='button-div'>
        {
          choices.map((choice,index) => 
            <button className='button' key={index} onClick={()=> handleclick(choice)} disabled={gameover}>{choice}</button>
          )
        }
      </div>
      <div className='result-show'>
        <h1 className='round-result'>Round Result : {roundresult}</h1>
        <h1 className='result-match'>Match Result : {result}</h1>
      </div>
      <div className='reset-btn'>
      {
        gameover&& <button className='reset-button' onClick={() => {functionreset()}}>Reset</button>
      }
     </div>
     </div>
    </div>
  );
}

export default App;
