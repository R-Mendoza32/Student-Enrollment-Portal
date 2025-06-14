import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SharedLayout } from "@/components/shared-layout";
import Index from "./pages/Index";
import Faculty from "./pages/Faculty";
import Registrar from "./pages/Registrar";
import Accounting from "./pages/Accounting";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import AccessControl from "./pages/AccessControl";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <SharedLayout breadcrumb="Student Enrollment">
          <Index />
        </SharedLayout>
      } />
      <Route path="/faculty" element={
        <SharedLayout breadcrumb="Faculty Management">
          <div className="p-4">
            <Faculty />
          </div>
        </SharedLayout>
      } />
      <Route path="/registrar" element={
        <SharedLayout breadcrumb="Registrar">
          <div className="p-4">
            <Registrar />
          </div>
        </SharedLayout>
      } />
      <Route path="/accounting" element={
        <SharedLayout breadcrumb="Accounting">
          <div className="p-4">
            <Accounting />
          </div>
        </SharedLayout>
      } />
      <Route path="/reports" element={
        <SharedLayout breadcrumb="Reports">
          <div className="p-4">
            <Reports />
          </div>
        </SharedLayout>
      } />
      <Route path="/settings" element={
        <SharedLayout breadcrumb="Settings">
          <div className="p-4">
            <Settings />
          </div>
        </SharedLayout>
      } />
      <Route path="/access-control" element={
        <SharedLayout breadcrumb="Access Control">
          <div className="p-4">
            <AccessControl />
          </div>
        </SharedLayout>
      } />
      <Route path="/login" element={<Login />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
