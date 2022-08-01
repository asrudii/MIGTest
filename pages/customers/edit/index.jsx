import CustomersForm from '../../../components/CustomersForm';
import Template from '../../../components/Template';

export default function EditCustomer() {
  let dataEdit = localStorage.getItem('data-edit');
  if (dataEdit) dataEdit = JSON.parse(dataEdit);

  return (
    <Template defaultSelectedKeys="2">
      <main>
        <CustomersForm dataEdit={dataEdit} />
      </main>
    </Template>
  );
}
