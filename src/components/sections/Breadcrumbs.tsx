import Link from "next/link";
import { Icon } from "@/components/icons/Icon";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-[0.8125rem] text-navy-300">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {index > 0 ? (
              <Icon
                name="chevronDown"
                size={13}
                className="-rotate-90 text-navy-500"
                aria-hidden="true"
              />
            ) : null}
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-white">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
