//iconos
import { t } from 'i18next';
import { FaCode, FaServer, FaCheckCircle } from 'react-icons/fa';

const getServices = ()=>
    //services data
    [
      {
      name: t("frontendDev"),
      icon: <FaCode className="text-4xl text-sky-600" />,
      description: t("frontendDescription")
    },
    {
      name: t("backendDev"),
      icon: <FaServer className="text-4xl text-sky-600" />,
      description: t("backendDescription"),
    },
    {name: t("boostDev"),
      icon: <FaCheckCircle className="text-4xl text-sky-600" />,
      description: t("boostDescription"),
    }
]



export default getServices;