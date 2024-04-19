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
import { useEffect, useRef } from "react";
import { BasicSelect } from "../../components/BasicSelect/BasicSelect";
import { mockForm } from "./constants";
import { useAnnouncementForm } from "./Hooks/useAnnouncementForm";
import { MockAnnouncement } from "./Hooks/useAnnouncementForm";
import { advertisementDatabase } from "../announcementDatabase";
import { useSelector } from "react-redux";
import { selectUser } from "../../userState/userState";

export const Form = () => {
  const [newAnnouncement, setNewAnnouncement] = useAnnouncementForm();
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement | null>(null);
  const userLogged = useSelector(selectUser);

  useEffect(() => {
    if (userLogged === false) {
      navigate("/login-page");
    }
  }, []);

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
            if (!e.target.files) return;
            const reader = new FileReader();
            reader.onloadend = () => {
              setNewAnnouncement((prev) => ({
                ...prev,
                img: reader.result as string,
              }));
            };
            reader.readAsDataURL(e.target.files[0]);
          }}
        />
        <AddImg
          onClick={() => {
            ref.current?.click();
          }}
        >
          Dodaj zdjęcie
        </AddImg>
        {newAnnouncement.img && <img src={newAnnouncement.img} />}

        <TwoButtons>
          <WhiteBackgroundButton onClick={() => navigate("/")}>
            Cofnij
          </WhiteBackgroundButton>
          <BrownBackgroundButton
            onClick={() => {
              advertisementDatabase.push({
                ...newAnnouncement,
                id: advertisementDatabase.length,
              });
              navigate("/");
            }}
          >
            Dodaj ogłoszenie
          </BrownBackgroundButton>
        </TwoButtons>
      </MainContent>
    </>
  );
};
