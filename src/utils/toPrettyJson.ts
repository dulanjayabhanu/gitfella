const toPrettyJson = (data: unknown): string => {
  if (data === null || data === undefined)
    return "{}"
  if (Array.isArray(data) && data.length === 0)
    return "[]"

  return JSON.stringify(data, null, 2)
}

export default toPrettyJson