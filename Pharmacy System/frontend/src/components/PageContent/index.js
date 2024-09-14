import AppRoutes from "../AppRoutes";
import { Layout, Menu } from 'antd';
import "./index.css";
import { useNavigate } from "react-router-dom";

function PageContent() {
  const { Sider, Content } = Layout;
  const navigate = useNavigate();

    return (
      <div className="PageContent" >
        <Layout>
        <Sider className="w3-sidebar  w3-bar-block">
        <Menu
        theme="dark"
        mode="inline"
        onClick={(item) =>{
          navigate(item.key);
        }}
        items={[
          {
          label: "Dashboard",
          key :"/",
          },
          {
            label: "Medicine",
            key :"/medicine",
          },
          {
            label: "Add Medicine",
            key :"/addMedicine",
          },
          {
            label: "Order",
            key :"/order",
         },
         /*{
          label: "Profile",
          key :"/profile",
        },*/

      ]} ></Menu>
       </Sider>
       <Layout>
       <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            Height: 280,
            background: "colorBgContainer",
          }}
        >
          <AppRoutes/>
          
        </Content>
        </Layout>
        </Layout>
      </div>
    );
  }
  
  export default PageContent;