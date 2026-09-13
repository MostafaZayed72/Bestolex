<template>
  <div v-if="isMounted" :dir="isAr ? 'rtl' : 'ltr'">
    <!-- 1. Floating Trigger Button (To reopen settings anytime) -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-75"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-75"
    >
      <button
        v-if="!showBanner && !showModal"
        @click="openModal"
        type="button"
        class="fixed bottom-6 left-6 z-40 bg-gray-900/90 dark:bg-gray-800/90 backdrop-blur-md text-amber-400 hover:text-white border border-amber-500/40 hover:border-amber-400 p-3 rounded-full shadow-2xl hover:shadow-amber-500/30 hover:scale-110 transition-all duration-300 group flex items-center justify-center"
        :title="isAr ? 'إعدادات ملفات الارتباط والخصوصية' : 'Cookie & Privacy Settings'"
        :aria-label="isAr ? 'إعدادات ملفات الارتباط' : 'Cookie Settings'"
      >
        <span class="text-xl group-hover:rotate-12 transition-transform duration-300">🍪</span>
        <span class="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 text-xs font-bold text-white px-0 group-hover:px-2">
          {{ isAr ? 'إعدادات الخصوصية' : 'Privacy Settings' }}
        </span>
      </button>
    </Transition>

    <!-- 2. Bottom Banner (Displayed on first visit or when requested) -->
    <Transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="translate-y-full opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition-all duration-400 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-full opacity-0"
    >
      <div
        v-if="showBanner && !showModal"
        class="fixed bottom-0 inset-x-0 z-50 p-4 md:p-6 bg-gray-950/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-amber-500/30 shadow-[0_-10px_40px_rgba(0,0,0,0.6)] text-white"
        role="dialog"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-desc"
      >
        <div class="container mx-auto max-w-7xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <!-- Text and Info -->
          <div class="flex items-start gap-4 flex-1">
            <div class="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-2xl flex-shrink-0 shadow-inner">
              🍪
            </div>
            <div class="space-y-1.5">
              <h3 id="cookie-banner-title" class="font-extrabold text-base md:text-lg text-white flex items-center gap-2">
                <span>{{ isAr ? 'نحترم خصوصيتك وخياراتك' : 'We Value Your Privacy & Choices' }}</span>
                <span class="text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full font-medium border border-amber-500/30">
                  {{ isAr ? 'وضع الموافقة من جوجل' : 'Google Consent Mode' }}
                </span>
              </h3>
              <p id="cookie-banner-desc" class="text-xs md:text-sm text-gray-300 dark:text-gray-300 leading-relaxed max-w-4xl">
                {{ isAr
                  ? 'نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح، وتحليل أداء الموقع عبر أدوات القياس، وتقديم محتوى يلائم اهتماماتك. تبقى ملفات التحليلات والإعلانات معطلة افتراضياً حتى تمنحنا موافقتك الصريحة وفق المعايير الدولية.'
                  : 'We use cookies to enhance your browsing experience, analyze site performance via analytics tools, and deliver relevant content. Analytics and advertising cookies remain disabled by default until you grant explicit consent.'
                }}
                <NuxtLink :to="localePath('/privacy')" class="text-amber-400 hover:text-amber-300 underline font-semibold transition ml-1 mr-1">
                  {{ isAr ? 'سياسة الخصوصية وملفات الارتباط' : 'Privacy & Cookie Policy' }}
                </NuxtLink>
              </p>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-end flex-shrink-0">
            <!-- Customize -->
            <button
              @click="openModal"
              type="button"
              class="px-4 py-2.5 rounded-xl border border-gray-700 bg-gray-800/80 hover:bg-gray-800 text-gray-200 hover:text-white text-xs md:text-sm font-bold transition duration-200 hover:border-gray-500 flex items-center gap-1.5"
            >
              <span>⚙️</span>
              <span>{{ isAr ? 'تخصيص الخيارات' : 'Customize' }}</span>
            </button>

            <!-- Reject Non-Essential -->
            <button
              @click="rejectNonEssential"
              type="button"
              class="px-5 py-2.5 rounded-xl border border-gray-600/80 bg-gray-900 hover:bg-gray-800 text-gray-200 hover:text-white text-xs md:text-sm font-bold transition duration-200 shadow-sm"
            >
              {{ isAr ? 'رفض غير الضروري' : 'Reject Non-Essential' }}
            </button>

            <!-- Accept All -->
            <button
              @click="acceptAll"
              type="button"
              class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-gray-950 font-black text-xs md:text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition duration-200"
            >
              {{ isAr ? 'قبول الكل' : 'Accept All' }}
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- 3. Preferences Modal (Customize) -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="showModal"
        class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        @click.self="closeModal"
      >
        <div
          class="bg-gray-900 border border-gray-700/80 rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
        >
          <!-- Header -->
          <div class="p-6 border-b border-gray-800 flex items-center justify-between bg-gray-950/60">
            <div class="flex items-center gap-3">
              <span class="text-2xl">⚙️</span>
              <div>
                <h3 id="cookie-modal-title" class="text-lg md:text-xl font-black text-white">
                  {{ isAr ? 'تفضيلات ملفات الارتباط والخصوصية' : 'Cookie & Privacy Preferences' }}
                </h3>
                <p class="text-xs text-gray-400">
                  {{ isAr ? 'خصص اختياراتك بما يناسب رغبتك، يمكنك تغييرها لاحقاً في أي وقت.' : 'Customize your preferences. You can update them at any time.' }}
                </p>
              </div>
            </div>
            <button
              @click="closeModal"
              type="button"
              class="w-9 h-9 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 flex items-center justify-center transition"
              :aria-label="isAr ? 'إغلاق' : 'Close'"
            >
              ✕
            </button>
          </div>

          <!-- Body with Accordions / Toggles -->
          <div class="p-6 space-y-4 overflow-y-auto flex-1">
            <!-- 1. Strictly Necessary -->
            <div class="p-4 rounded-2xl bg-gray-800/50 border border-gray-700/60 flex items-start justify-between gap-4">
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <h4 class="font-bold text-white text-sm">
                    {{ isAr ? 'ملفات الارتباط الضرورية' : 'Strictly Necessary Cookies' }}
                  </h4>
                  <span class="text-[11px] bg-gray-700 text-gray-300 px-2 py-0.5 rounded font-semibold">
                    {{ isAr ? 'مفعلة دائماً' : 'Always Active' }}
                  </span>
                </div>
                <p class="text-xs text-gray-400 leading-relaxed">
                  {{ isAr
                    ? 'هذه الملفات مطلوبة لتشغيل الوظائف الأساسية للموقع مثل الأمان وحفظ التفضيلات وعمل الجلسات بصورة صحيحة ولا يمكن تعطيلها.'
                    : 'These cookies are essential for core website functionality such as security, preferences, and session handling. They cannot be turned off.'
                  }}
                </p>
              </div>
              <div class="flex-shrink-0 pt-1">
                <input
                  type="checkbox"
                  checked
                  disabled
                  class="w-5 h-5 accent-amber-500 cursor-not-allowed opacity-75"
                />
              </div>
            </div>

            <!-- 2. Analytics Cookies -->
            <div class="p-4 rounded-2xl bg-gray-800/50 border border-gray-700/60 hover:border-amber-500/40 transition flex items-start justify-between gap-4">
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <h4 class="font-bold text-white text-sm">
                    {{ isAr ? 'ملفات الارتباط التحليلية والإحصائية' : 'Analytics & Performance Cookies' }}
                  </h4>
                  <span class="text-[11px] bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded font-semibold">
                    Google Analytics
                  </span>
                </div>
                <p class="text-xs text-gray-400 leading-relaxed">
                  {{ isAr
                    ? 'تساعدنا على فهم كيفية تفاعل الزوار مع صفحات الموقع، وعدد الزيارات ومصادرها، مما يمكننا من تحسين أداء الموقع باستمرار دون تحديد الهوية الشخصية المباشرة.'
                    : 'Help us understand how visitors interact with the website, traffic volume, and navigation paths to continuously optimize performance anonymously.'
                  }}
                </p>
              </div>
              <div class="flex-shrink-0 pt-1">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    v-model="consentPreferences.analytics"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                </label>
              </div>
            </div>

            <!-- 3. Marketing & Advertising Cookies -->
            <div class="p-4 rounded-2xl bg-gray-800/50 border border-gray-700/60 hover:border-amber-500/40 transition flex items-start justify-between gap-4">
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <h4 class="font-bold text-white text-sm">
                    {{ isAr ? 'ملفات الارتباط الإعلانية والتسويقية' : 'Marketing & Advertising Cookies' }}
                  </h4>
                  <span class="text-[11px] bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded font-semibold">
                    Ads & Personalization
                  </span>
                </div>
                <p class="text-xs text-gray-400 leading-relaxed">
                  {{ isAr
                    ? 'تُستخدم لقياس فعالية الحملات الإعلانية ومواءمة الرسائل التسويقية مع متطلباتك، ونقل إشارات الموافقة لنظام إعلانات جوجل بأمان.'
                    : 'Used to measure advertising campaign efficacy and align marketing messages, safely passing consent signals to Google ad systems.'
                  }}
                </p>
              </div>
              <div class="flex-shrink-0 pt-1">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    v-model="consentPreferences.marketing"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                </label>
              </div>
            </div>
          </div>

          <!-- Footer Actions -->
          <div class="p-6 border-t border-gray-800 bg-gray-950/80 flex flex-wrap items-center justify-between gap-3">
            <button
              @click="rejectNonEssential"
              type="button"
              class="px-4 py-2 rounded-xl text-xs md:text-sm font-bold text-gray-400 hover:text-white transition"
            >
              {{ isAr ? 'رفض غير الضروري' : 'Reject Non-Essential' }}
            </button>

            <div class="flex items-center gap-3">
              <button
                @click="savePreferences"
                type="button"
                class="px-5 py-2.5 rounded-xl border border-amber-500/60 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 hover:text-amber-300 text-xs md:text-sm font-bold transition duration-200"
              >
                {{ isAr ? 'حفظ الخيارات المحددة' : 'Save Preferences' }}
              </button>
              <button
                @click="acceptAll"
                type="button"
                class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-gray-950 font-black text-xs md:text-sm shadow-md transition duration-200"
              >
                {{ isAr ? 'قبول الكل' : 'Accept All' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const localePath = useLocalePath()
const isAr = computed(() => locale.value === 'ar')

const isMounted = ref(false)
const showBanner = ref(false)
const showModal = ref(false)

const STORAGE_KEY = 'bestolex_cookie_consent'

const consentPreferences = ref({
  necessary: true,
  analytics: false,
  marketing: false
})

// Helper to push updates to Google Consent Mode v2 and GTM
const updateGoogleConsent = (analyticsGranted, marketingGranted) => {
  if (typeof window === 'undefined') return

  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }

  const consentConfig = {
    analytics_storage: analyticsGranted ? 'granted' : 'denied',
    ad_storage: marketingGranted ? 'granted' : 'denied',
    ad_user_data: marketingGranted ? 'granted' : 'denied',
    ad_personalization: marketingGranted ? 'granted' : 'denied'
  }

  // 1. Google Consent Mode update
  gtag('consent', 'update', consentConfig)

  // 2. Custom event for GTM triggers
  window.dataLayer.push({
    event: 'consent_update',
    consent_status: {
      analytics: analyticsGranted ? 'granted' : 'denied',
      marketing: marketingGranted ? 'granted' : 'denied',
      timestamp: new Date().toISOString()
    }
  })
}

// Save to localStorage and apply consent
const applyAndSaveConsent = (analytics, marketing) => {
  consentPreferences.value.analytics = analytics
  consentPreferences.value.marketing = marketing

  const payload = {
    necessary: true,
    analytics: analytics,
    marketing: marketing,
    updatedAt: new Date().toISOString()
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  } catch (e) {
    console.error('Failed to save cookie consent to localStorage', e)
  }

  updateGoogleConsent(analytics, marketing)
  showBanner.value = false
  showModal.value = false
}

// Actions
const acceptAll = () => {
  applyAndSaveConsent(true, true)
}

const rejectNonEssential = () => {
  applyAndSaveConsent(false, false)
}

const savePreferences = () => {
  applyAndSaveConsent(consentPreferences.value.analytics, consentPreferences.value.marketing)
}

const openModal = () => {
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}

// Listener for global event (e.g. from footer link)
const handleOpenEvent = () => {
  openModal()
}

onMounted(() => {
  isMounted.value = true

  // Check saved consent
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      consentPreferences.value.analytics = !!parsed.analytics
      consentPreferences.value.marketing = !!parsed.marketing
      showBanner.value = false
      // Apply saved consent state
      updateGoogleConsent(consentPreferences.value.analytics, consentPreferences.value.marketing)
    } else {
      // First visit: Keep default denied state and show banner
      showBanner.value = true
      updateGoogleConsent(false, false)
    }
  } catch (e) {
    showBanner.value = true
  }

  // Register global listener for reopening settings
  window.addEventListener('open-cookie-settings', handleOpenEvent)
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('open-cookie-settings', handleOpenEvent)
  }
})
</script>
