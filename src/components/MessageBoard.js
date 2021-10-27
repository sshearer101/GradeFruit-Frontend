import NewMessageContainer from './NewMessageContainer'
import NewMessage from './NewMessage'

export default function MessageBoard({ user }) {
  return (
    <main>
      {user.role === 'teacher' ? (
        <div>
          <h1>{user.name}</h1>
          <div>
            <NewMessageContainer />
          </div>
          <div>
            <NewMessage />
          </div>
        </div>
      ) : (
        <div>
          <h1>{user.name}</h1>
          <div>
            <NewMessageContainer />
          </div>
          <div>
            <NewMessage />
          </div>
        </div>
      )}
    </main>
  )
}
