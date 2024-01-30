import { useNavigate } from "react-router-dom";
import { Heading, MainContent } from "../../styled";
import {
  BrownBackgroundButton,
  FormTextField,
  TwoButtons,
  WhiteBackgroundButton,
} from "./styled";
import { BasicDatePicker } from "./DatePicker/BasicDatePicker";
import { TypeOfReportSelect } from "./TypeOfReport/TypeOfReportSelect";
import { AnimalSelect } from "./AnimalSelect/AnimalSelect";
import { GenderSelect } from "./GenderSelect/GenderSelect";

const mockForm = [
  { id: "miejscowosc", label: "Miejscowość*" },
  { id: "wiek", label: "Wiek" },
  { id: "kolor", label: "Kolor" },
  { id: "rasa", label: "Rasa" },
  {
    id: "opis",
    label: "Krótki opis zwierzęcia/sytuacji",
    multiline: true,
    rows: 4,
  },
  {
    id: "zdjęcie",
    label: "Dodaj zdjęcie",
    multiline: true,
    rows: 4,
  },
];

export const Form = () => {
  const navigate = useNavigate();
  return (
    <>
      <MainContent>
        <Heading>Dane</Heading>
        <TypeOfReportSelect />
        <AnimalSelect />
        <BasicDatePicker />
        <GenderSelect />
        {mockForm.map(({ id, label, multiline, rows }) => (
          <FormTextField
            key={id}
            id={id}
            label={label}
            variant="outlined"
            multiline={multiline}
            rows={rows}
          />
        ))}

        <TwoButtons>
          <WhiteBackgroundButton onClick={() => navigate("/")}>
            Cofnij
          </WhiteBackgroundButton>
          <BrownBackgroundButton>Dodaj ogłoszenie</BrownBackgroundButton>
        </TwoButtons>
      </MainContent>
    </>
  );
};
