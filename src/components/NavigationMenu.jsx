import React from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { ChevronDownIcon, ArrowRightIcon } from 'lucide-react'

// Utility function for combining class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

// Navigation Menu Types
export const NavItemType = {
  title: '',
  description: '',
  icon: null,
  href: '#'
}

// Main Navigation Menu Component
const NavigationMenu = React.forwardRef(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      'relative z-10 flex max-w-max flex-1 items-center justify-center',
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

// Navigation Menu List
const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      'group flex flex-1 list-none items-center justify-center space-x-1',
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

// Navigation Menu Item
const NavigationMenuItem = NavigationMenuPrimitive.Item

// Navigation Menu Trigger
const NavigationMenuTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(
      'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50',
      className
    )}
    {...props}
  >
    {children}
    <ChevronDownIcon
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

// Navigation Menu Content
const NavigationMenuContent = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto',
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

// Navigation Menu Link
const NavigationMenuLink = NavigationMenuPrimitive.Link

// Navigation Menu Indicator
const NavigationMenuIndicator = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName

// Navigation Menu Viewport
const NavigationMenuViewport = React.forwardRef(({ className, ...props }, ref) => (
  <div className={cn('absolute left-0 top-full flex justify-center')}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName

// Navigation Grid Card Component
function NavGridCard({ link, className, ...props }) {
  return (
    <NavigationMenuLink
      className={cn(
        'group relative flex flex-col justify-center border p-0 bg-background hover:bg-accent/50 transition-colors rounded-lg',
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between px-5 py-4">
        <div className="space-y-1">
          <span className="text-sm leading-none font-medium">{link.title}</span>
          {link.description && (
            <p className="text-muted-foreground line-clamp-1 text-xs">
              {link.description}
            </p>
          )}
        </div>
        {link.icon && <link.icon className="text-muted-foreground size-6" />}
      </div>
    </NavigationMenuLink>
  )
}

// Navigation Small Item Component
function NavSmallItem({ link, className, ...props }) {
  return (
    <NavigationMenuLink
      className={cn(
        'group relative flex items-center gap-3 rounded-lg p-3 hover:bg-accent/50 transition-colors',
        className
      )}
      {...props}
    >
      {link.icon && (
        <div className="flex size-8 items-center justify-center rounded-md bg-muted/20 border">
          <link.icon className="size-4" />
        </div>
      )}
      <div className="flex flex-col">
        <span className="text-sm font-medium">{link.title}</span>
        {link.description && (
          <p className="text-xs text-muted-foreground line-clamp-1">
            {link.description}
          </p>
        )}
      </div>
      <ArrowRightIcon className="ml-auto size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
    </NavigationMenuLink>
  )
}

// Navigation Large Item Component
function NavLargeItem({ link, className, ...props }) {
  return (
    <NavigationMenuLink
      className={cn(
        'bg-background group relative flex flex-col justify-center border p-0 hover:bg-accent/50 transition-colors rounded-lg',
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between px-5 py-4">
        <div className="space-y-1">
          <span className="text-sm leading-none font-medium">{link.title}</span>
          {link.description && (
            <p className="text-muted-foreground line-clamp-1 text-xs">
              {link.description}
            </p>
          )}
        </div>
        {link.icon && <link.icon className="text-muted-foreground size-6" />}
      </div>
    </NavigationMenuLink>
  )
}

// Navigation Mobile Item Component
function NavItemMobile({ item, className, ...props }) {
  return (
    <a
      className={cn(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground group relative flex gap-1 gap-x-2 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          'bg-muted/20 flex size-10 items-center justify-center rounded-lg border'
        )}
      >
        {item.icon && <item.icon />}
      </div>
      <div className={cn('flex h-10 flex-col justify-center')}>
        <p className="text-sm">{item.title}</p>
        <span className="text-muted-foreground line-clamp-1 text-xs leading-snug">
          {item.description}
        </span>
      </div>
    </a>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  NavGridCard,
  NavSmallItem,
  NavLargeItem,
  NavItemMobile,
}