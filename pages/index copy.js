import { Col, Row } from 'antd';
import Head from 'next/head';
import CompanyActivity from '../components/CompanyActivity';
import CompanyBank from '../components/CompanyBank';
import CompanyBiodata from '../components/CompanyBiodata';
import CompanyLocation from '../components/CompanyLocation';
import CompanyRelation from '../components/CompanyRelation';
import Template from '../components/Template';

export default function Home() {
  return (
    <Template>
      <Head>
        <title>Dashboard MIG Test</title>
        <meta name="description" content="Company Dashboard MIG Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Row gutter={[20, 20]}>
          <Col span={6}>
            <CompanyBiodata />
          </Col>
          <Col span={18}>
            <Row gutter={[20, 20]}>
              <Col span={24}>
                <CompanyLocation />
              </Col>
              <Col span={12}>
                <Row gutter={[20, 20]}>
                  <Col span={24}>
                    <CompanyBank />
                  </Col>
                  <Col span={24}>
                    <CompanyRelation />
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <CompanyActivity />
              </Col>
            </Row>
          </Col>
        </Row>
      </main>
    </Template>
  );
}
