import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx"
import SyncButton from "@/components/custom/SyncButton.tsx"
import { Button } from "@/components/ui/button.tsx"
import { RefreshCwOff } from "lucide-react"

const NotSyncYetPrompt = () => {
  return (
    <div className="flex h-full w-full max-w-lg flex-col items-center justify-center gap-6 p-4">
      <Card className="w-full">
        <CardHeader className="flex flex-col items-center text-center">
          <Button variant="secondary" size="icon-lg">
            <RefreshCwOff />
          </Button>
          <CardTitle>No data synced yet</CardTitle>
          <CardDescription className="max-w-sm">
            Sync your GitHub data to see your fans, non-followers, and mutuals.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full">
            <SyncButton />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default NotSyncYetPrompt