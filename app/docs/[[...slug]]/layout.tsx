import Container from "@/components/Container";
import { Leftbar } from "@/components/leftbar";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      <div className="flex items-start gap-14">
        <Leftbar />
        <div className="flex-[4]">{children}</div>{" "}
      </div>
    </Container>
  );
}
