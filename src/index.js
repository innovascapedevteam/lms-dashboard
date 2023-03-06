import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
// import Resources from "./components/Resources";
// import Assignments from "./components/Assignments";
// import CourseInfo from "./components/CourseInfo";
// import GradeCards from "./components/GradeCards";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
   
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
        <Route path="/resources" element={<Resources/>} />
        <Route path="/assignments" element={<Assignments/>} />
        <Route path="/courseinfo" element={<CourseInfo/>} />
        <Route path="/gradecards" element={<GradeCards/>} />
        </Route>
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
