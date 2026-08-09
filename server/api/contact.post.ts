import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig()

  if (!body.name || !body.email || !body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Name, email, and message are required fields',
    })
  }

  // Create a transporter using Gmail credentials from runtime config
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.gmailUser,
      pass: config.gmailPass,
    },
  })

  const mailOptions = {
    from: config.gmailUser, // Must match authenticated user
    to: config.gmailUser,   // Receive at the same address, or change to another admin email
    replyTo: body.email,
    subject: `New Contact Form Submission from ${body.name}`,
    text: `
      You have received a new message from your website contact form.

      Name: ${body.name}
      Email: ${body.email}
      Phone: ${body.phone || 'N/A'}
      
      Message:
      ${body.message}
    `,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Phone:</strong> ${body.phone || 'N/A'}</p>
      <hr>
      <h3>Message:</h3>
      <p>${body.message.replace(/\n/g, '<br>')}</p>
    `,
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Error sending email:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email',
    })
  }
})
