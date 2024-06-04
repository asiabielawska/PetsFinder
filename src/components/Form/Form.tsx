import { useNavigate, useSearchParams } from "react-router-dom";
import { Heading } from "../../styled";
import {
  AddImg,
  AddedImg,
  BrownBackgroundButton,
  Content,
  FormTextField,
  Select,
  TwoButtons,
  WhiteBackgroundButton,
} from "./styled";
import { BasicDatePicker } from "./DatePicker/BasicDatePicker";
import { useEffect, useRef } from "react";
import { mockForm } from "./constants";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, selectUserId } from "../../Slices/userState/userState";
import {
  addNewAnnoucement,
  editAnnoucement,
  selectUserPosts,
} from "../../Slices/postsState/postsState";
import { PostType, PostsTypes } from "../../types/post";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";

export const Form = () => {
  const [searchParams] = useSearchParams();
  const userPosts = useSelector(selectUserPosts);
  const postId = searchParams.get("postId");
  const post =
    postId === null
      ? undefined
      : userPosts.find((element) => element.id === postId);
  const userId = useSelector(selectUserId);
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement | null>(null);
  const userLogged = useSelector(selectUser);
  const dispatch = useDispatch();
  const isEdit = post !== undefined;

  const { register, handleSubmit, watch, setValue } = useForm<PostType>({
    defaultValues: {
      img: post?.img ?? ``,
      details: {
        animal: post?.details?.animal ?? "",
        age: post?.details?.age ?? "",
        gender: post?.details?.gender ?? "",
        color: post?.details?.color ?? "",
        createdBy: post?.details?.createdBy ?? userId,
        location: post?.details?.location ?? "",
        date: post?.details?.date ?? dayjs().valueOf(),
        description: post?.details?.description ?? "",
        type: post?.details?.type ?? PostsTypes.Szukam,
      },
      id: post?.id ?? Date.now().toString(),
      isLiked: post?.isLiked ?? false,
    },
  });

  useEffect(() => {
    if (userLogged === false) {
      navigate("/login-page");
    }
  }, []);

  return (
    <>
      <Content style={{ paddingBottom: 5 }}>
        <Heading>Dane</Heading>
        <form
          onSubmit={handleSubmit((data) => {
            if (isEdit) {
              dispatch(editAnnoucement(data)), navigate("/");
            }
            dispatch(addNewAnnoucement(data)), navigate("/");
          })}
        >
          <Select
            {...register("details.type", { required: "To pole jest wymagane" })}
            title="Typ zgłoszenia"
          >
            <option value={"Zgubiono"}>Zgubiono</option>
            <option value={"Znaleziono"}>Znaleziono</option>
            <option value={"Oddam"}>Oddam</option>
            <option value={"Szukam"}>Szukam</option>
          </Select>
          <Select
            {...register("details.animal", {
              required: "To pole jest wymagane",
            })}
            title="Zwierzę"
          >
            <option value={"Pies"}>Piesek</option>
            <option value={"Kot"}>Kotek</option>
            <option value={"Ptak"}>Ptak</option>
            <option value={"Inne"}>Inne</option>
          </Select>
          <BasicDatePicker
            value={watch("details.date")}
            onChange={(newValue: dayjs.Dayjs) => {
              setValue("details.date", newValue.valueOf());
            }}
          />
          <Select
            {...register("details.gender", {
              required: "To pole jest wymagane",
            })}
            title="Płeć"
          >
            <option>Ona</option>
            <option>On</option>
            <option>Nie wiem</option>
          </Select>
          {mockForm.map(({ id, label, multiline, rows }) => (
            <FormTextField
              key={id}
              id={id}
              variant="outlined"
              multiline={multiline}
              rows={rows}
              {...register(`details.${id as keyof PostType["details"]}`)}
              title={label}
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
                setValue("img", reader.result as string);
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
          {watch("img") && <AddedImg src={watch("img")} />}
          <TwoButtons>
            <WhiteBackgroundButton onClick={() => navigate("/")}>
              Cofnij
            </WhiteBackgroundButton>
            {isEdit ? (
              <BrownBackgroundButton type="submit">
                Zapisz zmiany
              </BrownBackgroundButton>
            ) : (
              <BrownBackgroundButton type="submit">
                Dodaj ogłoszenie
              </BrownBackgroundButton>
            )}
          </TwoButtons>
        </form>
      </Content>
    </>
  );
};
