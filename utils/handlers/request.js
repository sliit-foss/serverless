import { moduleLogger } from '@sliit-foss/module-logger'

import responseHandler from './response'

const logger = moduleLogger('Request-Handler')

const requestHandler = ([req, res], methods) => {
  if (!methods[req.method]) return responseHandler({ res, status: 405, message: 'Method not allowed' })
  return methods[req.method](req, res).catch((err) => {
    logger.error(`API request failed - err: ${err.message}`, err)
    return responseHandler({ res, status: 500, message: "Just patching things up! This'll be be over in a jiffy" })
  })
}

export default requestHandler
