const copyToClipboard = async (content: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(content)
    return true

  } catch {
    return false
  }
}

export default copyToClipboard