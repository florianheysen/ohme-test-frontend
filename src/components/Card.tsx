import { Pen } from "@/components/icons"
import { Button } from "@/ui/Button"
import { Clock, People, Building } from "@/components/icons"


type CardProps = {
    id: number
    name: string
    contacts: number
    structures: number
}

const Card = ({ cardData }: { cardData: CardProps }) => {
    return (
        <div className="flex flex-col max-w-4xl gap-2 px-3 py-5 rounded-md border border-gray-300">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-2">
                    <div className="flex flex-shrink gap-4 sm:gap-2">
                        <input id="default-checkbox" type="checkbox" value='id' className="w-4 h-4 ml-1 bg-gray-100 border-gray-300 rounded focus:ring-red-500" />
                        <div className="flex">
                            <span className="inline-flex select-none items-center px-2 mr-2 text-xs font-medium text-gray-100 bg-[#096A93] rounded">
                                Ile-de-France
                            </span>
                            <span className="inline-flex select-none items-center px-2 mr-2 text-xs font-medium text-gray-800 bg-gray-200 rounded">
                                Bénévoles
                            </span>
                            <span className="inline-flex select-none items-center px-2 mr-2 text-xs font-medium text-gray-800 bg-gray-200 rounded">
                                Donateurs
                            </span>
                        </div>
                    </div>
                    <span className="flex gap-1 ml-9 sm:ml-0 items-center text-xs opacity-60">
                        <Clock color="black" width={10} height={10} />
                        01 Janvier 2023 à 08:33
                    </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-0 sm:gap-3 items-start sm:items-center">
                    <div className="flex gap-2 items-center">
                        <Button className="ml-[2px] -mt-20 sm:-mt-0" variant="ghost" size="xs">
                            <Pen color="#767676" width={13} height={13} />
                        </Button>
                        <h1 className="font-bold text-2xl">{cardData.name}</h1>
                    </div>
                    <div className="flex gap-3 ml-8 sm:ml-0">
                        <h2 className="font-medium text-md flex gap-1 items-center">
                            <People width={20} height={20} />
                            {cardData.contacts} contacts
                        </h2>
                        <h2 className="font-medium text-md flex gap-1 items-center">
                            <Building width={20} height={20} />
                            {cardData.structures} structures
                        </h2>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Card
