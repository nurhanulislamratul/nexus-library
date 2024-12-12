import { Helmet } from "react-helmet-async";
import ManageServicesCardContainer from "../components/ManageServicesCardContainer";
import SectionTitle from "../components/SectionTitle";
import { useEffect } from "react";

const ManageServices = () => {
  // ensure that the new page starts at the top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="py-20">
      <Helmet>
        <title>FixNexus | Manage Services</title>
      </Helmet>
      <SectionTitle title="My Services" />

      <ManageServicesCardContainer />
    </div>
  );
};

export default ManageServices;
