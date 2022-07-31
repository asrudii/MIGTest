import { Button, Form, notification, Input, Modal, Switch } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function CustomersForm({ dataEdit }) {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const router = useRouter();
  const { confirm } = Modal;

  const layout = {
    labelCol: {
      sm: {
        span: 6,
      },
      md: {
        span: 3,
      },
      xxl: {
        span: 2,
      },
    },
    wrapperCol: {
      sm: {
        span: 18,
      },
      md: {
        span: 14,
      },
    },
  };

  const onFinish = async (values) => {
    confirm({
      icon: <ExclamationCircleOutlined />,
      content: 'Is the data correct??',

      async onOk() {
        try {
          setLoading(true);
          let token = localStorage.getItem('token');
          const res = await axios.post(
            `${process.env.NEXT_PUBLIC_API}/customers`,
            { ...values, status: true },
            {
              headers: {
                Authorization: token,
              },
            }
          );

          notification['success']({
            message: 'Item Saved',
            description: res.message,
            placement: 'top',
          });
          form.resetFields();
          setLoading(false);
        } catch (error) {
          setLoading(false);
          notification['error']({
            message: 'save failed',
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
  const handEdit = (values) => {
    confirm({
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure want to edit this item?',

      async onOk() {
        try {
          setLoading(true);
          let token = localStorage.getItem('token');
          const res = await axios.put(
            `${process.env.NEXT_PUBLIC_API}/customers`,
            { id: dataEdit.id, ...values },
            {
              headers: {
                Authorization: token,
              },
            }
          );

          notification['success']({
            message: 'Item Edited',
            description: res.message,
            placement: 'top',
          });
          form.resetFields();
          router.push('/customers');
          setLoading(false);
        } catch (error) {
          setLoading(false);
          notification['error']({
            message: 'edit failed',
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

  return (
    <Form
      form={form}
      {...layout}
      initialValues={dataEdit}
      name="nest-messages"
      labelAlign="left"
      onFinish={dataEdit ? handEdit : onFinish}
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: 'Please input name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone_number"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input phone number!' }]}
      >
        <Input style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item name="address" label="Address">
        <Input />
      </Form.Item>

      <Form.Item name="country" label="Country">
        <Input />
      </Form.Item>

      <Form.Item name="job_title" label="Job Title">
        <Input />
      </Form.Item>

      {dataEdit && (
        <Form.Item name="status" label="Switch">
          <Switch defaultChecked={dataEdit.status === 'true' ? true : false} />
        </Form.Item>
      )}

      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          sm: { offset: 6 },
          md: { offset: 3 },
          xxl: { offset: 2 },
        }}
      >
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
