import React from 'react'
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';

function ChatPage(props) {
    const chatProps = useMultiChatLogic(
        import.meta.env.PROJECT_KEY,
        props.user.data.username,
        props.user.secret
    )
  return (
    <div style={{ height: '100vh' }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: '100vh' }}/>
    </div>
  )
}

export default ChatPage