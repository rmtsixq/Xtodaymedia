'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { getAllArticles, updateArticle, deleteArticle } from '@/lib/firestore';
import { FirebaseArticle } from '@/lib/firestore';
import { ArrowLeft, Plus, Edit, Trash2, Eye, EyeOff, Calendar, User, Tag, Search, Filter, BookOpen } from 'lucide-react';

export default function ArticlesManagementPage() {
  const { user, isAdmin, loading } = useAuth();
  const router = useRouter();
  
  const [articles, setArticles] = useState<FirebaseArticle[]>([]);
  const [loadingArticles, setLoadingArticles] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all');
  const [selectedArticles, setSelectedArticles] = useState<string[]>([]);

  // Admin değilse yönlendir
  React.useEffect(() => {
    if (!loading && !isAdmin) {
      router.push('/');
    }
  }, [isAdmin, loading, router]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articlesData = await getAllArticles();
        setArticles(articlesData);
      } catch (error) {
        console.error('Makaleler yüklenirken hata:', error);
      } finally {
        setLoadingArticles(false);
      }
    };

    if (isAdmin) {
      fetchArticles();
    }
  }, [isAdmin]);

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || article.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = async (articleId: string, newStatus: 'published' | 'draft') => {
    try {
      await updateArticle(articleId, { status: newStatus });
      setArticles(prev => prev.map(article => 
        article.id === articleId ? { ...article, status: newStatus } : article
      ));
    } catch (error) {
      console.error('Makale durumu güncellenirken hata:', error);
    }
  };

  const handleDeleteArticle = async (articleId: string) => {
    if (confirm('Bu makaleyi silmek istediğinizden emin misiniz?')) {
      try {
        await deleteArticle(articleId);
        setArticles(prev => prev.filter(article => article.id !== articleId));
      } catch (error) {
        console.error('Makale silinirken hata:', error);
      }
    }
  };

  const handleBulkDelete = async () => {
    if (selectedArticles.length === 0) return;
    
    if (confirm(`${selectedArticles.length} makaleyi silmek istediğinizden emin misiniz?`)) {
      try {
        await Promise.all(selectedArticles.map(id => deleteArticle(id)));
        setArticles(prev => prev.filter(article => !selectedArticles.includes(article.id!)));
        setSelectedArticles([]);
      } catch (error) {
        console.error('Toplu silme hatası:', error);
      }
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAdmin) return null;

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
                <h1 className="text-3xl font-serif font-bold text-gray-900">Makale Yönetimi</h1>
                <p className="text-gray-600 mt-1">Tüm makaleleri görüntüle, düzenle ve yönet</p>
              </div>
            </div>
            <Link
              href="/admin/articles/new"
              className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Yeni Makale</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Makale ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            
            <div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as 'all' | 'published' | 'draft')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="all">Tüm Durumlar</option>
                <option value="published">Yayınlanmış</option>
                <option value="draft">Taslak</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">
                {filteredArticles.length} makale
              </span>
              {selectedArticles.length > 0 && (
                <button
                  onClick={handleBulkDelete}
                  className="flex items-center space-x-1 text-red-600 hover:text-red-700 text-sm"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>{selectedArticles.length} seçiliyi sil</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Articles List */}
        {loadingArticles ? (
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Makaleler yükleniyor...</p>
          </div>
        ) : filteredArticles.length > 0 ? (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <input
                        type="checkbox"
                        checked={selectedArticles.length === filteredArticles.length}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedArticles(filteredArticles.map(a => a.id!));
                          } else {
                            setSelectedArticles([]);
                          }
                        }}
                        className="rounded border-gray-300 text-primary focus:ring-primary"
                      />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Makale
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Durum
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Kategori
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Yazar
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tarih
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      İşlemler
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredArticles.map((article) => (
                    <tr key={article.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="checkbox"
                          checked={selectedArticles.includes(article.id!)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedArticles(prev => [...prev, article.id!]);
                            } else {
                              setSelectedArticles(prev => prev.filter(id => id !== article.id));
                            }
                          }}
                          className="rounded border-gray-300 text-primary focus:ring-primary"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-12 w-12">
                            <img
                              className="h-12 w-12 rounded-lg object-cover"
                              src={article.featuredImage}
                              alt={article.title}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900 line-clamp-2">
                              {article.title}
                            </div>
                            <div className="text-sm text-gray-500 line-clamp-1">
                              {article.excerpt}
                            </div>
                            {article.isEditorsPick && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mt-1">
                                Editor's Pick
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={article.status}
                          onChange={(e) => handleStatusChange(article.id!, e.target.value as 'published' | 'draft')}
                          className="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="draft">Taslak</option>
                          <option value="published">Yayınlanmış</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {article.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {article.author}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(article.publishedAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          <Link
                            href={`/admin/articles/edit/${article.id}`}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            <Edit className="w-4 h-4" />
                          </Link>
                          <button
                            onClick={() => handleDeleteArticle(article.id!)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
              Henüz makale yok
            </h3>
            <p className="text-gray-600 mb-6">
              İlk makalenizi oluşturmak için "Yeni Makale" butonuna tıklayın.
            </p>
            <Link
              href="/admin/articles/new"
              className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>İlk Makaleyi Oluştur</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
} 