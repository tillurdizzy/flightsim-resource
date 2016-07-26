'use strict';

C172MOD.service('ListSrvcC172', [function lists172() {
    var self = this;

   
    self.stats = [
        {item:"Crew",data:"1"},
        {item:"Pax Capacity",data:"3"},
        {item:"Max Range",data:" 75% Pwr / 516 nm"},
        {item:"Empty Weight",data:"1,663 lb"},
        {item:"Max Ramp Weight",data:"2,558 lb (767 kg)"},
        {item:"Wing Span",data:"36 ft 1 in (11.00 m)"},
        {item:"Length",data:"27 ft 2 in (8.28 m)"},
        {item:"Height",data:"8 ft 11 in (2.72 m)"},
        {item:"Max Fuel Capacity",data:"56 US gallons (212 litres)"},
        {item:"Ceiling",data:"13,500 ft (4,100 m)"}];

    self.speeds = [
        {item:"Best Glide Speed",data:"68 KIAS"},
        {item:"Stall in landing configuration",data:"40 KIAS"},
        {item:"Stall in cruise configuration",data:"48 KIAS"},
        {item:"Rotation (VR)",data:"55 KIAS"},
        {item:"Best Angle-of-Climb",data:"62 KIAS"},
        {item:"Best Rate-of-Climb",data:"74 KIAS"},
        {item:"Enroute climb speed",data:"75-85 KIAS"},
        {item:"Max. structural cruising speed ",data:"129 KIAS"},
        {item:"Approach Speed",data:"60-70- KIAS"},
        {item:"Never exceed speed",data:"163 KIAS"},
        {item:"Maneuvering Speed",data:""},
        {item:" - 2550 lbs",data:"105 KIAS"},
        {item:" - 2200 lbs",data:"98 KIAS"},
        {item:" - 1900 lbs",data:"90 KIAS"},
        {item:"Flaps extended",data:"Vfe"},
        {item:" - 0 - 10°",data:"110 KIAS"},
        {item:" - 10 - 30°",data:"85 KIAS"}];

    self.prestart = [
        {item: "QUICKSTART MENU"},
        {item: "Cold and Dark", data: "Set", priority: "high"},
        {item: "Secure Aircraft", data: "Set", priority: "high"},
        {item: "Prepare for Start", data: "Set", priority: "high"},
        {item: "MAINTENANCE MENU"},
        {item: "Repair All", data: "Select", priority: "high"}];

    self.engineStart = [
        {item: "Master",data: "On",priority: "high"},
        {item: "Red Beacon",data: "On",priority: "high"},
        {item: "PRIME ENGINE"},
        {item: "Aux Fuel Pump",data: "On",priority: "high"},
        {item: "Mixture",data: "Full",priority: "high"},
        {item: "- Wait for fuel flow -"},
        {item: "Mixture ",data: "Closed",priority: "high"},
        {item: "Aux Fuel Pump",data: "Off",priority: "high"},
        {item: "Starter",data: "Hold",priority: "high"},
        {item: "XXX",data: "XXX",priority: "high"},
        {item: "XXX",data: "XXX",priority: "high"},
        {item: "XXX",data: "XXX",priority: "high"},
        {item: "XXX",data: "XXX",priority: "high"},
        {item: "XXX",data: "XXX",priority: "high"},
        {item: "XXX",data: "XXX",priority: "high"},
        {item: "XXX",data: "XXX",priority: "high"},
        {item: "XXX",data: "XXX",priority: "high"},
        {item: "XXX",data: "XXX",priority: "high"}];

    self.pushback = [
        {item: "ATC"},
        {item: "  - Request Pushback Clearance",data: "On",priority: "low"},
        {item: "XXX",data: "XXX",priority: "high"}
    ];

    self.taxi = [{
        item: "BEFORE:"
    }, {
        item: "  - Request Taxi Clearance",
        data: "On",
        priority: "low"
    }, {
        item: "DURING:"
    }, {
        item: "  - Brakes",
        data: "Check",
        priority: "low"
    }, {
        item: "  - Directional Gyro",
        data: "Check",
        priority: "low"
    }, {
        item: "  - Turn Coordinator",
        data: "Check",
        priority: "low"
    }, {
        item: "  - Artificial Horizon",
        data: "Check",
        priority: "low"
    }, {
        item: "HOLDING:"
    }, {
        item: "  - Parking Brake",
        data: "Set",
        priority: "high"
    }, {
        item: "  - Taxi Lights",
        data: "Off",
        priority: "high"
    }, {
        item: "  - Strobe Light",
        data: "On",
        priority: "high"
    }, {
        item: "  - Landing Lights",
        data: "On",
        priority: "high"
    }, {
        item: "  - Nav Lights",
        data: "On",
        priority: "high"
    }, {
        item: "  - Autopilot",
        data: "Set and Off",
        priority: "Low"
    }, {
        item: "  - Altimeter",
        data: "Set (Press B)",
        priority: "low"
    }, {
        item: "  - Flight Director",
        data: "On",
        priority: "low"
    }, {
        item: "  - Nav Source",
        data: "Set GPS or NAV",
        priority: "low"
    }, {
        item: "  - Pitot Heat",
        data: "As REQD",
        priority: "low"
    }, {
        item: "  - Prop/Boot",
        data: "As REQD",
        priority: "low"
    }];

    self.takeoff = [{
        item: "-ATC"
    }, {
        item: "  - Request Takeoff Clearance",
        data: "On",
        priority: "low"
    }, {
        item: "LINED UP:"
    }, {
        item: "-PANEL"
    }, {
        item: "  - Heading Indicator",
        data: "Set to Runway",
        priority: "high"
    }, {
        item: "-PEDESTAL"
    }, {
        item: "  - Elevator Trim",
        data: "Set for Takeoff",
        priority: "high"
    }, {
        item: "  - Propeller",
        data: "MAX (1900 RPM)",
        priority: "high"
    }, {
        item: "  - Fuel Mix",
        data: "Full Rich",
        priority: "high"
    }, {
        item: "  - Flaps",
        data: "20 degrees",
        priority: "high"
    }, {
        item: "TAKEOFF RUN:"
    }, {
        item: "  - Throttle",
        data: "Full (100%)",
        priority: "high"
    }, {
        item: "  - Parking Brake",
        data: "Release",
        priority: "high"
    }, {
        item: "  - Rotate",
        data: "75 KIAS",
        priority: "high"
    }, {
        item: "  - Pitch",
        data: "10° (Follow FD)",
        priority: "high"
    }, {
        item: "LIFTOFF:"
    }, {
        item: "  - Throttle, ease back to:",
        data: "85-90%",
        priority: "high"
    }, {
        item: "  - Flaps at 85 KIAS",
        data: "10° (F6)",
        priority: "high"
    }, {
        item: "  - Trim to maintain 95 KIAS",
        data: "As required",
        priority: "high"
    }, {
        item: "  - Flaps at 95 KIAS",
        data: "Up (F5)",
        priority: "high"
    }, {
        item: "  - Annunciator Lights",
        data: "Check Off",
        priority: "low"
    }, {
        item: "  - Engine Instruments",
        data: "Check",
        priority: "low"
    }]


    self.climb =  [{
        item: "  - Airspeed",
        data: "110-120 KIAS",
        priority: "high"
    }, {
        item: "  - Throttle",
        data: "As required",
        priority: "high"
    }, {
        item: "  - Propeller",
        data: "1600-1900 RPM",
        priority: "high"
    }, {
        item: "  - Autopilot",
        data: "Engage",
        priority: "low"
    }, {
        item: "  - Altimeter",
        data: "Set (Press B)",
        priority: "high"
    }, {
        item: "  - Landing Lights",
        data: "Off",
        priority: "high"
    }];

    self.cruise = [{
        item: "PANEL"
    }, {
        item: "  - Altimeter",
        data: "Set (Press B)",
        priority: "high"
    }, {
        item: "  - Cruise Power",
        data: "130-160 KIAS",
        priority: "high"
    }, {
        item: "  - Fuel Conditioner Lever",
        data: "MIN",
        priority: "high"
    }, {
        item: "  - Propeller",
        data: "MIN (1600 RPM)",
        priority: "high"
    }, {
        item: "  - Engine Instruments",
        data: "Check",
        priority: "low"
    }, {
        item: "  - Engine Temperatures",
        data: "Check",
        priority: "low"
    }];

    self.descent = [{
        item: "PEDESTAL(SHIFT+4)"
    }, {
        item: "  - Propeller",
        data: "MAX",
        priority: "high"
    }, {
        item: "  - Throttle",
        data: "50%",
        priority: "high"
    }, {
        item: "SLOW TO 145 KIAS, THEN:"
    }, {
        item: "RADIO STACK (SHIFT+2)"
    }, {
        item: "  - AP / Set Altitude",
        data: "2500 AGL or ILS LOC",
        priority: "high"
    }, {
        item: "  - AP / Set VS",
        data: "-1000",
        priority: "high"
    }];

    self.visualApproach = [{
        item: "ATC"
    }, {
        item: "  - Request Landing Clearance",
        data: "On",
        priority: "low"
    }, {
        item: "2500 AGL, 10 NM FROM TOUCHDOWN:"
    }, {
        item: "  - Altimeter",
        data: "Set",
        priority: "high"
    }, {
        item: "  - Fuel Boost Pump",
        data: "On",
        priority: "high"
    }, {
        item: "  - Propeller",
        data: "MAX",
        priority: "high"
    }, {
        item: "  - Speed: Establish",
        data: "125 KIAS",
        priority: "high"
    }, {
        item: "  - Flaps",
        data: "10 degrees",
        priority: "high"
    }, {
        item: "  - VS",
        data: "-500",
        priority: "high"
    }, {
        item: "1000 AGL, 5 NM FROM TOUCHDOWN:"
    }, {
        item: "  - Speed: Establish",
        data: "105 KIAS",
        priority: "high"
    }, {
        item: "  - Flaps",
        data: "20 degrees",
        priority: "high"
    }, {
        item: "  - VS",
        data: "-500",
        priority: "high"
    }, {
        item: "  - Landing Lights",
        data: "On",
        priority: "low"
    }, {
        item: "FINAL DESCENT:"
    }, {
        item: "  - Autopilot",
        data: "Off",
        priority: "high"
    }, {
        item: "  - Flaps",
        data: "Full",
        priority: "high"
    }, {
        item: "  - Speed: Establish",
        data: "85 KIAS",
        priority: "high"
    }, {
        item: "  - Elevator Trim",
        data: "As needed",
        priority: "high"
    }, {
        item: "LANDING:"
    }, {
        item: "  - Speed: Establish",
        data: "80 KIAS",
        priority: "high"
    }, {
        item: "  - Flare",
        data: "10 ft AGL",
        priority: "high"
    }, {
        item: "  - After touchdown",
        data: "Brake",
        priority: "high"
    }, {
        item: "  - Landing roll",
        data: "Nose Down",
        priority: "high"
    }];

    self.ils = [{
        item: "ATC"
    }, {
        item: "  - Request Landing Clearance",
        data: "On",
        priority: "low"
    }, {
        item: "LOCALIZER FLIGHT LEVEL:"
    }, {
        item: "-RADIO STACK (SHIFT+2)"
    }, {
        item: "  - AP / Set NAV 1",
        data: "LOC frequency",
        priority: "high"
    }, {
        item: "  - CRS Indicator",
        data: "LOC Course",
        priority: "high"
    }, {
        item: "  - Nav Source",
        data: "NAV",
        priority: "high"
    }, {
        item: "-PANEL"
    }, {
        item: "  - Altimeter",
        data: "Set",
        priority: "high"
    }, {
        item: "  - Fuel Boost Pump",
        data: "On",
        priority: "high"
    }, {
        item: "  - Propeller",
        data: "MAX",
        priority: "high"
    }, {
        item: "  - Speed: Establish",
        data: "125 KIAS",
        priority: "high"
    }, {
        item: "  - Flaps",
        data: "10 degrees",
        priority: "high"
    }, {
        item: "  - Speed: Establish",
        data: "105 KIAS",
        priority: "high"
    }, {
        item: "  - Flaps",
        data: "20 degrees",
        priority: "high"
    }, {
        item: "FINAL GLIDESCOPE APPROACH:"
    }, {
        item: "  - Landing Lights",
        data: "On",
        priority: "low"
    }, {
        item: "  - AP / Set Approach Mode",
        data: "APP",
        priority: "high"
    }, {
        item: "  - Flaps",
        data: "Full",
        priority: "high"
    }, {
        item: "  - Speed",
        data: "Center GS indicators",
        priority: "high"
    }, {
        item: "200 FT AGL"
    }, {
        item: "  - Autopilot",
        data: "Off",
        priority: "high"
    }, {
        item: "  - Speed: Maintain",
        data: "80 KIAS",
        priority: "high"
    }, {
        item: "10 FT AGL"
    }, {
        item: "  - Throttle",
        data: "20%",
        priority: "high"
    }, {
        item: "  - Pitch",
        data: "Flare",
        priority: "high"
    }, {
        item: "TOUCHDOWN"
    }, {
        item: "  - Landing Roll",
        data: "Nose Down",
        priority: "high"
    }, {
        item: "  - Brake",
        data: "As needed",
        priority: "high"
    }];

    self.taxiParking = [{
        item: "Flaps",
        data: "Retract",
        priority: "high"
    }, {
        item: "Taxi Lights",
        data: "On",
        priority: "high"
    }, {
        item: "Landing Lights",
        data: "Off",
        priority: "high"
    }, {
        item: "Avionics / Radios",
        data: "As required",
        priority: "high"
    }, {
        item: "Transponder",
        data: "1200",
        priority: "high"
    }];

    self.shutdown = [{
        item: "Parking Brake",
        data: "Set",
        priority: "high",
        priority: "high",
        "-audio": "null"
    }, {
        item: "Throttle",
        data: "Idle",
        priority: "high",
        priority: "high",
        "-audio": "null"
    }, {
        item: "Fuel Boost Pump",
        data: "Off",
        priority: "high",
        priority: "low",
        "-audio": "null"
    }, {
        item: "Flight Director",
        data: "Off",
        priority: "high",
        priority: "low",
        "-audio": "null"
    }, {
        item: "Avionics Switch",
        data: "Off",
        priority: "high",
        priority: "low",
        "-audio": "null"
    }, {
        item: "Taxi Lights",
        data: "Off",
        priority: "high",
        priority: "low",
        "-audio": "null"
    }, {
        item: "Nav Lights",
        data: "Off",
        priority: "high",
        priority: "low",
        "-audio": "null"
    }, {
        item: "Strobes",
        data: "Off",
        priority: "high",
        priority: "low",
        "-audio": "null"
    }, {
        item: "Pitot Heat",
        data: "Off",
        priority: "high",
        priority: "low",
        "-audio": "null"
    }, {
        item: "Fuel Flow",
        data: "Cutoff",
        priority: "high",
        priority: "low",
        "-audio": "null"
    }, {
        item: "Fuel Selector",
        data: "Off",
        priority: "high",
        priority: "low",
        "-audio": "null"
    }, {
        item: "Propeller",
        data: "Feather",
        priority: "high",
        priority: "low",
        "-audio": "null"
    }, {
        item: "Beacon",
        data: "Off",
        priority: "high",
        priority: "low",
        "-audio": "null"
    }, {
        item: "Panel Light",
        data: "Off",
        priority: "high",
        priority: "low",
        "-audio": "null"
    }, {
        item: "Battery Switch",
        data: "Off",
        priority: "high",
        priority: "low",
        "-audio": "null"
    }, {
        item: "Generator Switch",
        data: "Off",
        priority: "high",
        priority: "low",
        "-audio": "null"
    }];


    return self;
}]);
