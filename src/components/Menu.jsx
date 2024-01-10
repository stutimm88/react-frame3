import React from 'react';

function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src='images1/Green_Coral_Modern_Food_Logo__2_-removebg-preview 1.png' alt='Altcoins Money' width={360} height={74.87}/>
          </a>

          <div className="row">
            <div className="col-md-6 offset-md-3 d-flex gap-4 ">
              <button type="button" className="btn btn-light btn-lg border border-light shadow fs-4">Product</button>
              <button type="button" className="btn btn-light btn-lg border border-light shadow fs-4">Solution</button>
              <button type="button" className="btn btn-light btn-lg border border-light shadow fs-4">About</button>
              <button type="button" className="btn btn-light btn-lg border border-light shadow fs-4">Contact</button>
            </div>
          </div>  
          <button className="btn btn-dark btn-lg border shadow fs-4" type="button">Whiteboard</button>
      
        </div>
      </nav>
          
    </>
  )
}

export default Menu








