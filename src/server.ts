import { app } from './app'
import AppDataSource from './data-source'
import { env } from './env'

AppDataSource.initialize()
	.then(() => {
		console.log('Connected')
		app.listen(env.PORT, () => console.log('Server ir running'))
	})
	.catch((err) => console.log('Connection field', err))
