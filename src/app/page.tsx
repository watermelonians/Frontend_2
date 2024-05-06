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
    <div className="text-17xl text-text-primary font-components-buttons-lg flex items-center justify-center relative h-[607px] w-[1260px] overflow-hidden text-center bg-contain bg-center" style={{backgroundImage: 'url("./images/cover/Cover.png")'}}>
      <div className="rounded-xl flex h-[500px] w-[450px] flex-col items-center justify-center gap-[80px] bg-[#050C28BF] shadow-[0px_0px_45.6px_rgba(240,_244,_248,_0.15)_inset]">
        <b className="relative self-stretch leading-[133%] text-[#F0F4F8] font-bold text-2xl">
          Welcome to ENSIA Satisfaction Dashboard!
        </b>
        <div className="flex flex-col items-center justify-start gap-[40px] text-left text-lg">
          <div className="flex flex-col items-center justify-start gap-[24px]">
            <div className="relative leading-[155%] text-[#F0F4F8] text-sm">
              Enter your ENSIA email and confirm your login
            </div>
            <div className="rounded-spacing-roundness-1 flex w-[250px] flex-col items-end justify-start gap-[8px] text-xs">
              <div className="py-spacing-roundness-2 px-spacing-roundness-3 border-divider flex flex-row items-center justify-end self-stretch border-b-[1px] border-solid">
                <div className="relative flex-1 leading-[150%] text-[#F0F4F8]">
                  Enter Email
                </div>
              </div>
              <div className="px-spacing-roundness-2 text-text-secondary flex flex-row items-end justify-start self-stretch py-0 text-xs">
                <div className="relative flex-1 font-semibold leading-[166%] text-[#636B74]">
                  Make sure it is @ensia.edu.dz
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[24px]">
            <div className="border-divider relative box-border h-px w-[142px] border-t-[1px] border-solid" />
            <div className="relative leading-[155%] text-[#F0F4F8]">OR</div>
            <div className="border-divider relative box-border h-px w-[142px] border-t-[1px] border-solid" />
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
            <div className="relative leading-[150%] text-[#FFFFFF]">Continue with google</div>
          </button>
        </div>
      </div>

    </div>
  );
};

export default DashboardPublicSpaceIn1;
