import { SymbolIcon } from '@dynamic-devs/symbol-react';
import { Transition } from '@headlessui/react';
import { FC, useState } from 'react';
import Button from '@app/elements/atoms/Button';
import Input from '@app/elements/atoms/Input';

const SubscribeBox:FC = () => {

  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  return (
    <div className="rounded bg-gradient-to-r from-gradient-ocean-310 to-gradient-ocean-320  text-primary-grey-600 p-4 lg:p-6">
        <div className={showSuccess ? 'hidden': 'block'}>
          <h3 className="text-heading-06 lg:text-heading-05 font-bold">
            Suscríbete
          </h3>
          <p className="text-paragraph-04 lg:text-paragraph-03">
            Recibe notificaciones de nuestras actualizaciones
          </p>
          <div className="flex space-x-2 mt-4">
            <Input placeholder="E-mail" onKeyDown={() => setShowSuccess(true)} />
            <Button onClick={() => setShowSuccess(true)}>Suscribirse</Button>
          </div>
        </div>
        <Transition 
          show={showSuccess}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className={`flex flex-col justify-center items-center text-primary-grey-600 h-[104px] lg:h-[136px]`}>
            <SymbolIcon name="star" iconClass='symbol-xl' type="outline" />
            <h3 className='text-heading-06 font-bold'>¡Gracias por suscribirte!</h3>
          </div> 
        </Transition>

    </div>
  );
};

export default SubscribeBox;
