import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const loweCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${selectedPage === loweCasePage ? "text-primary-500" : ""}
    transition duration-500 hover:text-primary-300`}
      href={`#${loweCasePage}`}
      onClick={() => setSelectedPage(loweCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
