require('dotenv').config();
const context = new TuyaContext({
	baseUrl: proccess.env.TUYA_BASE_URL,
	accessKey: proccess.env.TUYA_ACCESS_KEY,
	secretKey: proccess.env.TUYA_SECRET_KEY
});

const main = async () => {
  // Define the device ID
   const device_id = "vdev80003567";
   // Query device details
   const devicedetail  = await context.device.detail({
     device_id: device_id,
   });
   if(!devicedetail.success) {
     new Error();
   }
   console.log("Device details:",devicedetail);
 };