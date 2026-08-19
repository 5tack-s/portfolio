'use client'
import { useState, useEffect } from "react";
import { lcdFont } from "../../assets/fonts/index";

interface ClockProps {
  classes?: string; //direct tailwind class cuz yes
}

export default function Clock ({classes = ""} : ClockProps) {
    const [clock, setClock] = useState<string>('--:--:--');
    
      useEffect(() => {
        const interval = setInterval(() => {
          setClock(new Date().toLocaleTimeString('en-GB'));
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);

      return (
        <p className={`${lcdFont.className} text-4xl ${classes}`}>
            {clock}
        </p>
      )
}