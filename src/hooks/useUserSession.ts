import type {UserSession} from "@/types/UserSession.ts";
import {useContext} from "react";
import {UserSessionContext} from "@/context/UserSessionContext.tsx";

const useUserSession = (): UserSession => {
    const userSessionContext = useContext(UserSessionContext);

    if (!userSessionContext)
        throw new Error("useUserSession must be used within a UserSessionProvider");

    return userSessionContext
}

export default useUserSession