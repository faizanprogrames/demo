export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      Here is our list of Blogs
      {children}
    </div>
  );
}
