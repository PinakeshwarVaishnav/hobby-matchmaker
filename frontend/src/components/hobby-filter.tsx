"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const hobbies = [
  "Photography",
  "Hiking",
  "Cooking",
  "Painting",
  "Yoga",
  "Gardening",
  "Gaming",
  "Coding",
  "Music Production",
  "Dancing",
  "Reading",
  "Traveling",
  "Surfing",
  "Meditation",
  "Woodworking",
  "Baking",
  "Knitting",
  "Volunteering",
  "Rock Climbing",
  "Astronomy",
];

export function HobbyFilter() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <div className="flex justify-center">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
              ? hobbies.find(
                  (hobby) => hobby.toLowerCase() === value.toLowerCase(),
                )
              : "Select hobby..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search hobby..." />
            <CommandList>
              <CommandEmpty>No hobby found.</CommandEmpty>
              <CommandGroup>
                {hobbies.map((hobby) => (
                  <CommandItem
                    key={hobby}
                    value={hobby}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value.toLowerCase() === hobby.toLowerCase()
                          ? "opacity-100"
                          : "opacity-0",
                      )}
                    />
                    {hobby}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
