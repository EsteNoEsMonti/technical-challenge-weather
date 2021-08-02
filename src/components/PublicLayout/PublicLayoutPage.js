import React from 'react';
import { Layout, Image, Row, Col } from 'antd';
import styles from './PublicLayout.module.css';

const PublicLayoutPage = ({ children }) => {

  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <Header />
      <Content
        style={{
          minHeight: 768,
          backgroundColor: 'white',
          padding: 20,
          marginTop: 25,
          marginLeft: '5%',
          marginRight: '5%',
        }}
      >
        {children}
      </Content>
      <Footer className={styles.footer}>
        Technical Challenge - Weather | Lucas Daniel Montivero

        <Row justify="center" gutter={30} align="middle">
          <Col>
            <Image
              width={100}
              preview={false}
              src={'https://images.ctfassets.net/kbkgmx9upatd/1XfnizXV8OKKQJcDL3WEx7/b98e1f8d09b6c103f74092ebc4e24e81/incluit.png'}
            />
          </Col>
          <Col>
            <Image
              width={100}
              preview={false}
              src={'https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Telecom-Argentina-Logo.svg/1200px-Telecom-Argentina-Logo.svg.png'}
            />
          </Col>
        </Row>

        <b>@{new Date().getFullYear()}</b>
      </Footer>
    </Layout>
  );
};

export default PublicLayoutPage;