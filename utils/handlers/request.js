import responseHandler from '../handlers/response'

const requestHandler = ([req, res], methods) => {
  if (!methods[req.method]) return responseHandler({ res, status: 405, message: 'Method not allowed' })
  return methods[req.method](req, res).catch((err) => {
    console.error('Internal server error', err)
    return responseHandler({ res, status: 500, message: 'Internal server error' })
  })
}

export default requestHandler
