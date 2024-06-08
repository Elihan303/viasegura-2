import { useLocation, useNavigate } from "react-router";
import { GenericForm } from "../../components/GenericForm/index.tsx";

import {
  saveBusStation,
  updateBusStation,
} from "../../firebase/db/busStation/index.ts";

export const BusStationForm = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const EditValue = location.state?.value;

  const initialValues = {
    nombre: EditValue ? EditValue.nombre : "",
  };
  const fields = [
    { name: "nombre", label: "Nombre de parada", type: "text" },
    { name: "ubicacion", label: "Ubicacion", type: "text" },
  ];

  const handleSubmit = async (values) => {
    if (EditValue) {
      await updateBusStation(EditValue.Id, values);
    } else {
      await saveBusStation(values);
    }
  };
  return (
    <>
      <GenericForm
        initialValues={initialValues}
        fields={fields}
        onSubmit={handleSubmit}
        title={EditValue ? "Editar una parada" : "Registra una parada"}
        navigationToFinish={() => navigation("/paradas")}
      />
    </>
  );
};
