const router = require("express").Router();
const serviceSID = "VA40b1901ef180831d20f62eac5378b9f6";
const accountSID = "ACe6ef72be29ab6e2f731941b0ced8ae3d";
const authToken = "8b2732d33c32e1afeb8772c90c0c2629";
const client = require("twilio")(accountSID, authToken);

router.post("/mobile", (req, res) => {
  client.verify
    .v2.services(serviceSID) // Use v2.services
    .verifications.create({
      to: `+91${req.body.number}`,
      channel: "sms"
    })
    .then((resp) => {
      console.log("response", resp);
      res.status(200).json({ resp });
    });
});

router.post("/otp", (req, res) => {
  const { otp } = req.body; 
  console.log("otp", otp);
  client.verify
    .v2.services(serviceSID) // Use v2.services
    .verificationChecks.create({
      to: `+917736945471`,
      code: otp
    })
    .then((resp) => {
      console.log("otp res", resp);
      if (resp.status === "approved") {
        res.status(200).json({ message: "Verification successful" });
      } else {
        res.status(400).json({ message: "Verification failed" });
      }
    })
    .catch((err) => {
      console.error("Error verifying OTP:", err);
      res.status(500).json({ message: "Internal server error" });
    });
});

module.exports = router;
