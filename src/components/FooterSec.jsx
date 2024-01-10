import React from 'react'

function FooterSec() {
  return (
    <>
      <div className='container-fluid'>
        <hr className='drodown-divider p-3'/> 
      </div> 
      
      <div className='text-center container '>
        <div className='justify-content-center d-flex gap-5 p-3'>
          <a href='' type='input' className='h3 text-dark'> Product</a>
          <a href='' type='input' className='h3 text-dark'> Solution</a>
          <a href='' type='input' className='h3 text-dark'> About</a>
          <a href='' type='input' className='h3 text-dark'> Contact</a>
          <a href='' type='input' className='h3 text-dark'> Whitepaper</a>
        </div>
        <h5 className='p-5'> © 2023 AltcoinsMoney - All Rights Reserved</h5>

      </div>
    </>
  )
}

export default FooterSec
