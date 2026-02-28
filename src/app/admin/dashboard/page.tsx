"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  Shield, 
  LogOut, 
  Plus, 
  Edit2, 
  Trash2, 
  Search,
  FolderOpen,
  Grid3X3,
  ExternalLink,
  X,
  AlertTriangle,
  RefreshCw,
  Loader2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  getCategories,
  getCategoryById,
  CategoryData
} from "@/lib/portfolio-data";
import ImageUpload from "@/components/admin/ImageUpload";

interface Project {
  id: string;
  title: string;
  short_desc: string;
  features: string[];
  image: string;
  demo_url: string;
  category_id: string;
  subcategory_name: string;
  created_at: string;
  updated_at: string;
}

const AUTH_KEY = "admin_auth";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories] = useState<CategoryData[]>(getCategories());
  const [isLoading, setIsLoading] = useState(true);
  
  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [deletingProject, setDeletingProject] = useState<Project | null>(null);
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState<string>("");
  
  // Form state
  const [formData, setFormData] = useState({
    title: "",
    short_desc: "",
    features: [""],
    image: "",
    demo_url: "",
    category_id: "",
    subcategory_name: ""
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check authentication
  useEffect(() => {
    const auth = sessionStorage.getItem(AUTH_KEY);
    if (auth !== "true") {
      router.push("/admin/login");
    } else {
      setIsAuthenticated(true);
      loadProjects();
    }
  }, [router]);

  const loadProjects = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/projects');
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.error('Failed to load projects:', error);
    }
    setIsLoading(false);
  };

  const handleLogout = () => {
    sessionStorage.removeItem(AUTH_KEY);
    router.push("/admin/login");
  };

  const resetForm = () => {
    setFormData({
      title: "",
      short_desc: "",
      features: [""],
      image: "",
      demo_url: "",
      category_id: "",
      subcategory_name: ""
    });
    setFormErrors({});
    setEditingProject(null);
  };

  const openCreateModal = () => {
    resetForm();
    setShowModal(true);
  };

  const openEditModal = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      short_desc: project.short_desc,
      features: project.features.length > 0 ? project.features : [""],
      image: project.image,
      demo_url: project.demo_url,
      category_id: project.category_id,
      subcategory_name: project.subcategory_name
    });
    setShowModal(true);
  };

  const openDeleteModal = (project: Project) => {
    setDeletingProject(project);
    setShowDeleteModal(true);
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    
    if (!formData.title.trim()) errors.title = "Titel is verplicht";
    if (!formData.short_desc.trim()) errors.short_desc = "Beschrijving is verplicht";
    if (!formData.category_id) errors.category_id = "Categorie is verplicht";
    if (!formData.subcategory_name) errors.subcategory_name = "Subcategorie is verplicht";
    if (!formData.demo_url.trim()) errors.demo_url = "Demo URL is verplicht";
    
    const validFeatures = formData.features.filter(f => f.trim() !== "");
    if (validFeatures.length === 0) errors.features = "Minimaal 1 kenmerk is verplicht";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    const validFeatures = formData.features.filter(f => f.trim() !== "");
    const projectData = {
      ...formData,
      features: validFeatures
    };
    
    try {
      if (editingProject) {
        // Update
        const res = await fetch(`/api/projects/${editingProject.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(projectData)
        });
        
        if (!res.ok) throw new Error('Update failed');
      } else {
        // Create
        const res = await fetch('/api/projects', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(projectData)
        });
        
        if (!res.ok) throw new Error('Create failed');
      }
      
      await loadProjects();
      setShowModal(false);
      resetForm();
    } catch (error) {
      console.error('Submit error:', error);
      alert('Er is iets misgegaan. Probeer het opnieuw.');
    }
    
    setIsSubmitting(false);
  };

  const handleDelete = async () => {
    if (!deletingProject) return;
    
    try {
      const res = await fetch(`/api/projects/${deletingProject.id}`, {
        method: 'DELETE'
      });
      
      if (!res.ok) throw new Error('Delete failed');
      
      await loadProjects();
      setShowDeleteModal(false);
      setDeletingProject(null);
    } catch (error) {
      console.error('Delete error:', error);
      alert('Verwijderen mislukt. Probeer het opnieuw.');
    }
  };

  const handleResetDefaults = async () => {
    if (!confirm("Weet je zeker dat je alle projecten wilt resetten naar de standaardwaarden? Dit kan niet ongedaan worden gemaakt.")) {
      return;
    }
    
    setIsLoading(true);
    try {
      const res = await fetch('/api/projects?action=reset', { method: 'DELETE' });
      if (res.ok) {
        await loadProjects();
      } else {
        throw new Error('Reset failed');
      }
    } catch (error) {
      console.error('Reset error:', error);
      alert('Reset mislukt. Probeer het opnieuw.');
    }
    setIsLoading(false);
  };

  const addFeatureField = () => {
    setFormData(prev => ({
      ...prev,
      features: [...prev.features, ""]
    }));
  };

  const removeFeatureField = (index: number) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  const updateFeature = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.map((f, i) => i === index ? value : f)
    }));
  };

  const getCategoryName = (categoryId: string) => {
    const cat = getCategoryById(categoryId);
    return cat?.name || categoryId;
  };

  // Filter projects
  const filteredProjects = projects.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subcategory_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.short_desc.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !filterCategory || project.category_id === filterCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Get available subcategories based on selected category
  const availableSubcategories = formData.category_id 
    ? getCategoryById(formData.category_id)?.subcategories || []
    : [];

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[var(--bg-secondary)]">
      {/* Header */}
      <header className="bg-[var(--bg-card)] border-b border-[var(--border)] sticky top-0 z-40">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-[var(--text-primary)]">Admin Panel</h1>
                <p className="text-xs text-[var(--text-muted)]">Portfolio Management</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Link
                href="/portfolio"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="hidden sm:inline">Bekijk Portfolio</span>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500/20 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Uitloggen</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-custom py-8">
        {/* Stats & Actions */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Grid3X3 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--text-primary)]">{projects.length}</p>
                <p className="text-sm text-[var(--text-muted)]">Totaal Projecten</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                <FolderOpen className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--text-primary)]">{categories.length}</p>
                <p className="text-sm text-[var(--text-muted)]">Categorieën</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleResetDefaults}
              disabled={isLoading}
              className="flex items-center gap-2 px-4 py-2.5 border border-[var(--border)] text-[var(--text-secondary)] rounded-xl hover:bg-[var(--bg-tertiary)] transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              Reset naar Standaard
            </button>
            <button
              onClick={openCreateModal}
              className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Nieuw Project
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
            <input
              type="text"
              placeholder="Zoek projecten..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-primary"
            />
          </div>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-3 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] focus:outline-none focus:border-primary"
          >
            <option value="">Alle Categorieën</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>

        {/* Projects Grid */}
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl">
            <FolderOpen className="w-16 h-16 text-[var(--text-muted)] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Geen projecten gevonden
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
              {searchQuery || filterCategory 
                ? "Probeer andere zoektermen of filters" 
                : "Maak je eerste project aan om te beginnen"}
            </p>
            {!searchQuery && !filterCategory && (
              <button
                onClick={openCreateModal}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors"
              >
                <Plus className="w-5 h-5" />
                Project Aanmaken
              </button>
            )}
          </div>
        ) : (
          <div className="grid gap-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Image */}
                  <div className="relative w-full lg:w-48 h-32 rounded-xl overflow-hidden bg-[var(--bg-tertiary)] flex-shrink-0">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-[var(--text-muted)]">
                        <Grid3X3 className="w-8 h-8" />
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded-lg text-xs font-medium">
                            {getCategoryName(project.category_id)}
                          </span>
                          <span className="px-2 py-1 bg-[var(--bg-tertiary)] text-[var(--text-muted)] rounded-lg text-xs">
                            {project.subcategory_name}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openEditModal(project)}
                          className="p-2 text-[var(--text-muted)] hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                          title="Bewerken"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => openDeleteModal(project)}
                          className="p-2 text-[var(--text-muted)] hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                          title="Verwijderen"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <p className="text-[var(--text-secondary)] text-sm line-clamp-2 mb-3">
                      {project.short_desc}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <a
                        href={project.demo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-primary hover:underline"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        {project.demo_url}
                      </a>
                      <span className="text-[var(--text-muted)]">
                        {project.features.length} kenmerken
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Create/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-[var(--border)]">
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                {editingProject ? "Project Bewerken" : "Nieuw Project"}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6">
              <form id="projectForm" onSubmit={handleSubmit} className="space-y-5">
                {/* Category & Subcategory */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                      Categorie <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.category_id}
                      onChange={(e) => setFormData(prev => ({ 
                        ...prev, 
                        category_id: e.target.value,
                        subcategory_name: "" 
                      }))}
                      className={`w-full px-4 py-3 bg-[var(--bg-tertiary)] border rounded-xl text-[var(--text-primary)] focus:outline-none focus:border-primary ${
                        formErrors.category_id ? "border-red-500" : "border-[var(--border)]"
                      }`}
                    >
                      <option value="">Selecteer categorie</option>
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                    {formErrors.category_id && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.category_id}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                      Subcategorie <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.subcategory_name}
                      onChange={(e) => setFormData(prev => ({ ...prev, subcategory_name: e.target.value }))}
                      disabled={!formData.category_id}
                      className={`w-full px-4 py-3 bg-[var(--bg-tertiary)] border rounded-xl text-[var(--text-primary)] focus:outline-none focus:border-primary disabled:opacity-50 ${
                        formErrors.subcategory_name ? "border-red-500" : "border-[var(--border)]"
                      }`}
                    >
                      <option value="">Selecteer subcategorie</option>
                      {availableSubcategories.map(sub => (
                        <option key={sub.slug} value={sub.name}>{sub.name}</option>
                      ))}
                    </select>
                    {formErrors.subcategory_name && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.subcategory_name}</p>
                    )}
                  </div>
                </div>
                
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Titel <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    className={`w-full px-4 py-3 bg-[var(--bg-tertiary)] border rounded-xl text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-primary ${
                      formErrors.title ? "border-red-500" : "border-[var(--border)]"
                    }`}
                    placeholder="bijv. Bouwbedrijf Van den Berg"
                  />
                  {formErrors.title && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.title}</p>
                  )}
                </div>
                
                {/* Short Description */}
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Korte Beschrijving <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.short_desc}
                    onChange={(e) => setFormData(prev => ({ ...prev, short_desc: e.target.value }))}
                    rows={3}
                    className={`w-full px-4 py-3 bg-[var(--bg-tertiary)] border rounded-xl text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-primary resize-none ${
                      formErrors.short_desc ? "border-red-500" : "border-[var(--border)]"
                    }`}
                    placeholder="Korte beschrijving van het project..."
                  />
                  {formErrors.short_desc && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.short_desc}</p>
                  )}
                </div>
                
                {/* Demo URL */}
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Demo URL <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    value={formData.demo_url}
                    onChange={(e) => setFormData(prev => ({ ...prev, demo_url: e.target.value }))}
                    className={`w-full px-4 py-3 bg-[var(--bg-tertiary)] border rounded-xl text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-primary ${
                      formErrors.demo_url ? "border-red-500" : "border-[var(--border)]"
                    }`}
                    placeholder="https://demo.techsolutionsutrecht.nl/"
                  />
                  {formErrors.demo_url && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.demo_url}</p>
                  )}
                </div>
                
                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Afbeelding
                  </label>
                  <ImageUpload
                    value={formData.image}
                    onChange={(url) => setFormData(prev => ({ ...prev, image: url }))}
                    folder="portfolio"
                  />
                </div>
                
                {/* Features */}
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Kenmerken <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    {formData.features.map((feature, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          value={feature}
                          onChange={(e) => updateFeature(index, e.target.value)}
                          className="flex-1 px-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-primary"
                          placeholder={`Kenmerk ${index + 1}`}
                        />
                        {formData.features.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeFeatureField(index)}
                            className="p-3 text-red-500 hover:bg-red-500/10 rounded-xl transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  {formErrors.features && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.features}</p>
                  )}
                  <button
                    type="button"
                    onClick={addFeatureField}
                    className="mt-2 flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <Plus className="w-4 h-4" />
                    Kenmerk Toevoegen
                  </button>
                </div>
              </form>
            </div>
            
            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-3 p-6 border-t border-[var(--border)]">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                disabled={isSubmitting}
                className="px-6 py-2.5 border border-[var(--border)] text-[var(--text-secondary)] rounded-xl hover:bg-[var(--bg-tertiary)] transition-colors disabled:opacity-50"
              >
                Annuleren
              </button>
              <button
                type="submit"
                form="projectForm"
                disabled={isSubmitting}
                className="px-6 py-2.5 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center gap-2"
              >
                {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
                {editingProject ? "Opslaan" : "Aanmaken"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && deletingProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl w-full max-w-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  Project Verwijderen
                </h3>
                <p className="text-sm text-[var(--text-muted)]">
                  Deze actie kan niet ongedaan worden gemaakt
                </p>
              </div>
            </div>
            
            <p className="text-[var(--text-secondary)] mb-6">
              Weet je zeker dat je het project <strong className="text-[var(--text-primary)]">"{deletingProject.title}"</strong> wilt verwijderen?
            </p>
            
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-6 py-2.5 border border-[var(--border)] text-[var(--text-secondary)] rounded-xl hover:bg-[var(--bg-tertiary)] transition-colors"
              >
                Annuleren
              </button>
              <button
                onClick={handleDelete}
                className="px-6 py-2.5 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors"
              >
                Verwijderen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
