import './App.css';
import Login from './Components/Login';
import Trending from './Components/Trending';
import Collection from './Components/Collection';
import CategoryPhoto from './Components/CategoryPhoto';
import {
	BrowserRouter as Router,
	Routes,
	Route,
  useRoutes,
	Link
} from 'react-router-dom';


const App = () => {
  let routes = useRoutes([
    { path: "/home", element: <Trending /> },
    { path: "/collection", element: <Collection /> },
    { path: "/categoryphoto", element: <CategoryPhoto /> },
    { path: "/", element: <Login /> }
    
  ]);
  return routes;
};  

const AppWrapper = () => {
  return (
    <Router>
      <App /> 
    </Router>
  );
};

// function App() {  

//   let routes = useRoutes([
//     { path: "/", element: <Login /> }
//   ]);
//   return routes;

//   return (
//     <>
//       {/* <Routes>
//         <Route exact path='/' element={< Login />}></Route>  
//       </Routes> */}
      
//       {/* <Login /> */}
//       {/* <Navigation /> */}
//       {/* <Trending /> */}
//       {/* <Collection /> */}
//       {/* <CategoryPhoto /> */}

//       <Router>
//       <App />
//     </Router>
//     </>
//   );
// }

export default AppWrapper;
