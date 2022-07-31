import { List } from 'antd';
import TitleCard from '../TitleCard';

export default function CompanyActivity() {
  const data = [
    {
      title: 'Ant Design Title 1',
      description: 'hari ini, 06:00',
    },
    {
      title: 'Ant Design Title 2',
      description: 'kemarin, 17:32',
    },
    {
      title: 'Ant Design Title 3',
      description: 'hari ini, 06:00',
    },
  ];
  return (
    <div className="card">
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
