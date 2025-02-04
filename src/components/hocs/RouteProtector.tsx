import { PropsWithChildren, useEffect, useState } from "react";
import LogoLoader from "../loaders/LogoLoader";
import { LearnilleClient } from "@/utils/api";
import Cookies from "js-cookie";
import { APP_URLS } from "@/utils/constants";
import { useToast } from "@chakra-ui/react";
import useUserDataStore from "@/stores/user-data";

type LoadingState = "loading" | "authenticated" | "unauthenticated";

const RouteProtector: React.FC<PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = useState<LoadingState>("loading");
  const toast = useToast();
  const setUserDataState = useUserDataStore((state) => state.setUserDataState);

  const verifyUser = async () => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const accessToken = urlParams.get("accessToken");

      if (accessToken) {
        Cookies.set("accessToken", accessToken, {
          path: "/",
          secure: true,
          sameSite: "Strict",
        });
      }

      const { data } = await LearnilleClient.get("/user");
      const userRoles = data.roles;
      if (!userRoles.includes("student")) {
        window.location.href = APP_URLS.AUTH + "/login";
        return;
      }
      setUserDataState("userData", data);
      setLoading("authenticated");
    } catch (err) {
      toast({ title: err.message, status: "error" });
      window.location.href =
        APP_URLS.AUTH +
        "/login?redirectUrl=" +
        encodeURIComponent(window.location.href);
    }
  };

  useEffect(() => {
    verifyUser();
  }, []);

  if (loading === "loading") {
    return <LogoLoader show />;
  }

  if (loading === "authenticated") {
    return <>{children}</>;
  }

  return <></>;
};

export default RouteProtector;
