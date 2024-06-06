"use client";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import WaterWaveWrapper from "@/components/visualEffects/water-wave-effect";
import { FiHome } from "react-icons/fi";
import { RiUser5Fill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import Input from "@/components/ui/input";
import { PiUserCircleFill } from "react-icons/pi";
import TextArea from "@/components/ui/text-area";
import { MdComment } from "react-icons/md";
import Profile from "@/components/ui/profile";
import FancyButton from "@/components/ui/fancy-button";
import { PiPhoneCallFill } from "react-icons/pi";
import LiveClock from "@/components/ui/live-clock";
import MagneticWrapper from "@/components/visualEffects/magnetic-wrapper";
import ScrollDown from "@/components/ui/scroll-down";

export default function Home() {
  return (
   <WaterWaveWrapper
   imageUrl=""
   dropRadius="3"
   perturbance="3"
   resolution="2048"
   >
    {() => (
    <div className="w-full p-10">
    <div className="max-w-2xl mx-auto">
      <Card title="UI Components">
        <div className="grid grid-cols-4">
          <Button>
            Basic Button
          </Button>
          <Button>
            <FiHome/>
            Basic Button
          </Button>
          <Button>
            <RiUser5Fill />
          </Button>
          <Button link="https://google.com">
            <FcGoogle/>
            Google It
          </Button>
        </div>
        <Input type="text" placeholder="Full Name" />
        <Input type="text" placeholder="Full Name" icon={ <PiUserCircleFill /> } />
        <TextArea placeholder="Comment" />
        <TextArea placeholder="Comment" icon={ <MdComment /> } />
        <Profile/>
        <MagneticWrapper className="w-[300px]">
          <FancyButton text="Contact Me" icon = { <PiPhoneCallFill /> }/>
        </MagneticWrapper>
        <LiveClock timeZone="Africa/Nairobi"/>
        <MagneticWrapper className="">
          <ScrollDown/>
        </MagneticWrapper>
      </Card>
    </div> 
    </div> 
  )}
   </WaterWaveWrapper>
  );
}
