'use strict';

app.service('ListSrvc208B', [function lists208B() {
    var self = this;

    self.prestart
 = [{
        item: "COCKPIT"
    }, {
        item: " - Parking Brake",
        data: "Set",
        priority: "high"
    }, {
        item: " - Throttle",
        data: "Idle",
        priority: "high"
    }, {
        item: " - Propeller",
        data: "MAX - High RPM",
        priority: "high"
    }, {
        item: " - Flaps",
        data: "Up",
        priority: "high"
    }, {
        item: " - Fuel Selector",
        data: "Both",
        priority: "low"
    }, {
        item: " - Fuel Conditioner Lever",
        data: "Low Idle",
        priority: "high"
    }, {
        item: " - Fuel Flow",
        data: "Cutoff",
        priority: "high"
    }, {
        item: "ELECTRICAL PANEL (SHIFT+7)"
    }, {
        item: "  - Battery Switch",
        data: "On",
        priority: "high"
    }, {
        item: "  - Avionics Master",
        data: "On",
        priority: "high"
    }, {
        item: "  - Panel Lights",
        data: "As Required",
        priority: "low"
    }, {
        item: "RADIO STACK (SHIFT+2)"
    }, {
        item: "  - COMM 1",
        data: "122.80 or ATC",
        priority: "low"
    }, {
        item: "  - NAV 1 and 2",
        data: "As Required",
        priority: "low"
    }, {
        item: "  - Transponder",
        data: "Set",
        priority: "low"
    }];

    self.engineStart = [{
        item: "Red Beacon",
        data: "On",
        priority: "high"
    }, {
        item: "CTRL-E for AUTOSTART or:",
        priority: "high"
    }, {
        item: "PEDESTAL(SHIFT+4)"
    }, {
        item: "  - Throttle",
        data: "Idle",
        priority: "high"
    }, {
        item: "  - Fuel Conditioner Lever",
        data: "Full",
        priority: "high"
    }, {
        item: "  - Fuel Flow",
        data: "On",
        priority: "high"
    }, {
        item: "FUEL SELECTOR(SHIFT+6)"
    }, {
        item: "  - Fuel Selector",
        data: "Both",
        priority: "high"
    }, {
        item: "ELECTRICAL(SHIFT+7)"
    }, {
        item: "  - Fuel Boost Pump",
        data: "On",
        priority: "high"
    }, {
        item: "  - Ignition Switch",
        data: "On",
        priority: "high"
    }, {
        item: "  - Start Switch",
        data: "Start",
        priority: "high"
    }, {
        item: "INSTRUMENTS(SHIFT+5)"
    }, {
        item: "  - Oil Pressure",
        data: "Check Normal",
        priority: "high"
    }, {
        item: "ELECTRICAL"
    }, {
        item: "  - Generator",
        data: "On",
        priority: "high"
    }, {
        item: "  - Fuel Boost Pump",
        data: "Off",
        priority: "high"
    }, {
        item: "  - Ignition",
        data: "Off",
        priority: "high"
    }, {
        item: "Volt/Ammeter",
        data: "Check Normal",
        priority: "low"
    }, {
        item: "Annunciator Lights",
        data: "All Extinguished",
        priority: "low"
    }];

    self.pushback = [{
        item: "ATC"
    }, {
        item: "  - Request Pushback Clearance",
        data: "On",
        priority: "low"
    }, {
        item: "PANEL"
    }, {
        item: "  - Taxi Lights",
        data: "On",
        priority: "low"
    }, {
        item: "  - Nav Lights",
        data: "On",
        priority: "high"
    }, {
        item: "  - Passenger Signs",
        data: "On",
        priority: "low"
    }, {
        item: "  - Parking Brake",
        data: "Release",
        priority: "high"
    }];

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
