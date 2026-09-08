import { Field } from "@/components/ui/field.tsx"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group.tsx"
import { FileCodeIcon } from "lucide-react"
import CopyButton from "@/components/custom/CopyButton.tsx"

const CodeBlock = (
  {
    content,
  }: {content: string}) => {
  return (
    <Field>
      <InputGroup>
        <InputGroupTextarea
          id="block-start-textarea"
          placeholder="console.log('Hello, world!');"
          className="font-mono text-sm"
          readOnly={true}
          value={content}
        />
        <InputGroupAddon align="block-start">
          <FileCodeIcon className="text-muted-foreground" />
          <InputGroupText className="font-mono">.json</InputGroupText>
          <CopyButton content={content} />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}

export default CodeBlock