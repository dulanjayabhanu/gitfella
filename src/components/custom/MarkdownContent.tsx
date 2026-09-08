import type { MarkdownContentProps } from "@/types/props/MarkdownContentProps.ts"
import Markdown from "react-markdown"

const MarkdownContent = (
  {
    content
  }: MarkdownContentProps) => {
  return (
    <article className="mx-auto prose prose-sm max-w-2xl dark:prose-invert
    prose-headings:text-foreground
    prose-p:text-foreground
    prose-a:text-muted-foreground
    prose-a:underline-offset-4
    prose-a:hover:text-primary
    prose-blockquote:border-border
    prose-blockquote:text-muted-foreground
    prose-strong:text-foreground
    prose-code:rounded
    prose-code:bg-muted
    prose-code:px-1
    prose-code:py-0.5
    prose-code:text-foreground
    prose-li:text-foreground
    prose-hr:border-border">
      <Markdown>{content}</Markdown>
    </article>
  )
}

export default MarkdownContent