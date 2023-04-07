import React from "react";
import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const book = useLoaderData();
 
  return <div>Book info</div>;
};

export default BookDetails;
