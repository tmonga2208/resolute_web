"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select } from "./ui/select";
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { Montserrat } from "next/font/google";
import { Textarea } from "./ui/textarea";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });


export default function SplitCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1 < 3 ? prev + 1 : prev));

  return (
    <div className={`${montserrat.className} relative w-full mx-auto overflow-hidden`}>
      <div
        className="flex w-full transition-transform duration-500"
        style={{
          transform: `translateX(-${current * 100}%)`,
          width: `100%`,
        }}
      >
        {/* Slide 1 */}
        <div className="flex w-full flex-shrink-0">
          <Card className="w-1/2 rounded-none bg-teal-100">
            <CardContent className=" flex flex-col items-center justify-center text-xl font-semibold">
              <Image src="/logo2.png" width={350} height={350} alt="resolute" />
              <Button className="absolute bottom-12 bg-teal-700 text-sm px-8 rounded-2xl" onClick={nextSlide}>GET STARTED</Button>
            </CardContent>
          </Card>
          <Card className="w-1/2 rounded-none bg-green-100">
            <CardContent className="h-64 flex items-center justify-center text-xl font-semibold">
              Welcome to the Carousel
            </CardContent>
          </Card>
        </div>

        {/* Slide 2 */}
        <div className="flex w-full flex-shrink-0">
          <div className="w-1/2 rounded-none bg-teal-100">
            <CardTitle className="ml-22 mt-4 text-3xl">Nice to meet you!</CardTitle>
            <CardContent className="h-64 flex items-center justify-center text-xl font-semibold">
              <div className="flex items-center justify-center h-full">
                <div className="grid grid-rows-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="block text-sm font-medium text-gray-700">First Name</Label>
                    <Input className="bg-white" type="text" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <Input className="bg-white" type="text" />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium text-gray-700">Phone Number</Label>
                    <Input className="bg-white" type="tel" />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium text-gray-700">Email Address</Label>
                    <Input className="bg-white" type="email" />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium text-gray-700">Support Type</Label>
                    <Select>
                     <SelectTrigger className="bg-white text-sm font-medium px-9 py-2 rounded-md">
                       <SelectValue className="text-sm font-medium" placeholder="Select Support Type" />
                     </SelectTrigger>
                     <SelectContent className="">
                       <SelectItem className="text-sm font-medium px-18 py-2 rounded-md bg-white" value="technical">Technical</SelectItem>
                       <SelectItem className="text-sm font-medium bg-white px-18 py-2 rounded-md" value="billing">Billing</SelectItem>
                       <SelectItem className="text-sm font-medium bg-white px-18 py-2 rounded-md" value="general">General</SelectItem>
                     </SelectContent>
                   </Select>
                  </div>
                  <div className="z-50">
                   <Label className="block text-sm font-medium text-gray-700">Preferred Contact Method*</Label>
                    <Select>
                     <SelectTrigger className="bg-white text-sm font-medium px-9 py-2 rounded-md">
                       <SelectValue className="text-sm font-medium" placeholder="Select Support Type" />
                     </SelectTrigger>
                     <SelectContent>
                       <SelectItem className="text-sm font-medium bg-white px-18 py-2 rounded-md" value="technical">Email</SelectItem>
                       <SelectItem className="text-sm font-medium bg-white px-18 py-2 rounded-md" value="billing">Phone</SelectItem>
                     </SelectContent>
                   </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </div>
          <div className="w-1/2 rounded-none bg-teal-100">
            <CardContent className="h-64 flex flex-col text-xl font-semibold">
              <div className="mt-24 items-center justify-center">
              <Label className="block text-sm font-medium text-gray-700">Any Specific Questions Or Concerns You’d like To Address First?</Label>
              <Textarea className="bg-white h-24" />
              </div>
              <div className="flex items-baseline justify-baseline">
                <Button className="mt-8 bg-teal-700 text-sm px-8 rounded-2xl" onClick={nextSlide}>GET STARTED</Button>
              </div>
            </CardContent>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="flex w-full  flex-shrink-0">
          <div className="w-1/2  rounded-none bg-teal-100">
            <CardContent className="h-64 flex items-center justify-center text-xl font-semibold">
              Final Left Half
            </CardContent>
          </div>
          <div className="w-1/2 rounded-none bg-teal-100">
            <CardContent className="h-64 flex items-center justify-center text-xl font-semibold">
              Done! 🎉
            </CardContent>
          </div>
        </div>
      </div>
    </div>
  );
}
