import { useNavigate, useSearchParams } from "react-router-dom";
import { Heading } from "../../styled";
import {
  AddImg,
  AddedImg,
  BrownBackgroundButton,
  Content,
  FormTextField,
  TwoButtons,
  WhiteBackgroundButton,
} from "./styled";
import { BasicDatePicker } from "./DatePicker/BasicDatePicker";
import { useEffect, useRef } from "react";
import { mockForm } from "./constants";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUser,
  selectUserId,
  selectUserName,
} from "../../Slices/userState/userState";
import {
  addNewAnnoucement,
  editAnnoucement,
  selectUserPosts,
} from "../../Slices/postsState/postsState";
import { PostType, PostsTypes } from "../../types/post";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { BasicSelect } from "../BasicSelect/BasicSelect";

export const Form = () => {
  const [searchParams] = useSearchParams();
  const userPosts = useSelector(selectUserPosts);
  const userName = useSelector(selectUserName);
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
        userName: post?.details?.createdBy ?? userName,
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
            console.log(data);
            if (isEdit) {
              dispatch(editAnnoucement(data));
              navigate("/");
            } else {
              dispatch(addNewAnnoucement(data));
              navigate("/");
            }
          })}
        >
          <BasicSelect
            label={"Typ zgłoszenia"}
            options={["Zgubiono", "Znaleziono", "Oddam", "Szukam"]}
            value={watch("details.type")}
            onChange={(newValue: PostsTypes) => {
              setValue("details.type", newValue);
            }}
          />
          <BasicSelect
            label={"Zwierzę"}
            options={["Kotek", "Piesek", "Ptak", "Inne"]}
            value={watch("details.animal")}
            onChange={(newValue: PostsTypes) => {
              setValue("details.animal", newValue);
            }}
          />
          <BasicDatePicker
            value={watch("details.date")}
            onChange={(newValue: dayjs.Dayjs) => {
              setValue("details.date", newValue.valueOf());
            }}
          />
          <BasicSelect
            label={"Płeć"}
            options={["On", "Ona", "Nie wiem"]}
            value={watch("details.gender")}
            onChange={(newValue: PostsTypes) => {
              setValue("details.gender", newValue);
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
              {...register(`details.${id as keyof PostType["details"]}`)}
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
            type="button"
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
