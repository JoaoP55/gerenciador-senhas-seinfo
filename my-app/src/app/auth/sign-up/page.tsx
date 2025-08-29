import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignUpForm from "./components/sign-up-form";

const SignUpPage = () => {
  return (
    <section className="flex h-screen w-screen items-center justify-center px-5">
      <Card className="w-full max-w-m">
        <CardHeader>
          <CardTitle>Cria sua conta</CardTitle>
          <CardDescription>
            Insira as suas informações para realizar o cadastro
          </CardDescription>
        </CardHeader>
        <SignUpForm />
      </Card>
    </section>
  );
};

export default SignUpPage;
