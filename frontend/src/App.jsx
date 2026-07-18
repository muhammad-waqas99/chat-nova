import './App.css'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import { Button } from '@heroui/react';
function App() {
  return (
    <>

    <h1 >My App</h1>
      <header>
            <Button>
      My Button
    </Button>
        <Show when="signed-out">
          <SignInButton  type="modal"/>
          <SignUpButton  type="modal" />
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>
    </>
  )
}

export default App