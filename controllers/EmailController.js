import nodemailer from 'nodemailer'

const sendEmail = async (req, res) => {
    const email = req.body.email;
  
    try {
      let transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"20153314@aloe.ulima.edu.pe",
            pass:"cxyFE52&"
        },
        tls:{
            rejectUnauthorized: false,
    }
      });
  
      res.send("just saying hi");
  
      await transporter.sendMail({
        from: "20153314@aloe.ulima.edu.pe",
        to: email,
        subject: "Historia sorpresa",
        html: "Aqui se mandaran anuncios"
      });
    } catch (err) {
      res.status(500).json({
        message: "Error sending emails",
        error: err
      });
    }
  };

  const EmailController = {sendEmail}
  export default EmailController
