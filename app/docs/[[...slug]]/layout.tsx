import Container from "@/components/Container";
import { Leftbar } from "@/components/leftbar";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      <div className="flex items-start gap-12">
        <Leftbar />
        <>{children}</>{" "}
      </div>
    </Container>
  );
}
