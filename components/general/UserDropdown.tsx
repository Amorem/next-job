import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ChevronDownIcon, HeartIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import Link from "next/link";

export function UserDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} className="h-auto p-0 hover:bg-transparent">
          <Avatar>
            <AvatarImage src="" alt="profile image" />
            <AvatarFallback>CT</AvatarFallback>
          </Avatar>
          <ChevronDownIcon size={16} strokeWidth={2} className="opacity-60" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48" align="end">
        <DropdownMenuLabel className="flex flex-col">
          <span className="text-sm font-medium text-foreground">
            Cedric TOURNIER
          </span>
          <span className="text-xs text-muted-forreground">
            cedric@amorem.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/favorites">
              <HeartIcon size={16} strokeWidth={2} className="opacity-60" />
              <span>Favorite jobs</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href="/my-jobs">
              <HeartIcon size={16} strokeWidth={2} className="opacity-60" />
              <span>My job listing</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
