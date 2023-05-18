import React,{ useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Editor from './Containers/Editor';
import Home from './Containers/Home';
import Header from './Components/Header';
import SignIn from './Components/SignIn/SignIn';
import AnalyticsSection from './Components/AnalyticsSection/AnalyticsSection';
import DashboardHeader from './Components/DashboardHeader/DashboardHeader';
import SettingsSection from './Components/SettingsSection/SettingsSection';
import UsersSection from './Components/UsersSection/UsersSection';


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <BrowserRouter>
    <div className="App">
    
      
  <Header />
  <Switch>
    <Route path='/' exact component={Home} />
  
    <Route path="/signin" exact component={SignIn} />
    <Route path="/dashboard" exact component={AdminDashboard} />
    <Route path='/about' exact render={() => { window.location.href = 'https://cginfinity.com';
           return <Redirect to='/' />;
            }}/>
    <Route path='/:id' exact component={Editor} />
  </Switch>
  </div>

    </BrowserRouter>
  );
}
const Home1= () => {
  return <h1>Welcome to the Home Page</h1>;
};

const AdminDashboard = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="content">
        <UsersSection />
        <AnalyticsSection />
        <SettingsSection />
      </div>
    </div>
  );
};

export default App;



