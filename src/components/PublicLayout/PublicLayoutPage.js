import React from 'react';
import { Layout } from 'antd';

const PublicLayoutPage = ({ children }) => {
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <Header>
        <div className="logo" />
      </Header>
      <Content style={{
        minHeight: 800,
        backgroundColor: 'white',
        padding: 20,
        marginTop: 10,
        marginLeft: '5%',
        marginRight: '5%',
      }}>

        {children}

      </Content>
      <Footer>
        Footer Component
      </Footer>
    </Layout>
  );
};

export default PublicLayoutPage;