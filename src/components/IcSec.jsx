import React from 'react'

function IcSec() {
  return (
    <>
      <div className='container text-center p-5'>
        <h4>HOW IT WORKS</h4>
        <h1  className='p-3'>
        A Simplified 4-Step Process on Our Platform
        </h1>
        <h2>A Streamlined Approach to Launch Your Cryptocurrency <br/> Project with Ease!</h2>
      </div>

      <div className="container text-center ">
        <div className="row">
          <div className="col ">
            <div className='p-2 text-center border border-dark rounded-3 bg-white' style={{'width':'65px' ,'height':'65px'}}>
              <img src='images1/check-list 1.png' width='50px' height='50px'/>
            </div>
            <div>
              <h4 className='p-3'> 01 </h4>
              <h4 className='p-3'>Plan and Define</h4>
              <p className='h5 p-3'>Create a project plan <br/>and define its vision, <br/> goals, and features. </p>
            </div>
          </div>

          <div className="col">
            <div className='p-2 text-center border border-dark rounded-3 bg-white' style={{'width':'65px' ,'height':'65px'}}>
              <img src='images1/approve 1.png' width='50px' height='50px' />
            </div>
            <div>
              <h4 className='p-3'> 02 </h4>
              <h4 className='p-3'>DAO approval</h4>   
              <p className='h5 p-3'>Get Approved to Launch<br/> project to Engage and<br/> Promote on Our Platform </p>
            </div>
          </div>

          <div className="col">
            <div className='p-2 text-center border border-dark rounded-3 bg-white' style={{'width':'65px' ,'height':'65px'}}>
              <img src='images1/group (1) 1.png' width='50px' height='50px'/>
            </div>
            <div>
              <h4 className='p-3'> 03 </h4>
              <h4 className='p-3'>Engage the Community</h4>   
              <p className='h5 p-3'>Utilize our community <br/> engagement to cultivate a <br/>supportive community </p>
            </div>
          </div>

          <div class="col">
            <div className='p-2 border border-dark rounded-3 bg-white' style={{'width':'65px' ,'height':'65px'}}>
              <img src='images1/mission 1.png' width='50px' height='50px' />
            </div>
            <div >
              <h4 className='p-3'> 04 </h4>
              <h4 className='p-3'>Launch and Promote</h4>   
              <p className='h5 p-3'>Launch your project and <br/> leverage our marketing features <br/> to promote wider audience </p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default IcSec
