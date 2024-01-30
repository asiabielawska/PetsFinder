import { useNavigate } from "react-router-dom";
import { Heading, MainContent } from "../../styled";
import {
  AddImg,
  BrownBackgroundButton,
  FormTextField,
  TwoButtons,
  WhiteBackgroundButton,
} from "./styled";
import { BasicDatePicker } from "./DatePicker/BasicDatePicker";
import { TypeOfReportSelect } from "./TypeOfReport/TypeOfReportSelect";
import { AnimalSelect } from "./AnimalSelect/AnimalSelect";
import { GenderSelect } from "./GenderSelect/GenderSelect";
import { useRef, useState } from "react";

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
];

export const Form = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState<string | null>();
  const ref = useRef<HTMLInputElement | null>(null);
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
        <input
          ref={ref}
          type="file"
          style={{ display: "none" }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const reader = new FileReader();
            reader.onloadend = () => {
              setImage(reader.result as string);
            };
            reader.readAsDataURL(e.target.files![0]!);
          }}
        />
        <AddImg
          onClick={() => {
            console.log("click");
            ref.current?.click();
          }}
        >
          Dodaj zdjęcie
        </AddImg>
        {image && <img src={image} />}

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
