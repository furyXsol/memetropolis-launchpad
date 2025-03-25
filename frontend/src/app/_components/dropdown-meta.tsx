'use client'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const categories = [
  { value: 'all', label: 'Search by Meta' },
  { value: 'animal', label: 'Animal' },
  { value: 'political', label: 'Political' },
  { value: 'sporting', label: 'Sporting' },
  { value: 'celebrity', label: 'Celebrity' },
  { value: 'ai-and-technology', label: 'AI and Technology' },
  { value: 'pop-culture', label: 'Pop Culture' },
  { value: 'food-and-drink', label: 'Food and Drink' },
  { value: 'nature-and-environment', label: 'Nature and Environment' },
  { value: 'historical', label: 'Historical' },
  { value: 'fantasy-and-mythology', label: 'Fantasy and Mythology' },
  { value: 'art-and-design', label: 'Art and Design' },
  { value: 'social-movements', label: 'Social Movements' },
  { value: 'nostalgia', label: 'Nostalgia' },
  { value: 'internet-culture', label: 'Internet Culture' },
  { value: 'science-and-education', label: 'Science and Education' },
  { value: 'holidays-and-seasons', label: 'Holidays and Seasons' },
  { value: 'crypto-specific', label: 'Crypto-Specific' },
  { value: 'emojis-and-emoticons', label: 'Emojis and Emoticons' },
  { value: 'fictional-characters', label: 'Fictional Characters' },
  { value: 'gaming', label: 'Gaming' },
  { value: 'miscellaneous', label: 'Miscellaneous' },
]

const DropdownMeta = ({
  meta,
  setMeta,
}: {
  meta: string
  setMeta: (meta: string) => void
}) => {
  return (
    <Select defaultValue="animal" value={meta} onValueChange={setMeta}>
      <SelectTrigger className="flex w-full items-center border border-accent md:w-[290px]">
        <SelectValue placeholder="Select Category" />
      </SelectTrigger>
      <SelectContent className="border border-accent bg-primary">
        <SelectGroup>
          {categories.map((category, index) => (
            <div key={category.value}>
              <SelectItem
                value={category.value}
                className="cursor-pointer hover:bg-secondary"
              >
                {category.label}
              </SelectItem>
              {/* Add separator except after the last item */}
              {index < categories.length - 1 && (
                <hr className="border-secondary" />
              )}
            </div>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default DropdownMeta
