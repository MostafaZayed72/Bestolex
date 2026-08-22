import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig()

  if (!body.name || !body.email || !body.phone || !body.date || !body.time) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields'
    })
  }

  const { name, email, phone, date, time, locale } = body
  const isArabic = locale === 'ar'

  // Transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.gmailUser,
      pass: config.gmailPass
    }
  })

  // 1. Email to Admin (Bestolex)
  const adminMailOptions = {
    from: `"Bestolex Booking System" <${config.gmailUser}>`,
    to: config.gmailUser,
    subject: `New Appointment Request - ${name}`,
    html: `
      <div dir="rtl" style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #F97316;">طلب حجز موعد جديد</h2>
        <p><strong>الاسم:</strong> ${name}</p>
        <p><strong>البريد الإلكتروني:</strong> ${email}</p>
        <p><strong>رقم الهاتف:</strong> ${phone}</p>
        <p><strong>التاريخ:</strong> ${date}</p>
        <p><strong>الوقت:</strong> ${time}</p>
      </div>
    `
  }

  // 2. Email to User
  const userMailOptions = {
    from: `"Bestolex | بيستولكس" <${config.gmailUser}>`,
    to: email,
    subject: isArabic ? 'تأكيد طلب موعد - Bestolex' : 'Appointment Request Confirmation - Bestolex',
    html: isArabic ? `
      <div dir="rtl" style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
        <h2 style="color: #F97316;">مرحباً ${name}،</h2>
        <p>شكراً لتواصلك مع بيستولكس.</p>
        <p>لقد استلمنا طلب حجز الموعد الخاص بك بنجاح بالتفاصيل التالية:</p>
        <ul>
          <li><strong>التاريخ:</strong> ${date}</li>
          <li><strong>الوقت:</strong> ${time}</li>
        </ul>
        <p>سيقوم فريقنا بمراجعة الطلب والتواصل معك قريباً لتأكيد الموعد النهائي.</p>
        <br>
        <p>مع تحيات،</p>
        <p>فريق بيستولكس</p>
      </div>
    ` : `
      <div dir="ltr" style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
        <h2 style="color: #F97316;">Hello ${name},</h2>
        <p>Thank you for contacting Bestolex.</p>
        <p>We have successfully received your appointment request with the following details:</p>
        <ul>
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Time:</strong> ${time}</li>
        </ul>
        <p>Our team will review your request and contact you shortly to confirm the final appointment.</p>
        <br>
        <p>Best Regards,</p>
        <p>Bestolex Team</p>
      </div>
    `
  }

  try {
    // Send both emails
    await transporter.sendMail(adminMailOptions)
    await transporter.sendMail(userMailOptions)

    return {
      success: true,
      message: 'Booking request sent successfully'
    }
  } catch (error: any) {
    console.error('Error sending booking email:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send emails'
    })
  }
})
