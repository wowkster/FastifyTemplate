import { FastifyInstance } from 'fastify'

import helloWorld from './helloWorld.js'

export default async function (fastify: FastifyInstance) {
    fastify.register(helloWorld)
}
