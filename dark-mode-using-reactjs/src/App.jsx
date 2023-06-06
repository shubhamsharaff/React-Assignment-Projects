import React, { createContext, useContext, useState } from "react";
import "./index.css";

// Creating the context
const ThemeContext = createContext();

// Provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Consumer hook
const useTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return { theme, toggleTheme };
};

// Dashboard component
const Dashboard = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`dashboard ${theme}`}>
      <h1 className="dashboard__title">Dashboard</h1>
      <div className="dashboard__content">
        <div className="dashboard__widget">
          <h2 className="dashboard__widget-title">Sales</h2>
          <p className="dashboard__widget-value">$10,000</p>
        </div>
        <div className="dashboard__widget">
          <h2 className="dashboard__widget-title">Orders</h2>
          <p className="dashboard__widget-value">500</p>
        </div>
        <div className="dashboard__widget">
          <h2 className="dashboard__widget-title">Users</h2>
          <p className="dashboard__widget-value">1,000</p>
        </div>
      </div>
      <button className="theme-toggle-button" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

// App component
const App = () => {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
