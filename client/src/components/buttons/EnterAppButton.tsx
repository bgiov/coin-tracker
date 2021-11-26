import { styled } from "@mui/styles";
import Button from "@mui/material/Button";
import { useAuth0 } from "@auth0/auth0-react";

const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  height: 48,
  padding: "0 30px",
});

export default function EnterAppButton({ text }: { text: string | number }) {
  const { loginWithRedirect } = useAuth0();

  return (
    <MyButton onClick={() => loginWithRedirect()} fullWidth>
      {text}
    </MyButton>
  );
}
