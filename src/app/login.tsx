import { NextPage } from "next"
import ViewWrapper from "@/components/ViewWrapper"
import LoginLink from "@/components/LoginLink"

const Login: NextPage = async () => {
  return (
    <ViewWrapper>
      <LoginLink />
    </ViewWrapper>
  )
}

export default Login