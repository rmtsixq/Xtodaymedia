'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { createArticle, createSlug } from '@/lib/firestore';
import { uploadImage } from '@/lib/firestore';
import { categories } from '@/lib/data';
import { ArrowLeft, Save, Eye, EyeOff, Upload, X } from 'lucide-react';

export default function NewArticlePage() {
  const { user, isAdmin, loading } = useAuth();
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    customCategory: '',
    tags: '',
    featuredImage: '',
    status: 'draft' as 'draft' | 'published',
    isEditorsPick: false
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  
  // Dosya yükleme state'leri
  const [uploadingImage, setUploadingImage] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');

  // Admin değilse yönlendir
  React.useEffect(() => {
    if (!loading && !isAdmin) {
      router.push('/');
    }
  }, [isAdmin, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAdmin) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      console.log('Makale oluşturma başladı...');
      console.log('User:', user);
      
      const articleData = {
        title: formData.title,
        slug: createSlug(formData.title),
        excerpt: formData.excerpt,
        content: formData.content,
        author: user?.displayName || 'Admin',
        category: formData.customCategory || formData.category,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        publishedAt: new Date().toISOString(),
        readTime: Math.ceil(formData.content.split(' ').length / 200), // ~200 words per minute
        featuredImage: formData.featuredImage || '/images/default-article.jpg',
        isEditorsPick: formData.isEditorsPick,
        status: formData.status,
        createdBy: user?.uid || ''
      };

      console.log('Article Data:', articleData);
      console.log('Firebase bağlantısı kontrol ediliyor...');

      const articleId = await createArticle(articleData);
      console.log('Makale başarıyla oluşturuldu! ID:', articleId);
      
      router.push('/admin');
    } catch (error: any) {
      console.error('Makale oluşturma hatası:', error);
      setError(error.message || 'Makale oluşturulurken bir hata oluştu');
    } finally {
      setSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Dosya seçme fonksiyonu
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Dosya tipini kontrol et
      if (!file.type.startsWith('image/')) {
        setError('Lütfen sadece resim dosyası seçin.');
        return;
      }
      
      // Dosya boyutunu kontrol et (5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('Dosya boyutu 5MB\'dan küçük olmalıdır.');
        return;
      }
      
      setSelectedFile(file);
      setError('');
      
      // Preview oluştur
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Dosya yükleme fonksiyonu
  const handleImageUpload = async () => {
    if (!selectedFile) return;
    
    try {
      setUploadingImage(true);
      setError('');
      
      const downloadURL = await uploadImage(selectedFile);
      
      setFormData(prev => ({
        ...prev,
        featuredImage: downloadURL
      }));
      
      setSelectedFile(null);
      setImagePreview('');
      
      console.log('Resim başarıyla yüklendi:', downloadURL);
    } catch (error) {
      console.error('Resim yükleme hatası:', error);
      setError('Resim yüklenirken bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setUploadingImage(false);
    }
  };

  // Dosya seçimini temizle
  const clearFileSelection = () => {
    setSelectedFile(null);
    setImagePreview('');
    setError('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.back()}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-3xl font-serif font-bold text-gray-900">Yeni Makale</h1>
                <p className="text-gray-600 mt-1">Yeni bir makale oluştur ve yayınla</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                <span>Önizleme</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
                  {error}
                </div>
              )}

              <div className="space-y-6">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Başlık *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Makale başlığını girin"
                  />
                </div>

                {/* Excerpt */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Özet *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.excerpt}
                    onChange={(e) => handleInputChange('excerpt', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Makale özetini girin"
                  />
                </div>

                {/* Content */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    İçerik *
                  </label>
                  <textarea
                    required
                    rows={15}
                    value={formData.content}
                    onChange={(e) => handleInputChange('content', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-mono text-sm"
                    placeholder="Makale içeriğini girin (Markdown desteklenir)"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kategori
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Kategori seçin</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Custom Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Özel Kategori
                  </label>
                  <input
                    type="text"
                    value={formData.customCategory}
                    onChange={(e) => handleInputChange('customCategory', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Özel kategori adı (opsiyonel)"
                  />
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Etiketler
                  </label>
                  <input
                    type="text"
                    value={formData.tags}
                    onChange={(e) => handleInputChange('tags', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Etiketleri virgülle ayırın (örn: teknoloji, bilim, AI)"
                  />
                </div>

                {/* Featured Image */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Öne Çıkan Görsel
                  </label>
                  
                  {/* Mevcut resim varsa göster */}
                  {formData.featuredImage && (
                    <div className="mb-4">
                      <img 
                        src={formData.featuredImage} 
                        alt="Featured" 
                        className="w-full h-48 object-cover rounded-lg border"
                      />
                      <button
                        type="button"
                        onClick={() => handleInputChange('featuredImage', '')}
                        className="mt-2 text-red-600 hover:text-red-800 text-sm"
                      >
                        Resmi Kaldır
                      </button>
                    </div>
                  )}
                  
                  {/* Dosya yükleme alanı */}
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileSelect}
                        className="hidden"
                        id="image-upload"
                      />
                      <label htmlFor="image-upload" className="cursor-pointer">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">
                          {selectedFile ? selectedFile.name : 'Resim dosyası seçin'}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          PNG, JPG, GIF (max 5MB)
                        </p>
                      </label>
                    </div>
                    
                    {/* Seçilen dosya preview */}
                    {imagePreview && (
                      <div className="relative">
                        <img 
                          src={imagePreview} 
                          alt="Preview" 
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={clearFileSelection}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                    
                    {/* Yükleme butonu */}
                    {selectedFile && (
                      <button
                        type="button"
                        onClick={handleImageUpload}
                        disabled={uploadingImage}
                        className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
                      >
                        {uploadingImage ? (
                          <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Yükleniyor...
                          </div>
                        ) : (
                          'Resmi Yükle'
                        )}
                      </button>
                    )}
                  </div>
                  
                  {/* Manuel URL girişi (alternatif) */}
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Veya URL ile ekle
                    </label>
                    <input
                      type="url"
                      value={formData.featuredImage}
                      onChange={(e) => handleInputChange('featuredImage', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-end space-x-4 pt-6 border-t">
                  <button
                    type="button"
                    onClick={() => router.back()}
                    className="px-6 py-3 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    İptal
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
                  >
                    {submitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Kaydediliyor...</span>
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4" />
                        <span>Makaleyi Kaydet</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Settings */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ayarlar</h3>
              
              <div className="space-y-4">
                {/* Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Durum
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => handleInputChange('status', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="draft">Taslak</option>
                    <option value="published">Yayınla</option>
                  </select>
                </div>

                {/* Editor's Pick */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="editorsPick"
                    checked={formData.isEditorsPick}
                    onChange={(e) => handleInputChange('isEditorsPick', e.target.checked)}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor="editorsPick" className="ml-2 block text-sm text-gray-700">
                    Editor's Pick
                  </label>
                </div>
              </div>
            </div>

            {/* Preview */}
            {showPreview && (
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Önizleme</h3>
                <div className="prose prose-sm max-w-none">
                  <h2 className="text-xl font-bold">{formData.title || 'Başlık'}</h2>
                  <p className="text-gray-600">{formData.excerpt || 'Özet'}</p>
                  <div className="mt-4 text-sm text-gray-500">
                    <p>Kategori: {formData.customCategory || formData.category || 'Belirtilmemiş'}</p>
                    <p>Etiketler: {formData.tags || 'Yok'}</p>
                    <p>Durum: {formData.status === 'published' ? 'Yayınlanacak' : 'Taslak'}</p>
                    {formData.isEditorsPick && <p className="text-yellow-600">⭐ Editor's Pick</p>}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 