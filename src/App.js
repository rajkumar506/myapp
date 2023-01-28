import React, { Suspense,useState } from "react";
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
import { Suggestion } from "./suggestion";
import { MessageList } from "./components/messageList";
import { ConvertFormat } from "./components/convertTo24hours";
import { Dropdown } from "./components/ReusableDropDown";
import { Virtuallist  } from "./components/VirtualListDemo";
import { InfiniteScrolling } from "./components/InfiniteScrolling";
import { Posts } from "./components/Pagination/Posts";
const DropDownData = [{
  id:1,
  value:"Agra"
},{
  id:2,
  value:"Delhi"
},{
  id:3,
  value:"Chennai"
},{
  id:4,
  value:"Mumbai"
},{
  id:5,
  value:"Banglore"
}]
const LazyComponent = React.lazy(() => import("./components/LazyComponent"));

function App() {
  const [dropDownValue,setDropDownValue] = useState(DropDownData[0].value)
  return (
    // <>
    //   <Suspense fallback={<div>Loading.....</div>}>
    //     <LazyComponent />
    //   </Suspense>

    //   {/* <HoverCounter />
    //   <ClickedCounter /> */}
    // </>
    <Routes>
      {/* <Route path="/" element={<Dropdown data={DropDownData} dropDownValue={dropDownValue} setDropDownValue={setDropDownValue} name="cities" id="citiesSpecial"/>}></Route> */}
      <Route path="/" element={<Posts/>}></Route>
      {/* <Route path="/" element={<Form></Form>}></Route> */}
      {/* <Route path="/" element={<Jira />} /> */}
      {/* <Route path="/" element={<MessageList/>}/> */}
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
