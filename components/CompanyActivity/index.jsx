import { List } from 'antd';
import TitleCard from '../TitleCard';

export default function CompanyActivity() {
  const data = [
    {
      title: 'Yusuf baru saja pergi ke kantor',
      description: 'hari ini, 06:00',
    },
    {
      title:
        'Andi menyelesaikan berkas laporan bulan kemarin dengan rekan sekantornya',
      description: 'kemarin, 17:32',
    },
    {
      title:
        'Andi menyelesaikan berkas laporan bulan kemarin dengan rekan sekantornya',
      description: 'hari ini, 06:00',
    },
  ];
  return (
    <div className="card card-fit">
      <div className="card-content">
        <TitleCard title="Aktivitas" />
        <div className="card-info-wrap">
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item style={{ borderBottom: 'none' }}>
                <List.Item.Meta
                  title={<a href="https://ant.design">{item.title}</a>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
}
