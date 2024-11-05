import React from "react";
import ToDo from "./Component/ToDo";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import FormikPractice from "./Component/FormikPractice";

export default function App() {
  return (
    <Provider store={appStore}>
      <div className="flex w-full border border-black justify-center items-center">
        {/* <ToDo /> */}
        <FormikPractice />
      </div>
    </Provider>
  );
}
