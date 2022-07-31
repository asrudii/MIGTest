import { Input, Modal, notification, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import CustomerTable from '../../components/CustomersTable';
import Template from '../../components/Template';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Customers() {
  const [data, setData] = useState();
  const [originalData, setOriginalData] = useState();
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState('');
  const { confirm } = Modal;
  const { Search } = Input;
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let token = localStorage.getItem('token');
        setLoading(true);
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/customers`,
          {
            headers: {
              Authorization: token,
            },
          }
        );

        setData(res.data.data);
        setOriginalData(res.data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        notification['error']({
          message: 'Get data failed',
          description: error.message,
          placement: 'top',
        });
        if (error.response.status === 401) {
          router.push('/login');
        }
      }
    };

    fetchData();
  }, []);

  const handDelete = (id) => {
    confirm({
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure want to delete this item?',

      async onOk() {
        try {
          let token = localStorage.getItem('token');
          setLoading(true);
          await axios.delete(`${process.env.NEXT_PUBLIC_API}/customers`, {
            headers: {
              Authorization: token,
            },
            data: {
              id,
            },
          });

          notification['success']({
            message: 'Item Deleted',
            description: 'successed delete item from customers',
            placement: 'top',
          });

          let data = originalData.filter((item) => item.id !== id);
          setData(data);
          setOriginalData(data);

          setLoading(false);
        } catch (error) {
          setLoading(false);
          notification['error']({
            message: 'Delete failed',
            description: error.message,
            placement: 'top',
          });
          if (error.response.status === 401) {
            router.push('/login');
          }
        }
      },
    });
  };

  const onSearch = () => {
    let data = originalData.filter((item) => {
      let name = item.name?.toLocaleLowerCase();
      let address = item.address?.toLocaleLowerCase();
      let country = item.country?.toLocaleLowerCase();
      let job_title = item.job_title?.toLocaleLowerCase();
      let phone_number = item.phone_number;
      let key = keyword?.toLocaleLowerCase();

      return (
        name.includes(key) ||
        address.includes(key) ||
        country.includes(key) ||
        job_title.includes(key) ||
        phone_number.includes(key)
      );
    });
    setData(data);
  };

  return (
    <Template defaultSelectedKeys="2">
      <Head>
        <title>Customers - MIG Test</title>
        <meta name="description" content="Customers page MIG Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="btn-table">
          {data?.length !== originalData?.length && (
            <Button
              type="secondary"
              onClick={() => setData(originalData)}
              danger
            >
              Reset
            </Button>
          )}
          <div>
            <Search
              placeholder="input search text"
              onChange={(e) => setKeyword(e.target.value)}
              onSearch={onSearch}
              enterButton
            />
          </div>
          <Link href="/customers/add">
            <Button type="primary">Add Customer</Button>
          </Link>
        </div>
        <CustomerTable data={data} loading={loading} onDelete={handDelete} />
      </main>
    </Template>
  );
}
