export default function ComplexDashboardlayout({
  children,
  notifications,
  revenue,
  users,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <div className="flex">
        <div className="flex flex-col">
          <div>{revenue}</div>
          <div>{users}</div>
        </div>
        <div className="flex flex-1">{notifications}</div>
      </div>
    </div>
  );
}
