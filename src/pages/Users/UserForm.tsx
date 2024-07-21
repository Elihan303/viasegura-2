import { useLocation, useNavigate } from "react-router";
import { GenericForm } from "../../components/GenericForm/index.tsx";
import { saveUser, updateUser } from "../../firebase/db/user/index.ts";

export const UserForm = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const EditValue = location.state?.value;

  const initialValues = {
    rol: EditValue ? EditValue.rol : "",
    email: EditValue ? EditValue.email : "",
  };
  const fields = [
    { name: "rol", label: "Rol", type: "text" },
    { name: "email", label: "Correo", type: "text" },
  ];

  const handleSubmit = async (values) => {
    if (EditValue) {
      await updateUser(EditValue.Id, values);
    } else {
      await saveUser(values);
    }
  };
  return (
    <>
      <GenericForm
        initialValues={initialValues}
        fields={fields}
        onSubmit={handleSubmit}
        title={EditValue ? "Editar una usuario" : "Registra una usuario"}
        navigationToFinish={() => navigation("/usuarios")}
      />
    </>
  );
};
