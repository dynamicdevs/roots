import { FC } from "react";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";

const SubscribeBox:FC = () => (
  <div className="rounded bg-gradient-to-r from-gradient-ocean-310 to-gradient-ocean-320  text-primary-grey-600 p-4">
    <h3 className="text-heading-06 font-bold">
      Suscríbete
    </h3>
    <p className="text-paragraph-04">Recibe notificaciones de nuestras actualizaciones</p>
    <div className="flex space-x-2 mt-4">
      <Input />
      <Button>Suscribirse</Button>    
    </div>
  </div>
)

export default SubscribeBox;