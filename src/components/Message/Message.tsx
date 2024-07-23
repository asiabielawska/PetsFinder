import { useAuth } from "../../hooks/useAuth";
import { MainContent } from "../../styled";
import { FormTextField } from "./styled";

export const Message = () => {
  useAuth();
  return (
    <MainContent>
      <FormTextField>Message</FormTextField>
    </MainContent>
  );
};
