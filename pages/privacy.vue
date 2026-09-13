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

          <!-- Cookies Policy and Google Consent Mode v2 -->
          <section id="cookies" class="border-t border-gray-200 dark:border-gray-700 pt-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {{ locale === 'ar' ? '6. سياسة ملفات تعريف الارتباط (Cookies) ووضع الموافقة من جوجل' : '6. Cookies Policy & Google Consent Mode v2' }}
            </h2>
            <p class="mb-4">
              {{ locale === 'ar'
                ? 'يستخدم موقعنا ملفات تعريف الارتباط (Cookies) والتقنيات المشابهة لتقديم تجربة تصفح آمنة وسلسة، وقياس أداء الموقع، وتخصيص المحتوى. نلتزم بأعلى معايير الخصوصية العالمية عبر تطبيق وضع الموافقة من جوجل (Google Consent Mode v2) بالتكامل مع نظام إدارة الوسوم (Google Tag Manager).'
                : 'Our website uses cookies and similar technologies to ensure secure and smooth browsing, measure site performance, and customize content. We adhere to top privacy standards by implementing Google Consent Mode v2 integrated with Google Tag Manager.'
              }}
            </p>

            <div class="space-y-4 my-6">
              <!-- GTM & GA4 Info -->
              <div class="p-5 rounded-2xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20">
                <h3 class="font-bold text-lg text-amber-500 mb-2">
                  {{ locale === 'ar' ? 'إدارة التحليلات والوسوم عبر Google Tag Manager و Google Analytics 4' : 'Analytics & Tag Management via GTM & GA4' }}
                </h3>
                <p class="text-sm leading-relaxed mb-3 text-gray-600 dark:text-gray-300">
                  {{ locale === 'ar'
                    ? 'تتم إدارة وسوم التتبع والتحليل عبر حاوية Google Tag Manager بالمعرف (GTM-NPWXWRD5). يتم تشغيل وسم Google Analytics 4 بالمعرف (G-Z271QHYR9C) فقط عند منح الزائر موافقته الصريحة على ملفات الارتباط التحليلية. لا يتم تحميل أو تفعيل أي ملفات تحليلية أو إعلانية مسبقاً.'
                    : 'Tracking and analytics tags are orchestrated via Google Tag Manager container (GTM-NPWXWRD5). Google Analytics 4 (Measurement ID: G-Z271QHYR9C) is only fired when the visitor grants explicit consent for analytics cookies. No analytics or advertising cookies are preloaded without consent.'
                  }}
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  <div class="bg-white/80 dark:bg-gray-800/80 p-2.5 rounded-lg border border-gray-200 dark:border-gray-700">
                    <span class="text-gray-500 block">GTM Container:</span>
                    <span class="font-bold text-gray-900 dark:text-white">GTM-NPWXWRD5</span>
                  </div>
                  <div class="bg-white/80 dark:bg-gray-800/80 p-2.5 rounded-lg border border-gray-200 dark:border-gray-700">
                    <span class="text-gray-500 block">GA4 Measurement ID:</span>
                    <span class="font-bold text-gray-900 dark:text-white">G-Z271QHYR9C</span>
                  </div>
                </div>
              </div>

              <!-- Cookie Categories Table/List -->
              <div class="space-y-3">
                <div class="p-4 rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                  <h4 class="font-bold text-base text-gray-900 dark:text-white mb-1">
                    {{ locale === 'ar' ? '1. ملفات الارتباط الضرورية (Strictly Necessary)' : '1. Strictly Necessary Cookies' }}
                  </h4>
                  <p class="text-xs text-gray-600 dark:text-gray-400">
                    {{ locale === 'ar'
                      ? 'ملفات لازمة لتمكين الوظائف الأساسية وتصفح الموقع، وحفظ تفضيلات اللغة والخصوصية. تعمل دائماً ولا يمكن إلغاؤها.'
                      : 'Essential for enabling core site functionality, navigation, and storing language and privacy choices. Always active.'
                    }}
                  </p>
                </div>

                <div class="p-4 rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                  <h4 class="font-bold text-base text-gray-900 dark:text-white mb-1 flex items-center justify-between">
                    <span>{{ locale === 'ar' ? '2. ملفات الارتباط التحليلية (Analytics Cookies)' : '2. Analytics Cookies' }}</span>
                    <span class="text-xs text-amber-500 font-mono">analytics_storage</span>
                  </h4>
                  <p class="text-xs text-gray-600 dark:text-gray-400">
                    {{ locale === 'ar'
                      ? 'تساعدنا على فهم سلوك الزوار وأداء الصفحات ومصادر الزيارات لتحسين المحتوى والسرعة بشكل مجهول الهوية. معطلة افتراضياً حتى توافق عليها.'
                      : 'Helps us measure site traffic, popular pages, and performance bottlenecks anonymously. Denied by default until granted.'
                    }}
                  </p>
                </div>

                <div class="p-4 rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                  <h4 class="font-bold text-base text-gray-900 dark:text-white mb-1 flex items-center justify-between">
                    <span>{{ locale === 'ar' ? '3. ملفات الارتباط التسويقية والإعلانية (Marketing Cookies)' : '3. Marketing & Ad Cookies' }}</span>
                    <span class="text-xs text-amber-500 font-mono">ad_storage, ad_user_data</span>
                  </h4>
                  <p class="text-xs text-gray-600 dark:text-gray-400">
                    {{ locale === 'ar'
                      ? 'تُستخدم لتقديم إعلانات موجهة وملائمة وقياس فاعلية الحملات الرقمية. معطلة افتراضياً حتى توافق عليها.'
                      : 'Used to deliver relevant advertising and measure campaign reach. Denied by default until granted.'
                    }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Manage Cookies Button -->
            <div class="pt-4 flex flex-wrap items-center gap-4">
              <button
                @click="openCookieSettings"
                type="button"
                class="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-gray-950 font-black px-6 py-3 rounded-xl shadow-lg transition"
              >
                <span>🍪</span>
                <span>{{ locale === 'ar' ? 'تعديل تفضيلات ملفات الارتباط الآن' : 'Manage Cookie Preferences' }}</span>
              </button>
              <span class="text-xs text-gray-500">
                {{ locale === 'ar' ? 'يمكنك مراجعة وتغيير خياراتك في أي وقت عبر هذا الزر أو الأيقونة أسفل الشاشة.' : 'You can review or update choices anytime using this button or the bottom-left icon.' }}
              </span>
            </div>
          </section>

          <!-- Legal Information -->
          <section class="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {{ locale === 'ar' ? '7. معلومات الشركة القانونية' : '7. Company Legal Information' }}
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
              {{ locale === 'ar' ? '8. تواصل معنا' : '8. Contact Us' }}
            </h2>
            <p class="mb-4">
              {{ locale === 'ar' 
                ? 'إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه أو ملفات تعريف الارتباط، يرجى التواصل معنا عبر:'
                : 'If you have any questions about this privacy or cookie policy, please contact us at:' 
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
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const isAr = computed(() => locale.value === 'ar')

const openCookieSettings = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-cookie-settings'))
  }
}

useSeoMeta({
  title: isAr.value ? 'سياسة الخصوصية وشروط الاستخدام | بيستوليكس قطر' : 'Privacy Policy & Terms of Service | Bestolex Qatar',
  description: isAr.value 
    ? 'سياسة الخصوصية وحماية بيانات العملاء وملفات الارتباط لشركة بيستوليكس لتجارة الآلات والمعدات الثقيلة في دولة قطر.'
    : 'Privacy and cookie policy practices of Bestolex for Heavy Machinery & Equipment Trading in Qatar.',
  robots: 'index, follow'
})
</script>
