import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import UsersList from "./pages/UsersList";
import UserDetails from "./pages/UserDetails";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/users" replace />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
