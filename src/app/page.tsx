import { Button, LargeHeading, Badge } from "@/components/ui"
import { Filters, Pagination, CardList } from "@/components"
import { Plus, Bin } from "@/components/icons"

import { filters, segments } from "@/public/static"

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <section className="flex flex-col w-64 gap-4">
        <LargeHeading size="sm">Segments</LargeHeading>
        <Button className="flex gap-2">
          <Plus color="white" width={20} height={20} />
          Ajouter un nouveau segment
        </Button>
      </section>
      <section className="flex flex-col gap-2">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Filters filters={filters} />
          <Button size="sm" variant="destructive" className="flex gap-2">
            <Bin color="#6b7280" width={20} height={20} />
            <span className="text-gray-500 flex sm:hidden">Supprimer la selection</span>
          </Button>
        </div>
        <p className="text-xs">
          Filtres : <Badge>Interactions</Badge>
        </p>
      </section>
      <CardList data={segments} />
      <Pagination />
    </main>
  )
}
