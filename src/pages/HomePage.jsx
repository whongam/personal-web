import Layout from "../layout/Layout";
import Sidebar from "../components/Sidebar";
import Display from "../components/Display";

export default function HomePage() {
  return (
    <Layout>
      <Sidebar />
      <Display />
    </Layout>
  );
}
