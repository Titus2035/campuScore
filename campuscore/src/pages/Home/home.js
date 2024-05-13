import React from "react";
import "./home.css";
import Header from "../../components/Header/header";
import ContentHome from "../../components/ContentHome/contentHome";

function Home() {
  return (
    <div className="home">
      {/* <h1>Hello Home</h1> */}
      <Header></Header>
      <ContentHome></ContentHome>
    </div>
  );
}

export default Home;
