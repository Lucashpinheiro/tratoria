import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalCss } from './styles'
import Home from './pages/Home'
import Restaurantes from './pages/Restaurantes'
import { store } from './store'
import Cart from './components/Cart'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/restaurantes/:id',
    element: <Restaurantes />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalCss />
      <RouterProvider router={rotas} />
      <Cart />
    </Provider>
  )
}

export default App
