import { GenericTable } from "../../components/GenericTable";
import { useNavigate } from "react-router";
import { MainLayout } from "../../layouts/MainLayout.tsx";

import { IBusStation } from "../../firebase/db/busStation/types.ts";
import {
  deleteBusStation,
  getBusStation,
} from "../../firebase/db/busStation/index.ts";

export const BusStation = () => {
  const navigation = useNavigate();
  const navigateToEdit = (value: IBusStation) => {
    navigation("/paradas/formulario", {
      state: { value: value },
    });
  };
  return (
    <>
      <MainLayout isGenericTable={true}>
        {/* Contenido principal */}

        <GenericTable<IBusStation>
          title="Paradas"
          headers={["Nombre de parada", "Ubicacion", "Acciones"]}
          fetchData={getBusStation}
          deleteItem={deleteBusStation}
          navigateToEdit={navigateToEdit}
          createButtonPath="/paradas/formulario"
        />
      </MainLayout>
    </>
  );
};
