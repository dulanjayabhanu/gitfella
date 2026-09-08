import { useQuery } from "@tanstack/react-query"
import getFollowersQueryOption from "@/queries/getFollowersQueryOption.ts"
import getFollowingQueryOption from "@/queries/getFollowingQueryOption.ts"

const useSyncStatus = (username: string) => {
  const followersQuery = useQuery(getFollowersQueryOption(username))
  const followingQuery = useQuery(getFollowingQueryOption(username))

  return {
    hasSynced: followersQuery.isSuccess && followingQuery.isSuccess,
    isSyncing: followingQuery.isFetching || followersQuery.isFetching,
    hasError: followersQuery.isError || followingQuery.isError,
    error: followersQuery.error || followingQuery.error,
  }
}

export default useSyncStatus