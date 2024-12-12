import { Helmet } from "react-helmet-async";
import BookedServiceCardContainer from "../components/BookedServiceCardContainer";
import SectionTitle from "../components/SectionTitle";
import { useEffect } from "react";

const BookedService = () => {
  // ensure that the new page starts at the top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="py-20">
      <Helmet>
        <title>FixNexus | Booked Services</title>
      </Helmet>
      <SectionTitle title="Booked Services" />
      <BookedServiceCardContainer />
    </div>
  );
};

export default BookedService;
