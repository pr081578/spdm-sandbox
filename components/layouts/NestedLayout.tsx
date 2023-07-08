export default async function NestedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
      <div className="pb-20 pt-28">{children}</div>
    </body>
  );
}
