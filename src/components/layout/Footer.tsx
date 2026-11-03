import { FOOTER_ITEMS } from "../../constants/footer";
import FooterItem from "../ui/FooterItem";

export default function Footer() {
  return (
    <footer className="mx-auto  mb-2 md:mb-5">
      <div className="flex gap-x-4 justify-center">
        {FOOTER_ITEMS.map((item) => (
          <FooterItem item={item} key={item.href} />
        ))}
      </div>
      <div className="md:mt-4 mt-2 mb-3 text-xs tracking-tight text-gray-400 italic text-center">
        © 2026 Matias Diaconchuk.
      </div>
    </footer>
  );
}
