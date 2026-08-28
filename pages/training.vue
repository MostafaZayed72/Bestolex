<template>
  <div class="training-page bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
    
    <!-- Hero Section with Dynamic Background Carousel (No People/Humans) -->
    <section class="relative py-24 md:py-36 bg-[#121c2d] text-white overflow-hidden flex items-center justify-center">
      <!-- Background Carousel Slides -->
      <div class="absolute inset-0 w-full h-full overflow-hidden">
        <div 
          v-for="(slide, index) in heroSlides" 
          :key="index" 
          class="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
          :class="currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'"
        >
          <img 
            :src="slide.image" 
            :alt="slide.title[locale]" 
            class="w-full h-full object-cover object-center transform transition-transform duration-[7000ms] ease-out"
            :class="currentSlide === index ? 'scale-105' : 'scale-100'"
            loading="eager"
          />
          <!-- Dark Gradient Overlay for Maximum Text Readability -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#121c2d] via-[#121c2d]/85 to-[#121c2d]/70"></div>
        </div>
      </div>

      <!-- Subtle Dot Pattern -->
      <div class="absolute inset-0 opacity-15 z-10" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 24px 24px;"></div>

      <!-- Hero Content -->
      <div class="container mx-auto px-4 md:px-8 relative z-20 text-center max-w-5xl" data-aos="fade-up">
        <!-- Partnership Badge -->
        <div class="inline-flex items-center gap-2 bg-[#E99E15]/20 border border-[#E99E15]/40 text-[#E99E15] px-5 py-2 rounded-full font-bold text-xs md:text-sm mb-6 backdrop-blur-md shadow-lg">
          <span class="w-2.5 h-2.5 rounded-full bg-[#E99E15] animate-ping"></span>
          <span>{{ locale === 'ar' ? 'بالتعاون مع شركة ساب تك (SAB TECH)' : 'In Cooperation with SAB TECH' }}</span>
        </div>

        <h1 class="text-3xl sm:text-4xl md:text-6xl font-black mb-6 text-white leading-tight tracking-tight drop-shadow-lg">
          {{ locale === 'ar' ? 'الدورات التدريبية المتخصصة في الأنظمة الهيدروليكية' : 'Professional Hydraulic Training Courses' }}
        </h1>

        <div class="inline-block px-4 py-1.5 rounded-xl bg-white/10 text-[#E99E15] font-black text-sm md:text-lg mb-6 border border-white/10 backdrop-blur-sm">
          {{ locale === 'ar' ? 'تدريب عملي • معرفة هندسية • مهارات قابلة للتطبيق' : 'Practical Training • Engineering Knowledge • Applicable Skills' }}
        </div>

        <div class="w-24 h-1.5 bg-[#E99E15] mx-auto mb-8 rounded-full shadow-md shadow-[#E99E15]/50"></div>

        <p class="text-base md:text-xl text-gray-200 font-medium max-w-4xl mx-auto mb-6 leading-relaxed">
          {{ locale === 'ar' 
            ? 'تقدم بيستوليكس لتجارة الآلات والمعدات الثقيلة برامج تدريبية متخصصة في الأنظمة الهيدروليكية، بالتعاون مع SAB TECH، بهدف تطوير المهارات الفنية للمهندسين والفنيين وفرق الصيانة والتشغيل ورفع كفاءتهم في فهم وتشغيل وصيانة وتشخيص الأنظمة الهيدروليكية.' 
            : 'Bestolex for Trading of Heavy Machinery and Equipment offers specialized hydraulic training programs in cooperation with SAB TECH, designed to develop the technical capabilities of engineers, technicians, maintenance teams and equipment operators.' 
          }}
        </p>

        <p class="text-sm md:text-base text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          {{ locale === 'ar'
            ? 'تعتمد البرامج على الجمع بين المعرفة النظرية والتطبيق العملي، باستخدام مكونات وأنظمة هيدروليكية حقيقية ونماذج تدريبية ومحاكاة عملية تساعد المتدرب على فهم المبادئ الهندسية وربطها بالتطبيقات المستخدمة في البيئات الصناعية والمعدات المتحركة.'
            : 'The training approach combines theoretical knowledge with hands-on practical experience, allowing participants to understand hydraulic principles, components, circuits and system behavior through practical demonstrations, training equipment and real hydraulic components.'
          }}
        </p>

        <!-- CTA Hero Buttons -->
        <div class="flex flex-wrap justify-center gap-4 mb-8">
          <button 
            @click="scrollToSection('register-form')"
            class="group flex items-center gap-3 bg-gradient-to-r from-[#E99E15] to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-black px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-[#E99E15]/30 hover:shadow-[#E99E15]/50 hover:-translate-y-1 text-base md:text-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{{ locale === 'ar' ? 'اطلب برنامجاً تدريبياً' : 'Request Training Program' }}</span>
          </button>

          <button 
            @click="scrollToSection('courses-section')"
            class="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-8 py-4 rounded-2xl font-bold transition-all hover:-translate-y-1 text-base md:text-lg flex items-center gap-2"
          >
            <span>{{ locale === 'ar' ? 'استفسر عن الدورات القادمة' : 'Inquire About Upcoming Courses' }}</span>
            <span class="rtl:rotate-180">&rarr;</span>
          </button>
        </div>

        <!-- Carousel Indicators -->
        <div class="flex justify-center items-center gap-3">
          <button 
            v-for="(slide, idx) in heroSlides" 
            :key="idx" 
            @click="setSlide(idx)"
            class="h-2 rounded-full transition-all duration-500"
            :class="currentSlide === idx ? 'w-10 bg-[#E99E15]' : 'w-2.5 bg-white/40 hover:bg-white/70'"
            :aria-label="'Slide ' + (idx + 1)"
          ></button>
        </div>
      </div>
    </section>

    <!-- Main Content Container -->
    <div class="container mx-auto px-4 md:px-8 py-16 md:py-24 space-y-24">
      
      <!-- Section 1: Programs List (برامج التدريب الهيدروليكي) with Images -->
      <section id="courses-section" class="scroll-mt-28">
        <div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div class="inline-block bg-primary/10 text-primary font-extrabold px-4 py-1.5 rounded-lg text-sm mb-3">
            {{ locale === 'ar' ? 'المسارات والبرامج المعتمدة' : 'Training Programs & Tracks' }}
          </div>
          <h2 class="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
            {{ locale === 'ar' ? 'برامج التدريب الهيدروليكي' : 'Hydraulic Training Programs' }}
          </h2>
          <p class="text-base md:text-lg text-gray-600 dark:text-gray-300">
            {{ locale === 'ar' 
              ? 'يمكن تنظيم البرامج التدريبية وفق مستوى المتدربين ومتطلبات الجهة المستفيدة، وتشمل المجالات الرئيسية التالية:' 
              : 'Training programs can be structured according to participant competency levels and corporate requirements, covering the following key areas:' 
            }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Program 1 -->
          <div class="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 hover:border-primary/50 transition-all duration-300 group flex flex-col justify-between" data-aos="fade-up" data-aos-delay="100">
            <div>
              <div class="h-48 overflow-hidden relative">
                <img 
                  src="/images/training/bench.jpg" 
                  alt="Hydraulic Fundamentals" 
                  class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4">
                  <span class="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">01 — {{ locale === 'ar' ? 'مسار تأسيسي' : 'Fundamental Track' }}</span>
                </div>
              </div>

              <div class="p-6 md:p-8">
                <h3 class="text-2xl font-black text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {{ locale === 'ar' ? 'أساسيات الأنظمة الهيدروليكية' : 'Hydraulic Fundamentals' }}
                </h3>
                <p class="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {{ locale === 'ar'
                    ? 'برنامج تأسيسي لفهم مبادئ الهيدروليك وآلية عمل الأنظمة والمكونات الأساسية، مناسب للفنيين والمهندسين الراغبين في بناء أساس تقني قوي.'
                    : 'A foundational program to understand hydraulic principles, system operation mechanisms, and core components. Ideal for technicians and engineers seeking a solid technical grounding.'
                  }}
                </p>
                
                <div class="bg-gray-50 dark:bg-gray-900/60 p-4 rounded-2xl border border-gray-100 dark:border-gray-700/60 mb-6">
                  <h4 class="text-xs font-black uppercase text-primary mb-2">
                    {{ locale === 'ar' ? 'الموضوعات الرئيسية:' : 'Key Topics Covered:' }}
                  </h4>
                  <p class="text-xs md:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                    {{ locale === 'ar'
                      ? 'مبادئ الضغط والتدفق – قراءة وفهم الدوائر الأساسية – التعرف على المكونات – مبادئ تشغيل الأنظمة – إجراءات التشغيل والفحص الأساسية.'
                      : 'Pressure & flow principles – Basic circuit reading & analysis – Component identification – System operation principles – Basic inspection & testing procedures.'
                    }}
                  </p>
                </div>
              </div>
            </div>

            <div class="px-6 pb-6 md:px-8 md:pb-8 pt-0">
              <button 
                @click="selectProgram(locale === 'ar' ? 'أساسيات الأنظمة الهيدروليكية' : 'Hydraulic Fundamentals')"
                class="w-full py-3.5 bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white dark:hover:bg-primary text-gray-800 dark:text-gray-200 font-bold rounded-xl transition duration-300 text-sm flex items-center justify-center gap-2"
              >
                <span>{{ locale === 'ar' ? 'طلب هذا البرنامج' : 'Select This Program' }}</span>
                <span class="rtl:rotate-180">&rarr;</span>
              </button>
            </div>
          </div>

          <!-- Program 2 -->
          <div class="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 hover:border-primary/50 transition-all duration-300 group flex flex-col justify-between" data-aos="fade-up" data-aos-delay="200">
            <div>
              <div class="h-48 overflow-hidden relative">
                <img 
                  src="/images/training/power-unit.jpg" 
                  alt="Industrial Hydraulic Systems" 
                  class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4">
                  <span class="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">02 — {{ locale === 'ar' ? 'مسار صناعي متقدم' : 'Industrial Track' }}</span>
                </div>
              </div>

              <div class="p-6 md:p-8">
                <h3 class="text-2xl font-black text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {{ locale === 'ar' ? 'الأنظمة الهيدروليكية الصناعية' : 'Industrial Hydraulic Systems' }}
                </h3>
                <p class="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {{ locale === 'ar'
                    ? 'تدريب متخصص لفهم الأنظمة الهيدروليكية المستخدمة في التطبيقات والمعدات الصناعية، مع التركيز على العلاقة بين مكونات النظام ووظائفها التشغيلية.'
                    : 'Specialized training for understanding hydraulic systems in industrial applications and factory machinery, focusing on component relationships and operational functions.'
                  }}
                </p>
                
                <div class="bg-gray-50 dark:bg-gray-900/60 p-4 rounded-2xl border border-gray-100 dark:border-gray-700/60 mb-6">
                  <h4 class="text-xs font-black uppercase text-primary mb-2">
                    {{ locale === 'ar' ? 'الموضوعات الرئيسية:' : 'Key Topics Covered:' }}
                  </h4>
                  <p class="text-xs md:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                    {{ locale === 'ar'
                      ? 'يشمل التدريب دراسة المضخات والمحركات والصمامات والأسطوانات ومكونات التحكم وربطها بالدوائر الهيدروليكية العملية.'
                      : 'Detailed study of pumps, hydraulic motors, directional & proportional valves, cylinders, and control components linked to practical industrial circuits.'
                    }}
                  </p>
                </div>
              </div>
            </div>

            <div class="px-6 pb-6 md:px-8 md:pb-8 pt-0">
              <button 
                @click="selectProgram(locale === 'ar' ? 'الأنظمة الهيدروليكية الصناعية' : 'Industrial Hydraulic Systems')"
                class="w-full py-3.5 bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white dark:hover:bg-primary text-gray-800 dark:text-gray-200 font-bold rounded-xl transition duration-300 text-sm flex items-center justify-center gap-2"
              >
                <span>{{ locale === 'ar' ? 'طلب هذا البرنامج' : 'Select This Program' }}</span>
                <span class="rtl:rotate-180">&rarr;</span>
              </button>
            </div>
          </div>

          <!-- Program 3 -->
          <div class="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 hover:border-primary/50 transition-all duration-300 group flex flex-col justify-between" data-aos="fade-up" data-aos-delay="300">
            <div>
              <div class="h-48 overflow-hidden relative">
                <img 
                  src="/images/training/mobile.jpg" 
                  alt="Mobile Hydraulics" 
                  class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4">
                  <span class="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">03 — {{ locale === 'ar' ? 'معدات ثقيلة ومتحركة' : 'Mobile Hydraulics' }}</span>
                </div>
              </div>

              <div class="p-6 md:p-8">
                <h3 class="text-2xl font-black text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {{ locale === 'ar' ? 'هيدروليك المعدات المتحركة' : 'Mobile Hydraulics' }}
                </h3>
                <p class="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {{ locale === 'ar'
                    ? 'برنامج موجه للمهندسين والفنيين العاملين في المعدات الثقيلة والمتحركة والآليات التي تعتمد على الأنظمة الهيدروليكية.'
                    : 'Targeted program for engineers and technicians working on heavy machinery, mobile equipment, and construction vehicles reliant on hydraulic drives.'
                  }}
                </p>
                
                <div class="bg-gray-50 dark:bg-gray-900/60 p-4 rounded-2xl border border-gray-100 dark:border-gray-700/60 mb-6">
                  <h4 class="text-xs font-black uppercase text-primary mb-2">
                    {{ locale === 'ar' ? 'الموضوعات الرئيسية:' : 'Key Topics Covered:' }}
                  </h4>
                  <p class="text-xs md:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                    {{ locale === 'ar'
                      ? 'يركز البرنامج على فهم مكونات ودوائر الهيدروليك المستخدمة في التطبيقات المتحركة ومبادئ التشغيل والفحص والصيانة.'
                      : 'In-depth focus on mobile hydraulic circuit architecture, load-sensing pumps, steering/braking hydraulics, operating principles, testing, and preventative maintenance.'
                    }}
                  </p>
                </div>
              </div>
            </div>

            <div class="px-6 pb-6 md:px-8 md:pb-8 pt-0">
              <button 
                @click="selectProgram(locale === 'ar' ? 'هيدروليك المعدات المتحركة' : 'Mobile Hydraulics')"
                class="w-full py-3.5 bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white dark:hover:bg-primary text-gray-800 dark:text-gray-200 font-bold rounded-xl transition duration-300 text-sm flex items-center justify-center gap-2"
              >
                <span>{{ locale === 'ar' ? 'طلب هذا البرنامج' : 'Select This Program' }}</span>
                <span class="rtl:rotate-180">&rarr;</span>
              </button>
            </div>
          </div>

          <!-- Program 4 -->
          <div class="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 hover:border-primary/50 transition-all duration-300 group flex flex-col justify-between" data-aos="fade-up" data-aos-delay="400">
            <div>
              <div class="h-48 overflow-hidden relative">
                <img 
                  src="/images/training/diagnostics.jpg" 
                  alt="Hydraulic Maintenance & Troubleshooting" 
                  class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4">
                  <span class="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">04 — {{ locale === 'ar' ? 'تشخيص وصيانة' : 'Troubleshooting Track' }}</span>
                </div>
              </div>

              <div class="p-6 md:p-8">
                <h3 class="text-2xl font-black text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {{ locale === 'ar' ? 'صيانة وتشخيص أعطال الأنظمة الهيدروليكية' : 'Hydraulic Maintenance & Troubleshooting' }}
                </h3>
                <p class="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {{ locale === 'ar'
                    ? 'برنامج عملي يهدف إلى تطوير قدرة الفنيين والمهندسين على تحليل أداء الأنظمة الهيدروليكية والتعرف على أسباب الأعطال والوصول إلى حلول فنية منهجية.'
                    : 'A hands-on troubleshooting course developing participants’ capability to analyze hydraulic symptoms, identify failure causes, and implement systematic engineering solutions.'
                  }}
                </p>
                
                <div class="bg-gray-50 dark:bg-gray-900/60 p-4 rounded-2xl border border-gray-100 dark:border-gray-700/60 mb-6">
                  <h4 class="text-xs font-black uppercase text-primary mb-2">
                    {{ locale === 'ar' ? 'الموضوعات الرئيسية:' : 'Key Topics Covered:' }}
                  </h4>
                  <p class="text-xs md:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                    {{ locale === 'ar'
                      ? 'مبادئ التشخيص، قراءة أعراض الأعطال، فحص المكونات، تحليل الدوائر، وتحديد أسباب انخفاض الأداء أو الضغط أو التدفق.'
                      : 'Systematic diagnosis methodology, symptom interpretation, component inspection, circuit tracing, and root-cause analysis for pressure drops, overheating, or flow deficits.'
                    }}
                  </p>
                </div>
              </div>
            </div>

            <div class="px-6 pb-6 md:px-8 md:pb-8 pt-0">
              <button 
                @click="selectProgram(locale === 'ar' ? 'صيانة وتشخيص أعطال الأنظمة الهيدروليكية' : 'Hydraulic Maintenance & Troubleshooting')"
                class="w-full py-3.5 bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white dark:hover:bg-primary text-gray-800 dark:text-gray-200 font-bold rounded-xl transition duration-300 text-sm flex items-center justify-center gap-2"
              >
                <span>{{ locale === 'ar' ? 'طلب هذا البرنامج' : 'Select This Program' }}</span>
                <span class="rtl:rotate-180">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2: Practical Training Areas (ماذا يتعلم المتدرب؟) with Individual Images for all 6 Cards -->
      <section class="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-14 shadow-2xl border border-gray-100 dark:border-gray-700" data-aos="fade-up">
        <div class="text-center max-w-3xl mx-auto mb-14">
          <div class="inline-block bg-primary/10 text-primary font-extrabold px-4 py-1.5 rounded-lg text-sm mb-3">
            {{ locale === 'ar' ? 'المهارات المكتسبة' : 'Core Competencies' }}
          </div>
          <h2 class="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
            {{ locale === 'ar' ? 'ماذا يتعلم المتدرب في البرنامج؟' : 'Practical Training Areas' }}
          </h2>
          <p class="text-base text-gray-600 dark:text-gray-300">
            {{ locale === 'ar' 
              ? 'تغطي الدورات جميع العناصر الأساسية والمتقدمة في المنظومات الهيدروليكية الحديثة لتمكين المتدرب من التعامل المباشر والثقة التامة.' 
              : 'Our courses comprehensively cover modern hydraulic systems to equip participants with direct, confident engineering skills.' 
            }}
          </p>
        </div>

        <!-- 6 Practical Competencies Cards - Each with its own High-Quality Technical Image -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(area, aIdx) in practicalAreas" 
            :key="aIdx" 
            class="rounded-3xl overflow-hidden bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700/80 hover:border-primary/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <!-- Card Image Header -->
              <div class="h-44 overflow-hidden relative">
                <img 
                  :src="area.image" 
                  :alt="area.title[locale]" 
                  class="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3.5">
                  <span class="text-xl mr-2">{{ area.icon }}</span>
                  <span class="text-xs font-bold text-white leading-tight drop-shadow">
                    {{ area.title[locale] }}
                  </span>
                </div>
              </div>

              <!-- Card Body -->
              <div class="p-6">
                <h3 class="text-base font-black text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {{ area.title[locale] }}
                </h3>
                <p class="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {{ area.desc[locale] }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 3: Hands-On Experience & Training Center Legacy -->
      <section class="bg-gradient-to-br from-[#121c2d] to-[#1a2b42] text-white rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden" data-aos="fade-up">
        <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 20px 20px;"></div>
        
        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div class="lg:col-span-7 space-y-6">
            <div class="inline-flex items-center gap-2 bg-[#E99E15]/20 text-[#E99E15] px-4 py-1.5 rounded-full text-xs md:text-sm font-bold border border-[#E99E15]/30">
              <span>⚙️</span>
              <span>{{ locale === 'ar' ? 'تدريب عملي ومحاكاة حقيقية' : 'Hands-On Practical Training' }}</span>
            </div>

            <h2 class="text-3xl md:text-4xl font-black text-white leading-tight">
              {{ locale === 'ar' ? 'تجربة تدريبية عملية متكاملة' : 'Hands-On Hydraulic Training Experience' }}
            </h2>

            <div class="space-y-4 text-gray-200 text-sm md:text-base leading-relaxed">
              <p class="font-bold text-[#E99E15]">
                {{ locale === 'ar' ? 'لا يقتصر البرنامج على المحاضرات النظرية.' : 'The program goes far beyond theoretical lectures.' }}
              </p>
              <p>
                {{ locale === 'ar'
                  ? 'يعتمد التدريب على منهج يجمع بين الشرح الهندسي والتطبيق العملي والعروض التفاعلية، بما يساعد المتدرب على رؤية طريقة عمل المكونات وفهم تأثيرها على أداء النظام.'
                  : 'Training relies on a curriculum combining engineering explanation, practical application, and interactive demonstrations to visually understand component behavior and its impact on system performance.'
                }}
              </p>
              <p>
                {{ locale === 'ar'
                  ? 'ويتيح استخدام المعدات التدريبية والمكونات الحقيقية والنماذج المقطعية والمحاكاة العملية فهماً أكثر وضوحاً لآلية عمل الأنظمة الهيدروليكية.'
                  : 'Utilizing real training rigs, authentic hydraulic components, cross-section models, and live simulations provides deep clarity on hydraulic system mechanics.'
                }}
              </p>
            </div>

            <!-- SAB TECH Legacy note -->
            <div class="p-4 bg-white/10 rounded-2xl border border-white/10 flex items-start gap-4">
              <span class="text-2xl">🏛️</span>
              <div class="text-xs md:text-sm text-gray-300">
                <strong class="text-white block mb-1">
                  {{ locale === 'ar' ? 'إرث وخبرة مركز التدريب الهيدروليكي (SAB TECH)' : 'SAB TECH Hydraulic Training Center Legacy' }}
                </strong>
                {{ locale === 'ar'
                  ? 'أسست SAB TECH مركزها للتدريب الهيدروليكي عام 2011، حيث تم تأسيس وتطوير المركز بالتعاون مع مجموعة إيتون الهيدروليكية العالمية (Eaton Hydraulic Group).'
                  : 'SAB TECH established its Hydraulic Training Center in 2011, founded and developed in cooperation with the renowned Eaton Hydraulic Group.'
                }}
              </div>
            </div>
          </div>

          <!-- Feature Cards / Stats -->
          <div class="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex flex-col justify-center text-center">
              <span class="text-3xl md:text-4xl font-black text-[#E99E15] mb-2">2011</span>
              <span class="text-xs md:text-sm text-gray-300 font-medium">
                {{ locale === 'ar' ? 'تاريخ تأسيس مركز التدريب المتخصص' : 'Training Center Founded' }}
              </span>
            </div>
            <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex flex-col justify-center text-center">
              <span class="text-3xl md:text-4xl font-black text-[#E99E15] mb-2">100%</span>
              <span class="text-xs md:text-sm text-gray-300 font-medium">
                {{ locale === 'ar' ? 'مكونات ونماذج هيدروليكية واقعية' : 'Real Hydraulic Components' }}
              </span>
            </div>
            <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex flex-col justify-center text-center sm:col-span-2">
              <span class="text-2xl font-black text-white mb-1">Eaton Hydraulic Group</span>
              <span class="text-xs text-gray-300">
                {{ locale === 'ar' ? 'التعاون الهندسي التأسيسي لمركز التدريب' : 'Foundational Engineering Cooperation' }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4: Who Should Attend? (لمن صُممت هذه الدورات؟) -->
      <section class="bg-gray-100 dark:bg-gray-800/60 rounded-3xl p-8 md:p-14 border border-gray-200 dark:border-gray-700" data-aos="fade-up">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <div class="inline-block bg-primary/10 text-primary font-extrabold px-4 py-1.5 rounded-lg text-sm mb-3">
            {{ locale === 'ar' ? 'الفئات المستهدفة' : 'Target Audience' }}
          </div>
          <h2 class="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
            {{ locale === 'ar' ? 'لمن صُممت هذه الدورات؟' : 'Who Should Attend?' }}
          </h2>
          <p class="text-base text-gray-600 dark:text-gray-300">
            {{ locale === 'ar' 
              ? 'تم تصميم هذه البرامج التدريبية لتناسب مختلف المستويات المهنية في القطاعين الصناعي واللوجستي:' 
              : 'Our programs are carefully designed for diverse technical tiers across industrial and logistics sectors:' 
            }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div 
            v-for="(target, tIdx) in targetAudience" 
            :key="tIdx" 
            class="p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 flex items-center gap-3 shadow-sm hover:border-primary transition"
          >
            <div class="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">
              ✓
            </div>
            <span class="text-sm font-bold text-gray-800 dark:text-gray-200">
              {{ target[locale] }}
            </span>
          </div>
        </div>

        <div class="p-4 bg-primary/10 rounded-2xl border border-primary/20 text-center text-xs md:text-sm font-medium text-primary max-w-2xl mx-auto">
          {{ locale === 'ar'
            ? '💡 كما يمكن دراسة متطلبات المؤسسات والشركات لتحديد البرنامج التدريبي الأنسب لطبيعة معداتها ومستوى فريقها الفني.'
            : '💡 Corporate requirements can be assessed to tailor the optimal program for your machinery and team technical level.'
          }}
        </div>
      </section>

      <!-- Section 5: Meet Your Instructor & Complete Professional CV Section with Provided Instructor Photo -->
      <section class="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-14 shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden" data-aos="fade-up">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <div class="inline-block bg-primary/10 text-primary font-extrabold px-4 py-1.5 rounded-lg text-sm mb-3">
            {{ locale === 'ar' ? 'السيرة الذاتية والخبرة المهنية' : 'Instructor CV & Professional Profile' }}
          </div>
          <h2 class="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2">
            {{ locale === 'ar' ? 'تعرف على المحاضر المشرف' : 'Meet Your Lead Instructor' }}
          </h2>
          <p class="text-sm md:text-base text-gray-500 dark:text-gray-400">
            {{ locale === 'ar' ? 'خبرة عملية وتشغيلية تزيد عن 25 عاماً في قيادة وتطوير الأنظمة الهيدروليكية وتأهيل الكوادر الفنية' : 'Over 25+ years of cumulative operational and engineering leadership in hydraulics' }}
          </p>
        </div>

        <!-- Instructor Main Profile & Credentials (Fully Translated Arabic/English) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          <!-- Card Column 1: Instructor Photo & Identity Highlights -->
          <div class="lg:col-span-4 p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-700 text-center flex flex-col justify-between h-full shadow-md">
            <div>
              <!-- Instructor Actual Photo Frame -->
              <div class="w-36 h-36 md:w-44 md:h-44 rounded-3xl bg-gradient-to-tr from-primary to-orange-500 p-1.5 mx-auto mb-5 shadow-2xl overflow-hidden">
                <img 
                  src="/images/training/instructor.jpg" 
                  alt="Eng. Hesham Elsir" 
                  class="w-full h-full object-cover object-top rounded-2xl bg-gray-800"
                  loading="lazy"
                />
              </div>

              <h3 class="text-2xl font-black text-gray-900 dark:text-white">
                {{ locale === 'ar' ? 'م. هشام السر' : 'Eng. Hesham Elsir' }}
              </h3>
              <p class="text-sm font-bold text-primary mb-2">
                {{ locale === 'ar' ? 'مهندس ميكانيكي واستشاري تدريب هيدروليكي' : 'Mechanical Engineer & Hydraulic Training Consultant' }}
              </p>
              
              <div class="bg-primary/10 text-primary border border-primary/20 px-3 py-2 rounded-xl text-xs font-bold mb-4 leading-relaxed">
                {{ locale === 'ar' ? 'مدير العمليات التشغيلية – شركة ساب تك المحدودة (SABTECH Co. Ltd.)' : 'Chief Operation Manager – SABTECH Co. Ltd.' }}
              </div>

              <div class="space-y-2.5 text-xs text-gray-700 dark:text-gray-300 text-start border-t border-gray-200 dark:border-gray-800 pt-4">
                <div class="flex items-center gap-2">
                  <span class="font-bold text-primary">📅 {{ locale === 'ar' ? 'الخبرة المهنية:' : 'Experience:' }}</span>
                  <span>{{ locale === 'ar' ? 'منذ أغسطس 1998 حتى الآن (+25 عاماً)' : 'Since Aug 1998 Till Date (25+ yrs)' }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="font-bold text-primary">🏛️ {{ locale === 'ar' ? 'المؤهل العلمي:' : 'Degree:' }}</span>
                  <span>{{ locale === 'ar' ? 'بكالوريوس الهندسة الميكانيكية (1998)' : 'B.Sc. Mechanical Engineering (1998)' }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="font-bold text-primary">🎓 {{ locale === 'ar' ? 'الجامعة:' : 'University:' }}</span>
                  <span>{{ locale === 'ar' ? 'جامعة أم درمان – الخرطوم، السودان' : 'Omdurman University – Khartoum, Sudan' }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="font-bold text-primary">🌐 {{ locale === 'ar' ? 'اللغات:' : 'Languages:' }}</span>
                  <span>{{ locale === 'ar' ? 'إتقان تام للغتين العربية والإنجليزية' : 'Fluent in Arabic & English' }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Card Column 2: Complete CV Breakdown (Accreditations & Competencies) -->
          <div class="lg:col-span-8 space-y-6">
            
            <!-- Professional Certifications & International Courses (Fully Arabic Translated) -->
            <div class="bg-gray-50 dark:bg-gray-900/80 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <h4 class="text-xs font-black uppercase tracking-wider text-primary mb-4 flex items-center gap-2">
                <span>📜</span>
                <span>{{ locale === 'ar' ? 'الدورات والتأهيل المهني والشهادات الدولية المعتمدة:' : 'Accredited Training & International Certifications:' }}</span>
              </h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-gray-800 dark:text-gray-200">
                
                <div class="p-3.5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 flex items-start gap-2.5 shadow-sm">
                  <span class="text-primary font-bold text-base">▪</span>
                  <div>
                    <strong class="text-gray-900 dark:text-white block font-bold">
                      {{ locale === 'ar' ? 'دبلوم تدريب المدربين (TOT)' : 'Diploma in Train the Trainer' }}
                    </strong>
                    <span class="text-gray-500 text-xs">
                      {{ locale === 'ar' ? 'مركز كامبريدج للتدريب والاستشارات' : 'Cambridge Training and Consultant Centre' }}
                    </span>
                  </div>
                </div>

                <div class="p-3.5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 flex items-start gap-2.5 shadow-sm">
                  <span class="text-primary font-bold text-base">▪</span>
                  <div>
                    <strong class="text-gray-900 dark:text-white block font-bold">
                      {{ locale === 'ar' ? 'شهادة عضوية معتمدة' : 'Certificate of Membership' }}
                    </strong>
                    <span class="text-gray-500 text-xs">
                      {{ locale === 'ar' ? 'جمعية القدرة المائعة والهيدروليك الأمريكية (FPS - USA)' : 'Fluid Power Society (USA)' }}
                    </span>
                  </div>
                </div>

                <div class="p-3.5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 flex items-start gap-2.5 shadow-sm">
                  <span class="text-primary font-bold text-base">▪</span>
                  <div>
                    <strong class="text-gray-900 dark:text-white block font-bold">
                      {{ locale === 'ar' ? 'تدريب شريك الخدمة المعتمد' : 'Service Partner Training' }}
                    </strong>
                    <span class="text-gray-500 text-xs">
                      {{ locale === 'ar' ? 'شركة ساور دانفوس (ألمانيا)' : 'SAUER DANFOSS (Germany)' }}
                    </span>
                  </div>
                </div>

                <div class="p-3.5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 flex items-start gap-2.5 shadow-sm">
                  <span class="text-primary font-bold text-base">▪</span>
                  <div>
                    <strong class="text-gray-900 dark:text-white block font-bold">
                      {{ locale === 'ar' ? 'التدريب المتقدم لمتابعة شركاء الخدمة' : 'Service Partner Follow-up Training' }}
                    </strong>
                    <span class="text-gray-500 text-xs">
                      {{ locale === 'ar' ? 'شركة ساور دانفوس (ألمانيا)' : 'SAUER DANFOSS (Germany)' }}
                    </span>
                  </div>
                </div>

                <div class="p-3.5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 flex items-start gap-2.5 shadow-sm sm:col-span-2">
                  <span class="text-primary font-bold text-base">▪</span>
                  <div>
                    <strong class="text-gray-900 dark:text-white block font-bold">
                      {{ locale === 'ar' ? 'التدريب العملي التخصصي في الهيدروليك' : 'Hydraulic Practical Training' }}
                    </strong>
                    <span class="text-gray-500 text-xs">
                      {{ locale === 'ar' ? 'شركة كايا هان للهيدروليك (تركيا)' : 'KAYAHAN Hydraulics (Turkey)' }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Core Operational & Engineering Competencies (CV Extract Translated) -->
            <div class="bg-gray-50 dark:bg-gray-900/80 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <h4 class="text-xs font-black uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
                <span>⚡</span>
                <span>{{ locale === 'ar' ? 'مستخلص الخبرات المهنية والتطبيقية (من واقع السيرة الذاتية):' : 'Key Engineering & Operational Competencies (CV Extract):' }}</span>
              </h4>
              <ul class="space-y-2.5 text-xs md:text-sm text-gray-700 dark:text-gray-300">
                <li class="flex items-start gap-2.5">
                  <span class="text-primary font-bold">✓</span>
                  <span>{{ locale === 'ar' ? 'تنظيم وإدارة وتنفيذ البرامج والدورات التدريبية المتخصصة في الأنظمة الهيدروليكية للمهندسين والفنيين.' : 'Arranging hydraulic training courses for technicians and engineers.' }}</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-primary font-bold">✓</span>
                  <span>{{ locale === 'ar' ? 'تشخيص وحل المشكلات الفنية المعقدة وتحليل أداء المنظومات الهيدروليكية بدقة منهجية.' : 'Solving complex hydraulic technical problems, diagnostics, and root-cause analysis.' }}</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-primary font-bold">✓</span>
                  <span>{{ locale === 'ar' ? 'تصميم الأنظمة الهيدروليكية المتقدمة وابتكار الحلول الفنية لإحلال وتحديث المعدات والمكونات.' : 'Designing advanced hydraulic systems and finding solutions for equipment replacement and retrofitting.' }}</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-primary font-bold">✓</span>
                  <span>{{ locale === 'ar' ? 'خبرة عملية تراكمية تزيد عن 25 عاماً كمدير للعمليات التشغيلية في شركة ساب تك (المملكة العربية السعودية).' : 'Passionate, diligent and focused Engineer with 25+ years cumulative experience as Operation Manager.' }}</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-primary font-bold">✓</span>
                  <span>{{ locale === 'ar' ? 'معرفة تقنية معمقة في إدارة النظم، صيانة المعدات، وضمان الامتثال لجميع المتطلبات الإلزامية ومعايير السلامة والجودة.' : 'Deep technical knowledge in system administration, hardware & hydraulic maintenance, and regulatory statutory compliance.' }}</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 text-center text-xs md:text-sm text-gray-600 dark:text-gray-400 italic">
          {{ locale === 'ar'
            ? '«هذا المزيج بين الخبرة الهندسية والتشغيلية والتدريب العملي يتيح تقديم المادة التدريبية من منظور تطبيقي يرتبط بالمشكلات والمواقف التي يواجهها المهندسون والفنيون في بيئة العمل.»'
            : '“This combination of engineering, operational expertise, and practical training delivers content strictly from an applied perspective directly linked to real field challenges.”'
          }}
        </div>
      </section>

      <!-- Section 6: Corporate Training (تدريب مخصص للشركات) -->
      <section class="bg-gradient-to-r from-primary to-orange-500 text-white rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden" data-aos="fade-up">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-8 space-y-4">
            <span class="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {{ locale === 'ar' ? 'حلول تدريب المؤسسات والشركات' : 'Corporate Training Solutions' }}
            </span>
            <h2 class="text-2xl md:text-4xl font-black">
              {{ locale === 'ar' ? 'تدريب مخصص لفرق العمل والشركات في قطر' : 'Customized Corporate Hydraulic Training in Qatar' }}
            </h2>
            <p class="text-white/90 text-sm md:text-base leading-relaxed">
              {{ locale === 'ar'
                ? 'يمكن للشركات والمؤسسات التواصل مع بيستوليكس (Bestolex) لمناقشة احتياجاتها التدريبية وتحديد البرنامج المناسب وفقاً لطبيعة نشاطها ومستوى المشاركين والأهداف الفنية المطلوبة.'
                : 'Corporates and organizations can contact Bestolex to discuss their training needs and structure tailored programs matching their operational domain and competency goals.'
              }}
            </p>
            <p class="text-white/80 text-xs md:text-sm leading-relaxed">
              {{ locale === 'ar'
                ? 'يمكن تخصيص محتوى البرنامج بحيث يركز على موضوعات محددة مثل: الصيانة الهيدروليكية، تشخيص الأعطال، المضخات، الصمامات، الأسطوانات، قراءة الدوائر، الأنظمة الصناعية أو هيدروليك المعدات المتحركة.'
                : 'Custom focus areas include: Hydraulic maintenance, fault diagnostics, pumps, directional valves, cylinders, circuit reading, industrial setups, or mobile equipment hydraulics.'
              }}
            </p>
          </div>
          <div class="lg:col-span-4 flex justify-center lg:justify-end">
            <button 
              @click="scrollToSection('register-form')"
              class="bg-white text-gray-900 hover:bg-gray-100 font-black px-8 py-4 rounded-2xl shadow-xl transition hover:scale-105 text-sm md:text-base whitespace-nowrap"
            >
              {{ locale === 'ar' ? 'اطلب برنامج تدريب لشركتك' : 'Request Corporate Training' }}
            </button>
          </div>
        </div>
      </section>

      <!-- Section 7: Why Specialized Hydraulic Training? (لماذا التدريب الهيدروليكي؟) -->
      <section class="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-gray-700 shadow-xl" data-aos="fade-up">
        <div class="max-w-3xl mx-auto text-center space-y-4">
          <div class="inline-block bg-primary/10 text-primary font-extrabold px-4 py-1.5 rounded-lg text-sm">
            {{ locale === 'ar' ? 'القيمة المضافة' : 'Added Value' }}
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-gray-900 dark:text-white">
            {{ locale === 'ar' ? 'لماذا التدريب الهيدروليكي المتخصص؟' : 'Why Specialized Hydraulic Training?' }}
          </h2>
          <p class="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ locale === 'ar'
              ? 'الأنظمة الهيدروليكية تمثل جزءاً أساسياً من عدد كبير من المعدات الصناعية والثقيلة، ولذلك فإن الفهم الصحيح لمبادئ تشغيلها وصيانتها وتشخيص أعطالها يساعد فرق العمل على تحسين التعامل مع المعدات واتخاذ قرارات فنية أكثر دقة.'
              : 'Hydraulic systems form the backbone of modern heavy machinery and industrial automation. Deep comprehension of operation, proactive maintenance, and troubleshooting empowers technical teams to make precise decisions, minimize downtime, and safeguard critical assets.'
            }}
          </p>
          <p class="text-sm md:text-base font-bold text-primary leading-relaxed">
            {{ locale === 'ar'
              ? 'هدف البرنامج ليس فقط تعريف المتدرب بالمكونات، وإنما تطوير قدرته على فهم النظام الهيدروليكي بصورة مترابطة وتحويل المعرفة الفنية إلى تطبيق عملي.'
              : 'Our objective is not merely component introduction, but enabling systematic comprehension of hydraulic loops and turning engineering knowledge into confident field execution.'
            }}
          </p>
        </div>
      </section>

      <!-- Section 8: Registration & Interest Form (سجل اهتمامك بالدورات القادمة) -->
      <section id="register-form" class="scroll-mt-28 bg-[#121c2d] text-white rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden" data-aos="fade-up">
        <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 20px 20px;"></div>

        <div class="relative z-10 max-w-3xl mx-auto">
          <div class="text-center mb-10">
            <span class="inline-block bg-[#E99E15]/20 text-[#E99E15] px-4 py-1.5 rounded-full text-xs font-bold mb-3 border border-[#E99E15]/30">
              {{ locale === 'ar' ? 'تسجيل الاهتمام والحجز' : 'Registration & Inquiries' }}
            </span>
            <h2 class="text-3xl md:text-4xl font-black text-white mb-3">
              {{ locale === 'ar' ? 'سجل اهتمامك بالدورات القادمة' : 'Register Your Interest' }}
            </h2>
            <p class="text-gray-300 text-sm md:text-base leading-relaxed">
              {{ locale === 'ar'
                ? 'هل ترغب في تطوير مهاراتك أو رفع كفاءة فريقك الفني في الأنظمة الهيدروليكية؟ تواصل مع فريق Bestolex للحصول على معلومات حول البرامج التدريبية المتاحة ومناقشة متطلبات التدريب الخاصة بشركتك.'
                : 'Looking to elevate your technical team capabilities in hydraulics? Contact Bestolex to receive detailed program outlines and coordinate corporate training schedules.'
              }}
            </p>
          </div>

          <!-- Form Component -->
          <form @submit.prevent="submitTrainingForm" class="space-y-5 bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10 backdrop-blur-md">
            <!-- Full Name & Company Name -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label class="block text-xs font-bold text-gray-200 mb-2">
                  {{ locale === 'ar' ? 'الاسم الكامل *' : 'Full Name *' }}
                </label>
                <input 
                  v-model="form.name" 
                  type="text" 
                  required 
                  :placeholder="locale === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'"
                  class="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#E99E15] focus:ring-1 focus:ring-[#E99E15]"
                />
              </div>

              <div>
                <label class="block text-xs font-bold text-gray-200 mb-2">
                  {{ locale === 'ar' ? 'اسم الشركة / الجهة *' : 'Company Name *' }}
                </label>
                <input 
                  v-model="form.company" 
                  type="text" 
                  required 
                  :placeholder="locale === 'ar' ? 'أدخل اسم الشركة' : 'Enter company name'"
                  class="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#E99E15] focus:ring-1 focus:ring-[#E99E15]"
                />
              </div>
            </div>

            <!-- Job Title & Phone / WhatsApp -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label class="block text-xs font-bold text-gray-200 mb-2">
                  {{ locale === 'ar' ? 'المسمى الوظيفي' : 'Job Title' }}
                </label>
                <input 
                  v-model="form.jobTitle" 
                  type="text" 
                  :placeholder="locale === 'ar' ? 'مثال: مهندس ميكانيكا، مسؤول صيانة' : 'e.g. Mechanical Engineer, Maintenance Manager'"
                  class="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#E99E15] focus:ring-1 focus:ring-[#E99E15]"
                />
              </div>

              <div>
                <label class="block text-xs font-bold text-gray-200 mb-2">
                  {{ locale === 'ar' ? 'رقم الهاتف / واتساب *' : 'Phone / WhatsApp *' }}
                </label>
                <input 
                  v-model="form.phone" 
                  type="tel" 
                  required 
                  placeholder="+974 ..."
                  class="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#E99E15] focus:ring-1 focus:ring-[#E99E15]"
                />
              </div>
            </div>

            <!-- Email & Training Program Selection -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label class="block text-xs font-bold text-gray-200 mb-2">
                  {{ locale === 'ar' ? 'البريد الإلكتروني *' : 'Email Address *' }}
                </label>
                <input 
                  v-model="form.email" 
                  type="email" 
                  required 
                  placeholder="name@company.com"
                  class="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#E99E15] focus:ring-1 focus:ring-[#E99E15]"
                />
              </div>

              <div>
                <label class="block text-xs font-bold text-gray-200 mb-2">
                  {{ locale === 'ar' ? 'البرنامج المطلوب' : 'Selected Training Program' }}
                </label>
                <select 
                  v-model="form.program"
                  class="w-full bg-[#1b273b] border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#E99E15] focus:ring-1 focus:ring-[#E99E15]"
                >
                  <option value="أساسيات الأنظمة الهيدروليكية">{{ locale === 'ar' ? '01 — أساسيات الأنظمة الهيدروليكية' : '01 — Hydraulic Fundamentals' }}</option>
                  <option value="الأنظمة الهيدروليكية الصناعية">{{ locale === 'ar' ? '02 — الأنظمة الهيدروليكية الصناعية' : '02 — Industrial Hydraulic Systems' }}</option>
                  <option value="هيدروليك المعدات المتحركة">{{ locale === 'ar' ? '03 — هيدروليك المعدات المتحركة' : '03 — Mobile Hydraulics' }}</option>
                  <option value="صيانة وتشخيص أعطال الأنظمة الهيدروليكية">{{ locale === 'ar' ? '04 — صيانة وتشخيص أعطال الأنظمة الهيدروليكية' : '04 — Hydraulic Maintenance & Troubleshooting' }}</option>
                  <option value="برنامج مخصص لشركتنا">{{ locale === 'ar' ? 'برنامج مخصص لشركتنا (Corporate Custom)' : 'Custom Corporate Training Program' }}</option>
                </select>
              </div>
            </div>

            <!-- Number of Participants -->
            <div>
              <label class="block text-xs font-bold text-gray-200 mb-2">
                {{ locale === 'ar' ? 'عدد المتدربين المتوقع' : 'Number of Participants' }}
              </label>
              <input 
                v-model="form.participants" 
                type="number" 
                min="1"
                :placeholder="locale === 'ar' ? 'مثال: 5' : 'e.g. 5'"
                class="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#E99E15] focus:ring-1 focus:ring-[#E99E15]"
              />
            </div>

            <!-- Notes & Training Requirements -->
            <div>
              <label class="block text-xs font-bold text-gray-200 mb-2">
                {{ locale === 'ar' ? 'ملاحظات / متطلبات التدريب الخاصة' : 'Training Requirements / Notes' }}
              </label>
              <textarea 
                v-model="form.notes" 
                rows="3"
                :placeholder="locale === 'ar' ? 'اذكر أي تفاصيل إضافية حول المعدات أو الأهداف التدريبية...' : 'Mention any specific machinery models or training goals...'"
                class="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#E99E15] focus:ring-1 focus:ring-[#E99E15]"
              ></textarea>
            </div>

            <!-- Status Alert -->
            <div v-if="submitStatus.message" :class="submitStatus.success ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' : 'bg-red-500/20 text-red-300 border-red-500/40'" class="p-4 rounded-xl border text-xs md:text-sm text-center">
              {{ submitStatus.message }}
            </div>

            <!-- Submit Button -->
            <button 
              type="submit" 
              :disabled="isSubmitting"
              class="w-full py-4 bg-gradient-to-r from-[#E99E15] to-orange-500 hover:from-orange-500 hover:to-orange-600 disabled:opacity-50 text-white font-black rounded-2xl shadow-xl transition hover:-translate-y-0.5 text-base md:text-lg flex items-center justify-center gap-3"
            >
              <span v-if="isSubmitting" class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              <span>{{ isSubmitting ? (locale === 'ar' ? 'جاري الإرسال...' : 'Submitting...') : (locale === 'ar' ? 'إرسال طلب التدريب' : 'Submit Training Request') }}</span>
            </button>
          </form>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

definePageMeta({
  alias: ['/hydraulic-training-courses-qatar']
})

const { locale } = useI18n()

// Hero Animated Carousel Slides (100% strictly no people/humans)
const heroSlides = [
  {
    image: '/images/training/bench.jpg',
    title: { ar: 'مقاعد ومحطات الاختبار الهيدروليكية', en: 'Hydraulic Test & Simulation Benches' }
  },
  {
    image: '/images/training/cutaway.jpg',
    title: { ar: 'نماذج مقطعية للمضخات والصمامات', en: 'Cutaway Pumps, Valves & Components' }
  },
  {
    image: '/images/training/power-unit.jpg',
    title: { ar: 'وحدات القدرة والمنظومات الهيدروليكية الصناعية', en: 'Industrial Hydraulic Power Units' }
  }
]

const currentSlide = ref(0)
let carouselInterval = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % heroSlides.length
}

const setSlide = (idx) => {
  currentSlide.value = idx
}

onMounted(() => {
  carouselInterval = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  if (carouselInterval) clearInterval(carouselInterval)
})

// Practical Training Areas List (All 6 Cards with dedicated images)
const practicalAreas = [
  {
    icon: '⚙️',
    image: '/images/training/pumps.jpg',
    title: { ar: 'أساسيات المضخات الهيدروليكية', en: 'Hydraulic Pumps Knowledge' },
    desc: { ar: 'فهم أنواع المضخات ومبادئ عملها ودورها داخل النظام الهيدروليكي.', en: 'Understanding pump types, operating principles, and hydraulic loop roles.' }
  },
  {
    icon: '🔩',
    image: '/images/training/cylinders.jpg',
    title: { ar: 'الأسطوانات الهيدروليكية', en: 'Hydraulic Cylinders' },
    desc: { ar: 'التعرف على مكونات الأسطوانات وآلية التشغيل والتطبيقات الأساسية.', en: 'Cylinder anatomy, operating mechanisms, force calculations, and applications.' }
  },
  {
    icon: '🎛️',
    image: '/images/training/valves.jpg',
    title: { ar: 'الصمامات الهيدروليكية', en: 'Hydraulic Valves' },
    desc: { ar: 'فهم وظائف الأنواع المختلفة من الصمامات ودورها في التحكم بالضغط والتدفق والاتجاه.', en: 'Directional, pressure, and flow control valve operation and regulation.' }
  },
  {
    icon: '🔄',
    image: '/images/training/circuits.jpg',
    title: { ar: 'الدوائر والأنظمة الهيدروليكية', en: 'Hydraulic Circuits & Systems' },
    desc: { ar: 'فهم العلاقة بين المكونات وتحليل طريقة عمل الدائرة الهيدروليكية كنظام متكامل.', en: 'Analyzing component interaction and complete integrated system circuit behavior.' }
  },
  {
    icon: '🛠️',
    image: '/images/training/components.jpg',
    title: { ar: 'التدريب بمكونات حقيقية', en: 'Hands-on Real Components' },
    desc: { ar: 'التعامل المباشر مع مكونات وأنظمة فعلية لتطوير المهارات العملية.', en: 'Direct tactile engagement with actual hardware to build practical mastery.' }
  },
  {
    icon: '📊',
    image: '/images/training/diagnostics.jpg',
    title: { ar: 'العروض والاختبارات العملية', en: 'Practical Demonstrations' },
    desc: { ar: 'شرح عملي وتفاعلي يساعد المتدربين على ربط المبادئ النظرية بالتطبيقات الواقعية.', en: 'Live interactive demonstrations connecting theory to real plant scenarios.' }
  }
]

// Target Audience List
const targetAudience = [
  { ar: 'مهندسو الميكانيكا والصيانة والتشغيل', en: 'Mechanical, Maintenance & Operation Engineers' },
  { ar: 'فنيو الأنظمة الهيدروليكية', en: 'Hydraulic Systems Technicians' },
  { ar: 'فرق صيانة وتجهيز المعدات الثقيلة', en: 'Heavy Equipment Maintenance Teams' },
  { ar: 'الفنيون العاملون في المصانع والمنشآت الصناعية', en: 'Factory & Industrial Plant Technicians' },
  { ar: 'فرق تشغيل وصيانة المعدات المتحركة', en: 'Mobile Machinery Operators & Crews' },
  { ar: 'المشرفون ومديرو الصيانة الفنية', en: 'Technical Supervisors & Maintenance Managers' },
  { ar: 'الشركات الراغبة في تطوير كفاءة فرقها الفنية', en: 'Corporates Investing in Technical Staff Competency' }
]

// Registration Form State
const form = ref({
  name: '',
  company: '',
  jobTitle: '',
  phone: '',
  email: '',
  program: 'أساسيات الأنظمة الهيدروليكية',
  participants: '',
  notes: ''
})

const isSubmitting = ref(false)
const submitStatus = ref({ success: false, message: '' })

const selectProgram = (progName) => {
  form.value.program = progName
  scrollToSection('register-form')
}

const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const submitTrainingForm = async () => {
  isSubmitting.value = true
  submitStatus.value = { success: false, message: '' }

  try {
    const res = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.value.name,
        company: form.value.company,
        jobTitle: form.value.jobTitle,
        phone: form.value.phone,
        email: form.value.email,
        isQuoteRequest: true,
        productName: `طلب تسجيل دورة تدريبية: ${form.value.program}`,
        categoryTitle: 'الدورات التدريبية الهيدروليكية',
        message: `اسم الشركة: ${form.value.company}\nالمسمى الوظيفي: ${form.value.jobTitle}\nالبرنامج المطلوب: ${form.value.program}\nعدد المتدربين: ${form.value.participants || 'غير محدد'}\nمتطلبات وتفاصيل التدريب:\n${form.value.notes || 'لا توجد ملاحظات إضافية'}`
      }
    })

    submitStatus.value = {
      success: true,
      message: locale.value === 'ar'
        ? 'تم إرسال طلبكم بنجاح! سيتواصل معكم فريق بيستوليكس لتزويدكم بكافة تفاصيل البرنامج التدريبي.'
        : 'Your request has been submitted successfully! The Bestolex technical team will contact you shortly.'
    }

    form.value = {
      name: '',
      company: '',
      jobTitle: '',
      phone: '',
      email: '',
      program: 'أساسيات الأنظمة الهيدروليكية',
      participants: '',
      notes: ''
    }
  } catch (err) {
    submitStatus.value = {
      success: false,
      message: locale.value === 'ar'
        ? 'عذراً، حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.'
        : 'An error occurred while submitting. Please try again or contact us directly.'
    }
  } finally {
    isSubmitting.value = false
  }
}

// SEO Metadata exactly matching instructions
useSeoMeta({
  title: () => locale.value === 'ar' 
    ? 'دورات تدريب الأنظمة الهيدروليكية في قطر | بيستوليكس' 
    : 'Hydraulic Training Courses in Qatar | Bestolex',
  description: () => locale.value === 'ar'
    ? 'دورات تدريبية متخصصة في الأنظمة الهيدروليكية للمهندسين والفنيين وفرق الصيانة والتشغيل، تشمل أساسيات الهيدروليك والصيانة وتشخيص الأعطال والتطبيق العملي.'
    : 'Professional hydraulic training courses for engineers, technicians and maintenance teams covering hydraulic fundamentals, industrial hydraulics, maintenance, troubleshooting and hands-on applications.',
  keywords: () => locale.value === 'ar'
    ? 'دورات هيدروليك قطر, تدريب الأنظمة الهيدروليكية, دورة صيانة هيدروليك, تدريب فنيين هيدروليك, بيستوليكس قطر'
    : 'Hydraulic Training Qatar, Hydraulic Courses Qatar, Industrial Hydraulic Training, Hydraulic Maintenance Training, Hydraulic Troubleshooting Course',
  ogTitle: () => locale.value === 'ar' 
    ? 'دورات تدريب الأنظمة الهيدروليكية في قطر | بيستوليكس' 
    : 'Hydraulic Training Courses in Qatar | Bestolex',
  ogDescription: () => locale.value === 'ar'
    ? 'برامج تدريبية متخصصة تجمع بين المعرفة الهندسية والتطبيق العملي بمكونات حقيقية في قطر.'
    : 'Specialized hydraulic training combining engineering knowledge with real hands-on components in Qatar.',
  ogImage: '/images/training/bench.jpg'
})
</script>
