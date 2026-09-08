import { useQuery } from "@tanstack/react-query"
import getFollowersQueryOption from "@/queries/getFollowersQueryOption.ts"
import getFollowingQueryOption from "@/queries/getFollowingQueryOption.ts"
import { useMemo } from "react"
import computeRelationships from "@/lib/computeRelationships.ts"

const useRelationships = (username: string) => {
  const followersQuery = useQuery(getFollowersQueryOption(username))
  const followingQuery = useQuery(getFollowingQueryOption(username))

  const relationships = useMemo(() => { // <- pahala explanation eka balanna.
    if (!followersQuery.data || !followingQuery.data)
      return null

    return computeRelationships(followersQuery.data, followingQuery.data)
  }, [followersQuery.data, followingQuery.data])

  return {
    relationships,
    followersQuery,
    followingQuery,
  }
}

export default useRelationships