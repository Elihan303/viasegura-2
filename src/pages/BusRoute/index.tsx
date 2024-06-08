import { GenericTable } from "../../components/GenericTable";
import { useNavigate } from "react-router";
import { MainLayout } from "../../layouts/MainLayout.tsx";
import { IBusRoute } from "../../firebase/db/busRoute/types.ts";
import {
  deleteBusRoute,
  getBusRoute,
} from "../../firebase/db/busRoute/index.ts";

export const BusRoute = () => {
  const navigation = useNavigate();
  const navigateToEdit = (value: IBusRoute) => {
    navigation("/rutas/formulario", {
      state: { value: value },
    });
  };
  return (
    <>
      <MainLayout isGenericTable={true}>
        {/* Contenido principal */}

        <GenericTable<IBusRoute>
          title="Rutas"
          headers={["Nombre de ruta", "Acciones"]}
          fetchData={getBusRoute}
          deleteItem={deleteBusRoute}
          navigateToEdit={navigateToEdit}
          createButtonPath="/rutas/formulario"
        />
      </MainLayout>
    </>
  );
};
