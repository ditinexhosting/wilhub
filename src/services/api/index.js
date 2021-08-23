import home from './home'
import profile from './profile'
import chat from './chat'
import rooms from './rooms'
import auth from './auth'
import peoples from './people'
import { SOCKET } from './utils'

const api = {
    ...auth,
    ...home,
    ...profile,
    ...chat,
    ...rooms,
    ...peoples,
    SOCKET
}
export default api