import 'dotenv/config'
import z from 'zod'

const envSchema = z.object({
	PORT: z.coerce.number(),
	DB_PORT: z.coerce.number(),
	DB_HOST: z.coerce.string(),
	DB_USER: z.string(),
	DB_PASSWORD: z.string(),
	DB_NAME: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
	console.error('Evironment variables falid')
	throw new Error('Evironment variables falid')
}

export const env = _env.data
