const responseHandler = ({ res, status = 200, message, data }) => {
  const success = status >= 200 && status < 300
  return res.status(status).json({ success, message, data })
}

export default responseHandler
