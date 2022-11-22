import React from "react";
import { Layout } from "./Layout";
import { Link, Outlet } from "react-router-dom";
export const About = () => {
  return (
    <Layout>
      <div>Hello About</div>
      <Link to="1">User 1</Link>
      <Link to="2">User 2</Link>
      <Outlet />
    </Layout>
  );
};
