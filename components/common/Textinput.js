import React from 'react'
import PropTypes from 'prop-types'
const Textinput = ({
    name,
    value,
    label,
    placeholder,
    onChange,
    error,
    disabled
}) => {
    return (
        <>
            <input disabled={disabled} type={type} name={name} id="mail" onChange={onChange} value={value} autoComplete={name} className="form" placeholder={placeholder} />
            {error && <p className='text-center color-red'>{error}</p>}
        </>
    )
}
Textinput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.string,

}

Textinput.defaultProps = {
    type: 'text'
}

export default Textinput