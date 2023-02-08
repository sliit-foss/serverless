import { initialize, getOrganizationLeaderboard } from '@sliit-foss/leaderboard'

import responseHandler from '../../../utils/handlers/response'

initialize(process.env.GITHUB_ACCESS_TOKEN)

const handler = async (_req, res) => {
  const records = await getOrganizationLeaderboard({ orgs: 'sliit-foss', filters: { pageSize: 100, pageLimit: 1 } })
  return responseHandler({ res, data: records, message: `Leaderboard fetched successfully` })
}

export default handler
