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
    <Template defaultSelectedKeys="1">
      <Head>
        <title>Dashboard MIG Test</title>
        <meta name="description" content="Company Dashboard MIG Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container-dashboard">
          <div className="container-dashboard-left">
            <CompanyBiodata />
          </div>
          <div className="container-dashboard-right">
            <div className="container-dashboard-right-top">
              <CompanyLocation />
            </div>
            <div className="container-dashboard-right-bottom">
              <div className="bottom-left">
                <CompanyBank />
                <CompanyRelation />
              </div>
              <div className="bottom-right">
                <CompanyActivity />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Template>
  );
}
