<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Testimonial {
  quote: string
  author: string
}

const testimonials: Testimonial[] = [
  {
    quote: '"La capacidad de Korus para facilitar la revisión de grandes volúmenes de información es fundamental. En procesos como las debidas diligencias, en los cuales tenemos una carga muy alta en la revisión documental y en los cuales tenemos que ser muy precisos en la identificación de riesgos, la herramienta no solo agiliza el análisis, sino que minimiza los errores humanos, fortaleciendo la calidad y fiabilidad de nuestro trabajo final"',
    author: '— Alejandro R., Senior Associate'
  },
  {
    quote: '"Korus ha transformado completamente nuestro flujo de trabajo. Lo que antes nos tomaba semanas ahora lo completamos en días. La precisión y velocidad con la que procesa documentos legales es impresionante"',
    author: '— María S., Legal Operations Manager'
  },
  {
    quote: '"La automatización de procesos repetitivos nos ha permitido enfocarnos en el trabajo estratégico. Korus se ha convertido en una herramienta indispensable para nuestro equipo legal"',
    author: '— Carlos M., General Counsel'
  },
  {
    quote: '"La integración con nuestros sistemas existentes fue perfecta. El equipo de Korus nos acompañó en cada paso del proceso de implementación, y los resultados han superado nuestras expectativas"',
    author: '— Ana L., Legal Tech Director'
  }
]

const currentSlide = ref(0)
const totalSlides = testimonials.length

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible')
        } else {
          entry.target.classList.remove('fade-in-visible')
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px'
    }
  )

  const fadeElements = document.querySelectorAll('.fade-in-scroll')
  fadeElements.forEach((el) => observer.observe(el))
})
</script>

