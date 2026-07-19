
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import { Button } from '@heroui/react';
import { useAuth } from "@clerk/react";
import ChatPage from './pages/ChatPage';
import { Navigate, Route, Routes } from 'react-router';
import AuthPage from './pages/AuthPage';
import { ThemeProvider } from './context/ThemeContext';
import { WallpaperProvider } from './context/WallpaperContext';
function App() {

    const { isSignedIn, isLoaded } = useAuth();
  return (
    <>

     <ThemeProvider>
      <WallpaperProvider>
        <Routes>
          <Route path="/" element={isSignedIn ? <ChatPage /> : <Navigate to={"/auth"} replace />} />
          <Route
            path="/auth"
            element={!isSignedIn ? <AuthPage /> : <Navigate to={"/"} replace />}
          />
        </Routes>
      </WallpaperProvider>
    </ThemeProvider>

    </>
  )
}

export default App