import { Header } from "@organisms/index";
import { Layout, Main, Typography } from "@DS/index";

export default function Post() {
  return (
    <Layout.Root>
      <Header.Root />
      <Main.Root>
        <Typography.H1>Post</Typography.H1>
      </Main.Root>
    </Layout.Root>
  );
}
