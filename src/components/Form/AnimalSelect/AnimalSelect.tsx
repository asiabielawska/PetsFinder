import { BasicSelect } from "../../BasicSelect/BasicSelect";

export const AnimalSelect = () => {
  return (
    <>
      <BasicSelect
        selectLabel={"Zwierzę*"}
        selectValue={["Piesek", "Kotek", "Ptak", "Inne"]}
      ></BasicSelect>
    </>
  );
};
