import { Switch } from 'antd';
import Image from 'next/image';
import {
  EditOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
} from '@ant-design/icons';

export default function CompanyBiodata() {
  return (
    <div className="card">
      <Image
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        width={500}
        height={150}
        alt="img-company"
      />
      <div className="img-profile">
        <Image
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          width={130}
          height={130}
          alt="img-company"
        />
      </div>
      <div className="card-content">
        <div className="title-biodata">
          <h2>Mitramas Infosys Global</h2>
          <span>Layanan IT</span>
          <div>
            <EditOutlined />
            <span>Sunting Profil</span>
          </div>
        </div>
        <ul>
          <li>
            <span>Status Perusahaan</span>
            <div>
              <span>Aktif</span>
              <Switch defaultChecked />
            </div>
          </li>
          <li>
            <span>Singkatan</span>
            <div>
              <span>MIG</span>
            </div>
          </li>
          <li>
            <span>Alamat Perusahaan</span>
            <div>
              <span>Jl. Tebet Raya No.42 Jakarta Selatan</span>
            </div>
          </li>
          <li>
            <span>Penanggung Jawab (PIC)</span>
            <div>
              <span>John Doe</span>
            </div>
          </li>
          <li>
            <span>Tanggal PKP</span>
            <div>
              <span>03 Maret 2021</span>
            </div>
          </li>
          <li>
            <span>Email</span>
            <div className="icon-desc">
              <MailOutlined />
              <span>mig@mitrasolusi.group</span>
            </div>
          </li>
          <li>
            <span>Telp</span>
            <div className="icon-desc">
              <PhoneOutlined />
              <span>021-5678-1234</span>
            </div>
          </li>
          <li>
            <span>Situs Web</span>
            <div className="icon-desc">
              <GlobalOutlined />
              <span>mitramas.com</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
