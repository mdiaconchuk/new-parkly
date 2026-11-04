import Arrivals from "../components/dashboard/Arrivals";
import Occupancy from "../components/dashboard/Occupancy";
import Rates from "../components/dashboard/Rates";
import { PageHeader } from "../components/ui/PageHeader";

export default function Dashboard() {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Get an overview of your activity and key insights."
      />
      <div className="flex gap-x-5 *:w-1/3">
        <Occupancy />
        <Arrivals />
        <Rates />
      </div>
    </div>
  );
}
