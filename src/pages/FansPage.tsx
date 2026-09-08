import useUserSession from "@/hooks/useUserSession.ts"
import useSyncStatus from "@/hooks/useSyncStatus.ts"
import NotSyncYetPrompt from "@/components/custom/NotSyncYetPrompt.tsx"
import useRelationships from "@/hooks/useRelationships.ts"
import { DataTable } from "@/components/data-table.tsx"
import toGitHubUserTableSummary from "@/utils/toGitHubUserTableSummary.ts"

const FansPage = () => {
  const { usernameState } = useUserSession()
  const { hasSynced } = useSyncStatus(usernameState!)
  const { relationships } = useRelationships(usernameState!)

  if (!hasSynced)
    return <NotSyncYetPrompt />

  return (
      <DataTable
        data={toGitHubUserTableSummary(relationships?.fans || [])}
      />
  )
}

export default FansPage