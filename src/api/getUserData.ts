import type {GitHubUser} from "@/types/GitHubUser.ts";
import { RateLimitError } from "@/lib/errors.ts"
import getResetDate from "@/utils/getResetDate.ts"

const API_VERSION: string = "2026-03-10"
export const BASE_HEADERS = {
  'Accept': 'application/vnd.github+json',
  'X-GitHub-Api-Version': API_VERSION,
}

const getUserData = async (username: string): Promise<GitHubUser> => {
  const url = new URL(username, "https://api.github.com/users/")
  const response = await fetch(url,
    {
      method: "GET",
      headers: BASE_HEADERS,
    })

  if (response.status === 404)
    throw new Error("User not found")

  if (response.status === 403 || response.status === 429)
    throw new RateLimitError(getResetDate(response))

  if (!response.ok)
    throw new Error(`Error fetching user data: ${response.status}`)

  return await response.json()
}

export default getUserData