import type { AllPageFetchType } from "@/types/FetchType.ts"
import type { GitHubUserSummary } from "@/types/GitHubUserSummary.ts"
import { BASE_HEADERS } from "@/api/getUserData.ts"
import { RateLimitError } from "@/lib/errors.ts"
import getResetDate from "@/utils/getResetDate.ts"

const getAllPages = async (
  username: string,
  type: AllPageFetchType
): Promise<GitHubUserSummary[]> => {

  const results: GitHubUserSummary[] = []
  const perPage: number = 100
  let page:number = 1

  while (true) {
    const url = new URL(`https://api.github.com/users/${username}/${type}`)
    url.searchParams.set("per_page", String(perPage))
    url.searchParams.set("page", String(page))

    const response = await fetch(url.toString(),
      {
        method: "GET",
        headers: BASE_HEADERS,
      })

    if (response.status === 403 || response.status === 429)
      throw new RateLimitError(getResetDate(response))

    if (!response.ok)
      throw new Error(`Error fetching ${type}: ${response.status}`)

    const remaining = response.headers.get("X-RateLimit-Remaining")

    if (remaining !== null && Number(remaining) < 2)
      throw new RateLimitError(getResetDate(response))

    const data: GitHubUserSummary[] = await response.json()
    results.push(...data)

    if (data.length < perPage)
      break

    page++
  }

  return results
}

export default getAllPages