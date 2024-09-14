import {Layout} from "antd";
import "./App.css";
import AppHeader from "./components/AppHeader";
import PageContent from "./components/PageContent";



function App() {
  return (
    <div className="App">
      <Layout>
      <AppHeader/>
        <PageContent>
        </PageContent>
     
      </Layout>
      
    </div>
  );
}

export default App;
