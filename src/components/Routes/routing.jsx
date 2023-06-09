import { Routes, Route } from "react-router-dom";
import RegisterForm from "../../Views/SingUp/SingUpAsilo";
import Login from "../../Views/Login/Login";
import HelloWorld from "../../Views/prueba/home";
import Reporte from "../../Views/ReporteDonaciones/Reporte";
import ListaRecoger from "../../Views/ListaRecojos/ListaRecoger";
import ListCamp from "../../Views/ManageCamp/ListCamp";
import FormCampaing from "../../Views/ManageCamp/NewCampaing/FormCampaing";
import { EditFormCampaing } from "../../Views/ManageCamp/EditCamp/EditForm";

const Routing = () => {
  return (
    <Routes>
      <Route path="/AsiloDeploy/" element={<Login />} /> {/* Ruta raíz */}
      <Route path="/AsiloDeploy/login" element={<Login />} />
      <Route path="/AsiloDeploy/register" element={<RegisterForm />} />
      <Route path="/AsiloDeploy/hello" element={<HelloWorld/>}></Route>
      <Route path="/AsiloDeploy/Campaings" element={<ListCamp/>} />
      <Route path="/AsiloDeploy/NewCampaing" element={<FormCampaing/>} />
      <Route path="/AsiloDeploy/EditCampaing/:id" element={<EditFormCampaing/>} />
      <Route path="/AsiloDeploy/report/:id" element={<Reporte/>}></Route>
      <Route path="/AsiloDeploy/lista/:id" element={<ListaRecoger/>}></Route>
    </Routes>
  );
};

export default Routing;
