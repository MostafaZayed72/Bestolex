import { ref } from 'vue'

export const useUpload = () => {
  const isUploading = ref(false)
  const uploadProgress = ref(0)
  const error = ref<string | null>(null)

  const uploadFile = async (file: File) => {
    isUploading.value = true
    error.value = null
    uploadProgress.value = 10

    try {
      const formData = new FormData()
      formData.append('file', file)

      uploadProgress.value = 40
      const response = await $fetch<{ success: boolean; url: string; urls: string[] }>('/api/upload', {
        method: 'POST',
        body: formData
      })

      uploadProgress.value = 100

      if (response && response.url) {
        return {
          url: response.url,
          name: file.name
        }
      }

      throw new Error('لم يتم استلام رابط الصورة من السيرفر')
    } catch (err: any) {
      error.value = err.message || 'حدث خطأ أثناء رفع الصورة إلى Bunny CDN'
      console.error('Upload Error:', err)
      return null
    } finally {
      isUploading.value = false
    }
  }

  return {
    uploadFile,
    isUploading,
    uploadProgress,
    error
  }
}
