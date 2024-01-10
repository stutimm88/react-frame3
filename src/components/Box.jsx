import React from 'react'

function Box() {
  return (
    <>
      <div className='text-center container p-3'>
        <h4>Create a next Big ecosystem using social mining <br/>
          Discover the decentralized collaborators for your project</h4>
      </div>
      
      <div className='container  p-5'>
        <div class="row g-0 mb-3  border border-secondary rounded-3 position-relative" style={{'width':'1200px'}}>
          <div className="col-7 p-4 ps-md-0" style={{'background':'#6B7280'}}>
            <h1 className="mt-0 g-2 text-start text-light p-2" style={{'background':'#6B7280'}}>
              <img src='images1/light-bulb 1.png' style={{'width':'40px', 'background':'#6B7280'}} />
                    Think
              <img src='images1/hammer 1.png' style={{'width':'40px', 'background':'#6B7280'}}/>
                    Developer 
              <img src='images1/thunder 1.png' style={{'width':'40px', 'background':'#6B7280'}}/>
                    Execute
            </h1>
            <p className='h4 text-start g-3 text-light p-3' style={{'background':'#6B7280'}}>
              This is a community-driven 3-steps methodology 
              leveraging the power of DAOs to support you in building 
              and launching your next successful cryptocurrency 
              project within the blockchain space.
            </p>
            <a href='' className="text-start gap-5 btn btn-dark btn-lg border-dark fs-4">Learn More</a>
          </div>

          <div class="col-5 p-md-4" style={{'background':'#6B7280'}}>
            <img src="images1/research-and-development (2) 1.png"  
            style={{'background':'#6B7280', 'width':'180px', 'height':'300px'}} className="w-100" alt="image"/>
          </div>
        </div>

      </div>
       
    </>
  )
}

export default Box
