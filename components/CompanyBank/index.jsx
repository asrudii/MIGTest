import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import TitleCard from '../TitleCard';

export default function CompanyBank() {
  return (
    <div className="card">
      <div className="card-content">
        <TitleCard title="Akun Bank" btn btntitle="+ Tambah Akun Bank" />
        <div className="card-info-wrap">
          <div className="bank-info">
            <div className="bank-content-left">
              <div className="background-card2">Visa</div>
              <div className="bank-detail">
                <span>Bank KB Bukopin</span>
                <div>
                  <span>**** 0876 - Yusron Taufiq</span>
                  <span>IDR</span>
                </div>
              </div>
            </div>
            <div>
              <EditOutlined />
              <DeleteOutlined />
            </div>
          </div>
          <div className="bank-info">
            <div className="bank-content-left">
              <div className="background-card1">Visa</div>
              <div className="bank-detail">
                <span>Citiy Bank Na</span>
                <div>
                  <span>**** 0876 - Si Tampan</span>
                  <span>IDR</span>
                </div>
              </div>
            </div>
            <div>
              <EditOutlined />
              <DeleteOutlined />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
