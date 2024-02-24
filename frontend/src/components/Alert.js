import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height: '65px'}}>
    {props.alert && 
      <div>
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>{props.alert.type}</strong>
          {props.alert.message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>}
      </div>
    )
}
