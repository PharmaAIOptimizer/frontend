import { useRouter } from "next/navigation";

export default function RedirectButton() {
    const router = useRouter();
  
    return (
      <button
        onClick={() => router.push('/login')}
        className="your-button-styles"
      >
        Sign in
      </button>
    );
  }
  