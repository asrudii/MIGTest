import { BankOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import TitleCard from '../TitleCard';

export default function CompanyLocation() {
  return (
    <div className="card">
      <div className="card-content">
        <TitleCard title="Lokasi" btntitle="Lihat Semua" />
        <Row gutter={20}>
          <Col span={8}>
            <div className="location-info">
              <BankOutlined />
              <div>
                <span>20</span>
                <span>Induk</span>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className="location-info">
              <BankOutlined />
              <div>
                <span>20</span>
                <span>Induk</span>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className="location-info">
              <BankOutlined />
              <div>
                <span>20</span>
                <span>Induk</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
