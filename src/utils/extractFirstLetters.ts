const extractFirstLetters = (name: string): string => {
  if (!name || name.trim().length === 0)
    return "N/A"

  const parts: string[] = name.trim().split(/\s+/).filter(Boolean)
  const firstLetter: string = parts[0]?.charAt(0).toUpperCase() ?? ""
  const secondLetter: string = parts[1]?.charAt(0).toUpperCase() ?? ""

  return firstLetter + secondLetter || "N/A"
}

export default extractFirstLetters