<template>
  <div class="min-h-screen bg-white overflow-x-hidden">
    <!-- Navigation -->
    <nav class="bg-korus-beige px-12 md:px-20 sticky top-0 z-50 h-[65px] flex items-center">
      <div class="max-w-[1920px] w-full mx-auto flex justify-between items-center">
        <img
          src="/logo/logo_korus_text.svg"
          alt="Korus logo"
          class="h-[25px]"
        />

        <div class="hidden md:flex items-center gap-8 lg:gap-10">
          <a href="#nosotros" class="text-korus-navy font-roboto-mono text-xs font-medium uppercase tracking-tight hover:opacity-70 transition-opacity">
            Nosotros
          </a>
          <a href="#clientes" class="text-korus-navy font-roboto-mono text-xs font-medium uppercase tracking-tight hover:opacity-70 transition-opacity">
            Clientes
          </a>
          <a href="#seguridad" class="text-korus-navy font-roboto-mono text-xs font-medium uppercase tracking-tight hover:opacity-70 transition-opacity">
            Seguridad
          </a>
          <a href="#demo" class="text-korus-navy font-roboto-mono text-xs font-medium uppercase tracking-tight hover:opacity-70 transition-opacity">
            Solicitar Demo
          </a>
        </div>

        <button class="border border-korus-navy px-4 py-1.5 text-korus-navy font-inter text-xs hover:bg-korus-navy hover:text-korus-beige transition-colors">
          Log In
        </button>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="bg-korus-beige relative overflow-hidden">
      <div class="w-full px-12 md:px-[50px] pt-4 md:pt-6 pb-16 md:pb-24 lg:pb-32 grid lg:grid-cols-2 gap-8 lg:gap-12 items-start min-h-[600px] lg:min-h-[800px]">
        <div class="flex flex-col max-w-lg">
          <h1 class="font-noto-serif text-4xl md:text-5xl lg:text-6xl font-light text-korus-navy leading-tight tracking-tight mt-16 md:mt-40">
            Confidencialidad y <span class="italic">seguridad</span> integradas.
          </h1>

          <p class="font-inter text-xs md:text-sm text-korus-navy leading-relaxed mt-40 md:mt-48 mb-8 fade-in-scroll">
            Korus es una plataforma de AI para equipos legales que trabaja sobre los documentos y flujos del equipo para disminuir tareas repetitivas
          </p>

          <button class="bg-korus-navy text-korus-beige px-6 h-[37px] text-lg font-inter self-start hover:opacity-90 transition-opacity flex items-center justify-center fade-in-scroll">
            Conoce más →
          </button>
        </div>

        <div class="relative w-full h-[400px] md:h-[500px] lg:h-[669px]">
          <img
            src="/image_header.svg"
            alt="Professional workspace"
            class="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>

    <!-- Welcome Section -->
    <section class="bg-korus-cyan relative overflow-hidden">
      <div class="max-w-6xl mx-auto px-8 md:px-12 py-16 md:py-24 lg:py-32 relative z-10">
        <h2 class="font-noto-serif text-2xl md:text-3xl lg:text-4xl font-light italic text-korus-navy leading-tight mb-12 md:mb-16 tracking-tight fade-in-scroll">
          Optimizamos procesos legales con inteligencia artificial para que el trabajo deje de ser repetitivo y vuelva a ser estratégico
        </h2>

        <div class="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
          <!-- Feature 1 -->
          <div class="flex flex-col gap-6">
            <div class="h-24 bg-korus-pink-light border-b border-korus-beige"></div>
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.05305 3.4998C5.68305 4.8798 5.68305 7.0998 7.05305 8.4698L15.543 16.9498C16.123 17.5398 16.123 18.4998 15.543 19.0698C14.953 19.6598 14.003 19.6598 13.413 19.0698L9.17305 14.8298L10.233 13.7698L6.70305 10.2298L6.34305 10.5898L4.93305 9.1698C4.54305 8.7798 3.91305 8.7798 3.50305 9.1698L2.10305 10.5898C1.71305 10.9998 1.71305 11.6098 2.10305 11.9998L3.50305 13.4098L3.16305 13.7698L6.70305 17.2998L7.76305 16.2398L12.003 20.4998C13.373 21.8498 15.583 21.8498 16.953 20.4998C18.323 19.1198 18.323 16.8998 16.953 15.5398L8.46305 7.0498C7.88305 6.4598 7.88305 5.4998 8.46305 4.9298C9.05305 4.3398 10.003 4.3398 10.593 4.9298L14.833 9.1698L13.773 10.2298L17.303 13.7698L17.663 13.4098L19.073 14.8298C19.463 15.2198 20.103 15.2198 20.503 14.8298L21.903 13.4098C22.293 12.9998 22.293 12.3898 21.903 11.9998L20.503 10.5898L20.843 10.2298L17.303 6.6998L16.243 7.7598L12.003 3.4998C10.633 2.1498 8.42305 2.1498 7.05305 3.4998ZM2.81305 11.2898L4.22305 9.8798L5.64305 11.2898L4.22305 12.7098M18.363 12.7098L19.783 11.2898L21.193 12.7098L19.783 14.1198L18.363 12.7098Z" fill="#161A79"/>
            </svg>
            <div>
              <h3 class="font-crimson text-lg text-korus-navy mb-5">Amplify Insights</h3>
              <p class="font-inter text-sm text-korus-navy leading-relaxed">
                Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.
              </p>
            </div>
          </div>

          <!-- Feature 2 -->
          <div class="flex flex-col gap-6">
            <div class="h-24 bg-korus-pink-mid"></div>
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.9 17.39C17.64 16.59 16.89 16 16 16H15V13C15 12.7348 14.8946 12.4804 14.7071 12.2929C14.5196 12.1054 14.2652 12 14 12H8V10H10C10.2652 10 10.5196 9.89464 10.7071 9.70711C10.8946 9.51957 11 9.26522 11 9V7H13C13.5304 7 14.0391 6.78929 14.4142 6.41421C14.7893 6.03914 15 5.53043 15 5V4.59C17.93 5.77 20 8.64 20 12C20 14.08 19.2 15.97 17.9 17.39ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.78 4.21 10.21L9 15V16C9 16.5304 9.21071 17.0391 9.58579 17.4142C9.96086 17.7893 10.4696 18 11 18M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z" fill="#161A79"/>
            </svg>
            <div>
              <h3 class="font-crimson text-lg text-korus-navy mb-5">Control Your Global Presence</h3>
              <p class="font-inter text-sm text-korus-navy leading-relaxed">
                Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.
              </p>
            </div>
          </div>

          <!-- Feature 3 -->
          <div class="flex flex-col gap-6">
            <div class="h-24 bg-korus-pink-dark"></div>
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5C10.0609 5 11.0783 5.42143 11.8284 6.17157C12.5786 6.92172 13 7.93913 13 9C13 10.0609 12.5786 11.0783 11.8284 11.8284C11.0783 12.5786 10.0609 13 9 13C7.93913 13 6.92172 12.5786 6.17157 11.8284C5.42143 11.0783 5 10.0609 5 9C5 7.93913 5.42143 6.92172 6.17157 6.17157C6.92172 5.42143 7.93913 5 9 5ZM9 15C11.67 15 17 16.34 17 19V21H1V19C1 16.34 6.33 15 9 15ZM16.76 5.36C18.78 7.56 18.78 10.61 16.76 12.63L15.08 10.94C15.92 9.76 15.92 8.23 15.08 7.05L16.76 5.36ZM20.07 2C24 6.05 23.97 12.11 20.07 16L18.44 14.37C21.21 11.19 21.21 6.65 18.44 3.63L20.07 2Z" fill="#161A79"/>
            </svg>
            <div>
              <h3 class="font-crimson text-lg text-korus-navy mb-5">Remove Language Barriers</h3>
              <p class="font-inter text-sm text-korus-navy leading-relaxed">
                Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.
              </p>
            </div>
          </div>
        </div>

        <button class="bg-korus-navy text-korus-beige px-6 py-4 text-lg font-inter hover:opacity-90 transition-opacity relative z-20">
          Solicitar Demo
        </button>
      </div>

      <img
        src="/yellow-lines-welcome.svg"
        alt="Decorative pattern"
        class="w-full max-w-3xl absolute bottom-0 left-0 z-0"
      />
    </section>

    <!-- Image Breaker Section -->
    <section class="w-full">
      <img
        src="/photography/break_image.png"
        alt="Team collaboration"
        class="w-full h-auto object-cover max-h-[625px]"
      />
    </section>

    <!-- Offering Section -->
    <section id="nosotros" class="bg-korus-cyan py-16 md:py-24 lg:py-32">
      <div class="w-full px-8 md:px-[50px]">
        <div class="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div class="lg:col-span-3">
            <h2 class="font-noto-serif text-2xl md:text-3xl font-light text-korus-navy tracking-tight">
              Casos de uso
            </h2>
          </div>

          <div class="lg:col-span-9 space-y-8">
            <div class="space-y-2">
              <h3 class="font-noto-serif text-4xl md:text-5xl lg:text-7xl font-light text-korus-navy leading-tight tracking-tight fade-in-scroll">
                Análisis de documentos
              </h3>
              <h3 class="font-noto-serif text-4xl md:text-5xl lg:text-7xl font-light text-korus-navy leading-tight tracking-tight fade-in-scroll">
                Redacción de contratos
              </h3>
              <h3 class="font-noto-serif text-4xl md:text-5xl lg:text-7xl font-light text-korus-navy leading-tight tracking-tight fade-in-scroll">
                Due Diligence
              </h3>
              <h3 class="font-noto-serif text-4xl md:text-5xl lg:text-7xl font-light text-korus-navy leading-tight tracking-tight fade-in-scroll">
                Análisis de audios
              </h3>
              <h3 class="font-noto-serif text-4xl md:text-5xl lg:text-7xl font-light text-korus-navy leading-tight tracking-tight fade-in-scroll">
                Automatización de procesos
              </h3>
              <h3 class="font-noto-serif text-4xl md:text-5xl lg:text-7xl font-light text-korus-navy leading-tight tracking-tight fade-in-scroll">
                Redacción de textos
              </h3>
              <h3 class="font-noto-serif text-4xl md:text-5xl lg:text-7xl font-light text-korus-navy leading-tight tracking-tight fade-in-scroll">
                Extracción de información
              </h3>
              <h3 class="font-noto-serif text-4xl md:text-5xl lg:text-7xl font-light text-korus-navy leading-tight tracking-tight text-korus-sun fade-in-scroll">
                +Más
              </h3>
            </div>

            <button class="bg-korus-beige text-korus-navy px-6 py-4 text-lg font-inter rounded-lg hover:opacity-90 transition-opacity mt-12">
              Services
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Clients Section -->
    <section id="clientes" class="bg-white py-16 md:py-24 lg:py-32">
      <div class="max-w-4xl mx-auto px-8 md:px-12">
        <div class="text-center mb-14">
          <h2 class="font-noto-serif text-2xl md:text-3xl font-light text-korus-navy tracking-tight mb-8">
            Las experiencias de nuestros usuarios
          </h2>
          <p class="font-inter text-lg text-korus-navy max-w-md mx-auto">
            La mejor prueba de nuestro trabajo son los resultados que generamos para nuestros clientes. Esto es lo que dicen
          </p>
        </div>
        
        <div class="bg-gray-100 p-8 md:p-12 lg:p-16 rounded-sm min-h-[445px] flex flex-col justify-center gap-20">
          <div class="text-center">
            <transition name="testimonial-fade" mode="out-in">
              <div :key="currentSlide">
                <p class="font-noto-serif text-xl md:text-2xl lg:text-3xl font-light text-korus-navy italic leading-tight mb-8 tracking-tight">
                  {{ testimonials[currentSlide].quote }}
                </p>
                <p class="font-noto-serif text-xl md:text-2xl lg:text-3xl font-light text-korus-navy tracking-tight">
                  {{ testimonials[currentSlide].author }}
                </p>
              </div>
            </transition>
          </div>
          
          <div class="flex justify-center items-center gap-5">
            <button @click="prevSlide" class="hover:opacity-70 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8342 2.5L2.33423 12M2.33423 12L11.8342 21.5M2.33423 12H21.0548" stroke="#161A79" stroke-width="2"/>
              </svg>
            </button>
            
            <div class="flex items-center gap-2.5">
              <div 
                v-for="i in totalSlides" 
                :key="i"
                class="w-2.5 h-2.5 rounded-full transition-opacity"
                :class="currentSlide === i - 1 ? 'bg-korus-navy' : 'bg-black opacity-25'"
              ></div>
            </div>
            
            <button @click="nextSlide" class="hover:opacity-70 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.666 2.5L21.166 12M21.166 12L11.666 21.5M21.166 12H2.44543" stroke="#161A79" stroke-width="2"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div class="text-center mt-14">
          <p class="font-inter text-lg text-korus-navy max-w-md mx-auto mb-8">
            Automatiza tus procesos legales y libera tiempo para lo que realmente importa. Agenda una demo hoy
          </p>
          <button class="bg-korus-navy text-korus-beige px-6 py-4 text-lg font-inter hover:opacity-90 transition-opacity">
            Solicita Demo
          </button>
        </div>
      </div>
    </section>

    <!-- Security Section -->
    <section id="seguridad" class="bg-korus-cyan py-16 md:py-24 lg:py-32">
      <div class="w-full px-[150px]">
        <div class="grid md:grid-cols-2 gap-12 mb-24">
          <h2 class="font-noto-serif text-4xl md:text-5xl lg:text-6xl font-light text-korus-navy leading-tight tracking-tight">
            Tus datos siempre están protegidos
          </h2>
          <p class="font-inter text-lg text-korus-navy leading-relaxed">
            En Korus, la seguridad es fundamental. Nuestra plataforma está diseñada con protecciones sólidas para manejar la información legal más sensible
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-5 mb-16">
          <div class="border-l border-korus-navy pl-8 md:pl-12 py-5 space-y-7">
            <img
              src="/icons/Lock.svg"
              alt="Lock icon"
              class="w-7 h-7"
            />
            <h3 class="font-inter text-2xl md:text-3xl text-korus-navy tracking-tight min-h-[72px]">
              Infraestructura Segura
            </h3>
            <p class="font-inter text-sm text-korus-navy tracking-tight">
              Simplicity & Control
            </p>
            <p class="font-inter text-base text-korus-navy leading-tight tracking-tight">
              Toda la información ingresada está bajo el mismo estándar de seguridad bancaria
            </p>
          </div>

          <div class="border-l border-korus-navy pl-8 md:pl-12 py-5 space-y-7">
            <img
              src="/icons/Person.svg"
              alt="Privacy icon"
              class="w-7 h-7"
            />
            <h3 class="font-inter text-2xl md:text-3xl text-korus-navy tracking-tight min-h-[72px]">
              Privacidad y control de datos
            </h3>
            <p class="font-inter text-sm text-korus-navy tracking-tight">
              Stability & Security
            </p>
            <p class="font-inter text-base text-korus-navy leading-tight tracking-tight">
              No entrenamos modelos de IA con información del cliente, ésta permanece privada en todo momento
            </p>
          </div>

          <div class="border-l border-korus-navy pl-8 md:pl-12 py-5 space-y-7">
            <img
              src="/icons/Check.svg"
              alt="Compliance icon"
              class="w-7 h-7"
            />
            <h3 class="font-inter text-2xl md:text-3xl text-korus-navy tracking-tight min-h-[72px]">
              Compromiso con cumplimiento
            </h3>
            <p class="font-inter text-sm text-korus-navy tracking-tight">
              Stability & Security
            </p>
            <p class="font-inter text-base text-korus-navy leading-tight tracking-tight">
              Cumplimos al máximo normativas locales e internacionales de protección de datos
            </p>
          </div>
        </div>

        <button id="demo" class="bg-korus-navy text-korus-beige px-6 py-4 text-lg font-inter hover:opacity-90 transition-opacity">
          Solicita Demo
        </button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-korus-beige px-8 md:px-12 lg:px-24 py-16 space-y-16">
      <div class="max-w-7xl mx-auto">
        <img 
          src="/logo/logo_korus_text.svg"
          alt="Korus logo" 
          class="h-8 mb-16"
        />
        
        <p class="font-inter text-lg text-korus-navy mb-16 max-w-4xl">
          Transformando operaciones legales para empresas modernas con automatización de IA.
        </p>
        
        <div class="flex flex-wrap gap-12 mb-16">
          <div>
            <p class="font-inter text-sm text-korus-navy">
              info@korusai.co
            </p>
          </div>
          
          <div class="space-y-1">
            <a href="es/politica-privacidad" class="font-inter text-sm text-korus-navy underline block hover:opacity-70">
              Política de Privacidad
            </a>
            <a href="es/terminos-y-condiciones" class="font-inter text-sm text-korus-navy underline block hover:opacity-70">
              Términos y Condiciones
            </a>
            <a href="#" class="font-inter text-sm text-korus-navy underline block hover:opacity-70">
              Política de Cookies
            </a>
          </div>
        </div>
        
        <div class="border-t border-korus-navy pt-5 flex flex-wrap justify-between items-center gap-8">
          <p class="font-inter text-sm text-korus-navy">
            Korus S.A.S © 2025 All Rights Reserved
          </p>
          
          <div class="flex items-center gap-6">
            <a href="https://www.linkedin.com/company/korusai/" target="_blank" rel="noopener noreferrer" class="hover:opacity-70 transition-opacity">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.6333 0H2.36667C1.05889 0 0 1.05889 0 2.36667V13.6333C0 14.9411 1.05889 16 2.36667 16H13.6333C14.9411 16 16 14.9411 16 13.6333V2.36667C16 1.05889 14.9411 0 13.6333 0ZM5.33333 13.6333H2.66667V5.33333H5.33333V13.6333ZM4 4.41111C3.15556 4.41111 2.47778 3.73333 2.47778 2.88889C2.47778 2.04444 3.15556 1.36667 4 1.36667C4.84444 1.36667 5.52222 2.04444 5.52222 2.88889C5.52222 3.73333 4.84444 4.41111 4 4.41111ZM13.6333 13.6333H10.9667V9.6C10.9667 8.57778 10.9444 7.26667 9.54444 7.26667C8.12222 7.26667 7.91111 8.37778 7.91111 9.52222V13.6333H5.24444V5.33333H7.8V6.53333H7.83333C8.2 5.83333 9.06667 5.1 10.3667 5.1C13.0667 5.1 13.6333 6.88889 13.6333 9.17778V13.6333Z" fill="#161A79"/>
              </svg>
            </a>
            <a href="#" class="hover:opacity-70 transition-opacity">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_95_1575)">
                  <path d="M7.4517 0.15625C9.45348 0.15625 9.70405 0.165462 10.4898 0.200468C11.2747 0.236395 11.8099 0.360758 12.2788 0.543158C12.7634 0.731084 13.1752 0.983495 13.5842 1.39343C13.9941 1.80245 14.2465 2.21331 14.4345 2.69879C14.6169 3.16768 14.7412 3.7029 14.7771 4.48777C14.8122 5.27356 14.8214 5.52413 14.8214 7.52592C14.8214 9.5277 14.8122 9.77827 14.7771 10.5641C14.7412 11.3489 14.6169 11.8842 14.4345 12.353C14.2493 12.8448 13.9592 13.2903 13.5842 13.6584C13.1742 14.0683 12.7643 14.3208 12.2788 14.5087C11.8099 14.6911 11.2747 14.8154 10.4898 14.8514C9.70405 14.8873 9.45348 14.8956 7.4517 14.8956C5.44991 14.8956 5.19934 14.8864 4.41355 14.8514C3.62868 14.8154 3.09346 14.6911 2.62457 14.5087C2.1328 14.3235 1.68732 14.0334 1.31921 13.6584C0.944214 13.2903 0.654041 12.8448 0.468939 12.353C0.28654 11.8842 0.162176 11.3489 0.126249 10.5641C0.0912432 9.77827 0.0820312 9.5277 0.0820312 7.52592C0.0820312 5.52413 0.0912432 5.27356 0.126249 4.48777C0.162176 3.7029 0.28654 3.16768 0.468939 2.69879C0.656865 2.21423 0.909276 1.80245 1.31921 1.39343C1.72823 0.983495 2.13909 0.731084 2.62457 0.543158C3.09346 0.360758 3.62868 0.236395 4.41355 0.200468C5.19934 0.165462 5.44991 0.15625 7.4517 0.15625ZM7.4517 1.48371C5.484 1.48371 5.25001 1.492 4.47343 1.52701C3.75489 1.56017 3.36522 1.67993 3.10544 1.78126C2.76091 1.91484 2.51586 2.07421 2.25793 2.33214C1.99999 2.59008 1.84062 2.83512 1.70704 3.17966C1.60571 3.43944 1.48595 3.82911 1.45279 4.54765C1.41778 5.32515 1.40949 5.55822 1.40949 7.52592C1.40949 9.49362 1.41778 9.7276 1.45279 10.5042C1.48595 11.2227 1.60571 11.6124 1.70704 11.8722C1.84062 12.2167 1.99999 12.4618 2.25793 12.7197C2.51586 12.9776 2.76091 13.137 3.10544 13.2706C3.36522 13.3719 3.75489 13.4917 4.47343 13.5248C5.25093 13.5598 5.484 13.5681 7.4517 13.5681C9.4194 13.5681 9.65339 13.5598 10.43 13.5248C11.1485 13.4917 11.5382 13.3719 11.798 13.2706C12.1425 13.137 12.3875 12.9776 12.6455 12.7197C12.9034 12.4618 13.0628 12.2167 13.1964 11.8722C13.2977 11.6124 13.4174 11.2227 13.4506 10.5042C13.4856 9.72668 13.4939 9.49362 13.4939 7.52592C13.4939 5.55822 13.4856 5.32423 13.4506 4.54765C13.4174 3.82911 13.2977 3.43944 13.1964 3.17966C13.0783 2.85955 12.8901 2.56995 12.6455 2.33214C12.4077 2.08749 12.1181 1.89925 11.798 1.78126C11.5382 1.67993 11.1485 1.56017 10.43 1.52701C9.65246 1.492 9.4194 1.48371 7.4517 1.48371ZM7.45354 9.91645C7.76777 9.91645 8.07893 9.85456 8.36924 9.73431C8.65955 9.61406 8.92334 9.4378 9.14553 9.21561C9.36773 8.99341 9.54398 8.72963 9.66424 8.43931C9.78449 8.149 9.84638 7.83785 9.84638 7.52361C9.84638 7.20938 9.78449 6.89823 9.66424 6.60791C9.54398 6.3176 9.36773 6.05382 9.14553 5.83162C8.92334 5.60943 8.65955 5.43317 8.36924 5.31292C8.07893 5.19267 7.76777 5.13077 7.45354 5.13077C6.81892 5.13077 6.21029 5.38288 5.76155 5.83162C5.3128 6.28037 5.0607 6.88899 5.0607 7.52361C5.0607 8.15823 5.3128 8.76686 5.76155 9.21561C6.21029 9.66435 6.81892 9.91645 7.45354 9.91645ZM7.45354 3.8374C7.93762 3.8374 8.41696 3.93275 8.86419 4.118C9.31143 4.30325 9.71779 4.57477 10.0601 4.91707C10.4024 5.25936 10.6739 5.66573 10.8592 6.11296C11.0444 6.56019 11.1398 7.03953 11.1398 7.52361C11.1398 8.0077 11.0444 8.48703 10.8592 8.93427C10.6739 9.3815 10.4024 9.78787 10.0601 10.1302C9.71779 10.4725 9.31143 10.744 8.86419 10.9292C8.41696 11.1145 7.93762 11.2098 7.45354 11.2098C6.4759 11.2098 5.53829 10.8215 4.84699 10.1302C4.15569 9.43886 3.76733 8.50126 3.76733 7.52361C3.76733 6.54597 4.15569 5.60837 4.84699 4.91707C5.53829 4.22577 6.4759 3.8374 7.45354 3.8374ZM12.0614 3.8374C12.0614 4.08172 11.9644 4.31603 11.7916 4.48879C11.6188 4.66155 11.3845 4.75861 11.1402 4.75861C10.8959 4.75861 10.6616 4.66155 10.4888 4.48879C10.3161 4.31603 10.219 4.08172 10.219 3.8374C10.219 3.59308 10.3161 3.35877 10.4888 3.18601C10.6616 3.01325 10.8959 2.91619 11.1402 2.91619C11.3845 2.91619 11.6188 3.01325 11.7916 3.18601C11.9644 3.35877 12.0614 3.59308 12.0614 3.8374Z" fill="#161A79"/>
                </g>
              </svg>
            </a>
            <a href="#" class="hover:opacity-70 transition-opacity">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9339 3.69697C12.8324 3.64452 12.7336 3.58701 12.6379 3.52467C12.3594 3.34061 12.1042 3.12374 11.8776 2.87871C11.3105 2.22994 11.0988 1.57176 11.0208 1.11094H11.0239C10.9587 0.728439 10.9857 0.480957 10.9898 0.480957H8.40717V10.4673C8.40717 10.6014 8.40717 10.7339 8.40153 10.8649C8.40153 10.8812 8.39996 10.8962 8.39902 10.9137C8.39902 10.9209 8.39902 10.9285 8.39746 10.936V10.9416C8.37023 11.2999 8.25537 11.6461 8.06298 11.9496C7.87059 12.2531 7.60656 12.5046 7.29412 12.6821C6.96849 12.8674 6.6002 12.9646 6.22556 12.9641C5.0223 12.9641 4.04709 11.9829 4.04709 10.7712C4.04709 9.55948 5.0223 8.57832 6.22556 8.57832C6.45334 8.57811 6.67971 8.61395 6.89627 8.68452L6.8994 6.05494C6.24197 5.97002 5.57407 6.02227 4.93783 6.20839C4.3016 6.39452 3.71085 6.71048 3.20284 7.13635C2.7577 7.52311 2.38348 7.98458 2.097 8.5C1.98798 8.68797 1.57666 9.44326 1.52685 10.6691C1.49552 11.3648 1.70447 12.0857 1.80409 12.3836V12.3899C1.86675 12.5653 2.10953 13.1639 2.50519 13.6686C2.82423 14.0734 3.20117 14.4291 3.62387 14.724V14.7178L3.63013 14.724C4.88039 15.5736 6.2666 15.5178 6.2666 15.5178C6.50657 15.5081 7.31041 15.5178 8.22328 15.0852C9.23576 14.6056 9.81218 13.891 9.81218 13.891C10.1804 13.4641 10.4732 12.9775 10.678 12.4522C10.9117 11.8379 10.9898 11.1011 10.9898 10.8066V5.5086C11.0211 5.5274 11.4384 5.80339 11.4384 5.80339C11.4384 5.80339 12.0395 6.18871 12.9774 6.43964C13.6503 6.6182 14.5569 6.65579 14.5569 6.65579V4.092C14.2393 4.12646 13.5943 4.02622 12.9339 3.69697Z" fill="#161A79"/>
              </svg>
            </a>
            <a href="#" class="hover:opacity-70 transition-opacity">
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_95_1579)">
                  <path d="M17.0119 1.88339C16.8159 1.18477 16.2384 0.634765 15.5048 0.448275C14.1776 0.109375 8.84796 0.109375 8.84796 0.109375C8.84796 0.109375 3.51928 0.109375 2.19113 0.448275C1.45748 0.634765 0.880021 1.18477 0.684065 1.88339C0.328125 3.14812 0.328125 5.78927 0.328125 5.78927C0.328125 5.78927 0.328125 8.43041 0.684065 9.69514C0.880021 10.3938 1.45748 10.9438 2.19113 11.1303C3.51833 11.4692 8.84796 11.4692 8.84796 11.4692C8.84796 11.4692 14.1766 11.4692 15.5048 11.1303C16.2384 10.9438 16.8159 10.3938 17.0119 9.69514C17.3678 8.43041 17.3678 5.78927 17.3678 5.78927C17.3678 5.78927 17.3678 3.14812 17.0119 1.88339ZM6.95466 2.94932L12.6346 5.78927L6.95466 8.62921V2.94932Z" fill="#161A79"/>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
