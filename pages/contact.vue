<template>
  <div class="bg-gray-50 dark:bg-gray-900 min-h-screen">
    <!-- Hero Section -->
    <div class="relative w-full h-[30vh] sm:h-[40vh] min-h-[250px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-black/60 z-10"></div>
      <img src="/images/services/srv1.png" alt="Contact Us" class="absolute inset-0 w-full h-full object-cover z-0 filter blur-[2px]" />
      <div class="relative z-20 text-center px-4" data-aos="fade-down">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">{{ locale === 'ar' ? 'تواصل معنا' : 'Contact Us' }}</h1>
        <p class="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
          {{ locale === 'ar' ? 'نحن هنا للإجابة على استفساراتك وتلبية احتياجاتك. لا تتردد في الاتصال بنا.' : 'We are here to answer your questions and meet your needs. Feel free to contact us.' }}
        </p>
      </div>
    </div>

    <!-- Content Section -->
    <div class="container mx-auto px-4 py-16 -mt-10 relative z-30">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
        
        <!-- Contact Info (Left/RTL-Right) -->
        <div class="lg:col-span-2 space-y-6" data-aos="fade-right">
          <div class="bg-white dark:bg-secondary p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 transform hover:-translate-y-1 transition duration-300 h-full flex flex-col">
            <h2 class="text-2xl font-extrabold mb-8 text-gray-800 dark:text-white border-b-2 border-primary pb-3 inline-block">
              {{ locale === 'ar' ? 'معلومات التواصل' : 'Contact Information' }}
            </h2>
            
            <div class="space-y-8 text-gray-600 dark:text-gray-300 flex-grow">
              <!-- Email -->
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-orange-100 dark:bg-gray-800 text-primary rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-gray-800 dark:text-white text-lg mb-1">{{ locale === 'ar' ? 'البريد الإلكتروني' : 'Email' }}</h4>
                  <a href="mailto:info@bestolex.com" class="text-primary hover:underline font-medium transition">info@bestolex.com</a>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-orange-100 dark:bg-gray-800 text-primary rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-gray-800 dark:text-white text-lg mb-1">{{ locale === 'ar' ? 'رقم الهاتف' : 'Phone' }}</h4>
                  <p dir="ltr" class="font-medium">+974 5070 8833</p>
                  <p dir="ltr" class="font-medium">+974 5150 5014</p>
                </div>
              </div>

              <!-- WhatsApp Direct -->
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-green-100 dark:bg-green-950/50 text-[#25D366] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-gray-800 dark:text-white text-lg mb-1">{{ locale === 'ar' ? 'واتساب مباشر' : 'Direct WhatsApp' }}</h4>
                  <a href="https://wa.me/97451505014" target="_blank" rel="noopener noreferrer" class="text-green-600 dark:text-green-400 hover:underline font-mono font-bold flex items-center gap-1.5">
                    <span dir="ltr">+974 5150 5014</span>
                    <span class="text-xs">💬</span>
                  </a>
                </div>
              </div>

              <!-- Address -->
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-orange-100 dark:bg-gray-800 text-primary rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-gray-800 dark:text-white text-lg mb-1">{{ locale === 'ar' ? 'العنوان' : 'Address' }}</h4>
                  <p class="leading-relaxed text-sm font-medium">
                    {{ locale === 'ar' ? 'الدوحة، المنتزه، مركز المنتزه التجاري، منطقة 24، شارع 830، مبنى 16، الطابق 7، مكتب 714، صندوق البريد: 37439، دولة قطر' : 'Doha, Al Muntazah, Al Muntazah Commercial Center, Zone 24, Street 830, Building 16, Floor 7, Office 714, P.O. Box 37439, State of Qatar' }}
                  </p>
                </div>
              </div>

              <!-- Social Media Channels Section -->
              <div class="pt-4 border-t border-gray-100 dark:border-gray-800">
                <h4 class="font-bold text-gray-800 dark:text-white text-sm mb-3">
                  {{ locale === 'ar' ? 'شبكات التواصل الاجتماعي' : 'Social Media Channels' }}
                </h4>
                <div class="flex items-center gap-3">
                  <!-- WhatsApp -->
                  <a 
                    href="https://wa.me/97451505014" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-green-500/10 text-green-600 hover:bg-green-500 hover:text-white transition font-bold text-xs shadow-sm"
                  >
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    <span>WhatsApp</span>
                  </a>

                  <!-- Instagram -->
                  <a 
                    href="https://www.instagram.com/bestolex" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-pink-500/10 text-pink-600 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white transition font-bold text-xs shadow-sm"
                  >
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    <span>Instagram</span>
                  </a>

                  <!-- Facebook -->
                  <a 
                    href="https://www.facebook.com/Bestolex" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-500/10 text-blue-600 hover:bg-[#1877F2] hover:text-white transition font-bold text-xs shadow-sm"
                  >
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Google Map -->
            <div class="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 w-full">
              <div class="flex items-center justify-between mb-4">
                <h4 class="font-bold text-gray-800 dark:text-white text-lg">{{ locale === 'ar' ? 'موقعنا على الخريطة' : 'Our Location' }}</h4>
                <a href="https://maps.app.goo.gl/dsPskLm4xnu1zEmy7?g_st=ipc" target="_blank" class="text-sm text-primary hover:underline font-bold flex items-center gap-1">
                  {{ locale === 'ar' ? 'فتح في خرائط جوجل' : 'Open in Google Maps' }}
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                </a>
              </div>
              <div class="w-full rounded-2xl overflow-hidden shadow-inner border border-gray-100 dark:border-gray-700 h-64">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.9500227173944!2d51.52479239999999!3d25.272266600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45dbb66a9a29a7%3A0xaadff3c5d989f8b9!2sBestolex%20for%20Trading%20of%20Heavy%20Machinery%20and%20Equipment!5e0!3m2!1sar!2seg!4v1787438240199!5m2!1sar!2seg" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form (Right/RTL-Left) -->
        <div class="lg:col-span-3" data-aos="fade-left">
          <div class="bg-white dark:bg-secondary p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden h-full">
            <!-- Decorative circle -->
            <div class="absolute -top-16 -right-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            
            <h2 class="text-3xl font-bold mb-8 text-gray-800 dark:text-white">{{ locale === 'ar' ? 'أرسل لنا رسالة' : 'Send us a message' }}</h2>
            
            <form class="space-y-6 relative z-10" @submit.prevent="submitForm">
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Name Input -->
                <div>
                  <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">{{ locale === 'ar' ? 'الاسم' : 'Name' }}</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 rtl:right-0 ltr:left-0 flex items-center rtl:pr-4 ltr:pl-4 pointer-events-none">
                      <svg class="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    </div>
                    <input v-model="form.name" type="text" required class="w-full rtl:pr-12 ltr:pl-12 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition text-gray-800 dark:text-white" :placeholder="locale === 'ar' ? 'الاسم بالكامل' : 'Full Name'">
                  </div>
                </div>

                <!-- Phone Input -->
                <div>
                  <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">{{ locale === 'ar' ? 'رقم الهاتف (اختياري)' : 'Phone (Optional)' }}</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 rtl:right-0 ltr:left-0 flex items-center rtl:pr-4 ltr:pl-4 pointer-events-none">
                      <svg class="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </div>
                    <input v-model="form.phone" type="text" class="w-full rtl:pr-12 ltr:pl-12 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition text-gray-800 dark:text-white" :placeholder="locale === 'ar' ? 'رقم الموبايل' : 'Phone Number'">
                  </div>
                </div>
              </div>

              <!-- Email Input -->
              <div>
                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">{{ locale === 'ar' ? 'البريد الإلكتروني' : 'Email' }}</label>
                <div class="relative">
                  <div class="absolute inset-y-0 rtl:right-0 ltr:left-0 flex items-center rtl:pr-4 ltr:pl-4 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <input v-model="form.email" type="email" required class="w-full rtl:pr-12 ltr:pl-12 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition text-gray-800 dark:text-white" :placeholder="locale === 'ar' ? 'example@mail.com' : 'example@mail.com'">
                </div>
              </div>

              <!-- Message Input -->
              <div>
                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">{{ locale === 'ar' ? 'الرسالة' : 'Message' }}</label>
                <div class="relative">
                  <div class="absolute top-4 rtl:right-0 ltr:left-0 flex items-start rtl:pr-4 ltr:pl-4 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                  </div>
                  <textarea v-model="form.message" rows="5" required class="w-full rtl:pr-12 ltr:pl-12 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition text-gray-800 dark:text-white resize-none" :placeholder="locale === 'ar' ? 'اكتب رسالتك هنا...' : 'Type your message here...'"></textarea>
                </div>
              </div>
              
              <!-- Submit Button -->
              <button type="submit" :disabled="loading" class="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none flex items-center justify-center gap-2 mt-4">
                <span v-if="loading" class="flex items-center gap-2">
                  <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {{ locale === 'ar' ? 'جاري الإرسال...' : 'Sending...' }}
                </span>
                <span v-else class="flex items-center gap-2">
                  {{ locale === 'ar' ? 'إرسال الرسالة' : 'Send Message' }}
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </span>
              </button>
              
              <div v-if="statusMessage" :class="statusType === 'success' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'" class="p-4 rounded-xl border flex items-center gap-3">
                <svg v-if="statusType === 'success'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="font-medium">{{ statusMessage }}</p>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const { locale } = useI18n()

const isAr = computed(() => locale.value === 'ar')

useSeoMeta({
  title: isAr.value
    ? 'تواصل معنا | طلب عروض الأسعار والاستشارات - بيستوليكس قطر'
    : 'Contact Us | Quotes & Technical Consultations - Bestolex',
  description: isAr.value
    ? 'تواصل مباشرة مع فريق بيستوليكس في الدوحة، قطر لطلب عروض الأسعار، المعاينة الميدانية، والاستشارات الهندسية للمعدات الهيدروليكية وحلول حماية المحيط والمستودعات.'
    : 'Contact Bestolex Trading in Doha, Qatar for quotes, site survey requests, and technical consultations on hydraulic and industrial systems.',
  keywords: isAr.value
    ? 'تواصل مع بيستوليكس, رقم هاتف بيستوليكس قطر, طلب عرض سعر معدات صناعية قطر, حجز موعد استشارة هندسية الدوحة, عنوان شركة بيستوليكس'
    : 'contact Bestolex Qatar, Bestolex phone number, industrial quote request Doha, engineering consultation booking Qatar',
  ogTitle: isAr.value ? 'تواصل مع شركة بيستوليكس للتجارة والمقاولات قطر' : 'Contact Bestolex Trading & Contracting Qatar',
  ogDescription: isAr.value ? 'فريقنا الهندسي جاهز للإجابة على استفساراتكم وتقديم العروض الفنية.' : 'Our engineering team is ready to assist with technical proposals and inquiries.',
  ogImage: '/images/hero/hero-bg.jpg'
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        'name': 'تواصل معنا | Bestolex Qatar',
        'mainEntity': {
          '@type': 'LocalBusiness',
          'name': 'Bestolex Trading & Contracting',
          'email': 'bestolex.qa@gmail.com',
          'telephone': '+974 5555 1234',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Doha',
            'addressCountry': 'QA'
          }
        }
      })
    }
  ]
})

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const loading = ref(false)
const statusMessage = ref('')
const statusType = ref('') // 'success' or 'error'

const submitForm = async () => {
  loading.value = true
  statusMessage.value = ''
  
  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: form.value
    })
    
    statusType.value = 'success'
    statusMessage.value = locale.value === 'ar' ? 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.' : 'Your message has been sent successfully! We will contact you soon.'
    
    // Reset form
    form.value = { name: '', email: '', phone: '', message: '' }
  } catch (error) {
    statusType.value = 'error'
    statusMessage.value = locale.value === 'ar' ? 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.' : 'An error occurred while sending. Please try again.'
    console.error(error)
  } finally {
    loading.value = false
  }
}
</script>
