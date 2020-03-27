// import { VideoChat } from '../VideoChat/container' 
import dynamic from 'next/dynamic'


const VideoChatInitiator = dynamic(
  () => import('../components/VideoChat'),
  { ssr: false, 
    loading: () => <p>...</p>
 }
)

export default function() {

    return <VideoChatInitiator />

}