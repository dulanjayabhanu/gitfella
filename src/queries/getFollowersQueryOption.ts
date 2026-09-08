import { queryOptions } from "@tanstack/react-query"
import getAllPages from"@/api/getAllPages.ts"

const getFollowersQueryOption = (username: string) => {
  return queryOptions(
    {
      queryKey: ["followers", username],
      queryFn: () => getAllPages(username, "followers"),
      enabled: false,
      staleTime: 1000 * 60 * 30,
    }
  )
}

export default getFollowersQueryOption