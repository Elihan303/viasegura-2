import { GenericTable } from "../../components/GenericTable";
import { useNavigate } from "react-router";
import { IBus } from "../../firebase/db/bus/types.ts";
import { deleteBus, getBus } from "../../firebase/db/bus/index.ts";
import { MainLayout } from "../../layouts/MainLayout.tsx";

export const Bus = () => {
  const navigation = useNavigate();
  const navigateToEdit = (value: IBus) => {
    navigation("/autobuses/formulario", {
      state: { value: value },
    });
  };
  return (
    <>
      <MainLayout isGenericTable={true}>
        {/* Contenido principal */}

        <GenericTable<IBus>
          title="Autobuses"
          headers={["Marca", "Numero de pasajeros", "Acciones"]}
          fetchData={getBus}
          deleteItem={deleteBus}
          navigateToEdit={navigateToEdit}
          createButtonPath="/autobuses/formulario"
        />
      </MainLayout>
    </>
  );
};
