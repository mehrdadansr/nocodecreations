import Image from "next/image";
import Link from "next/link";

const SITE_LOGO = "/images/logo.svg";

type SiteBrandProps = {
  linkClassName?: string;
  titleClassName?: string;
  priority?: boolean;
};

export default function SiteBrand({
  linkClassName = "flex items-center gap-2",
  titleClassName = "text-lg font-bold text-foreground",
  priority = false,
}: SiteBrandProps) {
  return (
    <Link href="/" className={linkClassName}>
      <Image
        src={SITE_LOGO}
        alt=""
        width={40}
        height={40}
        className="h-9 w-9 md:h-10 md:w-10 shrink-0"
        priority={priority}
      />
      <span className={titleClassName}>No Code Creations</span>
    </Link>
  );
}
