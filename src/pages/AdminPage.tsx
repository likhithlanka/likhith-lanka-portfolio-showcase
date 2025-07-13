import { useState, useEffect } from 'react';
import { Save, Edit, Eye, EyeOff, Plus, Minus } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

const AdminPage = () => {
  const { content, updateContent } = useContent();
  const [localContent, setLocalContent] = useState(content);
  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [previewMode, setPreviewMode] = useState(false);

  useEffect(() => {
    setLocalContent(content);
  }, [content]);

  const handleSave = () => {
    updateContent(localContent);
    alert('Content saved successfully!');
  };

  const handleInputChange = (section: string, field: string, value: string, subField?: string, index?: number) => {
    setLocalContent(prev => {
      const newContent = { ...prev };
      if (index !== undefined) {
        // Handle array updates
        if (subField) {
          (newContent as any)[section][field][subField][index] = value;
        } else {
          (newContent as any)[section][field][index] = value;
        }
      } else if (subField) {
        (newContent as any)[section][field][subField] = value;
      } else {
        (newContent as any)[section][field] = value;
      }
      return newContent;
    });
  };

  const addSkill = (category: string) => {
    setLocalContent(prev => ({
      ...prev,
      skills: {
        ...prev.skills,
        categories: {
          ...prev.skills.categories,
          [category]: {
            ...prev.skills.categories[category as keyof typeof prev.skills.categories],
            skills: [...prev.skills.categories[category as keyof typeof prev.skills.categories].skills, '']
          }
        }
      }
    }));
  };

  const removeSkill = (category: string, index: number) => {
    setLocalContent(prev => ({
      ...prev,
      skills: {
        ...prev.skills,
        categories: {
          ...prev.skills.categories,
          [category]: {
            ...prev.skills.categories[category as keyof typeof prev.skills.categories],
            skills: prev.skills.categories[category as keyof typeof prev.skills.categories].skills.filter((_, i) => i !== index)
          }
        }
      }
    }));
  };

  const addAchievement = (educationType: 'mba' | 'btech') => {
    setLocalContent(prev => ({
      ...prev,
      education: {
        ...prev.education,
        items: {
          ...prev.education.items,
          [educationType]: {
            ...prev.education.items[educationType],
            achievements: [...prev.education.items[educationType].achievements, '']
          }
        }
      }
    }));
  };

  const removeAchievement = (educationType: 'mba' | 'btech', index: number) => {
    setLocalContent(prev => ({
      ...prev,
      education: {
        ...prev.education,
        items: {
          ...prev.education.items,
          [educationType]: {
            ...prev.education.items[educationType],
            achievements: prev.education.items[educationType].achievements.filter((_, i) => i !== index)
          }
        }
      }
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Portfolio Admin Panel</h1>
            <div className="flex gap-4">
              <button
                onClick={() => setPreviewMode(!previewMode)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {previewMode ? <EyeOff size={20} /> : <Eye size={20} />}
                {previewMode ? 'Edit Mode' : 'Preview Mode'}
              </button>
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Save size={20} />
                Save Changes
              </button>
            </div>
          </div>

          {!previewMode && (
            <div className="space-y-8">
              {/* Hero Section */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Edit size={20} className="text-primary" />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Hero Section</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title</label>
                    <input
                      type="text"
                      value={localContent.hero.title}
                      onChange={(e) => handleInputChange('hero', 'title', e.target.value)}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subtitle</label>
                    <input
                      type="text"
                      value={localContent.hero.subtitle}
                      onChange={(e) => handleInputChange('hero', 'subtitle', e.target.value)}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
                    <textarea
                      value={localContent.hero.description}
                      onChange={(e) => handleInputChange('hero', 'description', e.target.value)}
                      rows={3}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>
              </div>

              {/* About Section */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Edit size={20} className="text-primary" />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">About Section</h2>
                </div>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title</label>
                      <input
                        type="text"
                        value={localContent.about.title}
                        onChange={(e) => handleInputChange('about', 'title', e.target.value)}
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subtitle</label>
                      <input
                        type="text"
                        value={localContent.about.subtitle}
                        onChange={(e) => handleInputChange('about', 'subtitle', e.target.value)}
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Paragraph 1</label>
                    <textarea
                      value={localContent.about.paragraph1}
                      onChange={(e) => handleInputChange('about', 'paragraph1', e.target.value)}
                      rows={3}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Paragraph 2</label>
                    <textarea
                      value={localContent.about.paragraph2}
                      onChange={(e) => handleInputChange('about', 'paragraph2', e.target.value)}
                      rows={3}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(localContent.about.metrics).map(([key, metric]) => (
                      <div key={key} className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </label>
                        <input
                          type="text"
                          value={metric.value}
                          onChange={(e) => {
                            setLocalContent(prev => ({
                              ...prev,
                              about: {
                                ...prev.about,
                                metrics: {
                                  ...prev.about.metrics,
                                  [key]: { ...prev.about.metrics[key as keyof typeof prev.about.metrics], value: e.target.value }
                                }
                              }
                            }));
                          }}
                          placeholder="Value"
                          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                        />
                        <input
                          type="text"
                          value={metric.label}
                          onChange={(e) => {
                            setLocalContent(prev => ({
                              ...prev,
                              about: {
                                ...prev.about,
                                metrics: {
                                  ...prev.about.metrics,
                                  [key]: { ...prev.about.metrics[key as keyof typeof prev.about.metrics], label: e.target.value }
                                }
                              }
                            }));
                          }}
                          placeholder="Label"
                          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skills Section */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Edit size={20} className="text-primary" />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Skills Section</h2>
                </div>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title</label>
                      <input
                        type="text"
                        value={localContent.skills.title}
                        onChange={(e) => handleInputChange('skills', 'title', e.target.value)}
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subtitle</label>
                      <input
                        type="text"
                        value={localContent.skills.subtitle}
                        onChange={(e) => handleInputChange('skills', 'subtitle', e.target.value)}
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>
                  
                  {/* Skill Categories */}
                  {Object.entries(localContent.skills.categories).map(([categoryKey, category]) => (
                    <div key={categoryKey} className="border border-gray-100 dark:border-gray-600 rounded-lg p-4">
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          {categoryKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} Title
                        </label>
                        <input
                          type="text"
                          value={category.title}
                          onChange={(e) => handleInputChange('skills', 'categories', e.target.value, categoryKey + '.title')}
                          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Skills</label>
                          <button
                            onClick={() => addSkill(categoryKey)}
                            className="flex items-center gap-1 px-2 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700"
                          >
                            <Plus size={12} /> Add
                          </button>
                        </div>
                        <div className="space-y-2 max-h-40 overflow-y-auto">
                          {category.skills.map((skill, index) => (
                            <div key={index} className="flex gap-2">
                              <input
                                type="text"
                                value={skill}
                                onChange={(e) => {
                                  setLocalContent(prev => ({
                                    ...prev,
                                    skills: {
                                      ...prev.skills,
                                      categories: {
                                        ...prev.skills.categories,
                                        [categoryKey]: {
                                          ...prev.skills.categories[categoryKey as keyof typeof prev.skills.categories],
                                          skills: prev.skills.categories[categoryKey as keyof typeof prev.skills.categories].skills.map((s, i) => i === index ? e.target.value : s)
                                        }
                                      }
                                    }
                                  }));
                                }}
                                className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                              />
                              <button
                                onClick={() => removeSkill(categoryKey, index)}
                                className="px-2 py-1 bg-red-600 text-white rounded text-xs hover:bg-red-700"
                              >
                                <Minus size={12} />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Work Section */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Edit size={20} className="text-primary" />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Featured Work</h2>
                </div>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title</label>
                      <input
                        type="text"
                        value={localContent.featuredWork.title}
                        onChange={(e) => handleInputChange('featuredWork', 'title', e.target.value)}
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subtitle</label>
                      <input
                        type="text"
                        value={localContent.featuredWork.subtitle}
                        onChange={(e) => handleInputChange('featuredWork', 'subtitle', e.target.value)}
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>

                  {/* Projects */}
                  {Object.entries(localContent.featuredWork.projects).map(([projectKey, project]) => (
                    <div key={projectKey} className="border border-gray-100 dark:border-gray-600 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                        {projectKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Title</label>
                          <input
                            type="text"
                            value={project.title}
                            onChange={(e) => {
                              setLocalContent(prev => ({
                                ...prev,
                                featuredWork: {
                                  ...prev.featuredWork,
                                  projects: {
                                    ...prev.featuredWork.projects,
                                    [projectKey]: { ...prev.featuredWork.projects[projectKey as keyof typeof prev.featuredWork.projects], title: e.target.value }
                                  }
                                }
                              }));
                            }}
                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
                          <textarea
                            value={project.description}
                            onChange={(e) => {
                              setLocalContent(prev => ({
                                ...prev,
                                featuredWork: {
                                  ...prev.featuredWork,
                                  projects: {
                                    ...prev.featuredWork.projects,
                                    [projectKey]: { ...prev.featuredWork.projects[projectKey as keyof typeof prev.featuredWork.projects], description: e.target.value }
                                  }
                                }
                              }));
                            }}
                            rows={3}
                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                          />
                        </div>
                        <div className="grid md:grid-cols-3 gap-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Impact</label>
                            <input
                              type="text"
                              value={project.impact}
                              onChange={(e) => {
                                setLocalContent(prev => ({
                                  ...prev,
                                  featuredWork: {
                                    ...prev.featuredWork,
                                    projects: {
                                      ...prev.featuredWork.projects,
                                      [projectKey]: { ...prev.featuredWork.projects[projectKey as keyof typeof prev.featuredWork.projects], impact: e.target.value }
                                    }
                                  }
                                }));
                              }}
                              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Metrics</label>
                            <input
                              type="text"
                              value={project.metrics}
                              onChange={(e) => {
                                setLocalContent(prev => ({
                                  ...prev,
                                  featuredWork: {
                                    ...prev.featuredWork,
                                    projects: {
                                      ...prev.featuredWork.projects,
                                      [projectKey]: { ...prev.featuredWork.projects[projectKey as keyof typeof prev.featuredWork.projects], metrics: e.target.value }
                                    }
                                  }
                                }));
                              }}
                              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Technologies (comma-separated)</label>
                            <input
                              type="text"
                              value={project.technologies.join(', ')}
                              onChange={(e) => {
                                setLocalContent(prev => ({
                                  ...prev,
                                  featuredWork: {
                                    ...prev.featuredWork,
                                    projects: {
                                      ...prev.featuredWork.projects,
                                      [projectKey]: { ...prev.featuredWork.projects[projectKey as keyof typeof prev.featuredWork.projects], technologies: e.target.value.split(', ').filter(t => t.trim()) }
                                    }
                                  }
                                }));
                              }}
                              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Section */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Edit size={20} className="text-primary" />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Experience Section</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title</label>
                    <input
                      type="text"
                      value={localContent.experience.title}
                      onChange={(e) => handleInputChange('experience', 'title', e.target.value)}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subtitle</label>
                    <input
                      type="text"
                      value={localContent.experience.subtitle}
                      onChange={(e) => handleInputChange('experience', 'subtitle', e.target.value)}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Edit size={20} className="text-primary" />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Education Section</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Section Title</label>
                    <input
                      type="text"
                      value={localContent.education.title}
                      onChange={(e) => handleInputChange('education', 'title', e.target.value)}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>

                  {/* Education Items */}
                  {Object.entries(localContent.education.items).map(([eduKey, edu]) => (
                    <div key={eduKey} className="border border-gray-100 dark:border-gray-600 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                        {eduKey.toUpperCase()}
                      </h3>
                      <div className="space-y-3">
                        <div className="grid md:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Degree</label>
                            <input
                              type="text"
                              value={edu.degree}
                              onChange={(e) => {
                                setLocalContent(prev => ({
                                  ...prev,
                                  education: {
                                    ...prev.education,
                                    items: {
                                      ...prev.education.items,
                                      [eduKey]: { ...prev.education.items[eduKey as keyof typeof prev.education.items], degree: e.target.value }
                                    }
                                  }
                                }));
                              }}
                              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Institution</label>
                            <input
                              type="text"
                              value={edu.institution}
                              onChange={(e) => {
                                setLocalContent(prev => ({
                                  ...prev,
                                  education: {
                                    ...prev.education,
                                    items: {
                                      ...prev.education.items,
                                      [eduKey]: { ...prev.education.items[eduKey as keyof typeof prev.education.items], institution: e.target.value }
                                    }
                                  }
                                }));
                              }}
                              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Period</label>
                            <input
                              type="text"
                              value={edu.period}
                              onChange={(e) => {
                                setLocalContent(prev => ({
                                  ...prev,
                                  education: {
                                    ...prev.education,
                                    items: {
                                      ...prev.education.items,
                                      [eduKey]: { ...prev.education.items[eduKey as keyof typeof prev.education.items], period: e.target.value }
                                    }
                                  }
                                }));
                              }}
                              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">GPA/Grade</label>
                            <input
                              type="text"
                              value={edu.gpa}
                              onChange={(e) => {
                                setLocalContent(prev => ({
                                  ...prev,
                                  education: {
                                    ...prev.education,
                                    items: {
                                      ...prev.education.items,
                                      [eduKey]: { ...prev.education.items[eduKey as keyof typeof prev.education.items], gpa: e.target.value }
                                    }
                                  }
                                }));
                              }}
                              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Achievements</label>
                            <button
                              onClick={() => addAchievement(eduKey as 'mba' | 'btech')}
                              className="flex items-center gap-1 px-2 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700"
                            >
                              <Plus size={12} /> Add
                            </button>
                          </div>
                          <div className="space-y-2 max-h-40 overflow-y-auto">
                            {edu.achievements.map((achievement, index) => (
                              <div key={index} className="flex gap-2">
                                <input
                                  type="text"
                                  value={achievement}
                                  onChange={(e) => {
                                    setLocalContent(prev => ({
                                      ...prev,
                                      education: {
                                        ...prev.education,
                                        items: {
                                          ...prev.education.items,
                                          [eduKey]: {
                                            ...prev.education.items[eduKey as keyof typeof prev.education.items],
                                            achievements: prev.education.items[eduKey as keyof typeof prev.education.items].achievements.map((a, i) => i === index ? e.target.value : a)
                                          }
                                        }
                                      }
                                    }));
                                  }}
                                  className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                                />
                                <button
                                  onClick={() => removeAchievement(eduKey as 'mba' | 'btech', index)}
                                  className="px-2 py-1 bg-red-600 text-white rounded text-xs hover:bg-red-700"
                                >
                                  <Minus size={12} />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Section */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Edit size={20} className="text-primary" />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Footer</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tagline</label>
                    <input
                      type="text"
                      value={localContent.footer.tagline}
                      onChange={(e) => handleInputChange('footer', 'tagline', e.target.value)}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Copyright</label>
                    <input
                      type="text"
                      value={localContent.footer.copyright}
                      onChange={(e) => handleInputChange('footer', 'copyright', e.target.value)}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Links & CTAs */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Edit size={20} className="text-primary" />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Links & CTAs</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Resume Link</label>
                    <input
                      type="text"
                      value={localContent.links.resume}
                      onChange={(e) => handleInputChange('links', 'resume', e.target.value)}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Portfolio Link</label>
                    <input
                      type="text"
                      value={localContent.links.portfolio}
                      onChange={(e) => handleInputChange('links', 'portfolio', e.target.value)}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">CTA Link</label>
                    <input
                      type="text"
                      value={localContent.links.ctaLink}
                      onChange={(e) => handleInputChange('links', 'ctaLink', e.target.value)}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">GitHub</label>
                    <input
                      type="text"
                      value={localContent.links.github}
                      onChange={(e) => handleInputChange('links', 'github', e.target.value)}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">LinkedIn</label>
                    <input
                      type="text"
                      value={localContent.links.linkedin}
                      onChange={(e) => handleInputChange('links', 'linkedin', e.target.value)}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <input
                      type="text"
                      value={localContent.links.email}
                      onChange={(e) => handleInputChange('links', 'email', e.target.value)}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Save Notice */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  <strong>Note:</strong> This comprehensive admin panel allows you to edit all portfolio content including text, skills, projects, education, and links. Changes are synchronized with the live portfolio and persist in localStorage.
                </p>
              </div>
            </div>
          )}

          {previewMode && (
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 max-h-96 overflow-y-auto">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Content Preview</h3>
              <div className="space-y-6 text-sm">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Hero:</h4>
                  <p className="text-gray-700 dark:text-gray-300">{localContent.hero.title}</p>
                  <p className="text-gray-600 dark:text-gray-400">{localContent.hero.subtitle}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">About:</h4>
                  <p className="text-gray-700 dark:text-gray-300">{localContent.about.title}</p>
                  <p className="text-gray-600 dark:text-gray-400">{localContent.about.paragraph1.substring(0, 100)}...</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Links:</h4>
                  <p className="text-gray-600 dark:text-gray-400">Resume: {localContent.links.resume}</p>
                  <p className="text-gray-600 dark:text-gray-400">Portfolio: {localContent.links.portfolio}</p>
                  <p className="text-gray-600 dark:text-gray-400">CTA: {localContent.links.ctaLink}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
