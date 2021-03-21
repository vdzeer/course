import { useQuery } from 'react-query'
import { getUserAvatar } from '../../containers/Users/hooks/userReq'

function UserAvatar({ routes }) {
  const userId = routes.match.params.id
  const { data: response } = useQuery('avatar', () => getUserAvatar({ userId }))
  const avatar = response?.data || null

  return (
    <div style={{ textAlign: 'center' }}>
      {avatar && <img src={`/uploads/${avatar}`} alt='user avatar' />}
      {!avatar && <span>No photo!</span>}
    </div>
  )
}

export default UserAvatar
