import React, { useState, useEffect } from "react";
import Axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";

import { Loader } from "./loader";

import { Container } from "./styles";

import { appColumns, getURL, mapToProps, isEmpty } from "../constants";

const App = () => {
  // State
  const [data, setData] = useState([]);
  const [loading, toogleLoading] = useState(true);

  // Common Functions
  const makeRequest = async () => {
    const {
      data: { results }
    } = await Axios.get(getURL());
    setData(mapToProps(results));
    toogleLoading(!loading);
  };

  // Use Effects
  useEffect(() => {
    makeRequest();
  }, []);

  // Component properties
  const customCellEditFactory = {
    mode: "click",
    beforeSaveCell: (oldValue, newValue, row, column, done) => {
      if (isEmpty(newValue)) done(false);
      const { index } = row;
      const updatedRow = {
        ...row,
        [column.dataField]: newValue,
        gender: "cool changed !"
      };
      const updatedData = [
        ...data.slice(0, index),
        updatedRow,
        ...data.slice(index + 1)
      ];
      done();
      setData(updatedData);
      return { async: true };
    }
  };

  return (
    <Container>
      <>
        {loading ? <Loader /> : null}
        <BootstrapTable
          striped
          keyField="index"
          data={data}
          columns={appColumns}
          cellEdit={cellEditFactory(customCellEditFactory)}
        />
      </>
    </Container>
  );
};

export default App;
