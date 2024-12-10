import { TextField , Stack , Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
  const[Principle,setPrincile] = useState(0)
  const[Interest,setInterest] = useState(0)
  const[Year,setYear] = useState(0)
  const[Rate,setRate] = useState(0)
  const[InvaldPrincple,setInvaldPrincple] = useState(false)
  const[InvaldRate,setInvaldRate] = useState(false)
  const[InvaldYear,setInvaldYear] = useState(false)

  const validateInput =(inputTag)=>{
    console.log(inputTag);
    const {name,value} = inputTag
    console.log(name,value);
    // console.log(value.match(/^[0-9]*.?[0-9]+$/));
    console.log(!!value.match(/^\d+(\.\d+)?$/));

    if(name == 'principle')
    {
      setPrincile(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setInvaldPrincple(false)
      }
      else{
        setInvaldPrincple(true)
      }
    }
    else if(name == 'rate')
      {
        setRate(value)
        if(!!value.match(/^\d+(\.\d+)?$/)){
          setInvaldRate(false)
        }
        else{
          setInvaldRate(true)
        }
      }
    else{
      setYear(value)
        if(!!value.match(/^\d+$/)){
          setInvaldYear(false)
        }
        else{
          setInvaldYear(true)
        }
    }

  }

 const handleCalculation=(e)=>{
  e.preventDefault()  //html predefind methord
  console.log("btn clicked");
  if( Principle && Rate && Year)
  {
    setInterest(Principle*Rate*Year/100)
  }
  else{
    alert("Please fill the form completely")
  }
 }

 const handleReset=()=>{
  setPrincile(0)
  setInterest(0)
  setYear(0)
  setRate(0)
  setInvaldPrincple(false)
  setInvaldRate(false)
  setInvaldYear(false)

 }


  return (
    <>
     <div style={{width:'100%' , height:'100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>
      <div className='bg-light p-5 rounded'>
        <h3>Simple interest Calculator</h3>
        <p>Calculate your Simple interest Easily !</p>
        <div className='bg-warning p-5 rounded text-center'>
          <h1>{Interest}</h1>
          <p className='fw-bolder'>Total Simple Interest</p>
        </div>
        <form className='mt-3' action="">
          {/* Principle amount */}
          <div className='mb-3'>
          <TextField value={Principle||''} name='principle' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-principle" label="₹ Principle Amount" variant="outlined" />
          </div>
          {/* invalid principle */}
          {InvaldPrincple && <div className='text-danger fw-bolder mb-3'>
            Invalid Principle Amount
          </div>}
             {/* Rate */}
             <div className='mb-3'>
          <TextField value={Rate||''} name='rate'  onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-rate" label="% Rate" variant="outlined" />
          </div>

            {/* invalid Rate */}
          {InvaldRate && <div className='text-danger fw-bolder mb-3'>
            Invalid Rate
          </div>}

             {/* Year */}
             <div className='mb-3'>
          <TextField value={Year||''} name='year'  onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-year" label="Time Period (Yr)" variant="outlined" />
          </div>

            {/* invalid year */}
          {InvaldYear && <div className='text-danger fw-bolder mb-3'>
            Invalid Year
          </div>}

          {/* buttons */}
          <Stack direction="row" spacing={2}>
              <Button type='submit' onClick={handleCalculation} disabled={InvaldPrincple || InvaldRate || InvaldYear} className='w-100 bg-dark text-light' variant="contained">Calculate</Button>
              <Button onClick={handleReset} className='w-100 bg-light text-dark border-dark' variant="outlined">Reset</Button>
          </Stack>
        </form>
      </div>
     </div>
    </>
  )
}

export default App
