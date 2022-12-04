import { FastifyInstance } from 'fastify'
import helloWorld from './helloWorld'

export default async function (fastify: FastifyInstance) {
    fastify.register(helloWorld)
}
