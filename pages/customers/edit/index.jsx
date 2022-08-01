import CustomersForm from '../../../components/CustomersForm';
import Template from '../../../components/Template';
import { useRouter } from 'next/router';

export default function EditCustomer() {
  const router = useRouter();
  return (
    <Template defaultSelectedKeys="2">
      <main>
        <CustomersForm dataEdit={router?.query} />
      </main>
    </Template>
  );
}
