import LogoLoader from "@/components/loaders/LogoLoader";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { APP_URLS } from "@/utils/constants";
import waitForTimeout from "@/utils/waitForTimeout";

const LogoutPage = () => {
  useEffect(() => {
    (async () => {
      await waitForTimeout(1000);
      Cookies.remove("accessToken");
      window.location.href = APP_URLS.PUBLIC + "/logout";
    })();
  }, []);

  return <LogoLoader show />;
};

export default LogoutPage;
