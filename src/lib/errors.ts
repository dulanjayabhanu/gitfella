export class RateLimitError extends Error {
  resetDate: Date | null

  constructor(resetDate: Date | null) {
    super("GitHub API rate limit exceeded")
    this.name = "RateLimitError"
    this.resetDate = resetDate
  }

}