import { useContext } from "react";
import { ActivityContext } from "../context/ActivityContext";

export const useActicity = () => {
  const context = useContext(ActivityContext);
  if (!context)
    throw new Error("useActivity must be used whithin an ActivitieProvider");
  return context;
};
