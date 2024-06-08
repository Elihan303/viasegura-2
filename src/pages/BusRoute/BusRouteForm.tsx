import { useLocation, useNavigate } from "react-router";
import { GenericForm } from "../../components/GenericForm/index.tsx";
import {
  saveBusRoute,
  updateBusRoute,
} from "../../firebase/db/busRoute/index.ts";

export const BusRouteForm = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const EditValue = location.state?.value;

  const initialValues = {
    nombre: EditValue ? EditValue.nombre : "",
  };
  const fields = [{ name: "nombre", label: "Nombre de ruta", type: "text" }];

  const handleSubmit = async (values) => {
    if (EditValue) {
      await updateBusRoute(EditValue.Id, values);
    } else {
      await saveBusRoute(values);
    }
  };
  return (
    <>
      <GenericForm
        initialValues={initialValues}
        fields={fields}
        onSubmit={handleSubmit}
        title={EditValue ? "Edita un ruta" : "Registra una ruta"}
        navigationToFinish={() => navigation("/rutas")}
      />
    </>
  );
};
