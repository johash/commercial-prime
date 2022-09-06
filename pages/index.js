import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import GetOffers from "../components/GetOffers/GetOffers";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <GetOffers />
    </Layout>
  );
}
