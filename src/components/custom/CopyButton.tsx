import { InputGroupButton } from "@/components/ui/input-group.tsx"
import { Check, CopyIcon } from "lucide-react"
import copyToClipboard from "@/utils/copyToClipboard.ts"
import { useState } from "react"

const CopyButton = (
  {
    content,
  }: { content: string }) => {
  const [ isCopied, setIsCopied ] = useState<boolean>(false)

  const handleCopy = async () => {
    const isSuccess = await copyToClipboard(content)

    if (isSuccess) {
      setIsCopied(true)
      setTimeout(
        () => setIsCopied(false),
        1000
      )
    }
  }

  return (
    <InputGroupButton
      size="icon-xs"
      className="ml-auto"
      onClick={() => handleCopy()}
    >
      {isCopied ? (<Check />) : (<CopyIcon />)}
      <span className="sr-only">Copy</span>
    </InputGroupButton>
  )
}

export default CopyButton