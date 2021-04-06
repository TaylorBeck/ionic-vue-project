// Capacitor Device: https://capacitorjs.com/docs/apis/device#example
import { Plugins } from "@capacitor/core";
const { Device } = Plugins;

export const getDeviceInfo = async () => {
  const deviceInfo = await Device.getInfo();
  return deviceInfo;
}
