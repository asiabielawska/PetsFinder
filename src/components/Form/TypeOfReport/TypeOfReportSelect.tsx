import { BasicSelect } from "../../BasicSelect/BasicSelect";

export const TypeOfReportSelect = () => {
  return (
    <>
      <BasicSelect
        selectLabel={"Typ zgłoszenia*"}
        selectValue={["Zgubiono", "Znaleziono", "Oddam", "Szukam"]}
      ></BasicSelect>
    </>
  );
};
