import Link from "next/link";

type AppLinkProps = {
  href: string;
  text: string;
  variant?: "primary" | "secondary" | "outline";
  radius?: "sm" | "md" | "lg" | "full";
};

const variantClasses = {
  primary: "bg-accent-50 text-white hover:bg-accent-100",
  secondary:
    "text-white border border-white hover:text-accent-50 hover:border-accent-50",
  outline: "border border-black text-black hover:bg-white hover:text-black",
};

const radiusClasses = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

function AppLink({
  href,
  text,
  variant = "primary",
  radius = "md",
}: AppLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-4 py-2 font-semibold transition ${variantClasses[variant]} ${radiusClasses[radius]}`}
    >
      {text}
    </Link>
  );
}

export default AppLink;
