import React from 'react';

function Alert(props) {
  // Capitalized the first character
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1); // Changed '=' to '+'
  };

  return (
    // Added space before 'alert-dismissible' and fixed props usage
    props.alert && 
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role='alert'>
        {/* Changed props.Alert to props.alert */}
        {/* Changed props.alert.msg to props.alert.message */}
        {/* Changed props.alert.type to props.alert.type.toUpperCase() */}
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
        <button type='button' className='btn-close' data-bs-dismiss='alert' aria-label='close'></button>
      </div>
    )
  
}

export default Alert;

