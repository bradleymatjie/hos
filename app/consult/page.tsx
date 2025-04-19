'use client'
import './consult.scss';
import { FormEvent, useState } from "react";
import {servicesList} from '../data'
import {
  Input,
} from "@/components/ui/input"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"


const ConsultationJourney = () => {
  const [businessType, setBusinessType] = useState("");
  // const [challenges, setChallenges] = useState("");
  // const [goals, setGoals] = useState("");
  // const [assistance, setAssistance] = useState('');
  // const [preferredDate, setPreferredDate] = useState("");
  // const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const consultationData = {
      businessType,
      // challenges,
      // goals,
      // assistance,
      // preferredDate,
      // message,
    };
    console.log("Consultation Data Submitted:", consultationData);
  };



  return (
    <div className="consult container">
      <div className='progress-status'>
      <h2 className="text-2xl font-semibold text-center">Welcome!</h2>
      <p className="text-lg text-center">Tell us a little about your business.</p>
      </div>

      <div className='form-journey-container'>
      <form onSubmit={handleSubmit} className="bg-white rounded-xl w-full p-8 space-y-6">
      <p className="text-lg leading-8">
        What is your company name? <Input
          type="text"
          // value={businessType}
          // onChange={(e) => setBusinessType(e.target.value)}
          placeholder="type here..."
          className="inline-block w-[250px] mx-2 m-2"
          required
        />
      
         , You specialise in&nbsp;
        <Input
          type="text"
          // value={businessType}
          // onChange={(e) => setBusinessType(e.target.value)}
          placeholder="type here..."
          className="inline-block w-[200px] mx-2 m-2"
          required
        />

         . Please select the services you want from us 
         <Select onValueChange={setBusinessType} required>
          <SelectTrigger className="w-[250px] inline-block align-middle m-2">
            <SelectValue placeholder="Select Service" />
          </SelectTrigger>
          <SelectContent>
            {servicesList.map((item, index) => (
              <SelectItem value={item.title} key={index}>
                {item.title}
              </SelectItem>
            ))}
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>

        {businessType == 'other' && <span>You selected other please type your required service here. <Input
          type="text"
          placeholder="type here..."
          className="inline-block w-[200px] mx-2 m-2"
          required
        /></span>}
      
        You’d prefer to schedule your consultation on&nbsp;
        <Input
          type="datetime-local"
          // value={preferredDate}
          // onChange={(e) => setPreferredDate(e.target.value)}
          className="inline-block w-auto"
          required
        />

      {/* <Button type="submit" className="w-full py-3 text-lg mt-5 ">
        Submit
      </Button> */}
      </p>
    </form>

      </div>

    </div>
  );
};

export default ConsultationJourney;
  