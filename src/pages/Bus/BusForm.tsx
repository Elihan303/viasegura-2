import { useLocation, useNavigate } from "react-router";
import { GenericForm } from "../../components/GenericForm/index.tsx";
import { saveBus, updateBus } from "../../firebase/db/bus/index.ts";

export const BusForm = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const EditValue = location.state?.value;

  const initialValues = {
    marca: EditValue ? EditValue.marca : "",
    cantidadPersonas: EditValue ? EditValue.cantidadPersonas : "",
  };
  const fields = [
    { name: "marca", label: "Marca", type: "text" },
    {
      name: "cantidadPersonas",
      label: "Cantidad de personas",
      type: "text",
    },
  ];
  const handleSubmit = async (values) => {
    if (EditValue) {
      await updateBus(EditValue.Id, values);
    } else {
      await saveBus(values);
    }
  };
  return (
    <>
      <GenericForm
        initialValues={initialValues}
        fields={fields}
        onSubmit={handleSubmit}
        title={EditValue ? "Edita un autobus" : "Registra un autobus"}
        navigationToFinish={() => navigation("/autobuses")}
      />
    </>
  );
};
