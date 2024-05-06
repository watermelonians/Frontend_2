import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAuth, getIdToken } from "firebase/auth";
import { useRouter } from "next/navigation";
import { parseCookies, setCookie } from "nookies"; // Assuming you are using 'nookies' for managing cookies

export const dynamic = 'force-dynamic';

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  //////
  const router = useRouter();

  const [displayName, setDiplayName] = useState("First Name Last Name");
  const [email, setEmail] = useState("emailaddress@ensia.edu.dz");
  const [photoURL, setPhotoURL] = useState(`/images/user/default-A.png`);

  const checkCookie = (): boolean => {
    const cookies = parseCookies();
    return !!cookies.email && !!cookies.displayName && !!cookies.photoURL;
  };

  useEffect(() => {
    try {
      if (checkCookie()) {
        const cookies = parseCookies();
        setDiplayName(cookies.displayName);
        setEmail(cookies.email);
        setPhotoURL(cookies.photoURL);
      } else {
        const user = getAuth().currentUser;
        if (user) {
          let userDisplayName = user.displayName ?? "First Name Last Name";
          let userEmail = user.email ?? "emailaddress@ensia.edu.dz";
          let userPhotoURL =
            user.photoURL ??
            `/images/user/default-${userEmail.charAt(0).toUpperCase()}.png`;

          setDiplayName(userDisplayName);
          setEmail(userEmail);
          setPhotoURL(userPhotoURL);

          setCookie(null, "displayName", userDisplayName, {
            maxAge: 30 * 24 * 60 * 60, // Expires in 30 days
            path: "/", // The cookie is available for the entire domain
          });
          setCookie(null, "email", userEmail, {
            maxAge: 30 * 24 * 60 * 60, // Expires in 30 days
            path: "/",
          });
          setCookie(null, "photoURL", userPhotoURL, {
            maxAge: 30 * 24 * 60 * 60, // Expires in 30 days
            path: "/",
          });
        } else {
          // TODO
          router.push("/");
        }
      }
    } catch (e: any) {
      console.log("There was an error with the backend.");
    }
  }, [router]);

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="h-12 w-12 overflow-hidden rounded-full">
          <Image
            width={112}
            height={112}
            src={photoURL}
            style={{
              width: "auto",
              height: "auto",
            }}
            alt="User"
          />
        </span>

        <span className="hidden text-left lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            {displayName}
          </span>
          <span className="block text-xs">{email}</span>
        </span>
      </Link>
    </div>
  );
};

export default DropdownUser;
