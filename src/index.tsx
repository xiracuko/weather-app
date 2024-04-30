import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WeatherBlock from './components/Pages/WeatherBlock';

const container = (document.getElementById("root")!);
const root = ReactDOM.createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/weather",
        element: <WeatherBlock time={0} icon={''} temp_c={0} text={''} city={''} country={''} humidity={''} windSpeed={''} />
      }
    ]
  }
])

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
