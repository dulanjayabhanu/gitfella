const STORAGE_KEY: string = "gitfella:username"

export const getStoredUsername = (): string | null => {
    return localStorage.getItem(STORAGE_KEY)
}

export const setStoredUsername = (username: string): void => {
    localStorage.setItem(STORAGE_KEY, username)
}

export const clearStoredUsername = (): void => {
    localStorage.removeItem(STORAGE_KEY)
}