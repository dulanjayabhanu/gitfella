import { Card, CardContent } from "@/components/ui/card.tsx"
import MarkdownContent from "@/components/custom/MarkdownContent.tsx"

import privacyContent from "@/content/privacy-policy.md?raw"

const PrivacyPage = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 p-4 sm:max-w-xl md:max-w-2xl">
      <Card className="w-full">
        <CardContent className="py-6 px-8">
          <MarkdownContent content={privacyContent} />
        </CardContent>
      </Card>
    </div>
  )
}

export default PrivacyPage