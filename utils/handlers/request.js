import responseHandler from '../handlers/response'

const requestHandler = ([req, res], methods) => {
  if (!methods[req.method]) return responseHandler({ res, status: 405, message: 'Method not allowed' })
  return methods[req.method](req, res)
}

export default requestHandler
