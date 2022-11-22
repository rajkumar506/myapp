import React, { Suspense } from "react";
import { Layout } from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { OrderSummary } from "./components/OrderSummary";
import { NoMatch } from "./components/Nomatch";
import { Flipkart } from "./components/Flipkart";
import { Amazon } from "./components/Amazon";
import { User } from "./components/User";
import Jira from "./ counter";
import { Form } from "./components/form";
import { dummyData } from "./components/folderDummyData";
import { Folder } from "./components/Folder";
import { PieChart } from "./components/PieChart";
import HoverCounter from "./components/hoverCounter";
import ClickedCounter from "./components/clickedCounter";
import { Clockify } from "./components/clockify/clockify";
const LazyComponent = React.lazy(() => import("./components/LazyComponent"));
function App() {
  return (
    // <>
    //   <Suspense fallback={<div>Loading.....</div>}>
    //     <LazyComponent />
    //   </Suspense>

    //   {/* <HoverCounter />
    //   <ClickedCounter /> */}
    // </>
    <Routes>
      {/* <Route path="/" element={<Clockify />}></Route> */}
      {/* <Route path="/" element={<Form></Form>}></Route> */}
      <Route path="/" element={<Jira />} />
      {/* <Route path="/" element={<Folder data={dummyData} />}></Route>
      {/* <Route path="/" element={<PieChart />}></Route>
      <Route path="/about" element={<About />}>
        <Route path=":userId" element={<User />} />
      </Route>
      <Route path="/order-summary" element={<OrderSummary />}>
        <Route index element={<Flipkart />} />
        <Route path="flipkart" element={<Flipkart />} />
        <Route path="amazon" element={<Amazon />} />
      </Route>
      <Route path="*" element={<NoMatch />} /> */}
    </Routes>
  );
}

export default App;
