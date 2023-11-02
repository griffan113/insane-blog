import { Header } from "@organisms/index";
import { Main } from "@DS/index";
import { Typography } from "@src/DS/typography";

export default function Home(): JSX.Element {
  return (
    <>
      <Header.Root />
      <Main.Root>
        <Typography.H1>Home</Typography.H1>
        <Typography.P>Testando esse parágrafo</Typography.P>
      </Main.Root>
    </>
  );
}
