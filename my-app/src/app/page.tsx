import { Button } from "@/components/ui/button";
import { InputPassword } from "@/components/ui/input";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        Tela Inicial
        <Button asChild>
          <Link href={"/auth/sign-up"}>Tela de Cadastro</Link>
        </Button>
        <InputPassword />
      </div>
    </main>
  );
}
