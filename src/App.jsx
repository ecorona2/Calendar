import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <Routes>
          <Route
              path="/Calendar/"
              element={
                  <h1>Welcome to the Calendar!</h1>
              }
          />
          <Route path="*" element={
              <h1>Page was not found!</h1>
          } />
      </Routes>
  )
}

export default App
