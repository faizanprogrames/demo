import Link from "next/link";
import Card from "../components/card";

export default function Notifications() {
  return (
    <Card>
      <div>
      <div>Notifications</div>
      <div>
        <Link href="/complex-dashboard/archived-notifications">Archived</Link>
      </div>
      </div>
    </Card>
  );
}
