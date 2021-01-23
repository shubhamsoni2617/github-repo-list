import React from "react";
import Card from "../card";

const CardList = ({ list = [], loading }) => {
  return (
    <div>
      {list.length ? (
        list.map((item) => <Card item={item} key={item.id} />)
      ) : loading ? (
        ""
      ) : (
        <h3>No Data Found</h3>
      )}
    </div>
  );
};

export default CardList;
