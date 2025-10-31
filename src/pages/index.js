import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import LandingHero from "/src/components/LandingPage/LandingHero";

export default function Home() {

  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      //title={`${siteConfig.title}`}
      description="Welcome to DevGrain's world!"
    >
      <LandingHero />
      <main>
      </main>
    </Layout>
  );
}

//<main>
//  <HomepageFeatures />
//  <Showcases />
//</main>
