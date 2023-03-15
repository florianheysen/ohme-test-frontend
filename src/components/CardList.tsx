import Card from "@/components/Card"

type CardProps = {
    id: number
    name: string
    contacts: number
    structures: number
}

const CardList = ({ data }: { data: CardProps[] }) => {
    return (
        <>
            {data.map((e) => <Card key={e.id} cardData={e} />)}
        </>
    )
}

export default CardList
