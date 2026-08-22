<template>
  <div class="rich-text-editor border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden bg-white dark:bg-gray-900 transition-all focus-within:ring-2 focus-within:ring-primary">
    <!-- Toolbar -->
    <div class="toolbar flex flex-wrap items-center gap-1.5 p-3 bg-gray-50 dark:bg-gray-800/80 border-b border-gray-200 dark:border-gray-700">
      
      <!-- Headings / Paragraph Selector -->
      <select 
        @change="formatBlock($event.target.value)" 
        class="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-600 outline-none cursor-pointer"
      >
        <option value="p">فقرة عادية (Paragraph)</option>
        <option value="h2">عنوان رئيسي (Heading 2)</option>
        <option value="h3">عنوان فرعي (Heading 3)</option>
        <option value="h4">عنوان صغير (Heading 4)</option>
        <option value="blockquote">اقتباس (Quote)</option>
      </select>

      <!-- Font Size -->
      <select 
        @change="exec('fontSize', $event.target.value)" 
        class="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold px-2 py-1.5 rounded-lg border border-gray-200 dark:border-gray-600 outline-none cursor-pointer"
        title="حجم الخط"
      >
        <option value="3">حجم متوسط (Normal)</option>
        <option value="1">صغير جداً (Tiny)</option>
        <option value="2">صغير (Small)</option>
        <option value="4">كبير (Large)</option>
        <option value="5">كبير جداً (X-Large)</option>
        <option value="6">ضخم (Huge)</option>
      </select>

      <div class="w-px h-5 bg-gray-300 dark:bg-gray-600 mx-1"></div>

      <!-- Basic Formatting Buttons -->
      <button 
        type="button" 
        @click.prevent="exec('bold')" 
        class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition" 
        title="عريض (Bold)"
      >
        <span class="font-black text-sm">B</span>
      </button>

      <button 
        type="button" 
        @click.prevent="exec('italic')" 
        class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition" 
        title="مائل (Italic)"
      >
        <span class="italic font-bold text-sm">I</span>
      </button>

      <button 
        type="button" 
        @click.prevent="exec('underline')" 
        class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition" 
        title="تسطير (Underline)"
      >
        <span class="underline font-bold text-sm">U</span>
      </button>

      <button 
        type="button" 
        @click.prevent="exec('strikeThrough')" 
        class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition" 
        title="يتوسطه خط (Strike)"
      >
        <span class="line-through font-bold text-sm">S</span>
      </button>

      <div class="w-px h-5 bg-gray-300 dark:bg-gray-600 mx-1"></div>

      <!-- Color Pickers -->
      <label class="flex items-center gap-1 p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer" title="لون النص (Text Color)">
        <span class="text-xs font-bold">🎨</span>
        <input 
          type="color" 
          @input="exec('foreColor', $event.target.value)" 
          class="w-5 h-5 rounded cursor-pointer border-0 bg-transparent"
        >
      </label>

      <label class="flex items-center gap-1 p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer" title="لون التحديد / التمييز (Highlight Color)">
        <span class="text-xs font-bold">🖍️</span>
        <input 
          type="color" 
          @input="exec('hiliteColor', $event.target.value)" 
          class="w-5 h-5 rounded cursor-pointer border-0 bg-transparent"
        >
      </label>

      <div class="w-px h-5 bg-gray-300 dark:bg-gray-600 mx-1"></div>

      <!-- Alignment Buttons -->
      <button 
        type="button" 
        @click.prevent="exec('justifyRight')" 
        class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition" 
        title="محاذاة لليمين (Align Right)"
      >
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M10 12h10M6 18h14" /></svg>
      </button>

      <button 
        type="button" 
        @click.prevent="exec('justifyCenter')" 
        class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition" 
        title="توسيط (Center)"
      >
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M7 12h10M5 18h14" /></svg>
      </button>

      <button 
        type="button" 
        @click.prevent="exec('justifyLeft')" 
        class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition" 
        title="محاذاة لليسار (Align Left)"
      >
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h10M4 18h14" /></svg>
      </button>

      <div class="w-px h-5 bg-gray-300 dark:bg-gray-600 mx-1"></div>

      <!-- Lists -->
      <button 
        type="button" 
        @click.prevent="exec('insertUnorderedList')" 
        class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition" 
        title="قائمة نقطية (Bullet List)"
      >
        <span class="text-sm font-bold">≡•</span>
      </button>

      <button 
        type="button" 
        @click.prevent="exec('insertOrderedList')" 
        class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition" 
        title="قائمة رقمية (Numbered List)"
      >
        <span class="text-sm font-bold">≡1</span>
      </button>

      <div class="w-px h-5 bg-gray-300 dark:bg-gray-600 mx-1"></div>

      <!-- Link & Image Insertions -->
      <button 
        type="button" 
        @click.prevent="insertLink" 
        class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition" 
        title="إدراج رابط (Insert Link)"
      >
        🔗
      </button>

      <button 
        type="button" 
        @click.prevent="insertImage" 
        class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition" 
        title="إدراج صورة بالرابط (Insert Image)"
      >
        🖼️
      </button>

      <button 
        type="button" 
        @click.prevent="exec('removeFormat')" 
        class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-red-500 transition text-xs font-bold" 
        title="مسح التنسيق (Clear Formatting)"
      >
        🧹
      </button>
    </div>

    <!-- Editable Area -->
    <div 
      ref="editorRef"
      contenteditable="true"
      @input="handleInput"
      @blur="handleInput"
      class="editor-content p-6 min-h-[320px] max-h-[600px] overflow-y-auto outline-none prose dark:prose-invert max-w-none text-gray-900 dark:text-gray-100 font-sans leading-relaxed"
      dir="auto"
    ></div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])
