import { ShareAltOutlined } from '@ant-design/icons';
import TitleCard from '../TitleCard';

export default function CompanyRelation() {
  return (
    <div className="card">
      <div className="card-content">
        <TitleCard title="Relasi" btntitle="Lihat Semua" />
        <div className="card-info-wrap">
          <div className="relation-info">
            <ShareAltOutlined />
            <div>
              <span>20</span>
              <span>Memiliki</span>
            </div>
          </div>
          <div className="relation-info">
            <ShareAltOutlined />
            <div>
              <span>108</span>
              <span>Menggunakan</span>
            </div>
          </div>
          <div className="relation-info">
            <ShareAltOutlined />
            <div>
              <span>67</span>
              <span>Meminjam</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
