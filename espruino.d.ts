declare function setWatch(
        callback: (...args: any[]) => void, pin: any, mode: any
        ): any;

declare var exports: any;
declare var require: {
    (obj: any): any;
}

declare function digitalRead(pin: any): void;
declare function digitalWrite(pin: any, value: any): void;
declare function digitalPulse(pin:any, value: number, time: number): void;
declare function analogRead(pin: any): void;
declare function analogWrite(pin: any, value: any): void;

declare var A0: espruinoPin;
declare var A1: espruinoPin;
declare var A2: espruinoPin;
declare var A3: espruinoPin;
declare var A4: espruinoPin;
declare var A5: espruinoPin;
declare var A6: espruinoPin;
declare var A7: espruinoPin;
declare var A8: espruinoPin;
declare var A9: espruinoPin;
declare var A10: espruinoPin;
declare var A11: espruinoPin;
declare var A12: espruinoPin;
declare var A13: espruinoPin;
declare var A14: espruinoPin;
declare var A15: espruinoPin;
declare var B0: espruinoPin;
declare var B1: espruinoPin;
declare var B2: espruinoPin;
declare var B3: espruinoPin;
declare var B4: espruinoPin;
declare var B5: espruinoPin;
declare var B6: espruinoPin;
declare var B7: espruinoPin;
declare var B8: espruinoPin;
declare var B9: espruinoPin;
declare var B10: espruinoPin;
declare var B11: espruinoPin;
declare var B12: espruinoPin;
declare var B13: espruinoPin;
declare var B14: espruinoPin;
declare var B15: espruinoPin;
declare var C0: espruinoPin;
declare var C1: espruinoPin;
declare var C2: espruinoPin;
declare var C3: espruinoPin;
declare var C4: espruinoPin;
declare var C5: espruinoPin;
declare var C6: espruinoPin;
declare var C7: espruinoPin;
declare var C8: espruinoPin;
declare var C9: espruinoPin;
declare var C10: espruinoPin;
declare var C11: espruinoPin;
declare var C12: espruinoPin;
declare var C13: espruinoPin;
declare var C14: espruinoPin;
declare var C15: espruinoPin;
declare var LED1: espruinoPin;
declare var LED2: espruinoPin;
declare var LED3: espruinoPin;

interface espruinoPin {
();
on(flag: any): void;
write(flag: any): void;
}
