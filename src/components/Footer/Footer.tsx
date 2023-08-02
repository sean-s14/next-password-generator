import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { STYLES } from "@/constants/styles";

export default function Footer() {
  return (
    <footer
      className="min-w-full h-fit flex flex-col xs:flex-row justify-between items-start xs:items-center gap-4 py-4 px-8 bg-neutral-300 dark:bg-neutral-800 text-md text-neutral-500 dark:text-neutral-400"
      style={{
        minHeight: STYLES.FOOTER_HEIGHT,
      }}
    >
      <div>
        <h3 className="font-bold">Legal</h3>
        <ul className="text-sm">
          <li>
            <Link href="/policies/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/policies/tos">Terms of Service</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-2">
        <span>
          <span className="mr-2">Created by</span>
          <span className="font-semibold">Sean Stocker</span>
        </span>
        <a
          href="https://github.com/sean-s14/next-password-generator"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>
      </div>
    </footer>
  );
}
