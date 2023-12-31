import React from "react";

import TopMenuEmployer from "../components/share/TopMenuEmployer";
import { Footer, JobSuggestion } from "../components/landingPage";
import AdsPart from "../components/employer/AdsPart";
import ServicePart from "../components/employer/ServicePart";
import InfoPart from "../components/employer/InfoPart";
import MoreInfoPart from "../components/employer/MoreInfoPart";
import OperationCardEmployer from "../components/employer/OperationCard";

function PageEmployer() {
  return (
    <>
      <div className="">
        <TopMenuEmployer />
        <AdsPart />
        <JobSuggestion />
        <p className=" font-bold text-colorTitle text-center text-3xl my-20">
          خدمات اختصاصی برای کارفرمایان
        </p>
        <ServicePart />
        <InfoPart />
        <MoreInfoPart />
        <OperationCardEmployer />

        <Footer />
      </div>
    </>
  );
}

export default PageEmployer;
