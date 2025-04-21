'use client'
import './consult.scss';
import { FormEvent, useState } from "react";
import {Input} from "@/components/ui/input";
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Badge } from '@/components/ui/badge';
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Textarea } from '@/components/ui/textarea';
import * as React from "react"
import { addDays, format } from "date-fns"
import { CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const ConsultationJourney = () => {
  const [businessName, setBusinessName] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMoreInfoDrawer, setIsMoreInfoDrawer] = useState(false);
  const [moreInfo, setMoreInfo] = useState('');
  const [messageMoreInfo, setMessageMoreinfo] = useState('');
  const [message, setMessage] = useState('')
  const [date, setDate] = useState<Date>();
  const [step, setStep] = useState(0);
  const [submitLoader, setSubmitLoader] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitLoader(true);

    setTimeout(() => {
      setSubmitLoader(false);
      setSubmitStatus('completed');
    }, 3000)
  };

  function nextStep() {
    setStep(step => {
      if (step <= 5) {
        return step + 1;
      }
      return step;
    });
 }

 function prevStep() {
  setStep(step => {
    if (step >= 0) {
      return step - 1;
    }
    return step;
  });
}

if (submitLoader) {
  return <div>
    skeleton
  </div>
}

if (submitStatus == 'complete') {
  return <h2>Consultation Submitted</h2>
}

  return (
    <div className="consult">
      <div className='progress-status'>
      <h2 className="text-2xl font-semibold text-center">Welcome!</h2>
      <p className="text-lg text-center">Tell us a little about your business.</p>
      <Badge>{step+1} of 5</Badge>
      </div>

      <div className='form-journey-container'>
      <form onSubmit={handleSubmit} className="bg-white rounded-xl w-full p-8 space-y-6">
      <p className="text-sm text-center">
        <span className={`one ${step == 0 && 'show'}`}>What is your Business name? 
        <Input
          type="text"
          value={businessName}
          onChange={e => setBusinessName(e.target.value)}
          placeholder="type here..."
          className="inline-block w-[200px] mx-2 m-2"
          required
        /></span> <span className={`two ${step == 1 && 'show'}`}>what is your specialty? 
        <Input
        type="text"
        placeholder="type here..."
        className="inline-block w-[200px] mx-2 m-2"
        required
      /></span> <span className={`three ${step == 2 && 'show'}`}> How can we help you today ?   
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className='m-1'>{message ? 'edit':'Enter Text'}</Button>
      </DrawerTrigger>
      <DrawerContent>
        <span className="mx-auto w-full max-w-sm m-3">
          <DrawerHeader>
            <DrawerTitle>How can we help you today?</DrawerTitle>
            <DrawerDescription>tell us about the problem you are facing</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
          <div className="grid w-full gap-2">
            <Textarea 
               placeholder="Type your message here." 
               value={message} 
               onChange={e => setMessage(e.target.value)} 
               rows={8} 
              />
            <Button onClick={() => setIsDrawerOpen(false)}>Save</Button>
          </div>
          </div>
        </span>
      </DrawerContent>
    </Drawer></span>
      <span className={`four ${step == 3 && 'show'}`}>When would you like for us to contact you?  
        <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal m-2",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="flex w-auto flex-col space-y-2 p-2"
      >
        <Select
          onValueChange={(value) =>
            setDate(addDays(new Date(), parseInt(value)))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="0">Today</SelectItem>
            <SelectItem value="1">Tomorrow</SelectItem>
            <SelectItem value="3">In 3 days</SelectItem>
            <SelectItem value="7">In a week</SelectItem>
          </SelectContent>
        </Select>
        <div className="rounded-md border">
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </div>
      </PopoverContent>
    </Popover></span>
       <span className={`five ${step == 4 && 'show'}`}>Is there anything else you would like to add or enquire from us ? <Drawer open={isMoreInfoDrawer} onOpenChange={setIsMoreInfoDrawer}>
      <DrawerTrigger asChild>
        <Button variant="outline" className='m-1' onClick={() => setMoreInfo('yes')}>Yes</Button>
      </DrawerTrigger>
      <DrawerContent>
        <span className="mx-auto w-full max-w-sm m-3">
          <DrawerHeader>
            <DrawerTitle>Tell us more info</DrawerTitle>
            <DrawerDescription>be precise with your words</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
          <div className="grid w-full gap-2">
            <Textarea 
               placeholder="Type your message here." 
               value={messageMoreInfo} 
               onChange={e => setMessageMoreinfo(e.target.value)} 
               rows={8} 
              />
            <Button onClick={() => setIsMoreInfoDrawer(false)}>Save</Button>
          </div>
          </div>
        </span>
      </DrawerContent>
    </Drawer> <Button variant={'destructive'} onClick={() => setMoreInfo('no')}>No</Button></span>

      {step == 4 ? <div className='submit-container'>
        <Button className="w-50 py-3 text-sm" onClick={prevStep}>
        <ChevronLeft />
        </Button>
        {moreInfo == 'yes' && messageMoreInfo != '' && <Button type="submit" className="w-50 py-3 text-sm">
          Submit
        </Button>}
        {moreInfo == 'no' && <Button type="submit" className="w-50 py-3 text-sm">
          Submit
        </Button>}
      </div>:<div className='submit-container'>
        {step > 0 && <Button className="w-50 py-3 text-sm" onClick={prevStep}>
        <ChevronLeft />
        </Button>}
        <Button className="w-50 py-3 text-sm" onClick={nextStep}>
        <ChevronRight />
        </Button>
      </div>}
      </p>
    </form>

      </div>

    </div>
  );
};

export default ConsultationJourney;
  