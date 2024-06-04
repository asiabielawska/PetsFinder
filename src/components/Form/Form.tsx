import { useNavigate } from "react-router-dom";
import { Heading, MainContent } from "../../styled";
import {
  AddImg,
  AddedImg,
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
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../Slices/userState/userState";
import {
  addNewAnnoucement,
  editAnnoucement,
} from "../../Slices/postsState/postsState";
import { PostsTypes } from "../../types/post";
import dayjs from "dayjs";

export const Form = () => {
  const [newAnnouncement, setNewAnnouncement, isEdit] = useAnnouncementForm();
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement | null>(null);
  const userLogged = useSelector(selectUser);
  const dispatch = useDispatch();

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
          value={newAnnouncement.details.type}
          onChange={(newValue: PostsTypes) => {
            setNewAnnouncement((prev) => ({
              ...prev,
              details: { ...prev.details, type: newValue },
            }));
          }}
        />
        <BasicSelect
          label={"Zwierzę*"}
          options={["Piesek", "Kotek", "Ptak", "Inne"]}
          value={newAnnouncement.details.animal}
          onChange={(newValue: string) => {
            setNewAnnouncement((prev) => ({
              ...prev,
              details: { ...prev.details, animal: newValue },
            }));
          }}
        />
        <BasicDatePicker
          value={newAnnouncement.details.date}
          onChange={(newValue: dayjs.Dayjs) => {
            setNewAnnouncement((prev) => ({
              ...prev,
              details: { ...prev.details, date: newValue.valueOf() },
            }));
          }}
        />
        <BasicSelect
          label={"Płeć"}
          options={["Ona", "On", "Nie wiem"]}
          value={newAnnouncement.details.gender}
          onChange={(newValue: string) => {
            setNewAnnouncement((prev) => ({
              ...prev,
              details: { ...prev.details, gender: newValue },
            }));
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
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const newValue = event.target.value as string;
              setNewAnnouncement((prev) => ({
                ...prev,
                details: { ...prev.details, [id]: newValue },
              }));
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
        {newAnnouncement.img && <AddedImg src={newAnnouncement.img} />}

        <TwoButtons>
          <WhiteBackgroundButton onClick={() => navigate("/")}>
            Cofnij
          </WhiteBackgroundButton>
          {isEdit ? (
            <BrownBackgroundButton
              onClick={() => {
                dispatch(editAnnoucement(newAnnouncement)), navigate("/");
              }}
            >
              Zapisz zmiany
            </BrownBackgroundButton>
          ) : (
            <BrownBackgroundButton
              onClick={() => {
                dispatch(addNewAnnoucement(newAnnouncement)), navigate("/");
              }}
            >
              Dodaj ogłoszenie
            </BrownBackgroundButton>
          )}
        </TwoButtons>
      </MainContent>
    </>
  );
};
