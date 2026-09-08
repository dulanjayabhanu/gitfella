import type { GitHubUserSummary } from "@/types/GitHubUserSummary.ts"

export interface Relationships {
  fans: GitHubUserSummary[]
  notFollowingBack: GitHubUserSummary[]
  fellas: GitHubUserSummary[]
}