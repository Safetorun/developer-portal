import React from "react";
import { useOktaAuth } from "@okta/okta-react";
import { useNavigate } from "react-router-dom";

import { PageLayout } from "../../page-layout";
import { PageLoader } from "../../page-loader";

function OktaLogin() {
  const { authState } = useOktaAuth();
  const navigate = useNavigate();

  if (authState?.isAuthenticated) {
    navigate("/dashboard");
  }
  if (authState?.isPending) {
    return <PageLoader />;
  }

  return (
    <PageLayout>
      <>
        <h1>Welcome to Your Custom Dev Portal!</h1>
        <h2>Sign up or Log in to get started.</h2>
      </>
    </PageLayout>
  );
}

export default OktaLogin;
