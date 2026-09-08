import {type ReactNode, useState} from "react";
import { clearStoredUsername, getStoredUsername, setStoredUsername } from "@/lib/storage.ts"
import {UserSessionContext} from "@/context/UserSessionContext.tsx";

const UserSessionProvider = (
    {
        children
    }: { children: ReactNode }) => {

    const [ usernameState, setUsernameState ] = useState<string | null>(getStoredUsername())

    const setUsername = (username: string): void => {
        setStoredUsername(username)
        setUsernameState(username)
    }

    const clearUsername = () => {
      clearStoredUsername()
      setUsernameState(null)
    }

    return (
        <UserSessionContext.Provider
            value={
                {
                  usernameState: usernameState,
                  setUsername: setUsername,
                  clearUsername: clearUsername,
                }
            }
        >
            {children}
        </UserSessionContext.Provider>
    )
}

export default UserSessionProvider