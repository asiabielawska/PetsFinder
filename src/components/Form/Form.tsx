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
import { useRef, useState } from "react";
import { BasicSelect } from "../../components/BasicSelect/BasicSelect";
import dayjs from "dayjs";

const mockForm = [
  { id: "city", label: "Miejscowość*" },
  { id: "age", label: "Wiek" },
  { id: "color", label: "Kolor" },
  { id: "race", label: "Rasa" },
  {
    id: "content",
    label: "Krótki opis zwierzęcia/sytuacji",
    multiline: true,
    rows: 4,
  },
];

type MockAnnouncement = {
  type: string;
  animal: string;
  date: dayjs.Dayjs;
  gender: string;
  city: string;
  age: number;
  color: string;
  race: string;
  content: string;
  img: string | null;
};

export const Form = () => {
  const [newAnnouncement, setNewAnnouncement] = useState<MockAnnouncement>({
    type: "",
    animal: "",
    date: dayjs(),
    gender: "",
    city: "",
    age: 0,
    color: "",
    race: "",
    content: "",
    img: "",
  });
  const navigate = useNavigate();
  const [image, setImage] = useState<string | null>();
  const ref = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <MainContent style={{ paddingBottom: 5 }}>
        <Heading>Dane</Heading>
        <BasicSelect
          label={"Typ zgłoszenia*"}
          options={["Zgubiono", "Znaleziono", "Oddam", "Szukam"]}
          value={newAnnouncement.type}
          onChange={(newValue: string) => {
            setNewAnnouncement((prev) => ({ ...prev, type: newValue }));
          }}
        />
        <BasicSelect
          label={"Zwierzę*"}
          options={["Piesek", "Kotek", "Ptak", "Inne"]}
          value={newAnnouncement.animal}
          onChange={(newValue: string) => {
            setNewAnnouncement((prev) => ({ ...prev, animal: newValue }));
          }}
        />
        <BasicDatePicker value={newAnnouncement.date} />
        <BasicSelect
          label={"Płeć"}
          options={["Ona", "On", "Nie wiem"]}
          value={newAnnouncement.gender}
          onChange={(newValue: string) => {
            setNewAnnouncement((prev) => ({ ...prev, gender: newValue }));
          }}
        />
        {mockForm.map(({ id, label, multiline, rows }) => (
          <FormTextField
            key={id}
            id={id}
            label={label}
            variant="outlined"
            multiline={multiline}
            rows={rows}
            value={newAnnouncement[id as keyof MockAnnouncement]}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const newValue = event.target.value as string;
              setNewAnnouncement((prev) => ({ ...prev, [id]: newValue }));
            }}
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
          <BrownBackgroundButton
            onClick={() => {
              console.log(newAnnouncement);
            }}
          >
            Dodaj ogłoszenie
          </BrownBackgroundButton>
        </TwoButtons>
      </MainContent>
    </>
  );
};
