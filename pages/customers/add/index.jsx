import CustomersForm from '../../../components/CustomersForm';
import Template from '../../../components/Template';

export default function AddCustomer() {
  return (
    <Template defaultSelectedKeys="2">
      <main>
        <CustomersForm />
      </main>
    </Template>
  );
}
