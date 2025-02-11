import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function Auth() {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const { token, email } = router.query;

    if (token && email) {
      // Definindo os cookies após a montagem do componente
      Cookies.set("saas_token", token as string, { expires: 7 });
      Cookies.set("saas_email", email as string, { expires: 7 });

      // Atualizando o estado do e-mail do usuário
      setUserEmail(email as string);

      // Redirecionando para a página de autenticação
      router.push("/auth");
    } else {
      // Caso já tenha um e-mail salvo nos cookies
      setUserEmail(Cookies.get("saas_email") || null);
    }
  }, [router.query]);

  // Exibindo o e-mail apenas após a montagem do componente (no lado do cliente)
  if (userEmail === null) {
    return <h1>Loading...</h1>;
  }

  return <h1>Welcome, {userEmail}</h1>;
}
