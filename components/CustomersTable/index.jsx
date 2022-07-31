import { Table, Badge, Space, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

export default function CustomerTable({ data, loading, onDelete }) {
  const router = useRouter();

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      },
      width: '20%',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      width: '30%',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      width: '10%',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone_number',
      width: '10%',
    },
    {
      title: 'Job Title',
      dataIndex: 'job_title',
      width: '20%',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (status) =>
        status ? (
          <span>
            <Badge status="success" /> Active
          </span>
        ) : (
          <span>
            <Badge status="error" /> Inactive
          </span>
        ),
      filters: [
        {
          text: 'Active',
          value: true,
        },
        {
          text: 'Inactive',
          value: false,
        },
      ],
      onFilter: (value, record) => record.status === value,
      width: '10%',
    },
    {
      title: 'Action',
      dataIndex: 'operation',
      key: 'operation',
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() =>
              router.push({
                pathname: '/customers/edit',
                query: record,
              })
            }
          >
            Edit
          </Button>
          <Button
            type="primary"
            icon={<DeleteOutlined />}
            danger
            onClick={() => onDelete(record.id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Table
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={data}
        loading={loading}
      />
    </div>
  );
}
