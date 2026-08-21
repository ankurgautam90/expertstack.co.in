import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { techCategories } from "@/lib/data/home";

/**
 * Technology presented as capability, not catalogue. Each category states what
 * we do with it; the item list is scope, not a spec sheet or a price list.
 */
export function TechCategoryGrid() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Technology we integrate"
          title="The Layers a Solution Is Built From"
          description="These are components, not products. Each one is selected to serve the architecture, integrated with the layers around it, and operated as part of one environment."
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((category, index) => (
            <Reveal key={category.title} delay={(index % 3) * 70}>
              <Link
                href={category.href}
                className="group flex h-full flex-col rounded-xl border border-navy-100 bg-white p-7 shadow-card transition-all duration-500 ease-enterprise hover:-translate-y-1.5 hover:border-accent-200 hover:shadow-card-hover"
              >
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-navy-900 text-white transition-colors duration-300 group-hover:bg-accent-600">
                  <Icon name={category.icon} size={22} />
                </span>

                <h3 className="mt-6 font-display text-lg font-bold text-navy-900">
                  {category.title}
                </h3>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-muted">
                  {category.body}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2 border-t border-navy-100 pt-5">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-surface-muted px-3 py-1 text-[0.75rem] font-medium text-navy-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[0.8125rem] font-semibold text-accent-600">
                  How we integrate it
                  <Icon
                    name="arrowRight"
                    size={15}
                    className="transition-transform duration-300 ease-enterprise group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
