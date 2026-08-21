<template>
  <div class="privacy-page bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300 py-24">
    <div class="container mx-auto px-4 md:px-8 max-w-4xl">
      <div class="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700">
        
        <div class="text-center mb-10 border-b border-gray-200 dark:border-gray-700 pb-8">
          <h1 class="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            {{ locale === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy' }}
          </h1>
          <p class="text-gray-500 dark:text-gray-400 text-base md:text-lg">
            {{ locale === 'ar' ? 'بيستوليكس لتجارة الآلات والمعدات الثقيلة' : 'Bestolex for Trading of Heavy Machinery & Equipment' }}
          </p>
        </div>

        <div class="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
          
          <!-- Introduction -->
          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {{ locale === 'ar' ? '1. مقدمة' : '1. Introduction' }}
            </h2>
            <p>
              {{ locale === 'ar' 
                ? 'تحترم شركة بيستوليكس لتجارة الآلات والمعدات الثقيلة (المشار إليها باسم "الشركة"، "نحن"، "لنا") خصوصيتك وتلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيف نقوم بجمع واستخدام ومشاركة وحماية معلوماتك الشخصية عند استخدام موقعنا الإلكتروني أو التعامل معنا.'
                : 'Bestolex for Trading of Heavy Machinery and Equipment ("Company", "we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website or interact with us.' 
              }}
            </p>
          </section>

          <!-- Information We Collect -->
          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {{ locale === 'ar' ? '2. المعلومات التي نجمعها' : '2. Information We Collect' }}
            </h2>
            <p class="mb-2">
              {{ locale === 'ar' ? 'قد نقوم بجمع ومعالجة البيانات التالية:' : 'We may collect and process the following data:' }}
            </p>
            <ul class="list-disc list-inside space-y-2">
              <li>{{ locale === 'ar' ? 'معلومات الهوية والاتصال (الاسم، البريد الإلكتروني، أرقام الهواتف، عنوان الشركة).' : 'Identity and Contact Data (name, email address, telephone numbers, company address).' }}</li>
              <li>{{ locale === 'ar' ? 'المعلومات التقنية (عنوان بروتوكول الإنترنت IP، نوع المتصفح، وإحصائيات الزيارة).' : 'Technical Data (internet protocol (IP) address, browser type, and analytics).' }}</li>
              <li>{{ locale === 'ar' ? 'بيانات الاستفسارات والمراسلات (المعلومات التي تقدمها عند طلب تسعير أو استشارة فنية).' : 'Inquiry and Correspondence Data (information provided when requesting a quote or technical consultation).' }}</li>
            </ul>
          </section>

          <!-- How We Use Information -->
          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {{ locale === 'ar' ? '3. كيف نستخدم معلوماتك' : '3. How We Use Your Information' }}
            </h2>
            <ul class="list-disc list-inside space-y-2">
              <li>{{ locale === 'ar' ? 'للرد على استفساراتك وتقديم عروض الأسعار.' : 'To respond to your inquiries and provide quotes.' }}</li>
              <li>{{ locale === 'ar' ? 'لتنفيذ التزاماتنا التعاقدية (التوريد، التركيب، وخدمات ما بعد البيع).' : 'To perform our contractual obligations (supply, installation, and after-sales services).' }}</li>
              <li>{{ locale === 'ar' ? 'لتحسين موقعنا الإلكتروني وخدماتنا للعملاء.' : 'To improve our website and customer services.' }}</li>
            </ul>
          </section>

          <!-- Sharing of Data -->
          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {{ locale === 'ar' ? '4. مشاركة البيانات' : '4. Data Sharing' }}
            </h2>
            <p>
              {{ locale === 'ar' 
                ? 'لا نقوم ببيع أو تأجير بياناتك لأطراف ثالثة. قد نشارك بياناتك فقط مع شركائنا المعتمدين (مثل SAB TECH) عندما يكون ذلك ضرورياً لتنفيذ خدماتك، أو إذا طُلب منا ذلك بموجب القانون القطري.'
                : 'We do not sell or rent your data to third parties. We may only share your data with our authorized partners (such as SAB TECH) when necessary to fulfill our services to you, or if required by Qatari law.' 
              }}
            </p>
          </section>

          <!-- Data Security -->
          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {{ locale === 'ar' ? '5. أمن البيانات' : '5. Data Security' }}
            </h2>
            <p>
              {{ locale === 'ar' 
                ? 'نتخذ تدابير أمنية مناسبة لمنع فقدان بياناتك الشخصية أو استخدامها أو الوصول إليها بطريقة غير مصرح بها أو تعديلها أو الكشف عنها.'
                : 'We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.' 
              }}
            </p>
          </section>

          <!-- Legal Information -->
          <section class="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {{ locale === 'ar' ? 'معلومات الشركة القانونية' : 'Company Legal Information' }}
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span class="font-bold block">{{ locale === 'ar' ? 'السجل التجاري:' : 'Commercial Registration:' }}</span>
                <span>248416</span>
              </div>
              <div>
                <span class="font-bold block">{{ locale === 'ar' ? 'الرخصة التجارية:' : 'Commercial License:' }}</span>
                <span>337386</span>
              </div>
              <div>
                <span class="font-bold block">{{ locale === 'ar' ? 'الرقم الضريبي (TIN):' : 'TIN:' }}</span>
                <span>5009022658</span>
              </div>
            </div>
          </section>

          <!-- Contact Us -->
          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {{ locale === 'ar' ? '6. تواصل معنا' : '6. Contact Us' }}
            </h2>
            <p class="mb-4">
              {{ locale === 'ar' 
                ? 'إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا عبر:'
                : 'If you have any questions about this privacy policy, please contact us at:' 
              }}
            </p>
            <div class="flex flex-col gap-2 font-semibold">
              <a href="mailto:info@bestolex.com" class="text-[#E99E15] hover:underline">info@bestolex.com</a>
              <span dir="ltr">+974 5070 8833 / +974 5150 5014</span>
            </div>
          </section>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

useHead({
  title: locale.value === 'ar' ? 'سياسة الخصوصية | بيستوليكس' : 'Privacy Policy | Bestolex'
})
</script>
