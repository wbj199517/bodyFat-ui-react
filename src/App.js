import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import HomeComponent from "./components/home-page.component";
import EditFood from "./components/food/edit-food.component";
import FoodList from  "./components/food/food-list.component";
import UserProfile from "./components/user/user-profile.component";

function App() {
  return (
   <Router>
     <Navbar />
     <br/>
     <Route path="/home" exact component = {HomeComponent} />
     <Route path="/edit/:id" exact component = {EditFood} />
     <Route path="/food" exact component = {FoodList} />
     <Route path="/user" exact component = {UserProfile} />


   </Router>
  );
}

export default App;
