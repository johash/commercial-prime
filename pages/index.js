import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import GetOffers from "../components/GetOffers/GetOffers";
import DifferentWays from "../components/DifferentWays/DifferentWays";
import GrabYourCard from "../components/GrabYourCard/GrabYourCard";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <GetOffers />
      <DifferentWays />
      <GrabYourCard />
    </Layout>
  );
}
