export interface UserSession {
    usernameState: string | null
    setUsername: (usernameState: string) => void
    clearUsername: () => void
}