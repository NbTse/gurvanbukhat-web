import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" passHref>
      <Image src="/images/logo/logo.png" width={205} height={48} alt="" />
    </Link>
  );
}
