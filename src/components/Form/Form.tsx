import { Heading, MainContent } from "../../styled";
import { FormTextField } from "./styled";

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
];

export const Form = () => {
  return (
    <>
      <MainContent>
        <Heading>Dane</Heading>
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
      </MainContent>
    </>
  );
};
