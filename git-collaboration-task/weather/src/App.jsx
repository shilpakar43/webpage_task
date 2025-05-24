
import './App.css'
import { Outlet, Route, Routes } from 'react-router'


const Main = () => {
  <div>
    <Row>
      <h1>
        Weather App
      </h1>
    </Row>
    <RoW>
      <Outlet />
    </RoW>
  </div>
}

function App() {

  return (
    <>
      <Routes>
        
        <Route path="/" element={<Main />}>
          <Route path='' element={<Location />} />
          <Route path='' element={<b />} />
          <Route path='' element={<c />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
