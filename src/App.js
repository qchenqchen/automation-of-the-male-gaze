import logo from "./logo.svg";
import "./App.css";
import { useResponse } from "@curi/react-dom";
import Nav from "./components/Nav";
import Page from "./components/Page";

const App = () => {
  let { response } = useResponse();
  let { name, body: Body } = response;
  return (
    <>
      <Nav current={name} />
      <Page>
        <Body response={response} />
      </Page>
    </>
  );
};

export default App;
