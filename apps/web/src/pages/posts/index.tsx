import { Header } from "@organisms/index";
import { Layout, Main, Typography } from "@DS/index";

export default function Posts() {
  return (
    <Layout.Root>
      <Header.Root />
      <Main.Root>
        <Typography.H1>Posts</Typography.H1>
      </Main.Root>
    </Layout.Root>
  );
}
