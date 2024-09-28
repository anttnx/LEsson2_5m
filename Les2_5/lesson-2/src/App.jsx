import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Alert, Form, Spinner } from 'react-bootstrap'
import { useState } from 'react'

const App = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setErrror] = useState(false)
	const [success, setSuccess] = useState(false)

	const addPostHandler = async () => {
		setIsLoading(true)
		try {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/posts',
				{
					method: 'POST',
					body: JSON.stringify({
						title: 'foo',
						body: 'bar',
						userId: 1,
					}),
					headers: {
						'Content-type': 'application/json; charset=UTF-8',
					},
				},
			)
			const result = await response.json()
			if (!response.ok) {
				throw new Error('Something went wrong')
			}
			setSuccess(true)
			return result
		} catch (error) {
			setErrror(true)
		} finally {
			setIsLoading(false)
		}
	}

	if (isLoading)
		return (
			<Spinner animation='border' role='status'>
				<span className='visually-hidden'>Loading...</span>
			</Spinner>
		)

	return (
		<div className='p-5'>
			{error && <Alert variant={'error'}>Something went wrong</Alert>}
			{success && <Alert variant={'success'}>successfully submited</Alert>}
			<div className='p-5 d-flex gap-3'>
				<Form.Control placeholder='Email' type='text' />
				<Form.Control placeholder='Name' type='text' />
				<Button onClick={addPostHandler}>Submit</Button>
			</div>
		</div>
	)
}

export default App
