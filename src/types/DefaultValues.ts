import type {UserSession} from "@/types/UserSession.ts";

export type DefaultValues = {
    username: string
    createContext: UserSession | null
    field: string
}