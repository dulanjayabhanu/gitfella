const extractFirstName = (name: string): string => {
  if (!name || name.trim().length === 0)
    return ""

  return name.trim().split(/\s+/).filter(Boolean)[0] || ""
}

export default extractFirstName