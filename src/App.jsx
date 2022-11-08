import { Routes, Route } from "react-router-dom";
import CalendarView from "./pages/CalendarView";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
      <Routes>
          <Route path="/Calendar/" element={
              <CalendarView/>
          } />
          <Route path="*" element={
              <NotFound/>
          } />
      </Routes>
  )
}

export default App
