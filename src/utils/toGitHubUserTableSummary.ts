import type { GitHubUserSummary } from "@/types/GitHubUserSummary.ts"
import type { GitHubUserTableSummary } from "@/types/GitHubUserTableSummary.ts"

const toGitHubUserTableSummary = (gitHubUserSummaries: GitHubUserSummary[] | null): GitHubUserTableSummary[] => {
  if (!gitHubUserSummaries)
    return []

  return gitHubUserSummaries.map(gitHubUserSummary => (
    {
      id: gitHubUserSummary.id,
      login: gitHubUserSummary.login,
      avatar_url: gitHubUserSummary.avatar_url,
      html_url: gitHubUserSummary.html_url,
      type: gitHubUserSummary.type,
      repositories: `https://github.com/${gitHubUserSummary.login}?tab=repositories`,
      followers: `https://github.com/${gitHubUserSummary.login}?tab=followers`,
      followings: `https://github.com/${gitHubUserSummary.login}?tab=following`,
    }
    ))
}

export default toGitHubUserTableSummary