import { queryOptions } from "@tanstack/react-query"
import getAllPages from "@/api/getAllPages.ts"

const getFollowingQueryOption = (username: string) => {
  return queryOptions(
    {
      queryKey: ["following", username],
      queryFn: () => getAllPages(username, "following"),
      enabled: false,
      staleTime: 1000 * 60 * 30,
    }
  )
}

export default getFollowingQueryOption