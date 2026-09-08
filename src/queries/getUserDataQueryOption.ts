import {queryOptions} from "@tanstack/react-query";
import getUserData from "@/api/getUserData.ts";

const getUserDataQueryOption = (username: string, isEnabled: boolean) => {
    return queryOptions(
        {
            queryKey: ["userData", username],
            queryFn: () => getUserData(username),
            enabled: isEnabled,
            staleTime: 1000 * 60 * 30,
        }
    );
}

export default getUserDataQueryOption