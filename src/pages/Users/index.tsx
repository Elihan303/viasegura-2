import { GenericTable } from "../../components/GenericTable";
import { useNavigate } from "react-router";
import { MainLayout } from "../../layouts/MainLayout.tsx";
import { IUser } from "../../firebase/db/user/types.ts";
import { deleteUser, getUsers } from "../../firebase/db/user/index.ts";

export const Users = () => {
  const navigation = useNavigate();
  const navigateToEdit = (value: IUser) => {
    navigation("/usuarios/formulario", {
      state: { value: value },
    });
  };
  return (
    <>
      <MainLayout isGenericTable={true}>
        {/* Contenido principal */}

        <GenericTable<IUser>
          title="Usuarios"
          headers={["Rol", "Correo", "Acciones"]}
          fetchData={getUsers}
          deleteItem={deleteUser}
          navigateToEdit={navigateToEdit}
          createButtonPath="/usuarios/formulario"
        />
      </MainLayout>
    </>
  );
};
