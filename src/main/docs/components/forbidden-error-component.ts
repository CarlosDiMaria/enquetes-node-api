export default {
  description: 'Forbidden',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/errorSchema'
      }
    }
  }
}
