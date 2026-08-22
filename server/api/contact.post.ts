import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig()

  if (!body.name || !body.email) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Name and email are required fields',
    })
  }

  const isQuote = body.isQuoteRequest || !!body.productName
  const productName = body.productName || (body.productNameAr ? `${body.productNameAr} (${body.productNameEn || ''})` : 'منتج غير محدد')
  const subject = isQuote 
    ? `طلب عرض سعر لمنتج: ${productName} - من ${body.name}`
    : `رسالة جديدة من الموقع: ${body.name}`

  const plainText = isQuote ? `
===============================================
طلب عرض سعر جديد للمنتج (New Product Quote Request)
===============================================

اسم المنتج (Product Name): ${productName}
القسم (Category): ${body.categoryTitle || 'N/A'}
رابط المنتج (Product Link): ${body.productUrl || 'N/A'}

بيانات العميل (Client Information):
- اسم الشركة (Company Name): ${body.name}
- المسمى الوظيفي (Job Title): ${body.jobTitle || 'غير محدد'}
- البريد الإلكتروني (Email): ${body.email}
- رقم الهاتف (Phone): ${body.phone || 'غير محدد'}

رسالة العميل (Client Message):
${body.message || 'لا توجد ملاحظات إضافية'}
` : `
===============================================
رسالة جديدة من تواصل معنا (New Contact Message)
===============================================

- الاسم (Name): ${body.name}
- البريد الإلكتروني (Email): ${body.email}
- رقم الهاتف (Phone): ${body.phone || 'غير محدد'}

الرسالة (Message):
${body.message || ''}
`

  const htmlContent = isQuote ? `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; direction: rtl; text-align: right; background-color: #f4f6f9; padding: 30px; color: #333;">
      <div style="max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.1); border: 1px solid #e1e8ed;">
        
        <!-- Header Banner -->
        <div style="background: linear-gradient(135deg, #121c2d 0%, #1e2d42 100%); padding: 25px 30px; text-align: center; border-bottom: 4px solid #E99E15;">
          <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: bold;">طلب عرض سعر لمنتج</h1>
          <p style="color: #E99E15; margin: 8px 0 0 0; font-size: 14px; font-weight: 600;">موقع ساب تكـ / بيستوليكس</p>
        </div>

        <!-- Content Area -->
        <div style="padding: 30px;">
          
          <!-- Product Highlight Card -->
          <div style="background-color: #fff9ed; border: 2px solid #fce3b5; border-radius: 12px; padding: 20px; margin-bottom: 25px;">
            <div style="font-size: 13px; color: #b87500; font-weight: bold; text-transform: uppercase; margin-bottom: 6px;">المنتج المطلوب:</div>
            <div style="font-size: 20px; color: #121c2d; font-weight: 800; margin-bottom: 10px;">${productName}</div>
            ${body.categoryTitle ? `<div style="font-size: 14px; color: #555; margin-bottom: 8px;"><strong>القسم:</strong> ${body.categoryTitle}</div>` : ''}
            ${body.productUrl ? `<div style="font-size: 13px;"><a href="${body.productUrl}" target="_blank" style="color: #E99E15; font-weight: bold; text-decoration: underline;">فتح صفحة المنتج مباشرة &larr;</a></div>` : ''}
          </div>

          <!-- Client Details -->
          <h3 style="color: #121c2d; border-bottom: 2px solid #f0f0f0; padding-bottom: 8px; margin-top: 0;">بيانات العميل:</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px; font-size: 15px;">
            <tr>
              <td style="padding: 10px 0; color: #777; width: 130px; font-weight: bold;">اسم الشركة:</td>
              <td style="padding: 10px 0; color: #111; font-weight: 600;">${body.name}</td>
            </tr>
            <tr style="border-top: 1px solid #f5f5f5;">
              <td style="padding: 10px 0; color: #777; font-weight: bold;">المسمى الوظيفي:</td>
              <td style="padding: 10px 0; color: #111; font-weight: 600;">${body.jobTitle || 'غير محدد'}</td>
            </tr>
            <tr style="border-top: 1px solid #f5f5f5;">
              <td style="padding: 10px 0; color: #777; font-weight: bold;">البريد الإلكتروني:</td>
              <td style="padding: 10px 0; color: #111;"><a href="mailto:${body.email}" style="color: #0066cc; text-decoration: none;">${body.email}</a></td>
            </tr>
            <tr style="border-top: 1px solid #f5f5f5;">
              <td style="padding: 10px 0; color: #777; font-weight: bold;">رقم الهاتف:</td>
              <td style="padding: 10px 0; color: #111; font-weight: 600;">${body.phone || 'غير محدد'}</td>
            </tr>
          </table>

          <!-- Message -->
          <h3 style="color: #121c2d; border-bottom: 2px solid #f0f0f0; padding-bottom: 8px;">ملاحظات / رسالة العميل:</h3>
          <div style="background: #f9fbfd; border-radius: 8px; padding: 15px; border-right: 4px solid #121c2d; font-size: 14px; line-height: 1.6; color: #444;">
            ${body.message ? body.message.replace(/\n/g, '<br>') : '<em style="color: #999;">لا توجد رسالة إضافية</em>'}
          </div>

        </div>

        <!-- Footer -->
        <div style="background-color: #f4f6f9; padding: 15px 30px; text-align: center; font-size: 12px; color: #888; border-top: 1px solid #eee;">
          تم إرسال هذا البريد تلقائياً من نموذج طلب أسعار المنتجات في الموقع.
        </div>
      </div>
    </div>
  ` : `
    <div style="font-family: Arial, sans-serif; direction: rtl; text-align: right; padding: 20px;">
      <h2>رسالة جديدة من صفحة تواصل معنا</h2>
      <p><strong>الاسم:</strong> ${body.name}</p>
      <p><strong>البريد الإلكتروني:</strong> ${body.email}</p>
      <p><strong>الهاتف:</strong> ${body.phone || 'غير محدد'}</p>
      <hr>
      <h3>الرسالة:</h3>
      <p>${body.message ? body.message.replace(/\n/g, '<br>') : ''}</p>
    </div>
  `

  console.log('=== PRODUCT QUOTE REQUEST EMAIL PREVIEW ===')
  console.log('Subject:', subject)
  console.log(plainText)

  // If credentials are present, send via nodemailer
  if (config.gmailUser && config.gmailPass) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: config.gmailUser,
          pass: config.gmailPass,
        },
      })

      const mailOptions = {
        from: config.gmailUser,
        to: config.gmailUser,
        replyTo: body.email,
        subject: subject,
        text: plainText,
        html: htmlContent,
      }

      const info = await transporter.sendMail(mailOptions)
      return { success: true, messageId: info.messageId }
    } catch (error) {
      console.error('Error sending email via Nodemailer:', error)
      // Return success in dev fallback if nodemailer credentials fail or rate limit hit
      return { success: true, warning: 'Logged to console fallback', error: String(error) }
    }
  }

  // Fallback for dev / unconfigured smtp
  return { success: true, devMode: true, message: 'Quote request logged successfully' }
})
