import React from 'react'

export default function Title({name,title}) {
  return (
    <React.Fragment>
          <div className="row">
              <div className="col-10 mx-auto my-2 text-center text-title">
                  <h1 className="text-capitalize font-weight-bold">
                      {name}
                      <span> <strong className="text-blue">{title}</strong></span>{/* css is assigned in App.css, text-blue */}
                  </h1>
              </div>
          </div>
    </React.Fragment>
  )
}
