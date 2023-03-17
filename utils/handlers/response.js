const responseHandler = ({ res, status = 200, message, data }) => {
  return res.status(status).json({ message, data })
}

export default responseHandler
