import "./App.scss";

import axios from "axios";
import ConfigContext from "contexts/configContext";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Button from "@/components";
import Counter from "@/components/counter/Counter";

import logo from "./assets/logo.svg";
import Test from "./Test";

const App = () => {
  const { t } = useTranslation();
  const [configUrl, setConfigUrl] = useState({});

  const fetchConfigUrl = async () => {
    const { data } = await axios.get("/configs");
    console.log(data);
    setConfigUrl(data);
    return data;
  };

  useEffect(() => {
    // every rendering or mount with empty deps or update with deps
    fetchConfigUrl();

    // return {
    // unmount
    // }
  }, []);

  return (
    <ConfigContext.Provider value={configUrl}>
      <div className="app">
        <img className="app-logo" src={logo} alt="logo" />
        <p>test paragraph</p>
        <p>{t("test.tt")}</p>
        <Button type="primary">test</Button>
        <Test />

        <Counter />
      </div>
    </ConfigContext.Provider>
  );
};

export default App;
