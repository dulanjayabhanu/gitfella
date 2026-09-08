import type { GitHubUserSummary } from "@/types/GitHubUserSummary.ts"
import type { Relationships } from "@/types/Relationships.ts"

const computeRelationships = (
  followers: GitHubUserSummary[],
  followings: GitHubUserSummary[]
): Relationships => {

  const followingIds = new Set<number>(
    followings.map(following => following.id)
  )
  const followerIds = new Set<number>(
    followers.map(follower => follower.id)
  )

  const fans = followers.filter(follower =>
    !followingIds.has(follower.id)
  )
  const notFollowingBack = followings.filter(following =>
    !followerIds.has(following.id)
  )
  const fellas = followers.filter(follower =>
    followingIds.has(follower.id)
  )

  return {
    fans: fans,
    notFollowingBack: notFollowingBack,
    fellas: fellas,
  }
}

export default computeRelationships