import React from "react";
import { LoadingOverlay, Spinner } from "./styles";

export const Loader = ({ size = "", fixed = true }) => (
  <LoadingOverlay fixed={fixed}>
    <Spinner size={size} />
  </LoadingOverlay>
);
