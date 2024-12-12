import { Helmet } from "react-helmet-async";
import CardContainer from "../components/CardContainer";
import Carousel from "../components/Carousel";
import BestPart from "../components/BestPart";
import ClientReview from "../components/ClientReview";
import CTA from "../components/CTA";
import { useEffect } from "react";

const Home = () => {
  //ensure that the new page starts at the top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="py-10 md:py-20">
      <Helmet>
        <title>FixNexus | Home</title>
      </Helmet>
      <Carousel />
      <CardContainer />
      <BestPart />
      <ClientReview />
      <CTA />
    </div>
  );
};

export default Home;
