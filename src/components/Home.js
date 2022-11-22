import React, { useState } from "react";
import { Layout } from "./Layout";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const navigate = useNavigate();
  const cssStyle = () => {
    return {
      height: "100px",
      width: "100px",
    };
  };
  return (
    <Layout>
      <div>Hello Home page</div>
      <button onClick={() => navigate("order-summary", { replace: true })}>
        place order
      </button>
    </Layout>
  );
};
