import { config } from 'dotenv'
config()

import createFastify from 'fastify'

import routes from './routes'

const fastify = createFastify({
    logger: {
        level: 'debug',
        transport: {
            target: 'pino-pretty',
            options: {
                translateTime: 'HH:MM:ss Z',
                ignore: 'pid,hostname',
                colorize: true,
            },
        },
    },
    ignoreTrailingSlash: true,
    pluginTimeout: 5000,
    trustProxy: true,
})

await fastify.register(routes)

await fastify.ready()

try {
    const PORT = process.env.PORT ?? 3000

    await fastify.listen({
        port: +PORT,
        host: '0.0.0.0',
    })
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}
