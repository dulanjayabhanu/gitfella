import { Card, CardContent } from "@/components/ui/card.tsx"
import MarkdownContent from "@/components/custom/MarkdownContent.tsx"

import privacyContent from "@/content/terms-of-service.md?raw"

const TermsPage = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 p-4 sm:max-w-xl md:max-w-2xl">
      <Card className="w-full">
        <CardContent className="px-8 py-6">
          <MarkdownContent content={privacyContent} />
        </CardContent>
      </Card>
    </div>
  )
}

export default TermsPage