const editorRef = ref(null)

const handleInput = () => {
  if (editorRef.value) {
    emit('update:modelValue', editorRef.value.innerHTML)
  }
}

const exec = (command, value = null) => {
  document.execCommand(command, false, value)
  handleInput()
}

const formatBlock = (tag) => {
  document.execCommand('formatBlock', false, tag)
  handleInput()
}

const insertLink = () => {
  const url = prompt('أدخل رابط الموقع (URL):', 'https://')
  if (url && url !== 'https://') {
    document.execCommand('createLink', false, url)
    handleInput()
  }
}

const insertImage = () => {
  const url = prompt('أدخل رابط الصورة (Image URL):', 'https://')
  if (url && url !== 'https://') {
    document.execCommand('insertImage', false, url)
    handleInput()
  }
}

// Keep editor content in sync with external modelValue
watch(() => props.modelValue, (newVal) => {
  if (editorRef.value && editorRef.value.innerHTML !== newVal) {
    editorRef.value.innerHTML = newVal || ''
  }
})

onMounted(() => {
  if (editorRef.value) {
    editorRef.value.innerHTML = props.modelValue || ''
  }
})
</script>

<style>
.editor-content:empty:before {
  content: 'اكتب محتوى المقال هنا...';
  color: #9ca3af;
  pointer-events: none;
}

.editor-content h2 {
  font-size: 1.6rem;
  font-weight: 800;
  margin-top: 1.2rem;
  margin-bottom: 0.6rem;
  color: #E99E15;
}

.editor-content h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.editor-content p {
  margin-bottom: 0.8rem;
}

.editor-content ul {
  list-style-type: disc;
  margin-right: 1.5rem;
  margin-bottom: 1rem;
}

.editor-content ol {
  list-style-type: decimal;
  margin-right: 1.5rem;
  margin-bottom: 1rem;
}

.editor-content blockquote {
  border-right: 4px solid #E99E15;
  padding-right: 1rem;
  font-style: italic;
  margin: 1rem 0;
  background-color: rgba(233, 158, 21, 0.05);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}

.editor-content img {
  border-radius: 1rem;
  max-width: 100%;
  margin: 1rem auto;
}
</style>
