import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

import './SendMail.css'
import {useForm} from 'react-hook-form'



function SendMail() {

  const onSubmit = (formData) => {
    console.log(formData)
  }

  const {register, handleSubmit, watch, errors} = useForm()
  return (
		<div className="sendMail">
			<div className="sendMail__header">
				<h3>New Message</h3>
				<CloseIcon className="sendMail__close" />
			</div>
			{/* onSubmit={handleSubmit(onSubmit)} */}
			<form action="">
				<input name="to" placeholder="to" type="text" />

				<input name="subject" placeholder="subject" type="text" />
				<input
					name="message"
					className="sendMail__message"
					placeholder="message..."
					type="text"
					ref={register({ required: true })}
				/>
				<div className="sendMail__options">
					<Button
						className="sendMail__send"
						variant="contained"
						color="primary"
						type="submit"
					>
						Send
					</Button>
				</div>
			</form>
		</div>
	);
}

export default SendMail