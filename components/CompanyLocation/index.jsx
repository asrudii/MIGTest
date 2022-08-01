import { BankOutlined, SettingOutlined, ShopOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import TitleCard from '../TitleCard';

export default function CompanyLocation() {
  return (
    <div className="card">
      <div className="card-content">
        <TitleCard title="Lokasi" btntitle="Lihat Semua" />
        <Row gutter={[20, 20]}>
          <Col xs={24} sm={24} md={24} lg={8}>
            <div
              className="location-info"
              style={{ backgroundColor: '#35763b' }}
            >
              <BankOutlined />
              <div>
                <span>20</span>
                <span>Induk</span>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8}>
            <div
              className="location-info"
              style={{ backgroundColor: '#50b058' }}
            >
              <SettingOutlined />
              <div>
                <span>3</span>
                <span>Sub Lokasi Level 1</span>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8}>
            <div
              className="location-info"
              style={{ backgroundColor: '#6dbd74' }}
            >
              <ShopOutlined />
              <div>
                <span>1</span>
                <span>Sub Lokasi Level 2</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
