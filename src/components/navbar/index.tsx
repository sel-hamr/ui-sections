import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Logo from "../ui/logo";
import { cn } from "@/lib/utils";
import { projects, URL_GITHUB, URL_LINKEDIN } from "./data";
import { GithubIcon } from "../assets/icons/github";
import { LinkedinIcon } from "../assets/icons";

export default function NavBar() {
  return (
    <div className="sticky w-[90%] max-w-6xl mx-auto h-14 flex items-center z-20 border-b py-3">
      <Logo />
      <NavigationMenu className="ml-auto md:ml-0">
        <NavigationMenuList>
          <NavigationMenuItem className="z-50 relative">
            <Link href="/sections" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Sections
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Others</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-full z-50 gap-1 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {projects.map((project) => (
                  <ListItem
                    key={project.title}
                    title={project.title}
                    href={project.href}
                  >
                    {project.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="hidden md:flex gap-4 ml-auto">
        <Link href={URL_GITHUB}>
          <GithubIcon
            width={26}
            className="cursor-pointer hover:fill-slate-700 "
          />
        </Link>
        <Link href={URL_LINKEDIN}>
          <LinkedinIcon
            width={26}
            className="cursor-pointer hover:fill-slate-700 "
          />
        </Link>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-xs font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
