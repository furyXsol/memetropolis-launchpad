import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import CategoryProjects from '../../../public/assets/img/home/projects/category-projects.svg'
import CategoryTraders from '../../../public/assets/img/home/projects/category-traders.svg'

const DropdownCategory = () => {
  return (
    <Select defaultValue="projects">
      <SelectTrigger className="flex w-full items-center border border-accent md:w-[290px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="border border-accent bg-primary">
        <SelectGroup>
          <SelectItem
            value="projects"
            className="cursor-pointer hover:bg-secondary"
          >
            <p className="flex gap-2">
              <CategoryProjects className="h-6 w-6" />
              Projects
            </p>
          </SelectItem>
          <hr className="border-secondary" />
          <SelectItem
            value="traders"
            className="cursor-pointer hover:bg-secondary"
          >
            <p className="flex gap-2">
              <CategoryTraders className="h-6 w-6" />
              Traders (Coming Soon)
            </p>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default DropdownCategory
