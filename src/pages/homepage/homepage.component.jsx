import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";


const HomePage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
