import LeftBanner from "@/components/LeftBanner";
import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full overflow-hidden">
      <LeftBanner />
      <LoginForm />
    </div>
  );
}
