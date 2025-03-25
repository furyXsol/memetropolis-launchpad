import CustomizedImage from '@/components/customized-image'
import Image from 'next/image'
import DropdownArrow from '../../../../public/assets/img/home/dropdown-arrow.svg'
import TabEllipse from '../../../../public/assets/img/home/tab-ellipse.svg'

export interface ChatTabProps {
  name: string
  image: string
  tabSelected: boolean
  onClick: () => void
}

export const ChatTab = ({
  name,
  image,
  tabSelected,
  onClick,
}: ChatTabProps) => {
  return (
    <p
      className={`relative flex cursor-pointer items-center gap-2 pb-3 ${
        tabSelected ? 'text-white' : 'text-grey'
      }`}
      onClick={onClick}
    >
      <CustomizedImage
        image={image}
        fallbackImage="/assets/img/home/tab-memetropolis.svg"
        className="hidden size-6 md:block"
      />
      {name}
      <DropdownArrow className="hidden h-4 w-4 md:block" />
      {tabSelected && (
        <TabEllipse className="absolute bottom-0 left-1/2 h-3 w-6 -translate-x-1/2 translate-y-1/2" />
      )}
    </p>
  )
}
