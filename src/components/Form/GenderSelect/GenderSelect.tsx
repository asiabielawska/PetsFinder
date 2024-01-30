import { BasicSelect } from "../../BasicSelect/BasicSelect";

export const GenderSelect = () => {
  return (
    <>
      <BasicSelect
        selectLabel={"Płeć"}
        selectValue={["Ona", "On", "Nie wiem"]}
      ></BasicSelect>
    </>
  );
};
