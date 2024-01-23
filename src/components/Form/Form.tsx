import { TextField } from "@mui/material";
import { Heading, MainContent } from "../../styled";

const mockForm = [
  { id: "miejscowosc", label: "Miejscowość*" },
  { id: "data", label: "Data*" },
  { id: "gatunek-zwierzecia", label: "Gatunek zwierzęcia*" },
  { id: "wiek", label: "Wiek" },
  { id: "plec", label: "Płeć" },
  { id: "kolor", label: "Kolor" },
  { id: "rasa", label: "Rasa" },
];

export const Form = () => {
  return (
    <>
      <MainContent>
        <Heading>Dane</Heading>
        {mockForm.map(({ id, label }) => (
          <TextField
            id={id}
            label={label}
            variant="outlined"
            sx={{ color: "#917B60" }}
            style={{ marginTop: 15, borderRadius: "inherit" }}
          />
        ))}
        <TextField
          id="Opis"
          label="Krótki opis"
          multiline
          rows={4}
          variant="outlined"
          style={{ marginTop: 15 }}
        />
      </MainContent>
    </>
  );
};
