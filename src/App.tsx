import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* add routes with layouts */}
        <Route path="/admin" component={Admin} />
        <Route path="/auth" component={Auth} />

      </Routes>
    </BrowserRouter>
  )
}

export default App