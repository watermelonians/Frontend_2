"use client";
import { useUserAuth } from "@/context/AuthContext";
import { getAuth } from "firebase/auth";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import { destroyCookie } from "nookies";

const DashboardPublicSpaceIn1: NextPage = () => {
  const router = useRouter();

  const { user, googleSignIn, logOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await googleSignIn();
      router.push("/Overview");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
      console.log("signed out");
      const auth = getAuth();
      console.log(auth.currentUser);

      destroyCookie(null, "email", { path: "/" });
      destroyCookie(null, "photoURL", { path: "/" });
      destroyCookie(null, "displayName", { path: "/" });
      destroyCookie(null, "token", { path: "/" });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="text-17xl text-text-primary font-components-buttons-lg relative flex h-screen w-screen items-center justify-center overflow-hidden bg-contain bg-center text-center"
      style={{ backgroundImage: 'url("./images/cover/Cover.png")' }}
    >
      <div className="flex h-[500px] w-[450px] flex-col items-center justify-center gap-[80px] rounded-xl bg-[#050C28BF] shadow-[0px_0px_45.6px_rgba(240,_244,_248,_0.15)_inset]">
        <b className="relative self-stretch text-2xl font-bold leading-[133%] text-[#F0F4F8]">
          Welcome to ENSIA Satisfaction Dashboard!
        </b>
        <div className="flex flex-col items-center justify-start gap-[40px] text-left text-lg">
          <div className="flex flex-col items-center justify-start gap-[24px]">
            <div className="relative text-lg leading-[155%] text-[#F0F4F8]">
              Sign up with your ENSIA email
            </div>
            <div className="rounded-spacing-roundness-1 flex w-[250px] flex-col items-end justify-start gap-[8px] text-xs">
              <div className="py-spacing-roundness-2 px-spacing-roundness-3 border-divider flex flex-row items-center justify-end self-stretch border-b-[1px] border-solid"></div>
              <div className="px-spacing-roundness-2 text-text-secondary flex flex-row items-end justify-start self-stretch py-0 text-xs">
                <div className="relative flex-1 text-center font-semibold leading-[166%] text-[#636B74]">
                  Make sure it is @ensia.edu.dz
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleLogin}
            className="py-boundvariablesdata px-boundvariablesdata4 text-warning-solid-color flex flex-row items-center justify-start gap-[24px] rounded-lg bg-[#0B6BCB] px-4 py-2 text-base text-white duration-150 hover:scale-110"
          >
            <img
              className="relative h-[30px] w-[30px] shrink-0 overflow-hidden"
              alt=""
              src="/images/brand/google.svg"
            />
            <div className="relative leading-[150%] text-[#FFFFFF]">
              Continue with google
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPublicSpaceIn1;
