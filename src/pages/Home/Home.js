import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MovieList from "./MovieList";


export function Home() {
  return(
    <>
      <Header />
      <MovieList />
      <Footer />
    </>
  );
}