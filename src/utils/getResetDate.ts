const getResetDate = (response: Response): Date | null => {
  const reset = response.headers.get("X-RateLimit-Reset")
  return reset ? new Date(Number(reset) * 1000) : null
}

export default getResetDate