type DeviceType = 'shelly';

type ShellyDeviceState = 'adopted' | 'connected' | 'orphaned';

interface WiFiNetwork {
    mac: string,
    bssid: string,
    ssid: string,
    channel: number,
    frequency: number,
    signal_level: number,
    quality: number,
    security: string,
    security_flags: string[]
}

type Class = Object & InstanceType<any> & {
    __restoreClass: string | undefined
};

type ClassScope = { [key: string]: Object & Class; };
