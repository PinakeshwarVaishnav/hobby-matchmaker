import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserCard } from "@/components/user-card";
import { HobbyFilter } from "@/components/hobby-filter";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.29 7 12 12 20.71 7" />
                <line x1="12" y1="22" x2="12" y2="12" />
              </svg>
              <span className="hidden font-bold sm:inline-block">
                Hobby Matchmaker
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="/explore"
              >
                Explore
              </Link>
              <Link
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="/matches"
              >
                Matches
              </Link>
              <Link
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="/events"
              >
                Events
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Input
                className="h-9 md:w-[300px] lg:w-[300px]"
                placeholder="Search hobbies..."
                type="search"
              />
            </div>
            <Button className="h-9">Sign In</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Find Your Fellow Hobbyists
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Connect with people who share your passions. Discover new
                  friends and explore exciting hobbies together.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-pink-600 hover:bg-gray-100">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="text-gray-800 border-white hover:bg-white/20"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Discover Hobby Enthusiasts
            </h2>
            <HobbyFilter />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              <UserCard
                name="Alex Johnson"
                image="/placeholder.svg?height=100&width=100"
                hobbies={["Photography", "Hiking", "Cooking"]}
              />
              <UserCard
                name="Samantha Lee"
                image="/placeholder.svg?height=100&width=100"
                hobbies={["Painting", "Yoga", "Gardening"]}
              />
              <UserCard
                name="Michael Chen"
                image="/placeholder.svg?height=100&width=100"
                hobbies={["Gaming", "Coding", "Music Production"]}
              />
              <UserCard
                name="Emily Taylor"
                image="/placeholder.svg?height=100&width=100"
                hobbies={["Dancing", "Reading", "Traveling"]}
              />
              <UserCard
                name="David Kim"
                image="/placeholder.svg?height=100&width=100"
                hobbies={["Surfing", "Meditation", "Woodworking"]}
              />
              <UserCard
                name="Olivia Martinez"
                image="/placeholder.svg?height=100&width=100"
                hobbies={["Baking", "Knitting", "Volunteering"]}
              />
              <UserCard
                name="James Wilson"
                image="/placeholder.svg?height=100&width=100"
                hobbies={["Rock Climbing", "Astronomy", "Podcasting"]}
              />
              <UserCard
                name="Sophia Nguyen"
                image="/placeholder.svg?height=100&width=100"
                hobbies={["Martial Arts", "Blogging", "Upcycling"]}
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.29 7 12 12 20.71 7" />
                <line x1="12" y1="22" x2="12" y2="12" />
              </svg>
              <p className="text-sm leading-loose text-center md:text-left">
                © 2024 Hobby Matchmaker. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="hover:opacity-75">
                Terms
              </Link>
              <Link href="#" className="hover:opacity-75">
                Privacy
              </Link>
              <Link href="#" className="hover:opacity-75">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
