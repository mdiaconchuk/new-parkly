import Card from "../components/ui/Card"
import { PageHeader } from "../components/ui/PageHeader"

export default function Dashboard() {
  return (
    <div>
      <PageHeader title="Dashboard" description="Get an overview of your activity and key insights."/>
      <div className="flex gap-x-5 *:w-1/3">
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}
