import React from 'react';
import { Layout } from 'antd';

const PublicLayoutPage = ({ children }) => {
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <Header>
        Header Component
      </Header>
      <Content style={{ minHeight: 800  }}>
        {children}
      </Content>
      <Footer>
        Footer Component
      </Footer>
    </Layout>
  );
};

export default PublicLayoutPage;