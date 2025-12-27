import { Header1, Header2, Text, Mono, Header3 } from "@/components/ui/typography";
import { Card, CardHeader, CardTitle, CardContent, CardAction } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Flag } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-8 p-8">
      <Header2 text="Welcome back, Verso!" />

      <Text text="Statistics:" className="mb-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Races</CardTitle>
          </CardHeader>
          <CardContent>
            <Mono text="128" className="text-2xl" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Wins</CardTitle>
          </CardHeader>
          <CardContent>
            <Mono text="24 (18.7%)" className="text-2xl" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Podiums</CardTitle>
          </CardHeader>
          <CardContent>
            <Mono text="51" className="text-2xl" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Best Lap</CardTitle>
          </CardHeader>
          <CardContent>
            <Mono text="1:31.982" className="text-2xl" />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Next Race</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <Text text="Championship" />
              <Mono text="GT3 Europe" />
            </div>

            <div>
              <Text text="Circuit" />
              <Mono text="Spa-Francorchamps" />
            </div>

            <div>
              <Text text="Date" />
              <Mono text="12 Mar 2025" />
            </div>

            <div>
              <Text text="Start Time" />
              <Mono text="21:00 CET" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Latest Results</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Text text="Championship - GT3 Europe - SPA" />
              <Header1 text="1st" />
            </div>
            <div>
              <Text text="Championship - GT3 Europe - SPA" />
              <Header1 text="1st" />
            </div>
          </CardContent>
        </Card>
      </div>
      <Text text="Rapid Actions:" className="mb-4" />
      <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        <Button variant="outline" className="col-span-1 sm:col-span-2 lg:col-span-1 w-full justify-start">
          <Flag className="mr-2" />
          Add New Race
        </Button>
      </div>

      <Text text="Races" className="mb-4" />
      <div className="grid grid-cols-1 sm:grid-cols-8 gap-4">
        <Card className="col-span-1 sm:col-span-4 lg:col-span-2">
          <CardContent className="p-4 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-md border border-neutral-800 bg-neutral-900">
                <img
                  src="https://flagcdn.com/w40/be.png"
                  className="h-6 w-6"
                />
              </div>

              <div className="flex flex-col gap-1">
                <Header3 text="Spa-Francorchamps" />
                <Text text="SBL League" />
                <Text text="ELMS · Belgium" />
                <Text text="12 Mar 2025 · 21:00 CET" />
              </div>
            </div>

            <Button
              variant="ghost"
              className="justify-center gap-2 px-0 text-sm text-neutral-300 hover:text-white"
            >
              <Car className="h-4 w-4" />
              View race details
            </Button>
          </CardContent>
        </Card>
      </div>



    </div>
  )
}