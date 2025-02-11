import Link from "next/link";
import { NavbarStyle } from "./style";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function Navbar() {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const email = Cookies.get("saas_email");
    setUserEmail(email || null);
  }, []);

  return (
    <NavbarStyle>
      <div className="navbar-container">
        <Link
          href={"/"}
        >
          LOGO
        </Link>
        <Link href={userEmail ? "/profile" : "/login"} aria-label="sign in">
          {userEmail ? userEmail : "Login"}
        </Link>
      </div>
    </NavbarStyle>
  );
}
