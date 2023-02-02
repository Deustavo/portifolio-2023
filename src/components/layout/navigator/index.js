import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

import styles from "./styles.module.scss";

export default function Navigation() {
  const router = useRouter();
  const pages = ["/", "/about", "/projects", "/work", "/awards", "/contact"];
  const currentPageIndex = pages.indexOf(usePathname());

  const previousPage = () => {
    router.push(pages[currentPageIndex - 1]);
  };

  const nextPage = () => {
    router.push(pages[currentPageIndex + 1]);
  };

  const isFirstPage = () => {
    return currentPageIndex === 0;
  };

  const isLastPage = () => {
    return currentPageIndex === 5;
  };

  return (
    <div className={styles.layout__navitation}>
      <button
        className={styles.layout__navitation__left}
        onClick={() => previousPage()}
        disabled={isFirstPage()}
      >
        <Image
          src="assets/arrow-navigation.svg"
          alt="arrow-navigation"
          width={100}
          height={24}
          priority
        />
      </button>
      <button
        className={styles.layout__navitation__right}
        onClick={() => nextPage()}
        disabled={isLastPage()}
      >
        <Image
          src="assets/arrow-navigation.svg"
          alt="arrow-navigation"
          width={100}
          height={24}
          priority
        />
      </button>
    </div>
  );
}
