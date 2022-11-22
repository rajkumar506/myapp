import React from "react";
import { Layout } from "./Layout";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { Flipkart } from "./Flipkart";
import { Amazon } from "./Amazon";
export const OrderSummary = () => {
  const navigate = useNavigate();
  const cssStyle = () => {
    return {
      height: "100px",
      width: "100px",
    };
  };
  return (
    <>
      <Layout>
        <div>hello order OrderSummary</div>
        <button onClick={() => navigate(-1)}>OrderSummary</button>
        <Link to="flipkart">flipkart</Link>
        <Link to="amazon">Amazon</Link>
        <Outlet />
      </Layout>
    </>
  );
};
