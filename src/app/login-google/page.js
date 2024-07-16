import { Button } from "@/components/button";
import { loginGoogleAction } from "./action";

export default function Home() {
  return (
    <form
      className="min-h-screen flex justify-center items-center"
      action={loginGoogleAction}
    >
      <Button>Login with Google</Button>
    </form>
  );
}
