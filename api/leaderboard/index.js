import requestHandler from '../../utils/handlers/request'

export default (...params) => requestHandler(params, require('./_methods'))
