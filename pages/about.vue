<template>
  <div class="about-page bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
    
    <!-- Hero Banner Section -->
    <section class="relative py-24 md:py-32 bg-[#121c2d] text-white overflow-hidden">
      <!-- Background Image with Dark Gradient Overlay -->
      <img 
        src="https://sabtech.com.sa/wp-content/uploads/2020/12/neuer-slider-HighTech2.jpg" 
        alt="Bestolex Heavy Machinery" 
        class="absolute inset-0 w-full h-full object-cover object-center opacity-25 scale-105 transform hover:scale-100 transition duration-1000"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-[#121c2d] via-[#121c2d]/80 to-transparent"></div>
      
      <!-- Subtle Pattern -->
      <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 24px 24px;"></div>

      <div class="container mx-auto px-4 md:px-8 relative z-10 text-center" data-aos="fade-up">
        <!-- Qatar Badge -->
        <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#E99E15] px-5 py-2 rounded-full font-bold text-sm md:text-base mb-6 backdrop-blur-md shadow-lg">
          <span>🇶🇦</span>
          <span>{{ locale === 'ar' ? 'دولة قطر | الملف التعريفي للشركة' : 'State of Qatar | Company Profile' }}</span>
        </div>

        <h1 class="text-3xl sm:text-5xl md:text-6xl font-black mb-6 text-white leading-tight tracking-tight">
          {{ locale === 'ar' ? 'بيستوليكس لتجارة الآلات والمعدات الثقيلة' : 'Bestolex for Trading of Heavy Machinery & Equipment' }}
        </h1>

        <div class="w-24 h-1.5 bg-[#E99E15] mx-auto mb-6 rounded-full"></div>

        <p class="text-xl md:text-3xl text-[#E99E15] font-black italic max-w-3xl mx-auto drop-shadow-md">
          "{{ locale === 'ar' ? 'قوة تدفع أعمالكم .. ثقة تدوم' : 'Power That Drives Your Business, Trust That Lasts' }}"
        </p>
      </div>
    </section>

    <div class="container mx-auto px-4 md:px-8 py-16 md:py-24 space-y-24">

      <!-- About Us Section -->
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" data-aos="fade-up">
        <!-- Image Box -->
        <div class="lg:col-span-5 relative">
          <div class="bg-white dark:bg-gray-800 p-4 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
            <img 
              src="https://sabtech.com.sa/wp-content/uploads/2020/12/neuer-slider-HighTech2.jpg" 
              alt="Bestolex Qatar" 
              class="w-full h-[400px] object-cover rounded-2xl group-hover:scale-105 transition duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
          </div>
          <!-- Floating Badge -->
          <div class="absolute -bottom-6 rtl:-left-6 ltr:-right-6 bg-[#E99E15] text-white p-6 rounded-2xl shadow-xl hidden sm:flex flex-col items-center justify-center border-4 border-white dark:border-gray-900">
            <span class="font-black text-3xl">25+</span>
            <span class="text-xs font-bold uppercase tracking-wider text-center">{{ locale === 'ar' ? 'سنة خبرة إقليمية' : 'Years Experience' }}</span>
          </div>
        </div>

        <!-- Text Content -->
        <div class="lg:col-span-7 space-y-6">
          <div class="inline-block bg-primary/10 text-primary font-extrabold px-4 py-1.5 rounded-lg text-sm">
            {{ locale === 'ar' ? 'من نحن' : 'About Us' }}
          </div>
          <h2 class="text-3xl md:text-4xl font-black text-gray-900 dark:text-white leading-tight">
            {{ locale === 'ar' ? 'شركة قطرية متخصصة في حلول المعدات الثقيلة واللوجستيات' : 'A Specialized Qatari Leader in Heavy Machinery & Logistics Solutions' }}
          </h2>
          <p class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            {{ locale === 'ar' 
              ? 'بيستوليكس لتجارة الآلات والمعدات الثقيلة شركة قطرية متخصصة في توريد الحلول والمعدات الصناعية واللوجستية. نخدم قطاعات المقاولات والبنية التحتية والمصانع والمستودعات والموانئ والمنشآت التجارية والحكومية من خلال محفظة متكاملة تشمل أنظمة المستودعات ومناطق التحميل، ومعدات إدارة النفايات وإعادة التدوير، وأنظمة حماية المحيط والتحكم في الدخول، والأبواب الصناعية.'
              : 'Bestolex for Trading of Heavy Machinery and Equipment is a Qatar-based company specializing in the supply of industrial and logistics equipment and solutions. We serve contractors, infrastructure projects, factories, warehouses, ports, commercial facilities, and government entities through an integrated portfolio covering warehouse and loading bay systems, waste management and recycling equipment, perimeter protection and access control systems, and industrial doors.'
            }}
          </p>
          <div class="grid grid-cols-2 gap-4 pt-4">
            <div class="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3">
              <span class="text-3xl text-[#E99E15]">🏆</span>
              <div>
                <h4 class="font-bold text-gray-900 dark:text-white text-sm md:text-base">{{ locale === 'ar' ? 'اعتمادات عالمية' : 'Global Certifications' }}</h4>
                <p class="text-xs text-gray-500">ISO 9001:2015 & CE</p>
              </div>
            </div>
            <div class="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3">
              <span class="text-3xl text-[#E99E15]">🤝</span>
              <div>
                <h4 class="font-bold text-gray-900 dark:text-white text-sm md:text-base">{{ locale === 'ar' ? 'شريك ساب تك' : 'SAB TECH Partner' }}</h4>
                <p class="text-xs text-gray-500">{{ locale === 'ar' ? 'الوكيل المعتمد في قطر' : 'Authorized Qatar Distributor' }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Vision & Mission Cards -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
        <!-- Vision -->
        <div class="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-3xl shadow-xl border-2 border-transparent hover:border-[#E99E15] transition duration-500 group relative overflow-hidden">
          <div class="absolute -right-8 -top-8 w-32 h-32 bg-[#E99E15]/10 rounded-full group-hover:scale-150 transition duration-700"></div>
          <div class="w-16 h-16 bg-[#E99E15]/10 text-[#E99E15] rounded-2xl flex items-center justify-center text-3xl mb-6 font-bold">🎯</div>
          <h3 class="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-4">
            {{ locale === 'ar' ? 'رؤيتنا' : 'Our Vision' }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed relative z-10">
            {{ locale === 'ar' 
              ? 'أن نرسّخ مكانة بيستوليكس كشريك موثوق للمنشآت الصناعية واللوجستية في دولة قطر، من خلال توفير حلول هندسية وتجارية عالية الجودة تسهم في رفع الكفاءة التشغيلية وتعزيز السلامة والاستدامة.'
              : 'To establish Bestolex as a trusted partner for industrial and logistics facilities in Qatar by providing high-quality engineering and commercial solutions that improve operational efficiency, safety, and sustainability.'
            }}
          </p>
        </div>

        <!-- Mission -->
        <div class="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-3xl shadow-xl border-2 border-transparent hover:border-primary transition duration-500 group relative overflow-hidden">
          <div class="absolute -right-8 -top-8 w-32 h-32 bg-primary/10 rounded-full group-hover:scale-150 transition duration-700"></div>
          <div class="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center text-3xl mb-6 font-bold">📋</div>
          <h3 class="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-4">
            {{ locale === 'ar' ? 'رسالتنا' : 'Our Mission' }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed relative z-10">
            {{ locale === 'ar' 
              ? 'توفير حلول هندسية وتجارية متكاملة تلائم المتطلبات الفعلية لكل مشروع، بدءًا من الاستشارة الفنية واختيار المعدات، وصولًا إلى التوريد والتركيب والتشغيل والصيانة، مع الالتزام بالجودة والسلامة وموثوقية الخدمة.'
              : 'To deliver integrated engineering and commercial solutions tailored to the actual requirements of each project — from technical consultation and equipment selection to supply, installation, commissioning, and maintenance — while maintaining quality, safety, and service reliability.'
            }}
          </p>
        </div>
      </section>

      <!-- Values Grid Section -->
      <section data-aos="fade-up">
        <div class="text-center mb-12">
          <div class="inline-block bg-primary/10 text-primary font-extrabold px-4 py-1.5 rounded-lg text-sm mb-3">
            {{ locale === 'ar' ? 'قيمنا المؤسسية' : 'Our Corporate Values' }}
          </div>
          <h2 class="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
            {{ locale === 'ar' ? 'القيم التي نرتكز عليها' : 'Core Values We Stand For' }}
          </h2>
          <div class="h-1 w-20 bg-[#E99E15] mx-auto mt-4 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div 
            v-for="(val, idx) in valuesList" 
            :key="idx"
            class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-1 transition duration-300 flex flex-col justify-between"
          >
            <div>
              <div class="w-14 h-14 bg-gray-50 dark:bg-gray-700 rounded-xl flex items-center justify-center text-3xl mb-5 shadow-inner">
                {{ val.icon }}
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">{{ val.title[locale] }}</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">{{ val.desc[locale] }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Strategic Partner Section (SAB TECH Spotlight) -->
      <section class="bg-gradient-to-r from-[#121c2d] to-[#1e2d42] text-white rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden" data-aos="fade-up">
        <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 20px 20px;"></div>
        
        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-8 space-y-6">
            <div class="inline-flex items-center gap-2 bg-[#E99E15]/20 text-[#E99E15] border border-[#E99E15]/30 px-4 py-1.5 rounded-full font-bold text-xs md:text-sm">
              <span>🤝</span>
              <span>{{ locale === 'ar' ? 'التحالف الاستراتيجي' : 'Strategic Alliance' }}</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-black leading-tight text-white">
              {{ locale === 'ar' ? 'الشريك الاستراتيجي المعتمد (ساب تك - SAB TECH)' : 'Official Strategic Partner: SAB TECH' }}
            </h2>
            <p class="text-gray-300 text-base md:text-lg leading-relaxed">
              {{ locale === 'ar' 
                ? 'بيستوليكس هي الوكيل والموزّع المعتمد في دولة قطر لشركة أساس السعودية لأعمال التقنية المحدودة (SAB TECH) — بخبرة تمتد لأكثر من 25 عاماً في التصنيع والحلول الهندسية، واعتمادات الجودة العالمية ISO 9001:2015 وCE، مع حضور إقليمي واسع في جدة والرياض والدمام وخميس مشيط ودبي.'
                : 'Bestolex is the authorized agent and distributor in Qatar for Saudi Basis for Technical Works Ltd. (SAB TECH) — with over 25 years of engineering manufacturing expertise, ISO 9001:2015 and CE quality certifications, and strong regional presence across KSA and UAE.'
              }}
            </p>
            <div class="flex flex-wrap gap-4 pt-2">
              <div class="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-semibold text-gray-200 border border-white/10">ISO 9001:2015 Certified</div>
              <div class="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-semibold text-gray-200 border border-white/10">CE Quality Mark</div>
              <div class="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-semibold text-gray-200 border border-white/10">PAS 68 & ASTM Standards</div>
            </div>
          </div>

          <div class="lg:col-span-4 flex justify-center">
            <div class="bg-white p-8 rounded-2xl shadow-2xl text-center w-full max-w-xs">
              <img src="https://sabtech.com.sa/wp-content/uploads/2019/05/logo-03-1-1.png" alt="SAB TECH Logo" class="h-16 mx-auto object-contain mb-4" />
              <div class="text-gray-900 font-bold text-sm mb-1">{{ locale === 'ar' ? 'شريك التقنية والتصنيع' : 'Manufacturing & Tech Partner' }}</div>
              <div class="text-gray-500 text-xs">{{ locale === 'ar' ? 'خبرة أكثر من 25 عاماً' : '+25 Years Engineering Excellence' }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Us (ما يميزنا) -->
      <section data-aos="fade-up">
        <div class="text-center mb-12">
          <div class="inline-block bg-primary/10 text-primary font-extrabold px-4 py-1.5 rounded-lg text-sm mb-3">
            {{ locale === 'ar' ? 'نقاط القوة' : 'Why Choose Us' }}
          </div>
          <h2 class="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
            {{ locale === 'ar' ? 'ما يميز بيستوليكس في السوق القطري' : 'What Sets Bestolex Apart in Qatar' }}
          </h2>
          <div class="h-1 w-20 bg-[#E99E15] mx-auto mt-4 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(item, idx) in advantageList" :key="idx" class="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow border border-gray-100 dark:border-gray-700 flex items-start gap-4 hover:shadow-xl transition">
            <div class="w-12 h-12 bg-[#E99E15]/10 text-[#E99E15] rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">
              {{ idx + 1 }}
            </div>
            <div>
              <h3 class="font-bold text-lg text-gray-900 dark:text-white mb-2">{{ item.title[locale] }}</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{{ item.desc[locale] }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Product Portfolio Overview -->
      <section data-aos="fade-up">
        <div class="text-center mb-12">
          <div class="inline-block bg-primary/10 text-primary font-extrabold px-4 py-1.5 rounded-lg text-sm mb-3">
            {{ locale === 'ar' ? 'محفظة المنتجات' : 'Product Portfolio' }}
          </div>
          <h2 class="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
            {{ locale === 'ar' ? 'حلولنا ومجالات تخصصنا' : 'Our Solutions & Specialization' }}
          </h2>
          <div class="h-1 w-20 bg-[#E99E15] mx-auto mt-4 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(p, idx) in portfolioList" :key="idx" class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:border-[#E99E15] transition duration-300 flex flex-col justify-between">
            <div>
              <div class="text-4xl mb-4">{{ p.icon }}</div>
              <h3 class="font-bold text-xl text-gray-900 dark:text-white mb-3">{{ p.title[locale] }}</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">{{ p.desc[locale] }}</p>
            </div>
            <NuxtLink :to="localePath(p.link)" class="inline-flex items-center gap-2 text-[#E99E15] font-bold text-sm hover:underline">
              <span>{{ locale === 'ar' ? 'تصفح منتجات القسم' : 'Explore Category' }}</span>
              <span class="rtl:rotate-180">&rarr;</span>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Target Sectors -->
      <section class="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700" data-aos="fade-up">
        <div class="text-center mb-10">
          <h2 class="text-3xl font-black text-gray-900 dark:text-white mb-3">
            {{ locale === 'ar' ? 'قطاعاتنا المستهدفة' : 'Target Sectors' }}
          </h2>
          <p class="text-gray-500 dark:text-gray-400 text-base max-w-2xl mx-auto">
            {{ locale === 'ar' ? 'نقدم خدماتنا وحلولنا المتكاملة لمختلف القطاعات الحيوية والرئيسية في قطر' : 'Providing integrated solutions across key vital sectors in Qatar' }}
          </p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
          <div v-for="(sec, idx) in targetSectors" :key="idx" class="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-[#E99E15] dark:hover:border-[#E99E15] transition shadow-sm">
            <div class="text-4xl mb-3">{{ sec.icon }}</div>
            <h4 class="font-bold text-gray-900 dark:text-white text-sm md:text-base">{{ sec.title[locale] }}</h4>
          </div>
        </div>
      </section>

      <!-- Interactive Tabs: Principles, Goals & Philosophy -->
      <section class="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700" data-aos="fade-up">
        <div class="flex flex-wrap justify-center gap-3 mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
          <button 
            @click="activeTab = 'principles'"
            :class="activeTab === 'principles' ? 'bg-[#E99E15] text-white shadow-lg shadow-[#E99E15]/30' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200'"
            class="px-6 py-3 rounded-xl font-bold transition text-base md:text-lg"
          >
            {{ locale === 'ar' ? '🧭 مبادئنا' : '🧭 Principles' }}
          </button>
          <button 
            @click="activeTab = 'goals'"
            :class="activeTab === 'goals' ? 'bg-[#E99E15] text-white shadow-lg shadow-[#E99E15]/30' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200'"
            class="px-6 py-3 rounded-xl font-bold transition text-base md:text-lg"
          >
            {{ locale === 'ar' ? '🎯 أهدافنا' : '🎯 Goals' }}
          </button>
          <button 
            @click="activeTab = 'philosophy'"
            :class="activeTab === 'philosophy' ? 'bg-[#E99E15] text-white shadow-lg shadow-[#E99E15]/30' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200'"
            class="px-6 py-3 rounded-xl font-bold transition text-base md:text-lg"
          >
            {{ locale === 'ar' ? '💡 فلسفتنا في العمل' : '💡 Work Philosophy' }}
          </button>
        </div>

        <!-- Principles Tab -->
        <div v-if="activeTab === 'principles'" class="space-y-4 max-w-4xl mx-auto">
          <div v-for="(p, i) in principlesList" :key="i" class="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
            <span class="text-[#E99E15] font-bold text-xl">•</span>
            <p class="text-gray-800 dark:text-gray-200 font-semibold text-base md:text-lg">{{ p[locale] }}</p>
          </div>
        </div>

        <!-- Goals Tab -->
        <div v-if="activeTab === 'goals'" class="space-y-4 max-w-4xl mx-auto">
          <div v-for="(g, i) in goalsList" :key="i" class="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
            <span class="text-[#E99E15] font-bold text-xl">🎯</span>
            <p class="text-gray-800 dark:text-gray-200 font-semibold text-base md:text-lg">{{ g[locale] }}</p>
          </div>
        </div>

        <!-- Philosophy Tab -->
        <div v-if="activeTab === 'philosophy'" class="max-w-3xl mx-auto text-center space-y-6 py-4">
          <div class="w-16 h-16 bg-[#E99E15]/10 text-[#E99E15] rounded-full flex items-center justify-center text-3xl mx-auto font-bold">💡</div>
          <p class="text-xl md:text-2xl text-gray-800 dark:text-gray-200 font-bold leading-relaxed italic">
            {{ locale === 'ar'
              ? 'نؤمن بأن النجاح الحقيقي يُبنى على الجودة قبل الكمية، وعلى شراكة صادقة مع العميل تتجاوز حدود البيع لتصل إلى دعم فني مستمر وموثوقية طويلة الأمد — من فهم الاحتياج، إلى اختيار الحل الأمثل، إلى التركيب والصيانة الدورية.'
              : 'We believe true success is built on quality over quantity, and on an authentic partnership with our clients that goes beyond sales to deliver continuous technical support and long-term reliability — from understanding needs, to selecting optimal solutions, to installation and routine maintenance.'
            }}
          </p>
        </div>
      </section>

      <!-- Contact Banner -->
      <section class="bg-[#121c2d] text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl" data-aos="fade-up">
        <h2 class="text-3xl md:text-4xl font-black mb-4">
          {{ locale === 'ar' ? 'جاهزون لشراكة عمل مستدامة وموثوقة' : 'Ready for a Sustainable & Reliable Partnership?' }}
        </h2>
        <p class="text-gray-300 max-w-2xl mx-auto mb-8 text-base md:text-lg">
          {{ locale === 'ar' ? 'تواصل معنا في الدوحة، دولة قطر للحصول على الاستشارات الفنية وعروض الأسعار' : 'Contact us in Doha, Qatar for technical consultation & customized quotes' }}
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink :to="localePath('/contact')" class="bg-[#E99E15] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition shadow-lg">
            {{ locale === 'ar' ? 'تواصل معنا الآن' : 'Contact Us Now' }}
          </NuxtLink>
          <NuxtLink :to="localePath('/products')" class="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition">
            {{ locale === 'ar' ? 'استكشف منتجاتنا' : 'Explore Our Products' }}
          </NuxtLink>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const localePath = useLocalePath()
const activeTab = ref('principles')

// Values List
const valuesList = [
  {
    icon: '✔️',
    title: { ar: 'الجودة', en: 'Quality' },
    desc: { ar: 'اختيار وتوريد حلول ومعدات تلبي المتطلبات الفنية ومعايير الجودة ذات الصلة.', en: 'Selecting and supplying solutions and equipment that meet relevant technical and quality requirements.' }
  },
  {
    icon: '🤝',
    title: { ar: 'النزاهة', en: 'Integrity' },
    desc: { ar: 'التعامل بشفافية ووضوح في المعلومات الفنية والتجارية.', en: 'Maintaining transparency and clarity in technical and commercial communication.' }
  },
  {
    icon: '🛡️',
    title: { ar: 'السلامة', en: 'Safety' },
    desc: { ar: 'مراعاة متطلبات السلامة في الحلول والمعدات والخدمات التي نقدمها.', en: 'Considering safety requirements across the solutions, equipment, and services we provide.' }
  },
  {
    icon: '⏳',
    title: { ar: 'الالتزام', en: 'Commitment' },
    desc: { ar: 'احترام نطاق العمل والمتطلبات التعاقدية وجداول التوريد المتفق عليها.', en: 'Respecting the agreed scope of work, contractual requirements, and delivery schedules.' }
  },
  {
    icon: '🌱',
    title: { ar: 'الشراكة طويلة الأمد', en: 'Long-Term Partnership' },
    desc: { ar: 'بناء علاقات مستدامة مع العملاء والمصنّعين والشركاء على أساس الثقة والقيمة المتبادلة.', en: 'Building lasting relationships with customers, manufacturers, and partners based on trust and mutual value.' }
  }
];

// Advantage List (ما يميزنا)
const advantageList = [
  {
    title: { ar: 'حضور محلي', en: 'Local Presence' },
    desc: { ar: 'فهم مباشر لمتطلبات السوق القطري واحتياجات المنشآت والمشاريع المختلفة.', en: 'A direct understanding of Qatar’s market, facilities, and project requirements.' }
  },
  {
    title: { ar: 'وكالة حصرية وشراكة صناعية', en: 'Exclusive Agency and Industrial Partnership' },
    desc: { ar: 'وكالة حصرية وشراكة استراتيجية مع SAB TECH ضمن نطاق المنتجات والقطاعات المعتمدة.', en: 'An exclusive agency and strategic partnership with SAB TECH within the approved product and sector scope.' }
  },
  {
    title: { ar: 'حلول متكاملة', en: 'Integrated Solutions' },
    desc: { ar: 'محفظة مترابطة من الحلول الصناعية واللوجستية والأمنية لتلبية احتياجات المنشآت المختلفة.', en: 'A connected portfolio of industrial, logistics, and security solutions for different facility requirements.' }
  },
  {
    title: { ar: 'دعم فني وخدمات ما بعد البيع', en: 'Technical and After-Sales Support' },
    desc: { ar: 'الدعم الفني وتوفير قطع الغيار وخدمات ما بعد البيع وفق طبيعة المنتج ونطاق المشروع.', en: 'Technical support, spare parts, and after-sales services according to the product and project scope.' }
  },
  {
    title: { ar: 'منهجية عمل واضحة', en: 'A Structured Delivery Approach' },
    desc: { ar: 'نبدأ بدراسة الاحتياج واختيار الحل، ونواصل حتى التوريد والتركيب والتشغيل والتسليم والدعم.', en: 'We begin with requirement assessment and solution selection and continue through supply, installation, commissioning, handover, and ongoing support.' }
  }
];

// Portfolio List
const portfolioList = [
  {
    icon: '🏗️',
    title: { ar: 'أنظمة ومعدات التحميل', en: 'Docking & Loading Systems' },
    desc: { ar: 'معدات الهيدروليك للتحميل (Dock Levelers، الروافع المقصية والعمودية).', en: 'Hydraulic loading bay equipment, dock levelers, scissor and vertical lifts.' },
    link: '/products/category/docking-systems'
  },
  {
    icon: '🚪',
    title: { ar: 'الأبواب الصناعية', en: 'Industrial Doors' },
    desc: { ar: 'أبواب الشرائح العازلة، والأبواب الفائقة السرعة للمصانع والمستودعات.', en: 'Insulated sectional doors and high-speed roll up doors for facilities.' },
    link: '/products/category/industrial-doors'
  },
  {
    icon: '♻️',
    title: { ar: 'معدات إعادة التدوير', en: 'Waste & Recycling Equipment' },
    desc: { ar: 'المكابس، ضواغط النفايات الهيدروليكية، والحاويات الذكية لتخفيض الحجم.', en: 'Baling presses, hydraulic compactors, and smart waste management systems.' },
    link: '/products/category/waste-management'
  },
  {
    icon: '🛡️',
    title: { ar: 'أنظمة حماية المحيط', en: 'Perimeter Security Systems' },
    desc: { ar: 'المصدات الأمنية ومفجرات الإطارات المطابقة لمواصفات PAS 68 وASTM.', en: 'Security road blockers, bollards & tyre killers compliant with PAS 68 & ASTM.' },
    link: '/products/category/perimeter-protection'
  },
  {
    icon: '⚙️',
    title: { ar: 'الخدمات والحلول الهيدروليكية', en: 'Hydraulic Services & Solutions' },
    desc: { ar: 'قطع غيار، استشارات فنية، وتصميم وإصلاح الأنظمة الهيدروليكية.', en: 'Spare parts, technical consulting, and design/repair of hydraulic power units.' },
    link: '/products'
  }
];

// Target Sectors
const targetSectors = [
  { icon: '🏗️', title: { ar: 'المقاولات والبنية التحتية', en: 'Construction & Infrastructure' } },
  { icon: '🏭', title: { ar: 'المصانع والمنشآت الصناعية', en: 'Factories & Industrial Facilities' } },
  { icon: '📦', title: { ar: 'المستودعات والخدمات اللوجستية', en: 'Warehouses & Logistics' } },
  { icon: '🚢', title: { ar: 'الموانئ والمرافق والنقل', en: 'Ports, Utilities & Transport' } },
  { icon: '🏛️', title: { ar: 'الجهات الحكومية والمنشآت الحساسة', en: 'Government & Critical Facilities' } },
  { icon: '🏢', title: { ar: 'المراكز والفنادق والتجارية', en: 'Malls, Hotels & Commercial' } }
];

// Principles List
const principlesList = [
  { ar: 'وضع رضا العميل في صميم كل قرار تجاري وهندسي.', en: 'Putting customer satisfaction at the heart of every commercial & engineering decision.' },
  { ar: 'الالتزام الكامل بالمواعيد التعاقدية وجداول التوريد الدقيقة.', en: 'Strict commitment to contractual deadlines and precise delivery schedules.' },
  { ar: 'التعامل بمصداقية كاملة في المعلومات الفنية والتجارية.', en: 'Utmost integrity and accuracy in technical & commercial communications.' },
  { ar: 'التطوير المستمر لكفاءات وفريق العمل الهندسي والفني.', en: 'Continuous development and training of technical & engineering staff.' },
  { ar: 'دعم مسيرة التنمية الصناعية في قطر بما يتوافق مع رؤية قطر الوطنية 2030.', en: 'Supporting Qatar’s industrial development in alignment with Qatar National Vision 2030.' }
];

// Goals List
const goalsList = [
  { ar: 'ترسيخ حضورنا كوكيل موثوق وموزّع رائد للمعدات الصناعية الثقيلة في دولة قطر.', en: 'Establishing our presence as the trusted leading agent & distributor of heavy industrial machinery in Qatar.' },
  { ar: 'تقديم محفظة متكاملة من الحلول الصناعية واللوجستية والأمنية عالية الجودة.', en: 'Delivering a comprehensive portfolio of high-quality industrial, logistics, and security solutions.' },
  { ar: 'توسيع قاعدة الشراكات الاستراتيجية إقليمياً وعالمياً.', en: 'Expanding strategic partnerships regionally and internationally.' },
  { ar: 'بناء دعم فني متكامل وخدمات ما بعد بيع عالية الكفاءة.', en: 'Building robust technical support and highly efficient after-sales services.' },
  { ar: 'المساهمة الفاعلة في دعم قطاعي البنية التحتية والصناعة في قطر.', en: 'Actively contributing to the growth of Qatar’s infrastructure & industrial sectors.' }
];
</script>
