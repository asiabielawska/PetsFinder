import { useNavigate } from "react-router-dom";
import { Heading, MainContent } from "../../styled";
import {
  BrownBackgroundButton,
  FormTextField,
  TwoButtons,
  WhiteBackgroundButton,
} from "./styled";

const mockForm = [
  { id: "miejscowosc", label: "Miejscowość*" },
  { id: "data", label: "Data*" },
  {
    id: "gatunek-zwierzecia",
    label: "Gatunek zwierzęcia*",
  },
  { id: "wiek", label: "Wiek" },
  { id: "plec", label: "Płeć" },
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
        <TwoButtons>
          <WhiteBackgroundButton>Zgubiono</WhiteBackgroundButton>
          <WhiteBackgroundButton>Znaleziono</WhiteBackgroundButton>
          <WhiteBackgroundButton>Oddam</WhiteBackgroundButton>
          <WhiteBackgroundButton>Szukam</WhiteBackgroundButton>
        </TwoButtons>
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
