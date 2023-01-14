import responseHandler from '../../../utils/handlers/response'

const handler = (req, res) => {
  return responseHandler({ res, message: `Hello from leaderboard api` })
}

export default handler
