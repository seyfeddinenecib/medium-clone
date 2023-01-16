import { useStoreActions } from "easy-peasy";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { fetcher } from "../lib/mutations";

export default function Signout() {
  const setSignout = useStoreActions((store: any) => store.signout);
  const router = useRouter();
  useEffect(() => {
    const a = async () => {
      const res = await fetcher("/signout", undefined);
      setSignout();

      console.log("here");
      router.push("/");
    };
    a();
  }, []);
  return;
}
