import { useState } from 'react'
import './App.css'
import Plan from './component/Plan'
import ToggleSwitch from './component/ToggleSwitch'
import PlanDetail from '/Users/nate_epp/Documents/FrontEndPractice/pricing-component-with-toggle-master/pricing-component-with-toggle/src/plandetail.json'

function App() {
  const [isYear, setIsYear] = useState(false)

  function toggleHandler(){
    setIsYear(!isYear)
  }
  

  return (
    <div className="App">
      <h2 className='top'>Our Pricing</h2>
      <ToggleSwitch label='test' annual ='Annually' month = 'Monthly' togglehandler={toggleHandler} />
      {/* <button onClick={()=>setIsMonth(!isMonth)} type='button'>Month or Year</button> */}
        <div className='grid'>
          {PlanDetail.map((planprice=> <Plan key={planprice.title} container={planprice.position} title={planprice.title} price={isYear? planprice.priceMonth: planprice.priceYear} storage={planprice.storage} user={planprice.user} sendUp={planprice.sendup} />))}
          
        </div>
    </div>
  )
}

export default App
