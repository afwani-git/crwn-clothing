import React from "react";
import "./FormInput.style.scss";

const FormInput = ({handleChage,label,...otherProps}) => (
	<div className="group">
		<input onChange={handleChage} className="form-input" {...otherProps}/>
		{
			label ?(
				<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
					{label}
				</label>
			):null
		}
	</div>
	)

export default FormInput;